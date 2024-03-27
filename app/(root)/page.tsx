import { redirect } from "next/navigation";

export default function Home() {
  const userInfo = false
  if (!userInfo) redirect("/welcome")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
    </main>
  );
}
