import tvIcon from "../assets/bxs_tv.svg";

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-screen h-[90px] z-20">
      <div className="h-full flex items-center justify-between px-[140px] text-white">
        
        {/* LEFT */}
        <div className="flex items-center gap-10">
          {/* LOGO */}
          <div className="flex items-center gap-2 font-semibold text-xl">
          <img src={tvIcon} alt="Logo TV" /><span>Movie</span>
          </div>

          {/* MENU */}
          <ul className="flex gap-8 text-sm">
            <li className="font-semibold">Home</li>
            <li className="text-white/70 hover:text-white cursor-pointer">
              Favorites
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
            🔍
            <input
              type="text"
              placeholder="Search Movie"
              className="bg-transparent outline-none text-sm placeholder:text-white/60"
            />
          </div>
        </div>

      </div>
    </nav>
  );
}
