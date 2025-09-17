"use client";

import { loginMagic } from "@/app/login/_utils/actions";
import { useActionState } from "react";

export const LoginForm = () => {
  const [loginState, loginAction] = useActionState(loginMagic, { error: undefined });

  return (
    <form className="flex flex-col gap-4">
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />

      {loginState.error === null && (
        <div className="text-green-500 text-sm bg-green-50 p-2 rounded">
          Magic link sent! Check your email.
        </div>
      )}

      {/* Display error */}
      {loginState?.error && (
        <div className="text-red-500 text-sm bg-red-50 p-2 rounded">
          Error: {loginState.error.message}
        </div>
      )}

      <button formAction={loginAction}>
        {loginState.error === undefined ? "Log in" : "Resend"}
      </button>
    </form>
  );
};
