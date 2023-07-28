/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useRef, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Nav from "./Nav";
import Socials from "./Socials";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />

      <Socials />
      <main className="App">{children}</main>
    </>
  );
};

export default Layout;
