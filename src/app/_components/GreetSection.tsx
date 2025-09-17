"use client";

import { useUserStore } from "@/zustand/user-store/UserStorePovider";
import clsx from "clsx";

export const GreetSection = () => {
  const user = useUserStore((store) => store.user);
  const logout = useUserStore((store) => store.logout);

  return (
    <div className={clsx("p-20", "flex flex-col gap-4")}>
      <h1>Hello, {user ? user.name : "Guest"}!</h1>
      <button
        className={clsx("bg-blue-500 text-white", "px-4 py-2 rounded", "cursor-pointer")}
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};
