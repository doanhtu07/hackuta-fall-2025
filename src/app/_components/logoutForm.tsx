"use client";

import { useActionState } from "react";
import { logout } from "../login/actions";

export const LogoutForm = () => {
  const [logoutState, logoutAction] = useActionState(logout, { error: undefined });

  return (
    <form className="flex flex-col gap-4">
      <button formAction={logoutAction}>Log out</button>

      {/* Display error */}
      {logoutState?.error && (
        <div className="text-red-500 text-sm bg-red-50 p-2 rounded">
          Error: {logoutState.error.message}
        </div>
      )}
    </form>
  );
};
