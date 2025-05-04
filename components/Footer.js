const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-4 rounded-b-lg shadow-inner">
      <div className="container mx-auto text-center text-sm">
        © 2025 Christian Gefke —{" "}
        <a
          href="/privacy"
          className="underline hover:text-gray-300 transition-colors"
        >
          Privacy disclaimer
        </a>
      </div>
    </footer>
  )
}

export default Footer
