import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Link href="/profile/edit">edit</Link>
      <div className="profile-container">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile Picture"
          className="profile-picture"
        />
        <div className="profile-info">
          <h2>Alex Hwang</h2>
          <p>desc</p>
          <p>
            <strong>Location:</strong> City, State
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

      <div className="nav">
        <a href="" className="button home"></a>
        <a href="https://google.com" className="button maps"></a>
        <a href="" className="button create">
          {" "}
        </a>
        <a href="https://google.com" className="button chat"></a>
        <a href="src/routes/profile/page.svelte" className="button login"></a>
      </div>
    </div>
  );
}
