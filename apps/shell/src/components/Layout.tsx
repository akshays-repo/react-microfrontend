import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Counter } from "../feature/Counter";
import { authRoutingPrefix, cowBoyRoutingPrefix } from "../router/constants";

export function Layout() {
  return (
    <>
      {/* <nav style={{ marginBottom: "3rem" }}>
        <Link
          to={`/${app1RoutingPrefix}/login`}
          style={{ marginRight: "1rem" }}
        >
          App1 Page1
        </Link>
        <Link
          to={`/${app1RoutingPrefix}/signup`}
          style={{ marginRight: "1rem" }}
        >
          App1 Page2
        </Link>
        <Link
          to={`/${app2RoutingPrefix}/page-1`}
          style={{ marginRight: "1rem" }}
        >
          App2 Page1
        </Link>
        <Link to={`/${app2RoutingPrefix}/page-2`}>App2 Page2</Link>
      </nav> */}
      <Outlet />
    </>
  );
}
