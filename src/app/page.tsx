import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { listUsers } = await import("../prisma/users");
  const formatter = new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  const users = await listUsers(10).catch((error: unknown) => {
    console.error("Failed to query users:", error);
    return undefined;
  });

  return (
    <div>
      <Button>Hola mundo</Button>
    </div>
  );
}
