import { Button } from "antd";
import Link from "next/link";

const ProductHomePage = () => {
  return (
    <div>
      <h1>this is product home page</h1>
      <Button type="primary">
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
};

export default ProductHomePage;
