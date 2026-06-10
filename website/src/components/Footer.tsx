export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-6 border-none bg-transparent">
      <div className="container flex m-auto items-center justify-center mt-5 text-center px-4">
        <p>Let's get in touch! Thanks for stopping by.    •◡•</p>
      </div>
      <div className="container flex m-auto items-center justify-center mt-10 pb-5">
        <p className="text-sm text-muted-foreground">© {currentYear} <a href="/humans.txt" target="_blank" rel="noopener noreferrer"><u>Deborah Oladokun</u></a></p>
      </div>
    </footer>
  )
}
