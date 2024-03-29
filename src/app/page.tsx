import React from "react";
import { redirect } from "next/navigation";

const Home = () => {
  redirect("/settings");
};

export default Home;
