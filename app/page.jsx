"use client";

import Link from "next/link";
import { fake_tags, fake_cards } from "./data";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Masonry from "react-responsive-masonry";

export default function MainPage() {
  let [selectTags, setSelectTags] = useState([]);
  let [searchTxt, setSearchTxt] = useState("");
  let [showPopup, setShowPopup] = useState(false);
  let [showProduct, setShowProduct] = useState(false);
  let [productIndex, setProductIndex] = useState(0);

  function handleTagToggle(tag) {
    setSelectTags((prev) =>
      prev.includes(tag) ? prev.filter((v) => v !== tag) : [...prev, tag]
    );
  }

  let searchedCards = fake_cards.filter((card) =>
    card.description.toLowerCase().includes(searchTxt.toLowerCase())
  );

  let filteredCards = searchedCards.filter((card) => {
    if (selectTags.length === 0) return true;
    return card.tags.some((t) => selectTags.includes(t));
  });

  let shownCards = filteredCards;

  return (
    <div className="my-5 space-y-5 mx-5">
      {showPopup && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 z-20"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
          onClick={() => setShowPopup(false)}
        >
          <div
            className="p-5 rounded-b-xl bg-white"
            onClick={(ev) => ev.stopPropagation()}
          >
            <div className="relative w-full">
              <input
                value={searchTxt}
                onChange={(ev) => setSearchTxt(ev.target.value)}
                placeholder="Hello! What are you looking for today?"
                className="bg-gray-200 rounded-xl p-3 w-full"
              />
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-0 bottom-0 right-5"
              >
                <FaMagnifyingGlass />
              </button>
            </div>

            <div className="flex flex-wrap mt-5">
              {fake_tags.map((tag, index) => (
                <button
                  key={index}
                  className={`m-1 p-1 btn btn-sm rounded-xl px-2 py-1 font-bold ${
                    selectTags.includes(tag) ? "bg-blue-300" : "bg-gray-300"
                  }`}
                  onClick={() => handleTagToggle(tag)}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center text-4xl font-bold">
        <div>ReWear</div>
        <button onClick={() => setShowPopup(true)}>
          <FaMagnifyingGlass />
        </button>
      </div>

      <div className="text-center">
        Our community has saved{" "}
        <span className="text-xl font-bold">{fake_cards.length}</span> clothes
        from going to waste! 🌎
      </div>

      {showProduct && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-white overflow-auto">
          <div className="flex justify-between text-xl font-bold p-3">
            <button onClick={() => setShowProduct(false)}>{"<"}</button>
          </div>
          <div>
            <img src={shownCards[productIndex].url} />
          </div>
          <div className="text-xl font-bold pl-5 p-3">
            {shownCards[productIndex].title}
          </div>
          <div className="pl-5 pr-5">
            {shownCards[productIndex].description}
          </div>
          <div className="pl-5 pr-5 p-4">
            {shownCards[productIndex].tags.join(", ")}
          </div>
          <div className="flex pl-5 p-2">
            <div className="flex items-center justify-center bg-neutral text-neutral-content w-8 h-8 rounded-full text-2xl bg-blue-500">
              D
            </div>
            <div className="pl-3">Name</div>
          </div>
        </div>
      )}

      <Masonry columnsCount={2} gutter="15px">
        {shownCards.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl w-full overflow-hidden shadow-md"
          >
            <Link href={`/product/${card.id}`}>
              <img src={card.url} alt={card.title} />
              <div className="p-2 text-sm">
                <div className="font-bold">{card.title}</div>
                <div>{card.description}</div>
                <div className="flex flex-wrap space-x-2 my-2">
                  {card.tags.map((t) => (
                    <div
                      className="bg-gray-100 rounded-lg px-1 py-0.5 text-xs font-bold"
                      key={t}
                    >
                      #{t}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Masonry>
    </div>
  );
}
