import { fake_cards } from "@/app/data";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

export default function ProductPage({ params }) {
  let product = fake_cards.find((v) => v.id === parseInt(params.pid));

  return (
    <div>
      <div className="p-5 text-3xl">
        <Link href="/">
          <FaChevronLeft />
        </Link>
      </div>

      <div>
        <img src={product.url} />
      </div>

      <div className="space-y-3 p-5">
        <h1>{product.title}</h1>
        <div>{product.description}</div>
        <div className="flex flex-wrap gap-2">
          {product.tags.map((t) => (
            <div
              className="bg-gray-100 px-1 py-0.5 rounded-lg font-bold"
              key={t}
            >
              #{t}
            </div>
          ))}
        </div>
        <div>
          <Link href="/messages/chat">
            <button className="bg-primary text-white w-full rounded-full py-4 text-xl mt-5">
              Send a message
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
