/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Header from "./header/header";

export default function Layout({ children }) {


  return (
    <React.Fragment>
      <Header sx={{ zIndex: "999" }} />
      <main
        sx={{
          variant: "layout.main",
        }}
      >
        {children}
      </main>
      {/* <Footer /> */}
    </React.Fragment>
  );
}
