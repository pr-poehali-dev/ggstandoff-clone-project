import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-orange-500 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-red-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-slate-600 rounded-lg rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <Badge className="bg-orange-600/20 text-orange-300 border-orange-500/30">
              <Icon name="Gift" size={14} className="mr-1" />
              Новые кейсы
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Открывай
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                {" "}
                кейсы{" "}
              </span>
              и выигрывай
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Лучшие кейсы CS:GO с редкими скинами. Открывай, продавай и
              обменивай предметы. Удача ждет тебя!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-base">
                <Icon name="Package" size={18} className="mr-2" />
                Открыть кейс
              </Button>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-base"
              >
                <Icon name="ShoppingBag" size={18} className="mr-2" />
                Инвентарь
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm text-slate-400">Кейсов открыто</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">1M₽</div>
                <div className="text-sm text-slate-400">Выплачено игрокам</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-slate-400">Поддержка</div>
              </div>
            </div>
          </div>

          {/* Featured Case */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <Badge className="bg-yellow-600/20 text-yellow-300 border-yellow-500/30">
                <Icon name="Star" size={12} className="mr-1" />
                Premium
              </Badge>
              <span className="text-slate-400 text-sm">CS:GO</span>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Package" size={32} className="text-white" />
                </div>
                <div className="text-xl font-bold text-white mb-2">
                  Dragon Lore Case
                </div>
                <div className="text-slate-300 text-sm">
                  Шанс выпадения легендарного AWP Dragon Lore
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Цена:</span>
                  <span className="text-white font-semibold">250₽</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Предметов:</span>
                  <span className="text-white">8 скинов</span>
                </div>
              </div>

              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                <Icon name="Gift" size={16} className="mr-2" />
                Открыть за 250₽
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
