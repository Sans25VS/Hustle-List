import Image from "next/image";
import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Button</Button>
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>HUSTLE LIST</h1>
    </main>
  );
}
