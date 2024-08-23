import { ReactNode } from "react";

interface Main {
  children: ReactNode;
}

export default function Main({ children }: Main) {
  return (
    <main className="bg-gradient-to-b from-gray-200 to-gray-300">
      {children}
    </main>
  );
}
