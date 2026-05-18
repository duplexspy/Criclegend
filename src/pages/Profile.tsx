import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Star, TrendingUp, Target } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const FORM_DATA = [
  { match: "v IND", runs: 45 },
  { match: "v ENG", runs: 112 },
  { match: "v SA", runs: 78 },
  { match: "v NZ", runs: 23 },
  { match: "v PAK", runs: 89 },
];

const BATTING_CAREER = [
  { format: "TEST", m: 113, inn: 191, no: 11, runs: 8848, hs: "254*", avg: 49.15, sr: 55.56, "100s": 29, "50s": 30 },
  { format: "ODI", m: 292, inn: 280, no: 44, runs: 13848, hs: "183", avg: 58.67, sr: 93.62, "100s": 50, "50s": 72 },
  { format: "T20I", m: 117, inn: 109, no: 31, runs: 4008, hs: "122*", avg: 51.75, sr: 137.96, "100s": 1, "50s": 37 },
];

const BOWLING_CAREER = [
  { format: "TEST", m: 113, inn: 11, balls: 175, runs: 84, wkts: 0, bbi: "-", avg: "-", econ: 2.88, sr: "-" },
  { format: "ODI", m: 292, inn: 50, balls: 662, runs: 671, wkts: 5, bbi: "1/15", avg: 134.2, econ: 6.08, sr: 132.4 },
  { format: "T20I", m: 117, inn: 13, balls: 152, runs: 204, wkts: 4, bbi: "1/13", avg: 51.0, econ: 8.05, sr: 38.0 },
];

const FIELDING_CAREER = [
  { format: "TEST", m: 113, cat: 111, max_cat: 3, mcd: 0, ro: 5 },
  { format: "ODI", m: 292, cat: 151, max_cat: 3, mcd: 0, ro: 22 },
  { format: "T20I", m: 117, cat: 54, max_cat: 3, mcd: 0, ro: 9 },
];

