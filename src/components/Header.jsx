import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <h1 className="text-2xl font-bold text-violet-600">uzum</h1>

        <nav className="hidden items-center gap-6 md:flex">
          <Link to={'/'} className="text-gray-700 hover:text-violet-600">Главная</Link>
          <a href="#" className="text-gray-700 hover:text-violet-600">Каталог</a>
          <a href="#" className="text-gray-700 hover:text-violet-600">Скидки</a>
          <a href="#" className="text-gray-700 hover:text-violet-600">Контакты</a>
        </nav>

        <button className="rounded-lg bg-violet-600 px-4 py-2 text-white hover:bg-violet-700">
          Войти
        </button>
      </div>
    </header>
  );
};

export default Header;
