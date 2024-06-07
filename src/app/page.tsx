import Image from "next/image";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-8xl text-center mb-20 font-mono text-gray-800 font-bold">GottaGo</h1>

      <p className="text-2xl text-center font-mono text-gray-700">Contact <a className="text-gray-400 hover:text-gray-500" href="mailto:dev.simanzler@gmail.com">me</a> if you have any issues with GottaGo</p>
    </main>
  );
}
