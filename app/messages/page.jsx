import { formatDistance, formatDistanceStrict } from "date-fns";
import Link from "next/link";
import { addMinutes} from "date-fns";


let fake_contacts = [
  {

    id: 1,
    icon: "👤",
    name: "Dylan",
    time: addMinutes(new Date(), -4),
    color: "#FFFFFF",
  }, // White

{
    id: 2,
    icon: "🌈", // Rainbow
    name: "Helena",
    time: genRandomTime(),
    color: "#00FFFF", // Cyan
},
{
    id: 3,
    icon: "🔥", // Fire
    name: "Olivia",
    time: genRandomTime(),
    color: "#FF4D4D", // Bright red
},
{
    id: 4,
    icon: "💙", // Blue Heart
    name: "Noah",
    time: genRandomTime(),
    color: "#00BFFF", // Deep sky blue
},
{
    id: 5,
    icon: "🍊", // Orange
    name: "Chloe",
    time: genRandomTime(),
    color: "#FFAA00", // Bright orange
},
{
    id: 6,
    icon: "💜", // Purple Heart
    name: "Ava",
    time: genRandomTime(),
    color: "#A020F0", // Bright purple
},
{
    id: 7,
    icon: "💖", // Sparkling Heart
    name: "Nina",
    time: genRandomTime(),
    color: "#FF69B4", // Hot pink
},
{
    id: 8,
    icon: "🌟", // Star
    name: "Liam",
    time: genRandomTime(),
    color: "#ADFF2F", // Green yellow
},
{
    id: 9,
    icon: "🌼", // Blossom
    name: "Freya",
    time: genRandomTime(),
    color: "#FFFF00", // Bright yellow
},
{
    id: 10,
    icon: "🌞", // Sun
    name: "Sophia",
    time: genRandomTime(),
    color: "#FFEB3B", // Bright lemon yellow
},
  ];
fake_contacts.sort((b, a) => a.time.getTime() - b.time.getTime());

function genRandomTime() {
  let d = new Date();
  d.setTime(d.getTime() - Math.floor(Math.random() * 100000000));
  return d;
}

export default function messages() {
  return (
    <div>
      {fake_contacts.map((contact, index) => (
        <Link href="/messages/chat" key={index}>
          <button className="flex items-center px-3 py-2 border w-full">
            <div className="flex items-center">
              <div
                className="flex items-center justify-center bg-neutral text-neutral-content w-12 h-12 rounded-full text-2xl"
                style={{ backgroundColor: contact.color }}
              >
                {contact.icon}
              </div>
            </div>
            <div className="px-4">{contact.name}</div>
            <div className="flex-grow"></div>
            <div className="px-2">
              {formatDistanceStrict(contact.time, new Date())} ago
            </div>
          </button>
        </Link>
      ))}
    </div>
  );
}
