'use client'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { ModeToggle } from '@/components/mode-toggle'
import { useState } from 'react'

type HeaderProps = {
  handleSearch: (term: string) => void
}

const Header = ({ handleSearch }: HeaderProps) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchTerm(value)
    handleSearch(value)
  }

  return (
    <header className="flex gap-4 mt-8 mx-auto max-w-[70rem] mb-14">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <ModeToggle />
    </header>
  )
}

export default Header
