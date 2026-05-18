import { Bolt, Zap, AlertTriangle, ShieldCheck, TrendingUp, HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Fantasy() {
  return (
    <div className="p-4 md:p-8 space-y-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
          <Zap className="w-6 h-6 text-primary fill-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">AI Fantasy Predictor</h1>
          <p className="text-sm text-muted-foreground">Smart predictions based on pitch, weather, and historical data</p>
        </div>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="bg-card w-full justify-start overflow-x-auto">
          <TabsTrigger value="upcoming">Upcoming Match</TabsTrigger>
          <TabsTrigger value="analysis">Pitch & Weather Analysis</TabsTrigger>
          <TabsTrigger value="differentials">Differential Picks</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-6 pt-4">
          <div className="bg-gradient-to-r from-card to-background border border-border p-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-bold text-lg text-white">IND vs AUS</span>
              <Badge variant="outline" className="text-electric-blue border-electric-blue">Gabba, Brisbane</Badge>
            </div>
            <span className="text-xs text-muted-foreground mr-2">Starts in 12h</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Captaincy AI picks */}
            <Card className="bg-card border-border/50 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10"><Zap className="w-24 h-24 text-primary" /></div>
               <CardHeader>
                 <CardTitle className="text-lg flex items-center gap-2">
                   <ShieldCheck className="w-5 h-5 text-primary" />
                   Safe C/VC Picks
                 </CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                 {[
                   { name: "Virat Kohli", role: "BAT", type: "Captain", pts: "120 pts proj." },
                   { name: "Pat Cummins", role: "BOWL", type: "Vice Captain", pts: "95 pts proj." }
                 ].map((p, i) => (
                   <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-border">
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-xs border border-primary/30">
                         {p.type === 'Captain' ? 'C' : 'VC'}
                       </div>
                       <div>
                         <p className="font-bold text-white text-sm">{p.name}</p>
                         <p className="text-[10px] text-muted-foreground uppercase">{p.role}</p>
                       </div>
                     </div>
                     <span className="text-primary font-mono text-sm font-bold">{p.pts}</span>
                   </motion.div>
                 ))}
               </CardContent>
            </Card>

            {/* Differential AI Picks & Risk */}
            <Card className="bg-card border-border/50">
               <CardHeader>
                 <CardTitle className="text-lg flex items-center gap-2">
                   <AlertTriangle className="w-5 h-5 text-orange-glow" />
                   High-Risk / High-Reward
                 </CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                 <div className="space-y-3">
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-white font-medium">Rishabh Pant</span>
                      <Badge className="bg-orange-glow/20 text-orange-glow hover:bg-orange-glow/30">Selected by 12%</Badge>
                   </div>
                   <p className="text-xs text-muted-foreground leading-relaxed italic">
                     "Historical data shows Pant averages 65+ at the Gabba. A solid differential pick despite recent low selection."
                   </p>
                 </div>
                 
                 <div className="h-px w-full bg-border/50" />
                 
                 <div className="space-y-3">
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-white font-medium">Mitchell Marsh</span>
                      <Badge variant="destructive">Injury Concern (20%)</Badge>
                   </div>
                   <p className="text-xs text-muted-foreground leading-relaxed italic">
                     "Minor hamstring issue reported. Highly likely to play, but might not bowl his full quota. Avoid as captain."
                   </p>
                 </div>
               </CardContent>
            </Card>

            {/* AI Generated Lineup */}
            <Card className="md:col-span-2 bg-gradient-to-b from-card to-background border-border overflow-hidden">
               <div className="h-1 bg-gradient-to-r from-primary via-electric-blue to-primary" />
               <CardHeader>
                 <CardTitle className="text-lg flex items-center gap-2 text-white">
                   <Bolt className="w-5 h-5 text-electric-blue" />
                   AI Ultra-Balanced XI
                 </CardTitle>
               </CardHeader>
               <CardContent>
                 <div className="relative w-full aspect-[4/3] max-w-sm mx-auto bg-green-900/20 border-2 border-green-500/20 rounded-[40px] overflow-hidden flex flex-col justify-around py-4">
                    {/* Mock Cricket Pitch / Field Layout */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                    
                    {/* Wicket Keeper */}
                    <div className="flex justify-center z-10 w-full relative">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-primary text-black rounded-full flex items-center justify-center font-bold text-xs shadow-[0_0_10px_rgba(var(--primary),0.8)]">WK</div>
                        <span className="text-[10px] md:text-xs font-bold text-white mt-1 drop-shadow-md">Pant</span>
                      </div>
                    </div>

                    {/* Batters */}
                    <div className="flex justify-around px-8 z-10 w-full relative">
                      {['Kohli (c)', 'Smith', 'Gill', 'Head'].map((name, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-card border border-border text-white rounded-full flex items-center justify-center font-bold text-xs shadow-md">BAT</div>
                          <span className={`${name.includes('(c)') ? 'text-primary' : 'text-white'} text-[10px] md:text-xs font-bold mt-1 drop-shadow-md whitespace-nowrap`}>{name}</span>
                        </div>
                      ))}
                    </div>

                    {/* All Rounders */}
                    <div className="flex justify-center gap-12 z-10 w-full relative">
                      {['Jadeja', 'Green (vc)'].map((name, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-electric-blue text-white rounded-full flex items-center justify-center font-bold text-xs shadow-md">AR</div>
                          <span className="text-[10px] md:text-xs font-bold text-white mt-1 drop-shadow-md whitespace-nowrap">{name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bowlers */}
                    <div className="flex justify-between px-12 z-10 w-full relative">
                      {['Cummins', 'Bumrah', 'Starc', 'Siraj'].map((name, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-background border border-border text-white rounded-full flex items-center justify-center font-bold text-[10px] md:text-xs shadow-md">BOWL</div>
                          <span className="text-[10px] md:text-xs font-bold text-white mt-1 drop-shadow-md whitespace-nowrap">{name}</span>
                        </div>
                      ))}
                    </div>

                 </div>
               </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analysis">
           <div className="p-8 text-center text-muted-foreground mt-4 border border-border border-dashed rounded-xl">Pitch & Weather Analysis Engine generating data...</div>
        </TabsContent>
        <TabsContent value="differentials">
           <div className="p-8 text-center text-muted-foreground mt-4 border border-border border-dashed rounded-xl">AI Differential Picks Engine calculating probabilities...</div>
        </TabsContent>
      </Tabs>
      
    </div>
  );
}
