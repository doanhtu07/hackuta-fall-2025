import clsx from "clsx";
import { LoginFormV2 } from "./_components/LoginFormV2";

export default function LoginPage() {
  return (
    <div className={clsx("p-20", "flex flex-col gap-4")}>
      <h1>Welcome back</h1>
      <LoginFormV2 />
    </div>
  );
}
