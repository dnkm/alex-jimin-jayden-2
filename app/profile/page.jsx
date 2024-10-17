import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Link href="/profile/edit">edit</Link>
      <div class="profile-container">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile Picture"
          class="profile-picture"
        />
        <div class="profile-info">
          <h2>Alex Hwang</h2>
          <p>desc</p>
          <p>
            <strong>Location:</strong> City, State
          </p>
        </div>
        <div class="section">
          <h3>Closet</h3>
          <ul>
            <li>Dress</li>
            <li>Shirt</li>
          </ul>
        </div>
        <div class="section">
          <h3>Posts</h3>
          <ul>
            <li>Review of Dress</li>
            <li>Review of Shirt</li>
          </ul>
        </div>
      </div>

      <div class="nav">
        <a href="" class="button home"></a>
        <a href="https://google.com" class="button maps"></a>
        <a href="" class="button create">
          {" "}
        </a>
        <a href="https://google.com" class="button chat"></a>
        <a href="src/routes/profile/page.svelte" class="button login"></a>
      </div>
    </div>
  );
}
