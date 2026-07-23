
const Hero = () => {
  return (
    <section className="bg-violet-600">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-10 px-4 py-20">
        <div className="max-w-xl text-white">
          <h2 className="mb-4 text-5xl font-bold">
            Big Summer Sale
          </h2>

          <p className="mb-6 text-lg">
            Thousands of products with amazing discounts.
            Fast delivery all over Uzbekistan.
          </p>

          <button className="rounded-xl bg-white px-6 py-3 font-semibold text-violet-600">
            Shop Now
          </button>
        </div>

        <img
          src="https://picsum.photos/500/300"
          alt="banner"
          className="rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;