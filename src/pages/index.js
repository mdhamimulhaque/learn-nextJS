import { Button } from "antd";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>This is Home page</h1>
      <Button type="primary">
        <Link href="/products">Products</Link>
      </Button>
    </div>
  );
};

export default HomePage;
