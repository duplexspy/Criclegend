import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { Home } from "./pages/Home";

function Matches() {
  return <div className="p-8 flex items-center justify-center text-muted-foreground">Matches Page Coming Soon</div>;
}

function Fantasy() {
  return <div className="p-8 flex items-center justify-center text-muted-foreground">Fantasy AI Page Coming Soon</div>;
}

function News() {
  return <div className="p-8 flex items-center justify-center text-muted-foreground">News Hub Coming Soon</div>;
}

function Profile() {
  return <div className="p-8 flex items-center justify-center text-muted-foreground">Player Profile Coming Soon</div>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="matches" element={<Matches />} />
          <Route path="fantasy" element={<Fantasy />} />
          <Route path="news" element={<News />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}
