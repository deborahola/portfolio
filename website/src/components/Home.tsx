import "../styles/Home.css"

export default function Home(){

  return (
    <div id="home" className="min-h-screen flex flex-col items-center justify-center pt-16">

      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center px-4">
        <span className="text-gray-100">Hi, I'm </span>
        <span className="relative inline-block">
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 via-blue-500 via-violet-500 to-emerald-400 bg-clip-text text-transparent animate-gradient">
            Deborah
          </span>
          <span className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent bg-clip-text text-transparent mix-blend-overlay">
            Deborah
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-clip-text text-transparent mix-blend-overlay animate-shine colorChangingExclamation">
            Deborah
          </span>
        </span>
      </h1>
      <h2 className="text-2xl md:text-3xl mb-8 text-gray-300 text-center px-4">
        Welcome to my website!   :&#41;
      </h2>
      <p className="max-w-2xl text-center mx-auto text-gray-400 mb-10 text-lg px-4">
        Student @ <span className="text-primary font-medium text-[#EAD2AC]"><strong>Georgia Tech</strong></span> (Studying <span className="text-primary font-medium text-[#EAD2AC]"><strong>Computer Science</strong></span>)
      </p>

      <div className="down-arrow-wrapper pt-10"><span className="down-arrow bounce"><strong>↓</strong></span></div>
    </div>
  )
}
