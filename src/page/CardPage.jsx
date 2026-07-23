import { Link, useParams } from "react-router-dom";
import products from "../data/products";

const CardPage = () => {
  const { productId } = useParams();

  const product = products.find(
    (item) => item.id === Number(productId)
  );

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold">Product Not Found</h1>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-violet-600 px-6 py-3 text-white"
        >
          Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-10 lg:grid-cols-[420px_1fr_360px]">

        {/* LEFT */}

        <div className="rounded-2xl bg-gray-100 p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-[520px] w-full object-contain"
          />
        </div>

        {/* CENTER */}

        <div>
          <h1 className="text-4xl font-bold leading-tight">
            {product.title}
          </h1>

          <div className="mt-4 flex items-center gap-4 text-gray-500">
            <span>⭐⭐⭐⭐⭐</span>

            <span>4.9 (3335 reviews)</span>

            <span>61 photos</span>

            <span>1500+ orders</span>
          </div>

          <div className="mt-6 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
            ✔ Original Product
          </div>

          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-semibold">
              Description
            </h2>

            <p className="leading-8 text-gray-600">
              {product.description}
            </p>
          </div>
        </div>

        {/* RIGHT */}

        <div className="rounded-3xl border p-6 shadow-sm">

          <span className="rounded bg-pink-500 px-3 py-1 text-xs font-semibold text-white">
            LOW PRICE
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#7000ff]">
            ${product.price}
          </h2>

          <p className="text-xl text-gray-400 line-through">
            ${(product.price * 1.2).toFixed(2)}
          </p>

          <div className="mt-8 rounded-2xl bg-gray-100 p-5">

            <div className="mb-4 flex justify-between text-gray-500">
              <span>24 months</span>
              <span>12 months</span>
              <span>6 months</span>
            </div>

            <div className="rounded-xl bg-yellow-300 p-3 font-bold">
              ${(product.price / 24).toFixed(2)} × 24 months
            </div>

          </div>

          <button className="mt-8 w-full rounded-xl bg-gray-200 py-4 text-lg font-semibold">
            Buy Now
          </button>

          <button className="mt-4 w-full rounded-xl bg-[#7000ff] py-4 text-lg font-semibold text-white">
            Add to Cart
          </button>

          <button className="mt-4 w-full rounded-xl border py-4 text-lg">
            ❤️ Add to Favorites
          </button>

          <div className="mt-8 space-y-4 text-gray-600">

            <div className="flex items-center gap-3">
              ✅ In Stock
            </div>

            <div className="flex items-center gap-3">
              🚚 Delivery Tomorrow
            </div>

            <div className="flex items-center gap-3">
              🔄 Free Returns
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default CardPage;