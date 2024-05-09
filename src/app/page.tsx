import { titleFont } from "@/config/font";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Hola</h1>
      <h1 className={ titleFont.className }> Hola mundo</h1>
    </main>
  );
}
