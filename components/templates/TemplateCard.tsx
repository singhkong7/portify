import Link from "next/link";

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
    <div className="border rounded-lg overflow-hidden shadow">
      <img
        src={image}
        alt={name}
        className="w-full h-72 object-cover"
      />

      <div className="p-4">
        <h2 className="font-semibold text-lg">
          {name}
        </h2>

        <Link
          href={`/editor/${id}`}
          className="mt-3 block bg-black text-white text-center py-2 rounded"
        >
          Use Template
        </Link>
      </div>
    </div>
  );
}