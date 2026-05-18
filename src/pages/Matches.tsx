import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";
import { Activity, Tv, Zap, CheckCircle2 } from "lucide-react";

export function Matches() {
  return (
    <div className="flex flex-col h-full bg-background">
      
      {/* Sticky Match Header */}
      <div className="sticky top-0 z-20 bg-background/90 backdrop-blur-xl border-b border-border p-4 md:p-6 shadow-sm">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-muted-foreground">
              Final • PSL 2026 • Gaddafi Stadium
            </span>
            <Badge variant="destructive" className="animate-pulse">LIVE</Badge>
          </div>

          <div className="grid grid-cols-3 items-center">
            {/* Team 1 */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 justify-start">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-card rounded-full border-2 border-primary flex items-center justify-center text-2xl shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                🇵🇰
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-bold text-lg md:text-2xl text-white">LQ</h2>
                <div className="font-mono font-bold text-xl md:text-3xl text-primary mt-1">185/6</div>
                <div className="text-xs text-muted-foreground mt-0.5">20.0 ov</div>
              </div>
            </div>

            {/* Vs / Info */}
            <div className="text-center flex flex-col items-center justify-center">
               <div className="text-muted-foreground font-bold italic text-sm md:text-base">V/S</div>
            </div>

            {/* Team 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-start md:gap-4 gap-2">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-card rounded-full border-2 border-border flex items-center justify-center text-2xl">
                🇵🇰
              </div>
              <div className="text-center md:text-right">
                <h2 className="font-bold text-lg md:text-2xl text-white">MS</h2>
                <div className="font-mono font-bold text-xl md:text-3xl text-white mt-1">142/4</div>
                <div className="text-xs text-muted-foreground mt-0.5">17.0 ov</div>
              </div>
            </div>
          </div>

          <div className="bg-card/50 px-4 py-2 rounded-xl text-center border border-border/50">
            <p className="text-sm font-semibold tracking-wide text-electric-blue">MS need 44 runs in 18 balls</p>
            <div className="flex items-center justify-center gap-4 text-xs mt-1 text-muted-foreground">
               <span>CRR: 8.35</span>
               <span>RRR: 14.66</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-5xl w-full mx-auto p-4 md:p-6">
        <Tabs defaultValue="commentary" className="w-full">
          <TabsList className="w-full bg-card grid grid-cols-4 md:grid-cols-6 h-auto p-1 rounded-xl sticky top-[210px] md:top-[190px] z-10 mb-6">
             <TabsTrigger value="summary" className="rounded-lg py-2">Summary</TabsTrigger>
             <TabsTrigger value="commentary" className="rounded-lg py-2">Details</TabsTrigger>
             <TabsTrigger value="scorecard" className="rounded-lg py-2">Scorecard</TabsTrigger>
             <TabsTrigger value="graphs" className="rounded-lg py-2">Graphs</TabsTrigger>
             <TabsTrigger value="playing-xi" className="hidden md:block rounded-lg py-2">Playing XI</TabsTrigger>
             <TabsTrigger value="insights" className="hidden md:block rounded-lg py-2 text-primary font-bold">AI Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="commentary" className="space-y-6">
            {/* Live Action Bar */}
            <Card className="bg-card border-border overflow-hidden">
               <div className="h-1 bg-gradient-to-r from-electric-blue to-primary" />
               <CardContent className="p-4 md:p-6 p-0 flex flex-col md:flex-row gap-6">
                 {/* Batters */}
                 <div className="flex-1 space-y-4">
                    <h3 className="text-xs font-bold uppercase text-muted-foreground tracking-wider mb-2">Batters</h3>
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-primary/20 relative overflow-hidden">
                       <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                       <div className="flex items-center gap-2 text-white">
                          <Zap className="w-4 h-4 text-primary fill-primary" />
                          <span className="font-semibold">Mohammad Rizwan</span>
                       </div>
                       <div className="text-right">
                          <span className="font-mono font-bold text-lg text-primary mr-2">78</span>
                          <span className="text-xs text-muted-foreground">(45)</span>
                       </div>
                    </div>
                    <div className="flex justify-between items-center px-3 py-2 text-white/70">
                       <div className="flex items-center gap-2">
                          <span className="w-4" /> {/* Spacer */}
                          <span className="font-medium">Tim David</span>
                       </div>
                       <div className="text-right">
                          <span className="font-mono font-bold text-base mr-2">12</span>
                          <span className="text-xs text-muted-foreground">(6)</span>
                       </div>
                    </div>
                 </div>

                 {/* Bowler */}
                 <div className="flex-1 space-y-4">
                    <h3 className="text-xs font-bold uppercase text-muted-foreground tracking-wider mb-2">Bowler</h3>
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-border">
                       <div className="flex items-center gap-2 text-white">
                          <Activity className="w-4 h-4 text-electric-blue" />
                          <span className="font-semibold">Shaheen Afridi</span>
                       </div>
                       <div className="text-right">
                          <span className="font-mono font-bold text-lg text-white mr-2">2-24</span>
                          <span className="text-xs text-muted-foreground">3.0 ov</span>
                       </div>
                    </div>
                 </div>
               </CardContent>
            </Card>

            {/* Over History */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
               <span className="text-xs font-bold uppercase text-muted-foreground whitespace-nowrap">This Over</span>
               <div className="flex gap-2">
                  {['1', '4', 'W', '0', '6'].map((run, i) => (
                    <motion.div 
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1, type: "spring" }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-sm
                        ${run === 'W' ? 'bg-destructive text-white' : 
                          run === '4' || run === '6' ? 'bg-primary text-black' : 
                          'bg-card border border-border text-white'}`
                      }
                    >
                      {run}
                    </motion.div>
                  ))}
               </div>
            </div>

            <Separator className="bg-border/50" />

            {/* Ball by Ball Commentary */}
            <div className="space-y-4 pt-4">
               {[
                 { over: "16.5", run: "6", title: "SIX! Massive from Rizwan!", desc: "Shaheen misses the yorker, falls right in the slot. Rizwan gets underneath it and launches it over deep mid-wicket for a colossal hit. The crowd erupts!" },
                 { over: "16.4", run: "0", title: "Dot ball", desc: "Perfect yorker on middle stump. Rizwan digs it out back to the bowler." },
                 { over: "16.3", run: "W", title: "OUT! Bowled him!", desc: "What a delivery! Pace, swing, and timber! Shuffles across to play it on the leg side but the ball tails in late to uproot the off stump.", isWicket: true },
                 { over: "16.2", run: "4", title: "FOUR! Brilliant timing", desc: "Short and wide, slashed away past point for a boundary." },
                 { over: "16.1", run: "1", title: "Single down the ground", desc: "Fullish on off, driven down to long-on for a single." }
               ].map((ball, i) => (
                 <div key={i} className={`flex gap-4 p-4 rounded-xl transition-colors ${ball.isWicket ? 'bg-destructive/10 border border-destructive/20' : 'hover:bg-card/40'}`}>
                    <div className="flex flex-col items-center gap-1 min-w-[50px]">
                      <span className="text-sm font-bold text-muted-foreground">{ball.over}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs
                        ${ball.run === 'W' ? 'bg-destructive text-white' : 
                          ball.run === '4' || ball.run === '6' ? 'bg-primary text-black' : 
                          'bg-card border border-border text-white'}`
                      }>
                        {ball.run}
                      </div>
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className={`font-bold ${ball.run === 'W' ? 'text-destructive-foreground' : ball.run === '6' ? 'text-primary' : 'text-white'}`}>
                        {ball.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{ball.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

          </TabsContent>
          
          <TabsContent value="summary">
            <div className="p-8 text-center text-muted-foreground">Summary Content Placeholder</div>
          </TabsContent>
          <TabsContent value="scorecard">
            <div className="p-8 text-center text-muted-foreground">Full Scorecard Placeholder</div>
          </TabsContent>
          <TabsContent value="graphs">
            <div className="p-8 text-center text-muted-foreground">Graphs (Manhattan, Wagon Wheel) Placeholder</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
