import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

export default function UploadPage() {
  return (
    <div className="m-5 space-y-5 upload-form">
      <div>
        <Link href="/">
          <FaChevronLeft />
        </Link>
      </div>

      <div>
        <div>File</div>
        <input type="file" />
      </div>

      <div>
        <div>Title</div>
        <input className="bg-gray-200 p-4 w-full rounded-xl" />
      </div>

      <div>
        <div>Description</div>
        <textarea className="bg-gray-200 w-full h-24 rounded-xl"></textarea>
      </div>

      <div>
        <div>Tags (comma separated)</div>
        <input className="bg-gray-200 p-4 w-full rounded-xl" />
      </div>

      <div>
        <button className="button-black">Upload</button>
      </div>
    </div>
  );
}
