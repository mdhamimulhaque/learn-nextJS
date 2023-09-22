import DashBoardLayout from "../../components/Layouts/DashboardLayout";

const DashboardPage = () => {
  return (
    <div>
      <h1> DashBoard home page</h1>
    </div>
  );
};

export default DashboardPage;

DashboardPage.getLayout = function getLayout(page) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};
