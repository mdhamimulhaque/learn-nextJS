import { Button } from "antd";
import Link from "next/link";
import PNewsRootLayout from "@/components/Layouts/PNewsRootLayout";
import Head from "next/head";
import Banner from "@/components/Ui/Banner";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
    </div>
  );
};

export default HomePage;

// HomePage.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };
HomePage.getLayout = function getLayout(page) {
  return <PNewsRootLayout>{page}</PNewsRootLayout>;
};
