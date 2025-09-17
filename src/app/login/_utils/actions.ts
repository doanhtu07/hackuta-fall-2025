"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { AuthError } from "@supabase/supabase-js";

type PasswordActionState = { error?: AuthError | null };
type MagicLinkActionState = { error?: AuthError | null };
type LogoutActionState = { error?: AuthError | null };

export async function login(
  prevState: PasswordActionState,
  formData: FormData
): Promise<PasswordActionState> {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { error };
  }

  revalidatePath("/", "layout"); // revalidate all data
  redirect("/");
}

export async function signup(
  prevState: PasswordActionState,
  formData: FormData
): Promise<PasswordActionState> {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return { error };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function loginMagic(
  prevState: MagicLinkActionState,
  formData: FormData
): Promise<MagicLinkActionState> {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithOtp({
    email: formData.get("email") as string,
  });

  return { error };
}

export async function logout(
  _prevState: LogoutActionState,
  _formData: FormData
): Promise<LogoutActionState> {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    return { error };
  }

  revalidatePath("/", "layout");
  redirect("/login");
}
