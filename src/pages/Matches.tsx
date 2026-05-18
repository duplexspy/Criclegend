import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";
import { Activity, Tv, Zap, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, Cell } from "recharts";

const MANHATTAN_DATA = [
  { over: "1", runs: 4 }, { over: "2", runs: 8 }, { over: "3", runs: 2, wicket: true },
  { over: "4", runs: 12 }, { over: "5", runs: 5 }, { over: "6", runs: 15 },
  { over: "7", runs: 4, wicket: true }, { over: "8", runs: 6 }, { over: "9", runs: 8 },
  { over: "10", runs: 3 }, { over: "11", runs: 14 }, { over: "12", runs: 7 },
  { over: "13", runs: 9 }, { over: "14", runs: 2, wicket: true }, { over: "15", runs: 11 },
  { over: "16", runs: 18 }, { over: "17", runs: 10 }
];

const BATTING_STATS = [
  { name: "Fakhar Zaman", desc: "c David b Starc", runs: 34, balls: 22, fours: 4, sixes: 2, sr: 154.5 },
  { name: "Mirza Baig", desc: "lbw Cummins", runs: 12, balls: 15, fours: 1, sixes: 0, sr: 80.0 },
  { name: "Mohammad Rizwan", desc: "batting", runs: 78, balls: 45, fours: 6, sixes: 4, sr: 173.3, highlight: true },
  { name: "Sikandar Raza", desc: "b Zampa", runs: 24, balls: 14, fours: 2, sixes: 1, sr: 171.4 },
  { name: "Tim David", desc: "batting", runs: 12, balls: 6, fours: 1, sixes: 1, sr: 200.0, highlight: true },
];

