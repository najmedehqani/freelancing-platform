import CategoryDetailsContainer from "../features/categories/CategoryDetailsContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";
function CategoryDetails() {
  return (
    < >
      <Header/>
      <div className="container xl:max-w-screen-xl ">
        <CategoryDetailsContainer />
      </div>
      <Footer/>
    </>
  );
}

export default CategoryDetails;
