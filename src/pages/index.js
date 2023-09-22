import { Button } from "antd";
import Link from "next/link";
import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta name="next js" description="Learning next js" />
      </Head>
      <h1>This is Home page</h1>
      <Button type="primary">
        <Link href="/products">Products</Link>
      </Button>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
