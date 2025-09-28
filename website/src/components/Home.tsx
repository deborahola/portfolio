import Spiral from "./Spiral"
import "../styles/Home.css"

export default function Home(){

  return (
    <div id="home" className="min-h-screen flex flex-col items-center justify-start pt-40 sm:pt-40 space-y-5 bg-[#1D201F]">
      <Spiral />

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold flex items-center">
        Hi, I'm Deborah
        <span className="ml-1 colorChangingExclamation">!</span>  👋
      </h1>

      <h2 className="text-xl sm:text-2xl md:text-3xl text-center px-4 opacity-80">💻  Welcome to my website!   :&#41;</h2>

      <p className="max-w-xl text-center text-lg px-4 opacity-60">
        📚  Student @ <span className="text-primary font-medium text-[#EAD2AC]"><strong>Georgia Tech</strong></span> (Studying <span className="text-primary font-medium text-[#EAD2AC]"><strong>Computer Science</strong></span>)
      </p>

      <div className="down-arrow-wrapper pt-10"><span className="down-arrow bounce"><strong>↓</strong></span></div>
    </div>
  )
}
