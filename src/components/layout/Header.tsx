import { useState, useEffect, useRef } from "react";
import { Bell, Search, X, User, Trophy, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { REAL_PLAYERS } from "../../lib/playerData";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Map real players to search results
  const playerResults = REAL_PLAYERS
    .filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 4)
    .map(p => ({
       type: "player",
       label: p.title,
       sub: "India • Player",
       image: p.image,
       icon: User
    }));

  const otherResults = [
    { type: "team", label: "Chennai Super Kings", sub: "IPL Franchise", icon: Trophy },
    { type: "team", label: "Lahore Qalandars", sub: "PSL Franchise", icon: Trophy },
    { type: "league", label: "PSL 2026", sub: "Pakistan Super League", icon: Calendar },
    { type: "league", label: "IPL 2026", sub: "Indian Premier League", icon: Calendar },
  ].filter(item => item.label.toLowerCase().includes(searchQuery.toLowerCase()));

  const searchResults = [...playerResults, ...otherResults];

  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-8 border-b border-border/40 bg-background/50 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center md:hidden">
        <span className="font-heading font-bold text-lg text-white">Pulse<span className="text-primary">Cricket</span></span>
      </div>
      
      <div className="hidden md:flex items-center flex-1 max-w-xl mx-4" ref={searchRef}>
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search players, teams, series..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchOpen(true)}
            className="w-full bg-card border border-border rounded-full pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground text-white"
          />
          
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-50 p-2"
              >
                {searchQuery.length === 0 ? (
                  <div className="p-4 text-center text-sm text-muted-foreground">Type to search for stars, teams, or leagues</div>
                ) : searchResults.length > 0 ? (
                  <div className="space-y-1">
                    {searchResults.map((result, i) => (
                      <Link 
                        to={result.type === 'player' ? `/profile/${encodeURIComponent(result.label)}` : '/matches'} 
                        key={i} 
                        onClick={() => setIsSearchOpen(false)}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors"
                      >
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center border border-border overflow-hidden">
                               {result.image ? (
                                  <img src={result.image} alt={result.label} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                               ) : (
                                  <result.icon className="w-4 h-4 text-electric-blue" />
                               )}
                            </div>
                            <div>
                               <div className="text-sm font-bold text-white">{result.label}</div>
                               <div className="text-xs text-muted-foreground">{result.sub}</div>
                            </div>
                         </div>
                         <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-sm text-muted-foreground">No results found for "{searchQuery}"</div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <Button variant="ghost" size="icon" className="rounded-full md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
          {isSearchOpen ? <X className="w-5 h-5 text-white" /> : <Search className="w-5 h-5 text-white" />}
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full relative">
          <Bell className="w-5 h-5 text-white" />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-primary rounded-full border-2 border-background animate-pulse" />
        </Button>
      </div>

      {/* Mobile Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-4 shadow-xl z-50"
          >
             <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                autoFocus
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-card border border-border rounded-full pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-white"
              />
            </div>
            
            <div className="mt-4 max-h-[60vh] overflow-y-auto">
                {searchQuery.length === 0 ? (
                  <div className="p-8 text-center text-sm text-muted-foreground">Type to search for stars, teams, or leagues</div>
                ) : searchResults.length > 0 ? (
                  <div className="space-y-2">
                    {searchResults.map((result, i) => (
                      <Link 
                        to={result.type === 'player' ? `/profile/${encodeURIComponent(result.label)}` : '/matches'} 
                        key={i} 
                        onClick={() => setIsSearchOpen(false)}
                        className="flex items-center justify-between p-3 rounded-xl bg-card border border-border"
                      >
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-border overflow-hidden">
                               {result.image ? (
                                  <img src={result.image} alt={result.label} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                               ) : (
                                  <result.icon className="w-5 h-5 text-primary" />
                               )}
                            </div>
                            <div>
                               <div className="text-sm font-bold text-white">{result.label}</div>
                               <div className="text-xs text-muted-foreground">{result.sub}</div>
                            </div>
                         </div>
                         <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-sm text-muted-foreground">No results found for "{searchQuery}"</div>
                )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
