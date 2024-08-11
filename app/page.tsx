import Image from "next/image";
import { Main } from "./components/Main";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left align-middle justify-center">
        <Main />
      </div>
    </main>
  );
}
