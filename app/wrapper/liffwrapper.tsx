'use client'
import React, { useCallback, useEffect } from "react";
import liff from "@line/liff";


export default function LiffWrapper({ children }: { children: React.ReactNode }) {
  const initLineLiff = useCallback(async () => {
    try {
      await liff.init({ liffId: "2005623193-RovXYoQW" });
      if (!liff.isLoggedIn()) {
        liff.login();
      }
    } catch (err) {
      console.error("LIFF initialization failed", err);
    }
  },[])

  useEffect(() => {
    initLineLiff()
  }, []);
  
  return <>{children}</>;
}

