"use client"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
export function ClientStuff() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>This is a test of the initial load of a Next.JS application.</p>
      </PopoverContent>
    </Popover>
  )
}
