"use client";

import { useEffect } from "react";

export default function ConsoleBranding() {
  useEffect(() => {
    console.log(
      "%c BEAST %c Creative Agency ",
      "background:#FF1198;color:#fff;font-weight:900;font-size:14px;padding:4px 10px;border-radius:4px 0 0 4px;letter-spacing:2px;",
      "background:#FFFF00;color:#000;font-weight:700;font-size:14px;padding:4px 10px;border-radius:0 4px 4px 0;"
    );
    console.log("%cYou found the engine room.", "color:#FF1198;font-weight:600;font-size:12px;");
    console.log("We run CPG campaigns that hold up under scrutiny.");
    console.log("=> beastcreativeagency.com");
  }, []);
  return null;
}
