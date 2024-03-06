import { Outlet } from "react-router-dom";
import HeaderMain from "../../Compoentes/HeaderMain";

export function HomeBlog() {
  return (
    <>
      <body className="d-flex flex-column h-100">
        <main className="flex-shrink-0"></main>
        <HeaderMain />
        <Outlet/>
        <main />
      </body>
    </>
  );
}
