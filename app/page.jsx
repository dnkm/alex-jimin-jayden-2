"use client";

import Link from "next/link";
import { fake_tags } from "./data";
import { fake_cards } from "./data";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Masonry from "react-responsive-masonry";

export default function () {
  let [selectTags, setSelectTags] = useState([]);
  let [searchTxt, setSearchTxt] = useState(""); // take this and put it through search right??
  let [showPopup, setShowPopup] = useState(false);

  function handleTagToggle(tag) {
    // adds the tags to select tags
    let copy = [];
    if (selectTags.includes(tag)) {
      copy = selectTags.filter((v) => v != tag); // removes
    } else {
      copy = [...selectTags, tag];
    }

    setSelectTags(copy);
  }
  let searchedcards = []; // search for it in the descriptions
  let filtercards = fake_cards.filter((card) => {
    //filters the shown cards teh
    if (selectTags.length == 0) return true;

    for (let t of card.tags) {
      for (let tt of selectTags) {
        if (t == tt) return true;
      }
    }
    return false;
  });
  let showncards = [...searchedcards, ...filtercards];

  return (
    <div className="my-5 space-y-5 mx-5">
      {showPopup ? (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 z-20"
          style={{
            background: "rgba(0, 0, 0, 0.5)",
          }}
          onClick={() => {
            setShowPopup(false);
          }}
        >
          <div
            class="p-5 rounded-b-xl bg-white"
            onClick={(ev) => ev.stopPropagation()}
          >
            <div className="relative w-full">
              <input
                value={searchTxt}
                onChange={(ev) => setSearchTxt(ev.target.value)}
                placeholder="Hello! Wghat are you looking for today?"
                className="bg-gray-200 rounded-xl p-3 w-full"
              />
              <button
                onClick={() => {
                  setShowPopup(false);
                }}
                className="absolute top-0 bottom-0 right-5"
              >
                <FaMagnifyingGlass />
              </button>
            </div>

            <div className="flex flex-wrap mt-5">
              {fake_tags.map((tag, index) => (
                <button
                  key={index}
                  className={`m-1 p-1 btn btn-sm rounded-xl px-2 py-1 font-bold
                        ${
                          selectTags.includes(tag)
                            ? "bg-blue-300"
                            : "bg-gray-300"
                        }            
              `}
                  onClick={() => handleTagToggle(tag)}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : undefined}

      <div className="flex justify-between items-center text-4xl font-bold">
        <div className="">AJJ</div>
        <button onClick={() => setShowPopup(true)}>
          <FaMagnifyingGlass />
        </button>
      </div>

      <div class="text-center">
        Our community has saved{" "}
        <span class="text-xl font-bold">{fake_cards.length}</span> clothes from
        going to waste! 🌎
      </div>

      <Masonry columnsCount={2} gutter="15px">
        {showncards.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl w-full overflow-hidden shadow-md"
          >
            <Link href="/product" className="text-link">
              <img src={card.url} />
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
