"use client";

import Link from "next/link";
import { fake_cards, fake_tags } from "../data";
import { useState } from "react";

export default function SearchPage() {
  let [selectTags, setSelectTags] = useState([]);

  function Click(tag) {
    let copy = [];

    if (selectTags.includes(tag)) {
      copy = selectTags.filter((v) => v != tag); // removes
    } else {
      copy = [...selectTags, tag];
    }

    setSelectTags(copy);
  }
  let showncards = fake_cards.filter(
    (card) => selectTags.every((tag) => card.tags.includes(tag))
    // make it so it contains all elements tag
  );

  return (
    <div>
      <textarea placeholder="What are you looking for?"></textarea>
      {/* should take the message split it into words and check titles and descriptions */}
      <div>
        <div className="flex flex-wrap">
          {fake_tags.map((tag, index) => (
            <button
              key={index}
              className={`m-1 p-1 btn btn-sm
                        ${
                          selectTags.includes(tag)
                            ? "bg-blue-300"
                            : "bg-gray-400"
                        }            
              `}
              onClick={() => Click(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap">
        {showncards.map((card, index) => (
          <div
            key={index}
            className="border rounded-lg w-36 overflow-hidden m-2"
          >
            <div
              className="w-full h-24 bg-gray-200 bg-center"
              style={{
                background: `url(${card.url})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div>{card.title}</div>
            <div>{card.description}</div>
            <div>{new Array(5).fill("⭐️").join("")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
