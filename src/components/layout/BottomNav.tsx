import { NavLink } from "react-router-dom";
import { Home, Trophy, Newspaper, Zap, User } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Trophy, label: "Matches", path: "/matches" },
  { icon: Zap, label: "Fantasy", path: "/fantasy" },
  { icon: Newspaper, label: "News", path: "/news" },
  { icon: User, label: "Profile", path: "/profile" },
];

export function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-2xl border-t border-border z-40 pb-safe">
      <nav className="flex items-center justify-around h-full px-2">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )
            }
          >
            <item.icon className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
