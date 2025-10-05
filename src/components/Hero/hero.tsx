export default function Hero() {
  return (
    <div 
    id="Home"
    className="flex items-center min-h-screen scroll-smooth pt-10">
      <div className="hero-content flex flex-col lg:flex-row-reverse">
        <img
          src="/image/hero2.png"
          className="animate__animated animate__fadeIn animate__delay-1s w-100 h-100 rounded-full object-cover shadow-2xl"
        />
        <div className="animate__animated animate__fadeInLeft">
          <p className="flex ml-5 font-bold text-white">HELLO, MY NAME IS</p>
          <h2 className="text-5xl font-bold text-emerald-300 p-5">
            Wiellian Yahya
          </h2>
          <p className="flex ml-5 font-bold text-white">
            Full-Stack Web Developer
          </p>
          <p className="text-sm md:text-2xl flex flex-col space-y-2 text-white p-5">
            From Batam, I have rich experience in development cycle for dynamic
            web projects, app development, and I am also proficient in UX/UI
            design.
          </p>
        </div>
      </div>
    </div>
  );
}
