const news = ({ news }) => {
  return (
    <div>
      <h2>{news?.title} </h2>
    </div>
  );
};

export default news;

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/news`);
  const newses = await res.json();

  const paths = newses.map((news) => ({
    params: { newsId: toString(news.id) },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
  const data = await res.json();
  return {
    props: {
      news: data,
    },
  };
};
