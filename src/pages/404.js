import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 3000);

  return (
    <div>
      <img
        src="https://static.vecteezy.com/system/resources/previews/004/639/366/non_2x/error-404-not-found-text-design-vector.jpg"
        alt=""
        width={"100%"}
      />
    </div>
  );
};

export default ErrorPage;
