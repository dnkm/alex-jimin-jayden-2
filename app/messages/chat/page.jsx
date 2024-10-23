"use client";
import Link from "next/link";
import { useState } from "react";
import "./style.css";

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
    { name: "Dylan", txt: "I'm Dylan blah blah" },
    { name: "me", txt: "ok hello" },
  ]);

  function onSubmit(ev) {
    ev.preventDefault();
    let copy = [...msgs, { name: "me", txt: ev.target.textInput.value }];

    setMsgs(copy);
    ev.target.reset();

    setTimeout(() => {
      setMsgs([...copy, dylan_msgs[dyi++]]);
    }, 2000);
  }

  return (
    <div>
      <input type="text"></input>
      <div class="flex justify-between">
        <Link href="/messages">{"<"}</Link>
        <div> Dylan </div>
        <div></div>
      </div>
      <div className="space-y-2">
        {msgs.map((msg, i) => (
          <div key={i}>
            {msg.name === "me" ? (
              <div>
                <div className="bg-green-100 flex justify-end box3 sb13">
                  {msg.txt}
                </div>
              </div>
            ) : (
              <div>
                <div className="bg-blue-100">
                  <div>{msg.name}</div>
                  <div className="flex p-3">
                    <div
                      className="flex items-center justify-center bg-neutral text-neutral-content w-8 h-8 rounded-full text-2xl"
                      style={{ backgroundColor: contactcolor }}
                    >
                      D
                    </div>
                    <div className="box3 sb14">{msg.txt}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div class="flex hidden">
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
          <input className="bg-black text-white" name="textInput" />
        </form>
      </div>
    </div>
  );
}
