import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const News = () => {
  const news = [
    {
      id: 1,
      title: "Navi побеждает в финале ESL Pro League",
      summary:
        "Украинская команда одержала уверенную победу над Astralis со счетом 3:1 в карточной серии.",
      category: "CS:GO",
      time: "2 часа назад",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "Новый патч в Valorant изменит мету",
      summary:
        "Riot Games анонсировала масштабные изменения в балансе агентов.",
      category: "Valorant",
      time: "5 часов назад",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=150&fit=crop",
      featured: false,
    },
    {
      id: 3,
      title: "The International 2024: призовой фонд достиг $40M",
      summary:
        "Самый большой турнир по Dota 2 побил все рекорды по размеру призового фонда.",
      category: "Dota 2",
      time: "1 день назад",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=150&fit=crop",
      featured: false,
    },
    {
      id: 4,
      title: "Интервью с чемпионом мира по CS:GO",
      summary:
        "Эксклюзивное интервью с капитаном команды-победителя Major Championship.",
      category: "Интервью",
      time: "2 дня назад",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=150&fit=crop",
      featured: false,
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "CS:GO": "bg-orange-600/20 text-orange-300 border-orange-500/30",
      Valorant: "bg-red-600/20 text-red-300 border-red-500/30",
      "Dota 2": "bg-red-700/20 text-red-300 border-red-600/30",
      Интервью: "bg-purple-600/20 text-purple-300 border-purple-500/30",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-slate-600/20 text-slate-300 border-slate-500/30"
    );
  };

  return (
    <section id="news" className="py-16 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Последние новости
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Будьте в курсе всех событий в мире киберспорта
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-900/50 border-slate-700 overflow-hidden hover:bg-slate-900/70 transition-colors">
              <div className="relative">
                <img
                  src={news[0].image}
                  alt={news[0].title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(news[0].category)}>
                    {news[0].category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                  <Icon name="Clock" size={14} />
                  <span>{news[0].time}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                  {news[0].title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {news[0].summary}
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Читать далее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* News List */}
          <div className="space-y-6">
            {news.slice(1).map((article) => (
              <Card
                key={article.id}
                className="bg-slate-900/50 border-slate-700 overflow-hidden hover:bg-slate-900/70 transition-colors"
              >
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="relative w-24 h-20 flex-shrink-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          className={`${getCategoryColor(article.category)} text-xs`}
                        >
                          {article.category}
                        </Badge>
                        <span className="text-slate-400 text-xs">
                          {article.time}
                        </span>
                      </div>
                      <h4 className="text-white font-semibold text-sm leading-tight mb-2">
                        {article.title}
                      </h4>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {article.summary.substring(0, 80)}...
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button
              variant="outline"
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              Все новости
              <Icon name="ExternalLink" size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
