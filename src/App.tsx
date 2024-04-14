import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Master from "pages";

const Dashboard = lazy(async () => import("pages/Dashboard"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
