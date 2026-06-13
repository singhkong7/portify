import Link from "next/link";
import Image from "next/image";

interface Props {
  id: number;
  name: string;
  image: string;
}

export default function TemplateCard({
  id,
  name,
  image,
}: Props) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      <div className="relative h-[350px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="font-semibold text-lg mb-3">
          {name}
        </h2>

        <Link
          href={`/editor/${id}`}
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
        >
          Use Template
        </Link>
      </div>
    </div>
  );
}