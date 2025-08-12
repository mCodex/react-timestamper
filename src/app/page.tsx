import Background from "./components/server/Background";
import Header from "./components/server/Header";
import Footer from "./components/server/Footer";
import InteractiveIsland from "./components/client/InteractiveIsland";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-300 relative">
      <Background />
      <Header />
      <InteractiveIsland />
      <Footer />
    </div>
  );
}