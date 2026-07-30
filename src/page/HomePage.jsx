import { lazy, Suspense } from "react";
import products from "../data/products";
import CardSkeleton from "../card/CardSkeleton";

// Lazy load the Card component
const Card = lazy(() => import("../card/Card"));

const HomePage = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <Suspense
        fallback={
          <div className="flex flex-wrap justify-center gap-8">
            {products.map((item) => (
              <CardSkeleton key={item.id} />
            ))}
          </div>
        }
      >
        <div className="flex flex-wrap justify-center gap-8">
          {products.map((item) => (
            <Card key={item.id} product={item} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default HomePage;