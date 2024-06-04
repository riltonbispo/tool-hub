'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Image from 'next/image'
import data from '@/data/techs.json'
import { FileText, Github } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Header from '@/app/_componets/Header'

export default function Home() {

  const [selectedTag, setSelectedTag] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const handleTagClick = (tag: any) => {
    setSelectedTag(tag === selectedTag ? null : tag)
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  return (
    <main className="w-[80%] mx-auto max-w-[70rem] mt-10 mb-32">
      <Header handleSearch={handleSearch} />

      <h1>
        Total de ferramentas <span>{data.techs.length}</span>
      </h1>

      {data.tags.map((tag, index) => (
        <Badge key={index} className="ml-1" onClick={() => handleTagClick(tag)}>
          {tag}
        </Badge>
      ))}

      <Accordion type="single" className="w-full space-y-6">
      {data.techs
          .filter((tech) => 
            (!selectedTag || tech.tags.includes(selectedTag)) &&
            (!searchTerm || tech.name.toLowerCase().includes(searchTerm.toLowerCase()))
          )
          .map((tech, index) => (
            <div className="flex gap-8" key={index}>
              <Image
                alt=""
                src={tech.image}
                width={50}
                height={50}
                className="object-contain"
              />

              <AccordionItem value={`item-${index}`} className="w-full">
                <AccordionTrigger>
                  <div className="text-left">
                    <div className="flex items-center gap-3">
                      <span>{tech.name} </span>
                      <Link href={tech.documentation} target='_blank'>
                        <Button variant="ghost" size="icon">
                          <FileText className="h-5" />
                        </Button>
                      </Link>

                      <Link href={tech.github} target='_blank'>
                        <Button variant="ghost" size="icon">
                          <Github className="h-5" />
                        </Button>
                      </Link>
                    </div>
                    <p className="text-zinc-400">{tech.bio}</p>
                  </div>
                </AccordionTrigger>

                <AccordionContent>{tech.description}</AccordionContent>

                {tech.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="mb-4" onClick={() => handleTagClick(tag)}>
                    {tag}
                  </Badge>
                ))}
              </AccordionItem>
            </div>
          ))}
      </Accordion>
    </main>
  )
}