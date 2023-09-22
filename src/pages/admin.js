import DashBoardLayout from "../../components/Layouts/DashboardLayout";

const AdminPage = () => {
  return (
    <div>
      <h1>Admin page</h1>
    </div>
  );
};

export default AdminPage;

AdminPage.getLayout = function getLayout(page) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};
