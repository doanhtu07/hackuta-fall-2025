"use client";

import { useUserStore } from "@/zustand/user-store/UserStorePovider";
import clsx from "clsx";

export const LoginFormV2 = () => {
  const login = useUserStore((store) => store.login);

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault(); // Prevent page reload on form submit
        login();
      }}
    >
      <label className="flex flex-col gap-2">
        Email <input className={clsx("border", "p-2", "rounded")} type="email" />
      </label>

      <button
        className={clsx("bg-blue-500 text-white", "p-2 rounded", "cursor-pointer")}
        type="submit"
      >
        Login
      </button>
    </form>
  );
};
