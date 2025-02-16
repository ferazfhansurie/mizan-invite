import Image from "next/image"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import RsvpForm from "./rsvp-form"

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "600"] })
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] })

export default function WeddingInvitation() {
  return (
    <main className="h-screen flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">
      <div className="max-w-2xl w-full overflow-visible">
        <div className={`${cormorant.className} text-center flex-1`}>
          <RsvpForm />
        </div>
      </div>
    </main>
  )
}

