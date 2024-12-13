"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
    const [searchText, setSearchText] = useState("")
    const router = useRouter()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmedSearchText = searchText.trim()
        if (!trimmedSearchText) {
            router.push(`/events/all`);
            return
        };

        router.push(`/events/${trimmedSearchText}`);
    };
  return (
    <form onSubmit={handleSubmit} className="w-full lg:w-[580px]">
      <input onChange={e => setSearchText(e.target.value)}
        value={searchText}
        className="w-full h-16 rounded-lg px-6  outline-none ring-accent/50 focus:ring-2 focus:bg-white/10 bg-white/[7%] "
        placeholder="Search events in any city..."
        spellCheck={false}
      />
    </form>
  );
}
