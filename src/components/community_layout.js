/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Footer2 from "./footer/footer2";

export default function Layout({ children }) {




  return (
    <React.Fragment>
      <main
        sx={{
          variant: "layout.main",
        }}
      >
        {children}
      </main>
      <Footer2 />
    </React.Fragment>
  );
}
