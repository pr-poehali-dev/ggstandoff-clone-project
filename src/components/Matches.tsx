import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Matches = () => {
  const matches = [
    {
      id: 1,
      game: "CS:GO",
      tournament: "ESL Pro League",
      team1: { name: "Navi", logo: "🟡", score: 16 },
      team2: { name: "Astralis", logo: "🔴", score: 12 },
      status: "finished",
      time: "2 часа назад",
      viewers: "45K",
    },
    {
      id: 2,
      game: "Valorant",
      tournament: "VCT Masters",
      team1: { name: "Fnatic", logo: "🟠", score: 13 },
      team2: { name: "Liquid", logo: "🔵", score: 8 },
      status: "live",
      time: "Сейчас",
      viewers: "82K",
    },
    {
      id: 3,
      game: "Dota 2",
      tournament: "The International",
      team1: { name: "OG", logo: "🟢", score: null },
      team2: { name: "Secret", logo: "⚫", score: null },
      status: "upcoming",
      time: "Через 3 часа",
      viewers: null,
    },
    {
      id: 4,
      game: "CS:GO",
      tournament: "BLAST Premier",
      team1: { name: "G2", logo: "🟣", score: 16 },
      team2: { name: "Vitality", logo: "🟡", score: 14 },
      status: "finished",
      time: "1 день назад",
      viewers: "67K",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "live":
        return (
          <Badge className="bg-green-600/20 text-green-300 border-green-500/30">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            Live
          </Badge>
        );
      case "upcoming":
        return (
          <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30">
            <Icon name="Clock" size={12} className="mr-1" />
            Скоро
          </Badge>
        );
      default:
        return (
          <Badge className="bg-slate-600/20 text-slate-300 border-slate-500/30">
            Завершен
          </Badge>
        );
    }
  };

  return (
    <section id="matches" className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Матчи и результаты
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Следите за актуальными матчами и результатами турниров
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {matches.map((match) => (
            <Card
              key={match.id}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getStatusBadge(match.status)}
                    <span className="text-slate-400 text-sm">{match.game}</span>
                  </div>
                  <span className="text-slate-400 text-sm">{match.time}</span>
                </div>

                <div className="text-center mb-4">
                  <div className="text-purple-400 text-sm font-medium">
                    {match.tournament}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-center flex-1">
                    <div className="text-2xl mb-1">{match.team1.logo}</div>
                    <div className="font-semibold text-white">
                      {match.team1.name}
                    </div>
                  </div>

                  <div className="text-center mx-6">
                    {match.team1.score !== null ? (
                      <div className="text-2xl font-bold text-white">
                        {match.team1.score}:{match.team2.score}
                      </div>
                    ) : (
                      <div className="text-lg text-slate-400">VS</div>
                    )}
                  </div>

                  <div className="text-center flex-1">
                    <div className="text-2xl mb-1">{match.team2.logo}</div>
                    <div className="font-semibold text-white">
                      {match.team2.name}
                    </div>
                  </div>
                </div>

                {match.viewers && (
                  <div className="flex items-center justify-center gap-2 text-slate-400 text-sm mb-3">
                    <Icon name="Eye" size={14} />
                    <span>{match.viewers} зрителей</span>
                  </div>
                )}

                <Button
                  className={`w-full ${
                    match.status === "live"
                      ? "bg-green-600 hover:bg-green-700"
                      : match.status === "upcoming"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-slate-600 hover:bg-slate-700"
                  } text-white`}
                >
                  {match.status === "live"
                    ? "Смотреть"
                    : match.status === "upcoming"
                      ? "Напомнить"
                      : "Повтор"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-800"
          >
            Показать все матчи
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Matches;
