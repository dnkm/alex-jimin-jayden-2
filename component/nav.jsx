import Link from "next/link";
import { AiFillMessage } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { FaHome, FaMapMarkerAlt } from "react-icons/fa";
import { MdFileUpload } from "react-icons/md";

export default function Navigation() {
    return (
        <nav className="flex p-5 space-x-3 justify-evenly items-center text-3xl">
          <Link href="/">
            <FaHome />
          </Link>
          <Link href="https://www.google.com/maps">
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