import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-purple-500 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-blue-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-slate-600 rounded-lg rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">
              <Icon name="Zap" size={14} className="mr-1" />
              Прямой эфир
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Лучший
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                киберспорт{" "}
              </span>
              платформа
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Следите за матчами, турнирами и последними новостями из мира
              профессионального киберспорта. Все в одном месте.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-base">
                <Icon name="Play" size={18} className="mr-2" />
                Смотреть матчи
              </Button>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-base"
              >
                <Icon name="Trophy" size={18} className="mr-2" />
                Турниры
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm text-slate-400">Активных игроков</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="text-sm text-slate-400">Турниров</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-slate-400">Прямые трансляции</div>
              </div>
            </div>
          </div>

          {/* Featured Match */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <Badge className="bg-green-600/20 text-green-300 border-green-500/30">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Live
              </Badge>
              <span className="text-slate-400 text-sm">CS:GO</span>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                <div className="text-slate-300 text-sm mb-2">Финал турнира</div>
                <div className="text-xl font-bold text-white">
                  Major Championship 2024
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mx-auto mb-2"></div>
                  <div className="font-semibold text-white">Team Alpha</div>
                  <div className="text-sm text-slate-400">1.8M подписчиков</div>
                </div>

                <div className="text-center mx-6">
                  <div className="text-3xl font-bold text-white">1:2</div>
                  <div className="text-sm text-purple-400">BO5</div>
                </div>

                <div className="text-center flex-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mx-auto mb-2"></div>
                  <div className="font-semibold text-white">Team Beta</div>
                  <div className="text-sm text-slate-400">2.1M подписчиков</div>
                </div>
              </div>

              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                <Icon name="Eye" size={16} className="mr-2" />
                Смотреть (125K зрителей)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
