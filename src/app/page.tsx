"use client";
import { useState } from "react";
import { Input } from "./input";
import Link from "next/link";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  return (
    <main className="w-full h-full flex justify-center items-center">
      {loading ? (
        <div>
          Please wait, loading can take upwards from 15 seconds as we employ
          advanced algorithms to calculate a simple and easy-to-follow plan...
        </div>
      ) : data && data.length > 0 ? (
        <div>
          <ul className="flex flex-col gap-2 border p-8 rounded-xl shadow-md">
            {data.map((item: string, idx: number) => (
              <li
                key={idx}
                className="flex items-center gap-2 hover:text-indigo-400 hover:cursor-pointer"
              >
                <input type="checkbox"></input>
                {item}
              </li>
            ))}
          </ul>
          <Link className="flex mt-4" href="/">
            Click here to try again
          </Link>
        </div>
      ) : (
        <div className="flex flex-col text-center gap-4 max-w-[850px]">
          <div className="text-4xl font-bold">
            Split your tasks into bite-size pieces
          </div>
          <div>
            Sometimes getting started is the hardest part. Taskify is here to
            help you break your next task down into easily manageable steps, so
            you can start gaining momentum and feel tangible progress as you
            work toward your goal!
          </div>
          <div>
            Try it out with any task - no matter how seemingly small and
            insignificant or large and abstract!
          </div>
          <div className="relative">
            <Input setData={setData} setLoading={setLoading} />
          </div>
        </div>
      )}
    </main>
  );
}
