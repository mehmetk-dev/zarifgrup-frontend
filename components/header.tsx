"use client"

import { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"

const menuItems = [
  { label: "HAKKIMIZDA", href: "/hakkimizda" },
  { label: "MEDYA", href: "/medya" },
  { label: "PROJELER", href: "/projeler" },
  { label: "KARİYER", href: "/kariyer" },
  { label: "İLETİŞİM", href: "/iletisim" },
]

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-8 py-6 md:px-12 md:py-8">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <h1 className="text-2xl md:text-3xl font-light tracking-[0.3em] text-white transition-opacity hover:opacity-80">
            ZARİF GRUP
          </h1>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-light tracking-widest text-white/90 transition-all hover:text-white hover:tracking-[0.2em]"
            >
              {item.label}
            </Link>
          ))}

          {/* Search Icon */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-white/90 hover:text-white transition-colors"
            aria-label="Arama"
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" aria-label="Menü">
          <div className="flex flex-col gap-1.5">
            <span className="block w-6 h-px bg-white" />
            <span className="block w-6 h-px bg-white" />
            <span className="block w-6 h-px bg-white" />
          </div>
        </button>
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm p-8 animate-in fade-in slide-in-from-top-2 duration-300">
          <input
            type="text"
            placeholder="Ara..."
            className="w-full bg-transparent border-b border-white/30 pb-2 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
            autoFocus
          />
        </div>
      )}
    </header>
  )
}
