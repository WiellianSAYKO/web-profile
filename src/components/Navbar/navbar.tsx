"use client";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 navbar backdrop-blur-sm shadow-2xl">
      <div className="navbar-start w-150">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gradient-to-r from-blue-500 to-sky-600 rounded-box z-1 mt-3 w-60 p-2 shadow-sm"
          >
            <li>
              <a 
              href="#Home"
              className="text-lg text-white font-bold">Home</a>
            </li>
            <li>
              <a 
              href="#About"
              className="text-lg text-white font-bold">About</a>
            </li>
            <li>
              <a 
              href="#Skill"
              className="text-lg text-white font-bold">Skill</a>
            </li>
            <li>
              <a 
              href="#Portfolio"
              className="text-lg text-white font-bold">Portfolio</a>
            </li>
            <li>
              <a 
              href="#Experience"
              className="text-lg text-white font-bold">Experience</a>
            </li>
            <li>
              <a 
              href="#Contact"
              className="text-lg text-white font-bold">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="flex justify-items-center text-xl">
          <span className="text-emerald-300 font-bold">Wiellian</span>
          <span className="text-white font-bold">Yahya</span>
        </a>
      </div>
    </div>
  );
}
