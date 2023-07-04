import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Hero = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <section className="relative bg-[url(https://img.freepik.com/free-photo/old-books-arrangement-with-copy-space_23-2148898331.jpg?w=740&t=st=1688237988~exp=1688238588~hmac=b0df922cadf47001dc1355f48445cee2c1cd044e50410b9a75451d99942be290)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-2xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Welcome,
            <strong className="font-extrabold text-rose-700">{user?.firstname}</strong>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
