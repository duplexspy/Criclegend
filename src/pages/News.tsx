import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bookmark, Share2, PlayCircle, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const NEWS = [
  {
    id: 1,
    title: "AI Analysis: Why the new ball is swinging more under lights at the Gabba",
    summary: "Our AI model processed 10,000 deliveries and found a 14% increase in late swing under floodlights compared to afternoon sessions. Here is the full breakdown.",
    category: "AI Insights",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1518005020951-eccb34fbdbf1?auto=format&fit=crop&q=80&w=600",
    isAi: true,
  },
  {
    id: 2,
    title: "Exclusive: Pat Cummins on the challenges of Captaincy",
    summary: "Australian captain opens up about balancing workloads and leading a team in transition during the high-pressure Border-Gavaskar trophy.",
    category: "Interview",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "Watch: Insane catch at the boundary line stuns the crowd!",
    summary: "A spectacular diving effort on the ropes changes the momentum of the game.",
    category: "Highlights",
    readTime: "1 min watch",
    image: "https://images.unsplash.com/photo-1593341646782-e0eb8675661a?auto=format&fit=crop&q=80&w=600",
    isVideo: true,
  }
];

export function News() {
  return (
    <div className="p-4 md:p-8 space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
         <h1 className="text-2xl font-bold tracking-tight text-white">News & Insights</h1>
         <div className="flex gap-2 overflow-x-auto hide-scrollbar">
           {['All', 'AI Insights', 'Match Reports', 'Interviews', 'Highlights'].map((cat, i) => (
             <Badge key={i} variant={i === 0 ? 'default' : 'secondary'} className="cursor-pointer whitespace-nowrap">
               {cat}
             </Badge>
           ))}
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {NEWS.map((item, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={item.id} 
            className={`group cursor-pointer ${i === 0 ? 'md:col-span-2' : ''}`}
          >
            <Card className="bg-card border-border overflow-hidden h-full flex flex-col hover:border-primary/50 transition-colors">
               <div className={`relative ${i === 0 ? 'h-64 md:h-80' : 'h-48'} w-full bg-neutral-900 overflow-hidden`}>
                 <img src={item.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" alt="" />
                 <div className="absolute top-4 left-4 flex gap-2">
                   <Badge className={`${item.isAi ? 'bg-gradient-to-r from-primary to-electric-blue text-black' : 'bg-black/50 text-white backdrop-blur-md'}`}>
                     {item.isAi && <Sparkles className="w-3 h-3 mr-1" />}
                     {item.category}
                   </Badge>
                 </div>
                 {item.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                       <PlayCircle className="w-12 h-12 text-white/90 drop-shadow-2xl" />
                    </div>
                 )}
               </div>
               <CardContent className="p-5 flex flex-col flex-1">
                 <h2 className={`${i === 0 ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold mb-3 text-white group-hover:text-primary transition-colors leading-tight`}>
                    {item.title}
                 </h2>
                 <p className="text-muted-foreground text-sm flex-1 leading-relaxed">
                   {item.summary}
                 </p>
                 <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{item.readTime}</span>
                    <div className="flex items-center gap-4 text-muted-foreground">
                       <button className="hover:text-white transition-colors"><Bookmark className="w-4 h-4" /></button>
                       <button className="hover:text-white transition-colors"><Share2 className="w-4 h-4" /></button>
                    </div>
                 </div>
               </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
