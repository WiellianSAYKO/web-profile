export default function AboutMe() {
  return (
    <div 
    id="About"
    className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-r from-blue-500 to-sky-600">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h2 className="text-5xl font-bold ml-5 text-emerald-300">
              About Me
            </h2>
            <p className="text-sm md:text-2xl flex flex-col space-y-2 text-white p-5">
              More than 5 years Experience in the development of software and
              solutions. A conscientious person who pays attention to details.
              Very passionate about software development, always willing and
              ready to learn new things/concepts. Proven leader with the ability
              to streamline development processes to drive the achievement of
              organisational objectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
