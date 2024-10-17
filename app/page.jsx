import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div>
        <Link href="/search">
          <textarea placeholder="Write me a message please :)"></textarea>
        </Link>
      </div>

      <div class="area">
        Clothes in Your Area
        <div class="content-box">
          <div class="item">
            <img src="https://via.placeholder.com/150" alt="Clothes 1" />
          </div>
          <div class="item">
            <img src="https://via.placeholder.com/150" alt="Clothes 2" />
          </div>
          <div class="item">
            <img src="https://via.placeholder.com/150" alt="Clothes 3" />
          </div>
          <div class="item">
            <img src="https://via.placeholder.com/150" alt="Clothes 4" />
          </div>
          <div class="item">
            <img src="https://via.placeholder.com/150" alt="Clothes 5" />
          </div>
        </div>
      </div>

      <div class="feed">
        Feed of Posts by Users
        <div class="feed-box">
          <div class="post">
            <img src="https://via.placeholder.com/150" alt="Post 1" />
            ⭐⭐⭐⭐
          </div>
          <div class="post">
            <img src="https://via.placeholder.com/150" alt="Post 2" />
            ⭐⭐⭐
          </div>
          <div class="post">
            <img src="https://via.placeholder.com/150" alt="Post 3" />
            ⭐⭐⭐⭐⭐
          </div>
          <div class="post">
            <img src="https://via.placeholder.com/150" alt="Post 4" />
            ⭐⭐⭐
          </div>
          <div class="post">
            <img src="https://via.placeholder.com/150" alt="Post 5" />
            ⭐⭐⭐⭐⭐
          </div>
        </div>
      </div>

      <div class="impact">
        Our community has saved <span class="impact-number">100</span> clothes
        from going to waste! 🌎
      </div>

      <div class="text-links">
        <div class="faq textlink">
          <a href="src/routes/staticpages/faq.svelte">FAQ</a>
        </div>
        <div class="tos textlink">
          <a href="src/routes/staticpages/tos.svelte">TOS</a>
        </div>
        <div class="privacy textlink">
          <a href="src/routes/staticpages/privacy.svelte">PRIVACY</a>
        </div>
      </div>

      <div class="nav">
        <a href="" class="button home"></a>
        <a href="https://google.com" class="button maps"></a>
        <a href="src/routes/create/create.svelte" class="button create">
          {" "}
        </a>
        <a href="https://google.com" class="button chat"></a>
        <a href="src/routes/profile/page.svelte" class="button login"></a>
      </div>

      <div class="invisible-space"></div>
    </div>
  );
}
