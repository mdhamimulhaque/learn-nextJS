import DashBoardLayout from "../../components/Layouts/DashboardLayout";
import RootLayout from "../../components/Layouts/RootLayout";

const AdminPage = () => {
  return (
    <div>
      <h1>Admin page</h1>
    </div>
  );
};

export default AdminPage;

AdminPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashBoardLayout>{page}</DashBoardLayout>
    </RootLayout>
  );
};
