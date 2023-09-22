import DashBoardLayout from "@/components/Layouts/DashboardLayout";
import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

const AdminPage = () => {
  return (
    <div>
      <Head>
        <title>Admin Home</title>
      </Head>
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
