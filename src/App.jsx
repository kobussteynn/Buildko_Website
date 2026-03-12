import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pb-[96px] md:pb-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
