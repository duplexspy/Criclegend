import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Activity, Flame, ChevronRight, PlayCircle } from "lucide-react";

// Mock Data
const LIVE_MATCHES = [
  {
    id: "1",
    series: "Border-Gavaskar Trophy 2026",
    match: "3rd Test • Day 4",
    team1: { name: "IND", score: "420 & 142/3", flag: "🇮🇳" },
    team2: { name: "AUS", score: "389", flag: "🇦🇺" },
    status: "IND lead by 173 runs",
    isLive: true,
    momentum: 65, // % in favor of team1
    batter1: { name: "Pant", score: "45*", balls: 32 },
    batter2: { name: "Gill", score: "22*", balls: 41 },
    bowler: { name: "Cummins", figures: "1-34", overs: 12.4 },
  },
  {
    id: "2",
    series: "PSL 2026",
    match: "Final",
    team1: { name: "LQ", score: "185/6", flag: "🇵🇰" },
    team2: { name: "MS", score: "142/4", flag: "🇵🇰" },
    status: "MS need 44 runs in 18 balls",
    isLive: true,
    momentum: 20,
    batter1: { name: "Rizwan", score: "78*", balls: 45 },
    batter2: { name: "David", score: "12*", balls: 6 },
    bowler: { name: "Shaheen", figures: "2-24", overs: 3.0 },
  }
];

export function Home() {
  return (
    <div className="p-4 md:p-8 space-y-8 max-w-6xl mx-auto">
      {/* Live Matches Carousel */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <h2 className="text-xl font-bold tracking-tight">Live & Upcoming</h2>
        </div>
        
        <ScrollArea className="w-full whitespace-nowrap pb-4">
          <div className="flex w-max space-x-4">
            {LIVE_MATCHES.map((match, i) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="w-[320px] md:w-[380px]"
              >
                <Card className="bg-card hover:bg-card/80 transition-colors cursor-pointer border-border overflow-hidden group">
                  <div className="h-1 w-full bg-gradient-to-r from-primary to-electric-blue" />
                  <CardContent className="p-5">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-muted-foreground">
                        {match.series} • {match.match}
                      </span>
                      {match.isLive && (
                        <Badge variant="destructive" className="h-5 px-1.5 text-[10px] uppercase font-bold animate-pulse-slow">
                          Live
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{match.team1.flag}</span>
                          <span className="font-bold text-lg">{match.team1.name}</span>
                        </div>
                        <span className="font-mono font-bold text-lg">{match.team1.score}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 opacity-70">
                          <span className="text-xl">{match.team2.flag}</span>
                          <span className="font-bold text-lg">{match.team2.name}</span>
                        </div>
                        <span className="font-mono font-bold text-lg opacity-70">{match.team2.score}</span>
                      </div>
                    </div>

                    <p className="text-sm font-medium text-electric-blue mb-4 truncate">
                      {match.status}
                    </p>

                    <Separator className="mb-4 bg-border/50" />

                    <div className="flex justify-between text-xs">
                      <div>
                        <div className="flex gap-2 text-white">
                          <span className="font-semibold">{match.batter1.name}</span>
                          <span className="text-muted-foreground">{match.batter1.score} ({match.batter1.balls})</span>
                        </div>
                        <div className="flex gap-2 text-white/70">
                          <span>{match.batter2.name}</span>
                          <span className="text-muted-foreground">{match.batter2.score} ({match.batter2.balls})</span>
                        </div>
                      </div>
                      <div className="text-right">
                         <div className="flex gap-2 text-white/90">
                          <span className="font-semibold">{match.bowler.name}</span>
                          <span className="text-muted-foreground">{match.bowler.figures}</span>
                        </div>
                        <div className="text-muted-foreground">
                          {match.bowler.overs} ov
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="invisible" />
        </ScrollArea>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: News & AI */}
        <div className="lg:col-span-2 space-y-8">
          
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
                Trending Pulse
              </h2>
              <button className="text-sm font-medium text-electric-blue flex items-center">
                More <ChevronRight className="w-4 h-4 ml-0.5" />
              </button>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="group flex gap-4 p-3 -mx-3 rounded-xl hover:bg-card/50 transition-colors cursor-pointer">
                  <div className="w-24 h-24 sm:w-32 sm:h-24 rounded-lg bg-card border border-border overflow-hidden relative flex-shrink-0">
                    <img src={`https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=300`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity bg-neutral-800" alt="" />
                    {i === 0 && <div className="absolute inset-0 flex items-center justify-center"><PlayCircle className="w-8 h-8 text-white/90 drop-shadow-lg" /></div>}
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">
                       {i === 0 ? 'Video' : 'Analysis'}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {i === 0 ? "Watch: Insane catch at the boundary line stuns the crowd in Melbourne!" : "Why the new ball is swinging more under lights: An AI analysis"}
                    </h3>
                    <span className="text-xs text-muted-foreground mt-2">2 hours ago</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column: AI Predictions & Widgets */}
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-card to-background border-border relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-white">AI Win Probability</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-semibold">
                  <span>LQ (80%)</span>
                  <span>MS (20%)</span>
                </div>
                <div className="h-2 w-full bg-secondary overflow-hidden rounded-full flex">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: "80%" }} 
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-primary" 
                  />
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: "20%" }} 
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-destructive" 
                  />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mt-4">
                  <strong className="text-white">Pulse AI Insight:</strong> LQ’s death bowling history suggests a huge advantage. MS needs a boundary every 4 balls to stay in contention.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardContent className="p-0">
               <div className="p-4 border-b border-border font-bold">Upcoming Series</div>
               <div className="divide-y divide-border">
                  {['IPL 2026', 'T20 World Cup', 'The Hundred'].map((tour, i) => (
                    <div key={i} className="p-4 flex items-center justify-between hover:bg-white/5 cursor-pointer transition-colors">
                      <span className="font-medium text-sm text-white/90">{tour}</span>
                      <span className="text-xs text-muted-foreground">{10 + i} days to go</span>
                    </div>
                  ))}
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
