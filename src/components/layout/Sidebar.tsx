import { NavLink } from "react-router-dom";
import { Home, Trophy, Newspaper, Users, User, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Trophy, label: "Matches", path: "/matches" },
  { icon: Zap, label: "Fantasy AI", path: "/fantasy" },
  { icon: Newspaper, label: "News", path: "/news" },
  { icon: User, label: "Profile", path: "/profile" },
];

export function Sidebar() {
  return (
    <div className="w-64 border-r border-border bg-card/50 backdrop-blur-xl flex flex-col pt-6 z-20">
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-electric-blue flex items-center justify-center">
          <Zap className="w-5 h-5 text-black fill-black" />
        </div>
        <span className="font-heading font-bold text-xl tracking-tight text-white">Pulse<span className="text-primary">Cricket</span></span>
      </div>

      <nav className="flex-1 px-4 space-y-2 text-sm font-medium">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ease-out",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-card hover:text-foreground"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>
      
      {/* Premium CTA */}
      <div className="p-4 mt-auto">
        <div className="p-4 rounded-2xl bg-gradient-to-b from-card to-background border border-border">
          <h4 className="font-bold text-sm text-white mb-1">Pulse Pro</h4>
          <p className="text-xs text-muted-foreground mb-3">Ad-free, deeper insights.</p>
          <button className="w-full py-2 rounded-lg bg-white text-black text-xs font-semibold hover:opacity-90 transition-opacity">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
}
