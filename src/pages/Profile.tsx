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

export function Profile() {
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
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Virat Kohli</h1>
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

         <TabsContent value="stats" className="pt-4">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Tests', 'ODIs', 'T20Is'].map((format, i) => (
                <Card key={format} className="bg-card border-border">
                  <div className={`h-1 w-full bg-gradient-to-r ${i === 0 ? 'from-red-500 to-red-400' : 'from-electric-blue to-blue-400'}`} />
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-4 text-white">{format}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">Matches</div>
                        <div className="font-mono font-bold text-lg">{i === 0 ? '113' : i === 1 ? '292' : '117'}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">Runs</div>
                        <div className="font-mono font-bold text-lg text-primary">{i === 0 ? '8848' : i === 1 ? '13848' : '4008'}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">Average</div>
                        <div className="font-mono font-bold text-lg">{i === 0 ? '49.15' : i === 1 ? '58.67' : '51.75'}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">Strike Rate</div>
                        <div className="font-mono font-bold text-lg">{i === 0 ? '55.56' : i === 1 ? '93.62' : '137.96'}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
           </div>
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
