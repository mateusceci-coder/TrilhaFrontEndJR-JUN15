import About from "@/components/About";
import Motivation from "@/components/Motivation";
import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";
import Topnav from "@/components/Topnav";

export default function Home() {
  return (
    <main>
      <Sidebar />
      <Topnav />
      <div className="md:ml-64">
        <Profile />
        <About />
        <Motivation />
      </div>
    </main>
  );
}
