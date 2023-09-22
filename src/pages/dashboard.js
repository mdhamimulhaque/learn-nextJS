import DashBoardLayout from "@/components/Layouts/DashboardLayout";
import Head from "next/head";

const DashboardPage = () => {
  return (
    <div>
      <Head>
        <title>Dashboard Head</title>
      </Head>
      <h1> DashBoard home page</h1>
    </div>
  );
};

export default DashboardPage;

DashboardPage.getLayout = function getLayout(page) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};
