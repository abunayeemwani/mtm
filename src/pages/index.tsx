import { Outlet } from "react-router-dom";
import BG from "assets/images/bg1.jpeg";
import { Header } from "components";

export default function Master() {
  const bgStyle = {
    backgroundImage: `url(${BG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  };
  return (
    <div
      className="h-screen flex w-full flex-col overflow-hidden p-5 text-white md:p-16"
      style={bgStyle}
    >
      <Header />
      <main className="max-h-full flex-1 overflow-hidden overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  );
}
