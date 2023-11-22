import { Outlet } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import Experience from "./Experience";
import Payments from "./Payments";

export default function Home() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}
