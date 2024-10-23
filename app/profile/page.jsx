import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import "./profile-style.css";

export default function Home() {
  return (
    <div className="m-5 space-y-5">
      <div>
        <Link href="/">
          <FaChevronLeft />
        </Link>
      </div>

      <div className="profile-container">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile Picture"
          className="profile-picture"
        />
        <div className="profile-info">
          <h2>Alex Hwang</h2>
          <p>This is my bio!</p>
          <p>
            <strong>Location:</strong> Irvine, CA
          </p>
        </div>
        <div className="section">
          <h3>Closet</h3>
          <ul>
            <li>Dress</li>
            <li>Shirt</li>
          </ul>
        </div>
        <div className="section">
          <h3>Posts</h3>
          <ul>
            <li>Review of Dress</li>
            <li>Review of Shirt</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
