import { Outlet } from "react-router-dom";
import "assets/style/dashboard.css"
import "assets/style/main.css"

export default function Master() {
  return (
    <main>
      <Outlet />
    </main>
  );
}
