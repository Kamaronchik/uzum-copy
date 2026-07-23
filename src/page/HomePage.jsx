import products from "../data/products";
import Card from "../card/Card";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
