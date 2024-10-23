import { fake_cards } from "@/app/data";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

export default function ProductPage({ params }) {
  let product = fake_cards.find((v) => v.id === parseInt(params.pid));

  return (
    <>
      <div className="p-5 text-3xl">
        <Link href="/">
          <FaChevronLeft />
        </Link>
      </div>

      <div
        className="w-full bg-center bg-cover"
        style={{ height: "40vh", backgroundImage: `url("${product.url}")` }}
      ></div>

      <div className="space-y-3 p-5">
        <h1 className="font-bold text-3xl">{product.title}</h1>
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
      </div>

      <div className="flex mx-5 items-center">
        <div className="text-3xl border-2 border-gray-800 rounded-full aspect-square">
          {"👤"}
        </div>
        <div className="ml-3 text-xl font-bold">Dylan</div>
        <div className="flex-1"></div>
        <div>2024.10.14</div>
      </div>

      <div className="flex-1"></div>

      <div className="m-5">
        <Link href="/messages/chat">
          <button className="bg-primary text-white w-full rounded-full py-4 text-xl mt-5">
            Send a message
          </button>
        </Link>
      </div>
    </>
  );
}
