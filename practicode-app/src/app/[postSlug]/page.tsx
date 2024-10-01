'use client'

import { usePathname } from "next/navigation";

export default function Post() {
  const pathname = usePathname();

  return (
    <>
      <section className='container m-auto py-6 flex gap-6'>
        <h2>{pathname}</h2>
      </section>
    </>
  );
}
