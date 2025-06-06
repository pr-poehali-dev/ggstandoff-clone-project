import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Главная", href: "#" },
    { name: "Матчи", href: "#matches" },
    { name: "Турниры", href: "#tournaments" },
    { name: "Команды", href: "#teams" },
    { name: "Новости", href: "#news" },
    { name: "Рейтинг", href: "#rating" },
  ];

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <Icon name="Package" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white">CaseStandoff</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Кейсы
            </a>
            <a
              href="#inventory"
              className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Инвентарь
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Рулетка
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Магазин
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Пополнить
            </a>
          </nav>

          {/* Balance & Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 flex items-center space-x-2">
              <Icon name="Coins" size={16} className="text-yellow-500" />
              <span className="text-white font-semibold">1,250₽</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-300 hover:text-white"
            >
              <Icon name="Bell" size={18} />
            </Button>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              <Icon name="User" size={16} className="mr-1" />
              Профиль
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={20} />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-white transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-3 pt-3">
                <Button variant="ghost" size="sm" className="text-slate-300">
                  <Icon name="Search" size={18} />
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white flex-1">
                  Войти
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
