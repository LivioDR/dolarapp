'use client'

const CURRENCIES = [
  { code: "USD", label: "USD", flag: "US" },
  { code: "CAD", label: "CAD", flag: "CA" },
  { code: "AUD", label: "AUD", flag: "AU" },
]

const flagEmoji = (countryCode) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}

const Header = ({ currency, setCurrency }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent"
            >
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-foreground">
              DolarApp
            </h1>
            <p className="text-xs text-muted-foreground hidden sm:block">
              Live FX rates to ARS
            </p>
          </div>
        </div>

        <nav className="flex items-center gap-1 p-1 rounded-lg bg-muted" role="tablist" aria-label="Currency selector">
          {CURRENCIES.map((c) => (
            <button
              key={c.code}
              role="tab"
              aria-selected={currency === c.code}
              onClick={() => setCurrency(c.code)}
              className={`
                relative flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md
                transition-all duration-200
                ${currency === c.code
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                }
              `}
            >
              <span className="text-base leading-none" aria-hidden="true">{flagEmoji(c.flag)}</span>
              <span>{c.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header