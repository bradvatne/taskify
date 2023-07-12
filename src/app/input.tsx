"use client";
import { useEnterKeyPress } from "@/lib/hooks";
import { useState } from "react";
import { clientQuery } from "@/lib/query";
import React from "react";

export const Input = ({
  setData,
  setLoading,
}: {
  setData: Function;
  setLoading: Function;
}) => {
  const [text, setText] = useState("");

  useEnterKeyPress(() => clientQuery(text, setData, setLoading));

  return (
    <div className="relative">
      <input
        type="text"
        className="rounded-md placeholder:italic transition-all duration-600 w-full"
        placeholder="Ex. Hang my new shelf on the wall"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <kbd className="absolute right-2 top-1.5 px-2 py-1.5 text-xs font-medium text-gray-400 border border-gray-200 rounded-lg">
        Enter
      </kbd>
    </div>
  );
};
