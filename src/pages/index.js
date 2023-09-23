import PNewsRootLayout from "@/components/Layouts/PNewsRootLayout";
import Head from "next/head";
import Banner from "@/components/Ui/Banner";
import AllNews from "@/components/Ui/AllNews";

const HomePage = ({ allNews }) => {
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
      <AllNews allNews={allNews} />
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

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/news");
  const data = await res.json();
  return {
    props: {
      allNews: data,
    },
    revalidate: 5,
  };
};
