"use client";

import React, { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

const Callback = () => {
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

const SuspensedCallback = () => {
  <Suspense>
    <Callback />
  </Suspense>;
};

export default SuspensedCallback;
