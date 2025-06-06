import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Inventory = () => {
  const items = [
    {
      id: 1,
      name: "AK-47 Redline",
      game: "CS:GO",
      rarity: "rare",
      price: 850,
      image: "🔫",
      wear: "Field-Tested",
      tradable: true,
    },
    {
      id: 2,
      name: "Karambit Fade",
      game: "CS:GO",
      rarity: "legendary",
      price: 2500,
      image: "🔪",
      wear: "Factory New",
      tradable: true,
    },
    {
      id: 3,
      name: "AWP Dragon Lore",
      game: "CS:GO",
      rarity: "legendary",
      price: 4200,
      image: "🐉",
      wear: "Minimal Wear",
      tradable: false,
    },
    {
      id: 4,
      name: "M4A4 Howl",
      game: "CS:GO",
      rarity: "mythical",
      price: 1800,
      image: "🐺",
      wear: "Well-Worn",
      tradable: true,
    },
    {
      id: 5,
      name: "Glock Fade",
      game: "CS:GO",
      rarity: "epic",
      price: 650,
      image: "🔫",
      wear: "Factory New",
      tradable: true,
    },
    {
      id: 6,
      name: "Butterfly Knife",
      game: "CS:GO",
      rarity: "mythical",
      price: 1950,
      image: "🦋",
      wear: "Field-Tested",
      tradable: true,
    },
  ];

  const getRarityColor = (rarity: string) => {
    const colors = {
      legendary: "from-yellow-500 to-orange-500",
      mythical: "from-purple-500 to-pink-500",
      epic: "from-blue-500 to-purple-500",
      rare: "from-green-500 to-blue-500",
      common: "from-gray-500 to-slate-500",
    };
    return (
      colors[rarity as keyof typeof colors] || "from-gray-500 to-slate-500"
    );
  };

  const getRarityBadge = (rarity: string) => {
    const colors = {
      legendary: "bg-yellow-600/20 text-yellow-300 border-yellow-500/30",
      mythical: "bg-purple-600/20 text-purple-300 border-purple-500/30",
      epic: "bg-blue-600/20 text-blue-300 border-blue-500/30",
      rare: "bg-green-600/20 text-green-300 border-green-500/30",
      common: "bg-slate-600/20 text-slate-300 border-slate-500/30",
    };
    return (
      colors[rarity as keyof typeof colors] ||
      "bg-slate-600/20 text-slate-300 border-slate-500/30"
    );
  };

  const totalValue = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <section id="inventory" className="py-16 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Твой инвентарь
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-6">
            Управляй своими предметами, продавай и обменивай скины
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
              <div className="text-2xl font-bold text-white">
                {items.length}
              </div>
              <div className="text-sm text-slate-400">Предметов</div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
              <div className="text-2xl font-bold text-green-400">
                {totalValue.toLocaleString()}₽
              </div>
              <div className="text-sm text-slate-400">Общая стоимость</div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
              <div className="text-2xl font-bold text-orange-400">
                {items.filter((item) => item.tradable).length}
              </div>
              <div className="text-sm text-slate-400">Для обмена</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card
              key={item.id}
              className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              {!item.tradable && (
                <div className="absolute top-2 right-2 z-10">
                  <Badge className="bg-red-600/20 text-red-300 border-red-500/30">
                    <Icon name="Lock" size={10} className="mr-1" />
                    Заблокирован
                  </Badge>
                </div>
              )}

              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${getRarityColor(item.rarity)} rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl shadow-lg`}
                  >
                    {item.image}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Badge className={getRarityBadge(item.rarity)}>
                      {item.rarity}
                    </Badge>
                    <span className="text-slate-400 text-xs">{item.game}</span>
                  </div>
                  <span className="text-slate-400 text-sm">{item.wear}</span>
                </div>

                <div className="border-t border-slate-700 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-white">
                      {item.price.toLocaleString()}₽
                    </span>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Icon name="TrendingUp" size={14} className="mr-1" />
                      <span>+5%</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      disabled={!item.tradable}
                    >
                      <Icon name="DollarSign" size={16} className="mr-1" />
                      Продать
                    </Button>
                    <Button
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-700"
                      disabled={!item.tradable}
                    >
                      <Icon name="ArrowLeftRight" size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              <Icon name="Package" size={16} className="mr-2" />
              Открыть кейс
            </Button>
            <Button
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800"
            >
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Магазин скинов
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inventory;
