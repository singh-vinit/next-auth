"use client";
import { useRouter } from "next/navigation";

export default function AppBar() {
  const router = useRouter();
  return (
    <div className="border-b-2 p-4 flex justify-between">
      <div className="font-extrabold text-2xl">next auth</div>
      <div className="flex gap-x-4">
        <button
          className="py-1 px-2 bg-black text-white font-medium"
          onClick={() => router.push("/signup")}
        >
          signup
        </button>
        <button
          className="py-1 px-2 bg-black text-white font-medium"
          onClick={() => router.push("/api/auth/signin")}
        >
          signin
        </button>
      </div>
    </div>
  );
}
