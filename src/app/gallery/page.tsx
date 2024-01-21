"use client";
import Image from "next/image";
import { data } from "./constants";
import Link from "next/link";
export default function GalleryPage() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">7 Wonder</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item) => (
          <Link href={`/gallery/${item.id}`} key={item.name}>
            <Image
              className="w-full object-cover aspect-square my-5 px-5 rounded-md cursor-pointer"
              src={item.src}
              alt={item.name}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
