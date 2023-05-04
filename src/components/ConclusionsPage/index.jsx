import React from "react";
import NavBar from "../NavBar"
import Footer from "../Footer";
import { ConclusionsNumbers } from "../ConclusionsNumbers";

export const ConclusionsPage = () => {
  return (
    <div>
      <NavBar />
        <ConclusionsNumbers />
      <Footer />
    </div>
  )
}
