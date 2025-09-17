"use client";

import { useUserStore } from "@/zustand/user-store/UserStorePovider";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

export const UseCheckAuth = () => {
  const user = useUserStore((store) => store.user);
  const path = usePathname();
  const router = useRouter();

  const protectedPaths = useMemo(() => new Set(["/"]), []);
  const authPaths = useMemo(() => new Set(["/login"]), []);

  useEffect(() => {
    if (user === null && protectedPaths.has(path)) {
      router.replace("/login");
    } else if (user !== null && authPaths.has(path)) {
      router.replace("/");
    }
  }, [authPaths, path, protectedPaths, router, user]);

  return null;
};
