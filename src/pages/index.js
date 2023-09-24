import PNewsRootLayout from "@/components/Layouts/PNewsRootLayout";
import Head from "next/head";
// import Banner from "@/components/Ui/Banner";
import AllNews from "@/components/Ui/AllNews";
import { useGetNewsesQuery } from "@/redux/api/api";
import dynamic from "next/dynamic";

const HomePage = ({ allNews }) => {
  const { data, isLoading } = useGetNewsesQuery();

  const DynamicBanner = dynamic(() => import("@/components/Ui/Banner"), {
    loading: () => <h1>Loading...</h1>,
    ssr: false,
  });
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
      <DynamicBanner />
      <AllNews allNews={data} />
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

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/news");
  const data = await res.json();
  return {
    props: {
      allNews: data,
    },
    // revalidate: 5,
  };
};
