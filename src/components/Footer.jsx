const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1 px-4 py-3 text-xs text-muted-foreground">
        <span>
          Quotes data by{" "}
          <a
            href="https://docs.criptoya.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground hover:text-accent transition-colors"
          >
            CriptoYa API
          </a>
        </span>
        <span className="hidden sm:inline" aria-hidden="true">
          {" \u00B7 "}
        </span>
        <span>
            <a
              href="https://livioreinoso.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Coded by Livio Reinoso
            </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
