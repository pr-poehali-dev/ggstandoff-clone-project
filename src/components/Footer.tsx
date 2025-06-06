import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const links = {
    platform: [
      { name: "О платформе", href: "#" },
      { name: "Как это работает", href: "#" },
      { name: "API для разработчиков", href: "#" },
      { name: "Партнерство", href: "#" },
      { name: "Условия использования", href: "#" },
      { name: "Политика конфиденциальности", href: "#" },
    ],
    games: [
      { name: "CS:GO кейсы", href: "#" },
      { name: "Dota 2 предметы", href: "#" },
      { name: "Rust скины", href: "#" },
      { name: "TF2 шляпы", href: "#" },
    ],
    community: [
      { name: "Discord сервер", href: "#" },
      { name: "Телеграм канал", href: "#" },
      { name: "Поддержка 24/7", href: "#" },
      { name: "Отзывы", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: "Twitter", href: "#" },
    { name: "YouTube", icon: "Youtube", href: "#" },
    { name: "Twitch", icon: "Tv", href: "#" },
    { name: "Discord", icon: "MessageCircle", href: "#" },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">CaseStandoff</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Лучшая платформа для открытия кейсов CS:GO. Честная игра, быстрые
              выплаты и лучшие шансы на редкие скины.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-white hover:bg-slate-800 p-2"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name={social.icon as any} size={18} />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Платформа</h3>
            <ul className="space-y-2">
              {links.platform.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Игры</h3>
            <ul className="space-y-2">
              {links.games.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Сообщество</h3>
            <ul className="space-y-2">
              {links.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-semibold mb-2">
                Подписка на новости
              </h3>
              <p className="text-slate-400 text-sm">
                Получайте уведомления о важных матчах и турнирах
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-400 flex-1 md:w-64 focus:outline-none focus:border-purple-500"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6">
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <div>© 2024 CaseStandoff. Все права защищены.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Условия использования
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
