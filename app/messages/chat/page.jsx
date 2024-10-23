"use client";
import Link from "next/link";
import { useState } from "react";
import "./style.css";
import { addMinutes, format, formatDistance } from "date-fns";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

let dylan_msgs = [
  // alex says Hey Dylan! Are you free to meet up later? To get your evening gown for a wedding this weekend?
  {
    name: "Dylan",
    txt: "Hey! Yeah, I’m free this afternoon. I’m free after 4. Does that work for you?",
  },
  //Perfect! How about we meet at that cafe on Main Street at 4:30?
  {
    name: "Dylan",
    txt: "Sounds perfect! Do you need me to bring anything else?",
  },
  //nope, thanks for the help. Do you wanna grab a drink there?
  {
    name: "Dylan",
    txt: "Great! I’ll bring the gown. It’s all cleaned and ready to go.",
  },
  //Awesome! I can’t wait to see it.
  { name: "Dylan", txt: "Awesome! see you at 3 then." },
  //Thanks!
  { name: "Dylan", txt: "No Problem!" },
];

let dyi = 0;

export default function Home() {
  let contactcolor = "#0047AB";
  let [message, setmessage] = useState("hi");

  let [msgs, setMsgs] = useState([
    {
      time: addMinutes(new Date(), -5),
      name: "me",
      txt: "Hi is the dress available",
    },
    { time: addMinutes(new Date(), -4), name: "Dylan", txt: "Yes!" },
  ]);

  function onSubmit(ev) {
    ev.preventDefault();
    let copy = [
      ...msgs,
      { time: new Date(), name: "me", txt: ev.target.textInput.value },
    ];

    setMsgs(copy);
    ev.target.reset();

    setTimeout(() => {
      setMsgs([...copy, { time: new Date(), ...dylan_msgs[dyi++] }]);
    }, 2000);
  }

  return (
    <>
      <div className="p-5 flex justify-between text-xl font-bold">
        <Link href="/messages">
          <FaChevronLeft />
        </Link>
        <div> Dylan </div>
        <div></div>
      </div>
      <div className="p-5">
        {msgs.map((msg, i) => (
          <div key={i}>
            {msg.name === "me" ? (
              <div className="flex justify-end items-end space-x-2">
                <div
                  className="text-xs text-gray-500"
                  style={{
                    maxWidth: "70%",
                  }}
                >
                  {format(msg.time, "h:mm aa")}
                </div>
                <div className="flex justify-end box3 rounded-xl rounded-tr-none p-3 pr-5">
                  {msg.txt}
                </div>
              </div>
            ) : (
              <div className="flex gap-2">
                <div>
                  <div
                    className="flex items-center justify-center bg-neutral text-neutral-content w-8 h-8 rounded-full text-2xl"
                    style={{ backgroundColor: contactcolor }}
                  >
                    D
                  </div>
                </div>
                <div className="space-y-2">
                  <div>{msg.name}</div>
                  <div className=" flex items-end">
                    <div
                      className="box3 gray rounded-xl rounded-tl-none p-3 pl-5"
                      style={{
                        maxWidth: "70%",
                      }}
                    >
                      {msg.txt}
                    </div>
                    <div className="text-xs text-gray-500">
                      {format(msg.time, "h:mm aa")}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex-1" style={{ minHeight: 20 }}></div>
      <form
        onSubmit={onSubmit}
        className=" p-4 flex justify-between w-full"
      >
        <input
          className="gray rounded-xl bg-gray-200 px-3 py-2 w-3/4"
          name="textInput"
        />
        <button>
          <FaChevronRight />
        </button>
      </form>
    </>
  );
}
