import React, { useEffect, useState } from "react";
import liff from "@line/liff";

const LiffApp: React.FC<React.PropsWithChildren> = ({children}) => {
  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
  }, []);

  return (
    <>
      {children}
    </>
  )
}

export default LiffApp;
