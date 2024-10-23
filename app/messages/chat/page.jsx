"use client";
import Link from "next/link";
import { useState } from "react";
import "./style.css";
import { addMinutes, format, formatDistance } from "date-fns";

let dylan_msgs = [
  { name: "Dylan", txt: "333" },
  { name: "Dylan", txt: "44" },
  { name: "Dylan", txt: "555" },
];

let dyi = 0;

export default function Home() {
  let fake_messages = ["Hi I'm Dylan and Im selling the dress", "Yes"];
  let contactcolor = "#0047AB";
  let [message, setmessage] = useState("hi");

  let [msgs, setMsgs] = useState([
    {
      time: addMinutes(new Date(), -5),
      name: "Dylan",
      txt: "I'm Dylan blah blah",
    },
    { time: addMinutes(new Date(), -4), name: "me", txt: "ok hello" },
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
    <div className="mx-5 space-y-5">
      <div className="flex justify-between text-xl font-bold">
        <Link href="/messages">{"<"}</Link>
        <div> Dylan </div>
        <div></div>
      </div>
      <div className="space-y-5 text-sm">
        {msgs.map((msg, i) => (
          <div key={i}>
            {msg.name === "me" ? (
              <div className="flex justify-end items-end space-x-2">
                <div className="text-xs text-gray-500">
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
                  <div className=" flex items-end" >
                    <div className="box3 gray rounded-xl rounded-tl-none p-3 pl-5">{msg.txt}</div>
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
      <div className="flex hidden">
        <div>Dylan</div>
        <div>{fake_messages[0]}</div>
        <input value={message} onChange={(ev) => message(ev.target.value)} />
        <button
          onClick={() => {
            setShowPopup(false);
          }}
        >
          hello
        </button>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <input className="box3 gray rounded-xl p-2 pl-3 pr-3 w-11/12  " name="textInput" />
          <button> {">"}</button>
        </form>
      </div>
    </div>
  );
}
