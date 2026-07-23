const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-900 text-gray-300">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-8 px-4 py-12">
        <div>
          <h4 className="mb-3 text-lg font-bold text-white">uzum</h4>
          <p className="max-w-xs text-sm text-gray-400">
            Онлайн-маркетплейс с тысячами товаров по доступным ценам.
          </p>
        </div>

        <div>
          <h5 className="mb-3 font-semibold text-white">Покупателям</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Доставка</a></li>
            <li><a href="#" className="hover:text-white">Оплата</a></li>
            <li><a href="#" className="hover:text-white">Возврат</a></li>
          </ul>
        </div>

        <div>
          <h5 className="mb-3 font-semibold text-white">Компания</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">О нас</a></li>
            <li><a href="#" className="hover:text-white">Контакты</a></li>
            <li><a href="#" className="hover:text-white">Вакансии</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © 2026 Uzum Clone. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
