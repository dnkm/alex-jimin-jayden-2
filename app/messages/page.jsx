import { formatDistance, formatDistanceStrict } from "date-fns";
import Link from "next/link";

let fake_contacts = [
  {
    id: 1,
    icon: "H",
    name: "hydrogen",
    time: genRandomTime(),
    color: "#FFFFFF",
  }, // White
  {
    id: 2,
    icon: "He",
    name: "helium",
    time: genRandomTime(),
    color: "#D9FFFF",
  }, // Light blue
  {
    id: 3,
    icon: "Li",
    name: "lithium",
    time: genRandomTime(),
    color: "#CC80FF",
  }, // Light purple
  {
    id: 4,
    icon: "Be",
    name: "beryllium",
    time: genRandomTime(),
    color: "#C2C2C2",
  }, // Light gray
  { id: 5, icon: "B", name: "boron", time: genRandomTime(), color: "#FFB5B5" }, // Light pink
  { id: 6, icon: "C", name: "carbon", time: genRandomTime(), color: "#000000" }, // Black
  {
    id: 7,
    icon: "N",
    name: "nitrogen",
    time: genRandomTime(),
    color: "#616161",
  }, // Dark gray
  { id: 8, icon: "O", name: "oxygen", time: genRandomTime(), color: "#FF0D0D" }, // Red
  {
    id: 9,
    icon: "F",
    name: "fluorine",
    time: genRandomTime(),
    color: "#90EE90",
  }, // Light green
  { id: 10, icon: "Ne", name: "neon", time: genRandomTime(), color: "#FFB3E6" }, // Light pink
  {
    id: 11,
    icon: "Na",
    name: "sodium",
    time: genRandomTime(),
    color: "#D9B3FF",
  }, // Light purple
  {
    id: 12,
    icon: "Mg",
    name: "magnesium",
    time: genRandomTime(),
    color: "#B3B3B3",
  }, // Gray
  {
    id: 13,
    icon: "Al",
    name: "aluminum",
    time: genRandomTime(),
    color: "#D9D9D9",
  }, // Silver
  {
    id: 14,
    icon: "Si",
    name: "silicon",
    time: genRandomTime(),
    color: "#E0E0E0",
  }, // Light gray
  {
    id: 15,
    icon: "P",
    name: "phosphorus",
    time: genRandomTime(),
    color: "#FF8000",
  }, // Orange
  {
    id: 16,
    icon: "S",
    name: "sulfur",
    time: genRandomTime(),
    color: "#FFFF00",
  }, // Yellow
  {
    id: 17,
    icon: "Cl",
    name: "chlorine",
    time: genRandomTime(),
    color: "#00FF00",
  }, // Green
  {
    id: 18,
    icon: "Ar",
    name: "argon",
    time: genRandomTime(),
    color: "#80D0FF",
  }, // Light blue
  {
    id: 19,
    icon: "K",
    name: "potassium",
    time: genRandomTime(),
    color: "#D9A3FF",
  }, // Light purple
  {
    id: 20,
    icon: "Ca",
    name: "calcium",
    time: genRandomTime(),
    color: "#FFB3B3",
  }, // Light pink
  {
    id: 21,
    icon: "Sc",
    name: "scandium",
    time: genRandomTime(),
    color: "#E6E6E6",
  }, // Very light gray
  {
    id: 22,
    icon: "Ti",
    name: "titanium",
    time: genRandomTime(),
    color: "#B0B0B0",
  }, // Gray
  {
    id: 23,
    icon: "V",
    name: "vanadium",
    time: genRandomTime(),
    color: "#A6A6A6",
  }, // Gray
  {
    id: 24,
    icon: "Cr",
    name: "chromium",
    time: genRandomTime(),
    color: "#6E6E6E",
  }, // Dark gray
  {
    id: 25,
    icon: "Mn",
    name: "manganese",
    time: genRandomTime(),
    color: "#7E7E7E",
  }, // Gray
  { id: 26, icon: "Fe", name: "iron", time: genRandomTime(), color: "#D9D9D9" }, // Light gray
  {
    id: 27,
    icon: "Co",
    name: "cobalt",
    time: genRandomTime(),
    color: "#0047AB",
  }, // Dark blue
  {
    id: 28,
    icon: "Ni",
    name: "nickel",
    time: genRandomTime(),
    color: "#A8A8A8",
  }, // Light gray
  {
    id: 29,
    icon: "Cu",
    name: "copper",
    time: genRandomTime(),
    color: "#B87333",
  }, // Copper
  { id: 30, icon: "Zn", name: "zinc", time: genRandomTime(), color: "#D3D3D3" }, // Light gray
  {
    id: 31,
    icon: "Ga",
    name: "gallium",
    time: genRandomTime(),
    color: "#4D4DFF",
  }, // Blue
  {
    id: 32,
    icon: "Ge",
    name: "germanium",
    time: genRandomTime(),
    color: "#6C6C6C",
  }, // Gray
  {
    id: 33,
    icon: "As",
    name: "arsenic",
    time: genRandomTime(),
    color: "#3D3D3D",
  }, // Dark gray
  {
    id: 34,
    icon: "Se",
    name: "selenium",
    time: genRandomTime(),
    color: "#E1E1E1",
  }, // Light gray
  {
    id: 35,
    icon: "Br",
    name: "bromine",
    time: genRandomTime(),
    color: "#BF5B5B",
  }, // Dark red
  {
    id: 36,
    icon: "Kr",
    name: "krypton",
    time: genRandomTime(),
    color: "#66B3FF",
  }, // Light blue
  {
    id: 37,
    icon: "Rb",
    name: "rubidium",
    time: genRandomTime(),
    color: "#8A2BE2",
  }, // Blue
  {
    id: 38,
    icon: "Sr",
    name: "strontium",
    time: genRandomTime(),
    color: "#D9B3D9",
  }, // Light purple
  {
    id: 39,
    icon: "Y",
    name: "yttrium",
    time: genRandomTime(),
    color: "#D9D9D9",
  }, // Light gray
  {
    id: 40,
    icon: "Zr",
    name: "zirconium",
    time: genRandomTime(),
    color: "#E0E0E0",
  }, // Light gray
  {
    id: 41,
    icon: "Nb",
    name: "niobium",
    time: genRandomTime(),
    color: "#B0B0B0",
  }, // Gray
  {
    id: 42,
    icon: "Mo",
    name: "molybdenum",
    time: genRandomTime(),
    color: "#7F7F7F",
  }, // Dark gray
  {
    id: 43,
    icon: "Tc",
    name: "technetium",
    time: genRandomTime(),
    color: "#C0C0C0",
  }, // Silver
  {
    id: 44,
    icon: "Ru",
    name: "ruthenium",
    time: genRandomTime(),
    color: "#8A8A8A",
  }, // Gray
  {
    id: 45,
    icon: "Rh",
    name: "rhodium",
    time: genRandomTime(),
    color: "#C0C0C0",
  }, // Silver
  {
    id: 46,
    icon: "Pd",
    name: "palladium",
    time: genRandomTime(),
    color: "#D0D0D0",
  }, // Light gray
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
