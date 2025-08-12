import { TbRefresh } from "react-icons/tb";

export default function Header() {
  return (
    <div className="navbar bg-base-100/60 sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto">
        <div className="flex-1">
          <span className="btn btn-ghost text-xl gap-2">
            <TbRefresh className="text-orange-500" />
            Timestamper
          </span>
        </div>
        <div className="flex-none">
          <a
            className="btn btn-sm btn-outline"
            href="https://github.com/mCodex/react-timestamper"
            target="_blank"
            rel="noreferrer"
          >
            ⭐ Star
          </a>
        </div>
      </div>
    </div>
  );
}
