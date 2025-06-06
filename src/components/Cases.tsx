import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Cases = () => {
  const cases = [
    {
      id: 1,
      name: "Dragon Lore Case",
      price: 250,
      image: "🐉",
      rarity: "legendary",
      items: 8,
      bestItem: "AWP Dragon Lore",
      popular: true,
    },
    {
      id: 2,
      name: "Karambit Collection",
      price: 500,
      image: "🔪",
      rarity: "mythical",
      items: 6,
      bestItem: "Karambit Fade",
      popular: false,
    },
    {
      id: 3,
      name: "AK-47 Premium",
      price: 150,
      image: "🔫",
      rarity: "rare",
      items: 10,
      bestItem: "AK-47 Fire Serpent",
      popular: true,
    },
    {
      id: 4,
      name: "Glove Case Elite",
      price: 350,
      image: "🧤",
      rarity: "epic",
      items: 7,
      bestItem: "Sport Gloves Pandora's Box",
      popular: false,
    },
    {
      id: 5,
      name: "Starter Pack",
      price: 50,
      image: "📦",
      rarity: "common",
      items: 12,
      bestItem: "M4A4 Howl",
      popular: true,
    },
    {
      id: 6,
      name: "Operation Case",
      price: 180,
      image: "⭐",
      rarity: "rare",
      items: 9,
      bestItem: "Butterfly Knife",
      popular: false,
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

  return (
    <section id="cases" className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Доступные кейсы
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Выбери кейс и открой его, чтобы получить редкие скины
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem) => (
            <Card
              key={caseItem.id}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              {caseItem.popular && (
                <div className="absolute top-2 right-2 z-10">
                  <Badge className="bg-orange-600/20 text-orange-300 border-orange-500/30">
                    <Icon name="TrendingUp" size={10} className="mr-1" />
                    Популярный
                  </Badge>
                </div>
              )}

              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${getRarityColor(caseItem.rarity)} rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl shadow-lg`}
                  >
                    {caseItem.image}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {caseItem.name}
                  </h3>
                  <Badge className={getRarityBadge(caseItem.rarity)}>
                    {caseItem.rarity}
                  </Badge>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Предметов:</span>
                    <span className="text-white">{caseItem.items}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Лучший предмет:</span>
                    <span className="text-orange-400 font-medium">
                      {caseItem.bestItem}
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-700 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-white">
                      {caseItem.price}₽
                    </span>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Icon name="Eye" size={14} className="mr-1" />
                      <span>156</span>
                    </div>
                  </div>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    <Icon name="Package" size={16} className="mr-2" />
                    Открыть кейс
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-800"
          >
            Показать все кейсы
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cases;
