import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div class="flex flex-col" style={{ height: "calc(100% - 24px);" }}>
        <div class="flex space-around items-center py-2 border bg-base-200">
          <i class="fa-solid fa-angle-left px-3 py-2"></i>
          <div class="avatar placeholder">
            <div class="bg-secondary text-neutral-content w-8 rounded-full">
              <span class="text-lg">D</span>
            </div>
          </div>
          <div class="px-5">Dylan</div>
        </div>
        <div class="flex-grow px-3">
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="bg-secondary text-neutral-content w-9 rounded-full text-center py-1">
                <span class="text-xl">D</span>
              </div>
            </div>
            <div class="chat-header">Dylan</div>
            <div class="chat-bubble">message</div>
          </div>

          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="bg-success text-neutral-content w-9 rounded-full text-center py-1">
                <span class="text-lg">S</span>
              </div>
            </div>
            <div class="chat-bubble bg-neutral">message</div>
          </div>
        </div>
        <label class="input input-bordered flex items-center gap-2 bg-base-300">
          <input type="text" class="grow" placeholder="Type..." />
          <i class="fa-solid fa-paper-plane"></i>
        </label>
      </div>
    </div>
  );
}
