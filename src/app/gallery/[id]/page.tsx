import Image from "next/image";
import { Wonder7Type, data } from "../constants";

export default function GalleryDetailPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const dataItem = data.find((i) => i.id === params.id)!;

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3l font-bold my.4">
            {dataItem?.name}
          </h1>
        </div>
        <Image
          src={dataItem?.src}
          alt={dataItem?.name}
          className="rounded-md my-3 w-full object-cover aspect-square md:h-96"
        />
        <div className="bg-white p-4 my-4 text-black">
          <h3>{dataItem.photographer}</h3>
          <h3>Location: {dataItem.location}</h3>
        </div>
      </div>
    </div>
  );
}
