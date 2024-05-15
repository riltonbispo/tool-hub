'use client'

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

export default function Home() {
  return (
    <main className="w-[80%] mx-auto max-w-[70rem] mt-10">
      <h1>
        Total de projetos <span>1,999 projects</span>
      </h1>

      {data.tags.map((tag, index) => (
        <Link href="" key={index}>
          <Badge className="ml-1">{tag}</Badge>
        </Link>
      ))}

      <Accordion type="multiple" className="w-full space-y-6">
        {data.techs.map((tech, index) => (
          <div className="flex gap-8" key={index}>
            <Image
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              width={50}
              height={50}
            />

            <AccordionItem value={`item-${index}`} className="w-full">
              <AccordionTrigger>
                <div className="text-left">
                  <div className="flex items-center gap-3">
                    <span>{tech.name} </span>
                    <Link href="">
                      <Button variant="ghost" size="icon">
                        <FileText className="h-5" />
                      </Button>
                    </Link>

                    <Link href="">
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
                <Badge key={index} variant="outline" className="mb-4">
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
