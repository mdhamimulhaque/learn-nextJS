import { useRouter } from "next/router";

const ProductDetails = () => {
  const route = useRouter();

  return (
    <div>
      <h1>product details : {route.query.productId} </h1>
    </div>
  );
};

export default ProductDetails;
