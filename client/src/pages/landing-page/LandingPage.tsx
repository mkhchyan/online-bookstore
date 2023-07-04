const LandingPage = () => {
  return (
    <section className="relative bg-[url(https://cdn.create.vista.com/api/media/medium/227002360/stock-photo-books-hardcovers-white-brick-wall?token=)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-2xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Find the book you're looking for easier to{" "}
            <strong className="font-extrabold text-rose-700">read.</strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="/"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none active:bg-rose-500 sm:w-auto"
            >
              Sign In
            </a>
            <a
              href="/"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-700 shadow focus:outline-none active:bg-rose-500 sm:w-auto"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
