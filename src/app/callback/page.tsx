"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

const Callback = () => {
  // collect code
  // set to storage
  // redirect to settings page
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const { handleAuthCallback } = useAuth();

  const router = useRouter();

  useEffect(() => {
    (async () => {
      await handleAuthCallback(code as string);

      router.push("/settings");
    })();
  }, []);

  return <div>Loading...</div>;
};

export default Callback;
