import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";

export default async function Home() {
  const user = await currentUser();
  if (!user) redirect("/welcome")
  const userInfo = await fetchUser(user.id);
  if (!userInfo) redirect("/welcome")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
    </main>
  );
}
