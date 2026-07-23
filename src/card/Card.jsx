import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <div className="w-64 overflow-hidden rounded-xl bg-white transition hover:shadow-lg">
      <div className="relative rounded-xl bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-80 w-full rounded-xl object-cover"
        />

        <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow">
          🤍
        </button>

        <span className="absolute left-3 top-3 rounded bg-indigo-600 px-2 py-1 text-xs text-white">
          Sale
        </span>
      </div>

      <div className="mt-3 px-1">
        <p className="text-2xl font-semibold text-gray-900">
          ${product.price}
        </p>

        <span className="mt-1 inline-block rounded bg-yellow-300 px-2 py-1 text-xs font-medium">
          from $12/month
        </span>

        <h3 className="mt-2 line-clamp-2 text-sm text-gray-800">
          {product.title}
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          {product.category}
        </p>

        <p className="mt-1 text-xs text-gray-500">
          ⭐ 4.9 (320 reviews)
        </p>

        <Link
          to={`/products/${product.id}`}
          className="mt-4 block rounded-lg bg-[#7000ff] py-3 text-center text-sm font-medium text-white transition hover:bg-[#5c00d6]"
        >
          🚚 Tomorrow
        </Link>
      </div>
    </div>
  );
};

export default Card;