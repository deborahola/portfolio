export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-6 border-none bg-transparent">
      <div className="container flex m-auto items-center justify-center mt-5">
        <p>Let's get in touch! Thanks for stopping by.    •◡•</p>
      </div>
      <div className="container flex m-auto items-center justify-center mt-10">
        <p className="text-sm text-muted-foreground">© {currentYear} Deborah Oladokun</p>
      </div>
    </footer>
  )
}
