import Table from "../../../ui/Table";
import UserRow from "./UserRow";
import UsersTableSkeleton from "./UsersTableSkeleton";
import useUsers from "./useUsers";

function UsersTable() {
  const { isLoading, users } = useUsers();

if (isLoading) return <UsersTableSkeleton />;

  if (!users.length)
    return (
      <p className=" text-secondary-700 text-sm md:text-base font-bold">
        هنوز هیچ کاربری ثبت نشده است.
      </p>
    );

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>شماره موبایل</th>
        <th>نقش</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
          <UserRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default UsersTable;
