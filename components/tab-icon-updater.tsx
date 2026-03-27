"use client";

import React, { use } from "react";
import { useEffect } from "react";
import { useTheme } from "next-themes";

const TabIconUpdater = () => {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;

    const faviconPath =
      resolvedTheme === "dark" ? "/dark-nt-icon.ico" : "/light-nt-icon.ico";

    const updateFavicon = (href: string) => {
      let link = document.querySelector(
        "link[rel~='icon']"
      ) as HTMLLinkElement | null;

      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }

      link.href = href;
    };

    updateFavicon(faviconPath);
  }, [resolvedTheme]);

  return null;
};

export default TabIconUpdater;
