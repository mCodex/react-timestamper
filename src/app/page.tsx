import Background from "./components/server/Background";
import Header from "./components/server/Header";
import Footer from "./components/server/Footer";
import InteractiveIsland from "./components/client/InteractiveIsland";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-300 relative overflow-hidden isolate flex flex-col">
      <Background />

      <Header />

      <main className="flex-1">
        <InteractiveIsland />
      </main>
      
      <Footer />
    </div>
  );
}