const BOWLING_STATS = [
  { name: "M Starc", overs: "4.0", maidens: "0", runs: "34", wickets: "1", econ: "8.5" },
  { name: "P Cummins", overs: "4.0", maidens: "0", runs: "28", wickets: "1", econ: "7.0" },
  { name: "A Zampa", overs: "4.0", maidens: "0", runs: "42", wickets: "1", econ: "10.5" },
  { name: "S Afridi", overs: "3.0", maidens: "0", runs: "24", wickets: "2", econ: "8.0", highlight: true },
];

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
          
          <TabsContent value="summary" className="space-y-6 pt-4">
             <Card className="bg-card border-border overflow-hidden">
                <CardContent className="p-0">
                   <div className="bg-white/5 p-4 border-b border-border font-bold text-white flex justify-between items-center">
                     <span>Key Moments</span>
                     <Zap className="w-4 h-4 text-primary" />
                   </div>
                   <div className="divide-y divide-border/50">
                      <div className="p-4 flex gap-4 items-center">
                         <div className="font-bold text-lg text-primary w-12 text-center shrink-0">16.3</div>
                         <div>
                            <span className="font-bold text-white block">Wicket! M Rizwan b S Afridi 78(45)</span>
                            <span className="text-sm text-muted-foreground">Crucial breakthrough for MS at the death.</span>
                         </div>
                      </div>
                      <div className="p-4 flex gap-4 items-center">
                         <div className="font-bold text-lg text-electric-blue w-12 text-center shrink-0">15.0</div>
                         <div>
                            <span className="font-bold text-white block">150 up for LQ</span>
                            <span className="text-sm text-muted-foreground">Rizwan brings up the 150 with a massive six over long-on.</span>
                         </div>
                      </div>
                   </div>
                </CardContent>
             </Card>
          </TabsContent>

          <TabsContent value="scorecard" className="pt-4 space-y-6">
             <Card className="bg-card border-border overflow-hidden">
                <div className="bg-white/5 p-4 border-b border-border flex justify-between items-center">
                   <h3 className="font-bold text-white">LQ Innings</h3>
                   <span className="font-mono font-bold text-primary">185/6 (20.0)</span>
                </div>
                <div className="overflow-x-auto">
                   <table className="w-full text-sm text-left">
                      <thead className="text-xs text-muted-foreground uppercase bg-white/5">
                         <tr>
                            <th className="px-4 py-3 font-semibold">Batter</th>
                            <th className="px-4 py-3 text-right font-semibold">R</th>
                            <th className="px-4 py-3 text-right font-semibold">B</th>
                            <th className="px-4 py-3 text-right font-semibold">4s</th>
                            <th className="px-4 py-3 text-right font-semibold">6s</th>
                            <th className="px-4 py-3 text-right font-semibold">SR</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-border/50">
                         {BATTING_STATS.map((b, i) => (
                           <tr key={i} className={`hover:bg-white/5 transition-colors ${b.highlight ? 'bg-primary/5' : ''}`}>
                              <td className="px-4 py-3">
                                 <div className={`font-bold whitespace-nowrap ${b.highlight ? 'text-primary' : 'text-white'}`}>{b.name}</div>
                                 <div className="text-xs text-muted-foreground truncate max-w-[150px] md:max-w-none">{b.desc}</div>
                              </td>
                              <td className={`px-4 py-3 text-right font-mono ${b.highlight ? 'font-bold text-primary' : 'text-white'}`}>{b.runs}</td>
                              <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.balls}</td>
                              <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.fours}</td>
                              <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.sixes}</td>
                              <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.sr}</td>
                           </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
             </Card>

             <Card className="bg-card border-border overflow-hidden">
                <div className="overflow-x-auto">
                   <table className="w-full text-sm text-left">
                      <thead className="text-xs text-muted-foreground uppercase bg-white/5">
                         <tr>
                            <th className="px-4 py-3 font-semibold">Bowler</th>
                            <th className="px-4 py-3 text-right font-semibold">O</th>
                            <th className="px-4 py-3 text-right font-semibold">M</th>
                            <th className="px-4 py-3 text-right font-semibold">R</th>
                            <th className="px-4 py-3 text-right font-semibold">W</th>
                            <th className="px-4 py-3 text-right font-semibold">Econ</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-border/50">
                         {BOWLING_STATS.map((b, i) => (
                           <tr key={i} className={`hover:bg-white/5 transition-colors ${b.highlight ? 'bg-primary/5' : ''}`}>
                              <td className="px-4 py-3 font-bold text-white whitespace-nowrap">{b.name}</td>
                              <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.overs}</td>
                              <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.maidens}</td>
                              <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.runs}</td>
                              <td className={`px-4 py-3 text-right font-mono ${b.highlight ? 'font-bold text-primary' : 'text-white'}`}>{b.wickets}</td>
                              <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.econ}</td>
                           </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
             </Card>

             <Card className="bg-card border-border overflow-hidden">
               <div className="bg-white/5 p-4 border-b border-border flex justify-between items-center">
                 <h3 className="font-bold text-white uppercase tracking-wider text-sm">Fall of Wickets</h3>
               </div>
               <div className="p-4 space-y-3">
                 <div className="flex gap-2 text-sm items-center flex-wrap">
                   <span className="font-bold text-white whitespace-nowrap">27-1</span>
                   <span className="text-muted-foreground text-xs whitespace-nowrap">(Fakhar Zaman, 3.2 ov)</span>
                   <span className="text-border mx-1">|</span>
                   
                   <span className="font-bold text-white whitespace-nowrap">42-2</span>
                   <span className="text-muted-foreground text-xs whitespace-nowrap">(Mirza Baig, 6.1 ov)</span>
                   <span className="text-border mx-1">|</span>

                   <span className="font-bold text-white whitespace-nowrap">105-3</span>
                   <span className="text-muted-foreground text-xs whitespace-nowrap">(Sikandar Raza, 11.4 ov)</span>
                   <span className="text-border mx-1">|</span>

                   <span className="font-bold text-white whitespace-nowrap">125-4</span>
                   <span className="text-muted-foreground text-xs whitespace-nowrap">(David Wiese, 13.5 ov)</span>
                   <span className="text-border mx-1">|</span>
                   
                   <span className="font-bold text-primary whitespace-nowrap">168-5</span>
                   <span className="text-muted-foreground text-xs whitespace-nowrap">(Mohammad Rizwan, 16.3 ov)</span>
                 </div>
               </div>
             </Card>
          </TabsContent>

          <TabsContent value="graphs" className="pt-4 space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-card border-border">
                   <CardContent className="p-6">
                      <h3 className="font-bold text-white mb-4">Runs by Zone (Wagon Wheel Mock)</h3>
                      <div className="space-y-4">
                         <div>
                            <div className="flex justify-between text-xs mb-1"><span className="text-white">Cover / Off Side</span> <span className="font-mono text-primary font-bold">42% (77 runs)</span></div>
                            <Progress value={42} className="h-2 bg-white/10 [&>div]:bg-primary" />
                         </div>
                         <div>
                            <div className="flex justify-between text-xs mb-1"><span className="text-white">Fine Leg / Square Leg</span> <span className="font-mono text-electric-blue font-bold">35% (65 runs)</span></div>
                            <Progress value={35} className="h-2 bg-white/10 [&>div]:bg-electric-blue" />
                         </div>
                         <div>
                            <div className="flex justify-between text-xs mb-1"><span className="text-white">Straight / V</span> <span className="font-mono text-white/70 font-bold">23% (43 runs)</span></div>
                            <Progress value={23} className="h-2 bg-white/10 [&>div]:bg-white/70" />
                         </div>
                      </div>
                   </CardContent>
                </Card>

                <Card className="bg-card border-border">
                   <CardContent className="p-6">
                      <h3 className="font-bold text-white mb-4">Pitch Map Analysis (Pace)</h3>
                      <div className="relative aspect-[3/4] max-w-[200px] mx-auto bg-green-900/30 border-2 border-white/10 rounded overflow-hidden">
                         {/* Crease lines mock */}
                         <div className="absolute top-[20%] left-[10%] right-[10%] h-[1px] bg-white/30" />
                         <div className="absolute top-[80%] left-[10%] right-[10%] h-[1px] bg-white/30" />
                         <div className="absolute top-[20%] bottom-[80%] left-[25%] right-[25%] border-x border-white/30" />
                         
                         {/* Pitch dots representing balls */}
                         <div className="absolute top-[30%] left-[45%] w-2 h-2 rounded-full bg-electric-blue animate-pulse-slow shadow-[0_0_8px_rgba(var(--electric-blue),0.8)]" />
                         <div className="absolute top-[35%] left-[55%] w-2 h-2 rounded-full bg-electric-blue shadow-[0_0_8px_rgba(var(--electric-blue),0.8)]" />
                         <div className="absolute top-[45%] left-[40%] w-2 h-2 rounded-full bg-electric-blue shadow-[0_0_8px_rgba(var(--electric-blue),0.8)]" />
                         
                         <div className="absolute top-[60%] left-[60%] w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
                         <div className="absolute top-[65%] left-[50%] w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
                         
                         <div className="absolute top-[85%] left-[48%] w-2 h-2 rounded-full bg-destructive shadow-[0_0_8px_rgba(var(--destructive),0.8)]" />
                         <div className="absolute top-[88%] left-[52%] w-2 h-2 rounded-full bg-destructive shadow-[0_0_8px_rgba(var(--destructive),0.8)]" />
                      </div>
                      <div className="flex gap-3 justify-center mt-4 text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                         <div className="flex items-center gap-1"><div className="w-2 h-2 bg-electric-blue rounded-full" /> Short</div>
                         <div className="flex items-center gap-1"><div className="w-2 h-2 bg-primary rounded-full" /> Good</div>
                         <div className="flex items-center gap-1"><div className="w-2 h-2 bg-destructive rounded-full" /> Full</div>
                      </div>
                   </CardContent>
                </Card>
             </div>

             <Card className="bg-card border-border">
                <CardContent className="p-6">
                   <h3 className="font-bold text-white mb-6">Manhattan (Runs per Over)</h3>
                   <div className="h-[250px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                         <BarChart data={MANHATTAN_DATA} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                            <XAxis dataKey="over" stroke="#52525B" tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
                            <YAxis stroke="#52525B" tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
                            <RechartsTooltip 
                               contentStyle={{ backgroundColor: '#141414', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                               itemStyle={{ color: 'white', fontWeight: 'bold' }}
                               cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                            />
                            <Bar dataKey="runs" radius={[4, 4, 0, 0]}>
                               {MANHATTAN_DATA.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.wicket ? 'var(--color-destructive)' : 'var(--color-electric-blue)'} />
                               ))}
                            </Bar>
                         </BarChart>
                      </ResponsiveContainer>
                   </div>
                   <div className="flex gap-4 justify-center mt-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2"><div className="w-3 h-3 bg-electric-blue rounded-sm" /> Runs</div>
                      <div className="flex items-center gap-2"><div className="w-3 h-3 bg-destructive rounded-sm" /> Wicket Over</div>
                   </div>
                </CardContent>
             </Card>
             <Card className="bg-card border-border">
                <CardContent className="p-6">
                   <h3 className="font-bold text-white mb-4">Runs by Zone (Wagon Wheel Mock)</h3>
                   <div className="space-y-4">
                      <div>
                         <div className="flex justify-between text-xs mb-1"><span className="text-white">Cover / Off Side</span> <span className="font-mono text-primary font-bold">42% (77 runs)</span></div>
                         <Progress value={42} className="h-2 bg-white/10 [&>div]:bg-primary" />
                      </div>
                      <div>
                         <div className="flex justify-between text-xs mb-1"><span className="text-white">Fine Leg / Square Leg</span> <span className="font-mono text-electric-blue font-bold">35% (65 runs)</span></div>
                         <Progress value={35} className="h-2 bg-white/10 [&>div]:bg-electric-blue" />
                      </div>
                      <div>
                         <div className="flex justify-between text-xs mb-1"><span className="text-white">Straight / V</span> <span className="font-mono text-white/70 font-bold">23% (43 runs)</span></div>
                         <Progress value={23} className="h-2 bg-white/10 [&>div]:bg-white/70" />
                      </div>
                   </div>
                </CardContent>
             </Card>
          </TabsContent>

          <TabsContent value="playing-xi" className="pt-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-card border-border overflow-hidden">
                   <div className="p-4 bg-primary/10 border-b border-primary/20 flex items-center justify-between">
                      <span className="font-bold text-white">LQ Team</span>
                      <Badge className="bg-primary hover:bg-primary text-black">Batting</Badge>
                   </div>
                   <div className="p-2 divide-y divide-border/20">
                     {["Fakhar Zaman", "Mirza Baig", "Mohammad Rizwan (c)(wk)", "Sikandar Raza", "Tim David", "David Wiese", "Rashid Khan", "Shaheen Afridi", "Haris Rauf", "Zaman Khan"].map((p,i) => (
                       <div key={i} className="px-4 py-3 hover:bg-white/5 rounded-lg flex items-center justify-between text-sm transition-colors">
                         <span className="text-white font-medium">{p}</span>
                         {i < 5 ? <span className="text-xs text-muted-foreground border border-border/50 px-2 py-0.5 rounded">BAT</span> : <span className="text-xs text-muted-foreground border border-border/50 px-2 py-0.5 rounded">BOWL</span>}
                       </div>
                     ))}
                   </div>
                </Card>
                <Card className="bg-card border-border overflow-hidden">
                   <div className="p-4 bg-electric-blue/10 border-b border-electric-blue/20 flex items-center justify-between">
                      <span className="font-bold text-white">MS Team</span>
                      <Badge className="bg-electric-blue hover:bg-electric-blue text-white">Bowling</Badge>
                   </div>
                   <div className="p-2 divide-y divide-border/20">
                     {["Shan Masood (c)", "Usman Khan (wk)", "Johnson Charles", "Iftikhar Ahmed", "Khushdil Shah", "David Willey", "Usama Mir", "A Zampa", "M Starc", "P Cummins"].map((p,i) => (
                       <div key={i} className="px-4 py-3 hover:bg-white/5 rounded-lg flex items-center justify-between text-sm transition-colors">
                         <span className="text-white font-medium">{p}</span>
                         {i < 5 ? <span className="text-xs text-muted-foreground border border-border/50 px-2 py-0.5 rounded">BAT</span> : <span className="text-xs text-muted-foreground border border-border/50 px-2 py-0.5 rounded">BOWL</span>}
                       </div>
                     ))}
                   </div>
                </Card>
             </div>
          </TabsContent>

          <TabsContent value="insights" className="pt-4 space-y-4">
             <Card className="bg-gradient-to-br from-card to-background border-border relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Zap className="w-24 h-24 text-primary" /></div>
                <CardContent className="p-6">
                   <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2"><Zap className="text-primary w-5 h-5" /> AI Match Predictor</h3>
                   <div className="space-y-4">
                       <p className="text-sm text-muted-foreground leading-relaxed">
                          Based on ball-tracking data and historical chases at this venue, <strong className="text-white">MS has a 20% chance</strong> of winning. 
                          The required run rate (14.66) combined with Afridi having overs remaining heavily favors the bowling side.
                       </p>
                       <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                          <h4 className="text-xs font-bold uppercase text-muted-foreground tracking-wider mb-2">Key Condition for MS Win</h4>
                          <p className="text-sm font-medium text-electric-blue">Tim David needs to face at least 12 of the remaining 18 balls and strike at 250+.</p>
                       </div>
                   </div>
                </CardContent>
             </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
