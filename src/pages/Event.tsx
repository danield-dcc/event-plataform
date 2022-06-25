import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  return (
    // deixa os elementos da side bar em coluna
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 ">
        <Video />
        <Sidebar />
      </main>
    </div>
  );
}
