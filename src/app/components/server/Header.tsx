import { TbRefresh } from "react-icons/tb";

export default function Header() {
  return (
    <div className="navbar bg-base-100/60 sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto">
        <div className="flex-1">
          <span className="flex items-center gap-2 text-xl">
            <TbRefresh className="text-orange-500" />
            Timestamper
          </span>
        </div>
      </div>
    </div>
  );
}
