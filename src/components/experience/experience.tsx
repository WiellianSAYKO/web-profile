import path from "path";

export default function Experience() {
  return (
    <div 
    id="Experience"
    className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-r from-blue-500 to-sky-600">
      <div className="flex justify-center mt-10">
        <p className="text-3xl font-bold text-emerald-300 mt-5">Experience</p>
      </div>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-5">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
                className="bg-emerald-300"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic text-white font-bold">2019</time>
            <div className="text-lg font-black text-emerald-300 mt-2">
              First Macintosh computer
            </div>
            <div className="bg-neutral-900 rounded-md shadow-lg overflow-hidden h-40 w-full max-w-[560px] mx-auto">
              <p className="text-sm md:text-xl flex flex-col space-y-2 text-gray-300 p-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam nostrum atque commodi asperiores tempore unde natus
                cumque, optio vero. Fuga, sed? Hic et iure accusantium
                voluptatibus eum dolorum nisi cum.
              </p>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic text-white">2020</time>
            <div className="text-lg font-black text-emerald-300 mt-2">iMac</div>
            <div className="bg-neutral-900 rounded-md shadow-lg overflow-hidden h-40 w-full max-w-[560px] mx-auto">
              <p className="text-sm md:text-xl flex flex-col space-y-2 text-gray-300 p-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam nostrum atque commodi asperiores tempore unde natus
                cumque, optio vero. Fuga, sed? Hic et iure accusantium
                voluptatibus eum dolorum nisi cum.
              </p>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic text-white font-bold">2022</time>
            <div className="text-lg font-black text-emerald-300 mt-2">iPod</div>
            <div className="bg-neutral-900 rounded-md shadow-lg overflow-hidden h-40 w-full max-w-[560px] mx-auto">
              <p className="text-sm md:text-xl flex flex-col space-y-2 text-gray-300 p-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam nostrum atque commodi asperiores tempore unde natus
                cumque, optio vero. Fuga, sed? Hic et iure accusantium
                voluptatibus eum dolorum nisi cum.
              </p>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic text-white font-bold">2024</time>
            <div className="text-lg font-black text-emerald-300 mt-2">
              iPhone
            </div>
            <div className="bg-neutral-900 rounded-md shadow-lg overflow-hidden h-40 w-full max-w-[560px] mx-auto">
              <p className="text-sm md:text-xl flex flex-col space-y-2 text-gray-300 p-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam nostrum atque commodi asperiores tempore unde natus
                cumque, optio vero. Fuga, sed? Hic et iure accusantium
                voluptatibus eum dolorum nisi cum.
              </p>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic text-white font-bold">2025</time>
            <div className="text-lg font-black text-emerald-300 mt-2">
              Apple Watch
            </div>
            <div className="bg-neutral-900 rounded-md shadow-lg overflow-hidden h-40 w-full max-w-[560px] mx-auto">
              <p className="text-sm md:text-xl flex flex-col space-y-2 text-gray-300 p-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam nostrum atque commodi asperiores tempore unde natus
                cumque, optio vero. Fuga, sed? Hic et iure accusantium
                voluptatibus eum dolorum nisi cum.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