export function Profile() {
  const { id } = useParams();
  const playerName = id ? decodeURIComponent(id) : "Virat Kohli";

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-5xl mx-auto">
      
      {/* Profile Header */}
      <div className="relative rounded-3xl bg-card border border-border p-6 md:p-10 overflow-hidden">
         <div className="absolute top-0 right-0 right-[-10%] top-[-20%] w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
         
         <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end gap-6 text-center md:text-left">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-neutral-800 border-[3px] border-primary overflow-hidden shadow-[0_0_20px_rgba(var(--primary),0.2)]">
               <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=300" alt="Player" className="w-full h-full object-cover opacity-80" />
            </div>
            
            <div className="flex-1 space-y-3">
               <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">{playerName}</h1>
                  <Badge variant="outline" className="w-fit mx-auto md:mx-0 border-electric-blue text-electric-blue">Right Hand Bat</Badge>
               </div>
               <p className="text-muted-foreground font-medium flex items-center justify-center md:justify-start gap-2">
                 <span>India</span> • <span>Top Order Batter</span> • <span>35 yrs</span>
               </p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t md:border-t-0 md:border-l border-border/50 pt-6 md:pt-0 md:pl-6 w-full md:w-auto">
               <div className="text-center">
                 <div className="text-2xl font-bold text-white">#1</div>
                 <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">ODI Rank</div>
               </div>
               <div className="text-center">
                 <div className="text-2xl font-bold text-white">#9</div>
                 <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Test Rank</div>
               </div>
               <div className="text-center">
                 <div className="text-2xl font-bold text-white">80</div>
                 <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Centuries</div>
               </div>
            </div>
         </div>
      </div>

      <Tabs defaultValue="stats" className="w-full">
         <TabsList className="bg-card w-full justify-start overflow-x-auto">
            <TabsTrigger value="stats">Career Stats</TabsTrigger>
            <TabsTrigger value="recent">Recent Form</TabsTrigger>
            <TabsTrigger value="analysis">AI Analysis</TabsTrigger>
         </TabsList>

         <TabsContent value="stats" className="pt-4 space-y-6">
           <Card className="bg-card border-border overflow-hidden">
             <div className="bg-white/5 p-4 border-b border-border flex justify-between items-center">
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Batting Career</h3>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                   <thead className="text-xs text-muted-foreground uppercase bg-white/5 whitespace-nowrap">
                      <tr>
                         <th className="px-4 py-3 font-semibold">Format</th>
                         <th className="px-4 py-3 text-right font-semibold">M</th>
                         <th className="px-4 py-3 text-right font-semibold">Inn</th>
                         <th className="px-4 py-3 text-right font-semibold">NO</th>
                         <th className="px-4 py-3 text-right font-semibold">Runs</th>
                         <th className="px-4 py-3 text-right font-semibold">HS</th>
                         <th className="px-4 py-3 text-right font-semibold">Avg</th>
                         <th className="px-4 py-3 text-right font-semibold">SR</th>
                         <th className="px-4 py-3 text-right font-semibold">100s</th>
                         <th className="px-4 py-3 text-right font-semibold">50s</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-border/50">
                      {BATTING_CAREER.map((b, i) => (
                        <tr key={i} className="hover:bg-white/5 transition-colors">
                           <td className="px-4 py-3 font-bold text-white">{b.format}</td>
                           <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.m}</td>
                           <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.inn}</td>
                           <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.no}</td>
                           <td className="px-4 py-3 text-right font-mono font-bold text-primary">{b.runs}</td>
                           <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.hs}</td>
                           <td className="px-4 py-3 text-right font-mono text-white">{b.avg}</td>
                           <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.sr}</td>
                           <td className="px-4 py-3 text-right font-mono text-white">{b['100s']}</td>
                           <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b['50s']}</td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
           </Card>

           <Card className="bg-card border-border overflow-hidden">
             <div className="bg-white/5 p-4 border-b border-border flex justify-between items-center">
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Bowling Career</h3>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                   <thead className="text-xs text-muted-foreground uppercase bg-white/5 whitespace-nowrap">
                      <tr>
                         <th className="px-4 py-3 font-semibold">Format</th>
                         <th className="px-4 py-3 text-right font-semibold">M</th>
                         <th className="px-4 py-3 text-right font-semibold">Inn</th>
                         <th className="px-4 py-3 text-right font-semibold">Balls</th>
                         <th className="px-4 py-3 text-right font-semibold">Runs</th>
                         <th className="px-4 py-3 text-right font-semibold">Wkts</th>
                         <th className="px-4 py-3 text-right font-semibold">BBI</th>
                         <th className="px-4 py-3 text-right font-semibold">Avg</th>
                         <th className="px-4 py-3 text-right font-semibold">Econ</th>
                         <th className="px-4 py-3 text-right font-semibold">SR</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-border/50">
                      {BOWLING_CAREER.map((b, i) => (
                        <tr key={i} className="hover:bg-white/5 transition-colors">
                           <td className="px-4 py-3 font-bold text-white">{b.format}</td>
                           <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.m}</td>
                           <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.inn}</td>
                           <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.balls}</td>
                           <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.runs}</td>
                           <td className="px-4 py-3 text-right font-mono font-bold text-electric-blue">{b.wkts}</td>
                           <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.bbi}</td>
                           <td className="px-4 py-3 text-right font-mono text-white">{b.avg}</td>
                           <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.econ}</td>
                           <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.sr}</td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
           </Card>

           <Card className="bg-card border-border overflow-hidden">
             <div className="bg-white/5 p-4 border-b border-border flex justify-between items-center">
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Fielding Career</h3>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                   <thead className="text-xs text-muted-foreground uppercase bg-white/5 whitespace-nowrap">
                      <tr>
                         <th className="px-4 py-3 font-semibold">Format</th>
                         <th className="px-4 py-3 text-right font-semibold">M</th>
                         <th className="px-4 py-3 text-right font-semibold">Catches</th>
                         <th className="px-4 py-3 text-right font-semibold">Max Catches</th>
                         <th className="px-4 py-3 text-right font-semibold">Missed</th>
                         <th className="px-4 py-3 text-right font-semibold">Run Outs</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-border/50">
                      {FIELDING_CAREER.map((b, i) => (
                        <tr key={i} className="hover:bg-white/5 transition-colors">
                           <td className="px-4 py-3 font-bold text-white">{b.format}</td>
                           <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.m}</td>
                           <td className="px-4 py-3 text-right font-mono font-bold text-orange-glow">{b.cat}</td>
                           <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.max_cat}</td>
                           <td className="px-4 py-3 text-right font-mono text-white">{b.mcd}</td>
                           <td className="px-4 py-3 text-right font-mono text-muted-foreground">{b.ro}</td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
           </Card>
         </TabsContent>

         <TabsContent value="recent" className="pt-4">
           <Card className="bg-card border-border">
             <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-electric-blue" />
                  <h3 className="font-bold text-lg text-white">Last 5 Innings</h3>
                </div>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={FORM_DATA}>
                      <defs>
                        <linearGradient id="colorRuns" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="oklch(0.85 0.25 150)" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="oklch(0.85 0.25 150)" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="match" stroke="currentColor" className="text-muted-foreground text-xs" tickLine={false} axisLine={false} />
                      <YAxis stroke="currentColor" className="text-muted-foreground text-xs" tickLine={false} axisLine={false} />
                      <RechartsTooltip 
                        contentStyle={{ backgroundColor: 'oklch(0.16 0 0)', border: '1px solid oklch(1 0 0 / 12%)', borderRadius: '8px' }}
                        itemStyle={{ color: 'white', fontWeight: 'bold' }}
                      />
                      <Area type="monotone" dataKey="runs" stroke="oklch(0.85 0.25 150)" strokeWidth={3} fillOpacity={1} fill="url(#colorRuns)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
             </CardContent>
           </Card>
         </TabsContent>

         <TabsContent value="analysis">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                   <h3 className="font-bold text-white mb-4 flex items-center gap-2"><Target className="w-4 h-4 text-primary" /> AI Strengths</h3>
                   <ul className="space-y-3">
                     <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                        Exceptional strike rotation in middle overs (Overs 11-40 SR is 98.5).
                     </li>
                     <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                        Averages 72.5 in successful run chases.
                     </li>
                   </ul>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                   <h3 className="font-bold text-white mb-4 flex items-center gap-2"><Activity className="w-4 h-4 text-orange-glow" /> AI Vulnerabilities</h3>
                   <ul className="space-y-3">
                     <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-glow mt-1.5" />
                        Slight weakness against left-arm orthodox spin early in the innings.
                     </li>
                     <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-glow mt-1.5" />
                        Dismissal rate is 14% higher when reaching for wide balls outside off stump.
                     </li>
                   </ul>
                </CardContent>
              </Card>
            </div>
         </TabsContent>
      </Tabs>
    </div>
  );
}
