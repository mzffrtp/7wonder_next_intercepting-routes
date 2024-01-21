"use client";
import { data } from "@/app/gallery/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function ModalPreview({ params }: { params: { id: string } }) {
  const modalDataItem = data.find((i) => params.id === i.id)!;
  const overlay = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const handleClose = (e: any) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };
  return (
    <div
      ref={overlay}
      onClick={handleClose}
      className="fixed z-10 inset-0 bg-black/60 my-5 "
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 sm:w-10/12 md:w-8/12 lg:2/5 ">
        <Image
          src={modalDataItem?.src}
          alt={modalDataItem.name}
          className="w-full object-cover aspect-square rounded-md"
        />
        <div className="bg-white text-black p-4">
          <h2 className=" text-center text-xl font-semibold">
            {modalDataItem.name}
          </h2>
        </div>
      </div>
    </div>
  );
}
