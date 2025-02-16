"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"
import FloralDecoration from "./components/FloralDecoration"
import FloralDecoration2 from "./components/FloralDecoration2"

export default function RsvpForm() {
  const [name, setName] = useState("")
  const [guests, setGuests] = useState("1")
  const [submitted, setSubmitted] = useState(false)
  const [attending, setAttending] = useState("attending")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    try {
      const response = await fetch('/api/submit-rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          guests,
          attending,
          timestamp: new Date().toISOString(),
        }),
      })
      console.log(response)
      if (!response.ok) {
        throw new Error('Failed to submit RSVP')
      }

      setSubmitted(true)
    } catch (error) {
      console.error('Error submitting RSVP:', error)
      alert('Failed to submit RSVP. Please try again.')
    }
  }

  if (submitted) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="border-2 border-blue-200 p-4 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10" />
          <div className="relative z-20">
            <h3 className="text-xl font-serif text-blue-800 mb-2">Thank You!</h3>
            <p className="text-base text-blue-800">
              We are delighted to receive your response!
            </p>
            <div className="mt-2 text-blue-600 text-xl">❦</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-3xl mx-auto relative p-24">

      <FloralDecoration2 className="-bottom-12 -right-12 z-10" size="lg" />
      
      <div className="border-2 border-blue-200 p-12 rounded-xl relative overflow-hidden">
        <Image
          src="/awan.jpg"
          alt="Decorative floral header"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10" />
        
        <div className="relative z-20">
          <div className="text-center mb-12">
            <div className="text-blue-600 mb-4 text-4xl">❦</div>
            <h1 className="text-4xl sm:text-4xl font-light text-blue-800 mb-4">
              Mirzan Iskandar
              <br />
              &
              <br />
              Hanani Balqis
            </h1>
            <div className="text-lg text-blue-700">We would be honored by your presence</div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-blue-900 font-medium text-2xl">
                Name
              </Label>
              <Input 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-3 border-blue-200 focus:ring-blue-500 focus:border-blue-500 h-20 text-3xl bg-white/70 px-6" 
                required 
              />
            </div>
            <div>
                <Label htmlFor="guests" className="text-blue-900 font-medium text-2xl">
                  Number of Guests
                </Label>
                <Input 
                  id="guests" 
                  type="number" 
                  min="1" 
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="mt-3 border-blue-200 focus:ring-blue-500 focus:border-blue-500 h-20 text-3xl bg-white/70 px-6" 
                  required 
                />
              </div>
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-8 h-16 text-xl transition-colors duration-200"
            >
              Send 
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

