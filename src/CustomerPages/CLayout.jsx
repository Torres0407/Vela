import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

export default function CustomerLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
