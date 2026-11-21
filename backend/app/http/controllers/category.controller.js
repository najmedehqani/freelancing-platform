const Controller = require("./controller");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const createHttpError = require("http-errors");
const {
  addCategorySchema,
  updateCategorySchema,
} = require("../validators/category.shcema");
const { CategoryModel } = require("../../models/category");

class CategoryController extends Controller {
  async getListOfCategories(req, res) {
    const query = req.query;
    const categories = (await CategoryModel.find(query)).map((category) =>
      this.createCategoryResponse(req, category),
    );
    if (!categories)
      throw createHttpError.ServiceUnavailable("دسته بندی ها یافت نشد");

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        categories,
      },
    });
  }
  async addNewCategory(req, res) {
    const { title, englishTitle, description } =
      await addCategorySchema.validateAsync(req.body);
    const coverImage = req.file ? req.file.path.replace(/\\/g, "/") : null;
    let tags = [];

    if (req.body.tags) {
      try {
        tags = JSON.parse(req.body.tags);

        if (!Array.isArray(tags)) {
          throw createHttpError.BadRequest(
            "تگ‌ها باید به صورت آرایه ارسال شوند",
          );
        }
      } catch (error) {
        if (error.status) throw error;
        throw createHttpError.BadRequest("فرمت تگ‌ها صحیح نیست");
      }
    }
    await this.findCategoryWithTitle(englishTitle);
    const category = await CategoryModel.create({
      title,
      englishTitle,
      description,
      coverImage,
      tags,
    });
    if (!category) throw createHttpError.InternalServerError("خطای داخلی");
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "دسته بندی با موفقیت افزوده شد",
      },
    });
  }
  async findCategoryWithTitle(englishTitle) {
    const category = await CategoryModel.findOne({ englishTitle });
    if (category)
      throw createHttpError.BadRequest("دسته بندی با این عنوان وجود دارد.");
  }
  async checkExistCategory(id) {
    const category = await CategoryModel.findById(id);
    if (!category)
      throw createHttpError.BadRequest("دسته بندی با این عنوان وجود ندارد.");
    return category;
  }
  createCategoryResponse(req, category) {
    const categoryObj = category.toObject();

    categoryObj.coverImageUrl = categoryObj.coverImage
    ? `${process.env.SERVER_URL}/${categoryObj.coverImage}`
      // ? `${req.protocol}://${req.get("host")}/${categoryObj.coverImage}`
      : null;

    return categoryObj;
  }
  async updateCategory(req, res) {
    const { id } = req.params;
    const { title, englishTitle, description } = req.body;

    const coverImage = req.file ? req.file.path.replace(/\\/g, "/") : undefined;

    let tags;

    if (req.body.tags) {
      try {
        tags = JSON.parse(req.body.tags);

        if (!Array.isArray(tags)) {
          throw createHttpError.BadRequest(
            "تگ‌ها باید به صورت آرایه ارسال شوند",
          );
        }
      } catch (error) {
        if (error.status) throw error;
        throw createHttpError.BadRequest("فرمت تگ‌ها صحیح نیست");
      }
    }

    await this.checkExistCategory(id);
    await updateCategorySchema.validateAsync(req.body);
    const updateData = {
      title,
      englishTitle,
      description,
    };

    if (coverImage !== undefined) {
      updateData.coverImage = coverImage;
    }

    if (tags !== undefined) {
      updateData.tags = tags;
    }

    const updateResult = await CategoryModel.updateOne(
      { _id: id },
      {
        $set: updateData,
      },
    );
    if (updateResult.modifiedCount == 0)
      throw createHttpError.InternalServerError("به روزرسانی انجام نشد");
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "به روز رسانی با موفقیت انجام شد",
      },
    });
  }
  async removeCategory(req, res) {
    const { id } = req.params;
    const category = await this.checkExistCategory(id);
    const deleteResult = await CategoryModel.deleteOne({
      _id: category._id,
    });
    if (deleteResult.deletedCount == 0)
      throw createHttpError.InternalServerError("حدف دسته بندی انجام نشد");
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "حذف دسته بندی با موفقیت انجام شد",
      },
    });
  }
  async getCategoryById(req, res) {
    const { id } = req.params;
    const category = await this.checkExistCategory(id);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        category: this.createCategoryResponse(req, category),
      },
    });
  }
}

module.exports = {
  CategoryController: new CategoryController(),
};
