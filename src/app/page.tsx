import { createClient } from "@/utils/supabase/server";
import { LogoutForm } from "./_components/logoutForm";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <h1>Hello, {user?.email}</h1>
      <LogoutForm />
    </div>
  );
}
