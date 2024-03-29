"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Callback = () => {
  // collect code
  // set to storage
  // redirect to settings page

  const router = useRouter();
  useEffect(() => {
    router.push("/settings");
  }, []);

  return <div>Loading...</div>;
};

export default Callback;
