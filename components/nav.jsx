import Link from "next/link";
import { AiFillMessage } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { FaHome, FaMapMarkerAlt } from "react-icons/fa";
import { MdFileUpload } from "react-icons/md";

export default function Navigation() {
    return (
        <nav className="w-full bg-white flex p-4 space-x-3 justify-evenly items-center text-3xl" style={{
          boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)"
        }}>
          <Link href="/">
            <FaHome />
          </Link>
          <Link href="/map">
            <FaMapMarkerAlt />
          </Link>
          <Link href="/create">
            <MdFileUpload />
          </Link>
          <Link href="/messages">
            <AiFillMessage />
          </Link>
          <Link href="/profile">
            <BsPersonCircle />
          </Link>
        </nav>
    )
}