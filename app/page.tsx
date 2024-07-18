import About from "@/components/About";
import Hobbies from "@/components/Hobbies";
import Motivation from "@/components/Motivation";
import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";
import Topnav from "@/components/Topnav";

export default function Home() {
  return (
    <main>
      <Sidebar />
      <Topnav />
      <div className="md:ml-72">
        <Profile />
        <About />
        <Hobbies />
        <Motivation />
      </div>
    </main>
  );
}
