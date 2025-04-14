import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Loader2 } from "lucide-react"

// Statik header
import Navbar from "@/components/layout/Navbar"

// Dinamik olarak yüklenen bileşenler
const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), {
  loading: () => (
    <div className="flex h-[600px] items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  ),
})

const FeaturesSection = dynamic(() => import("@/components/sections/FeaturesSection"), {
  ssr: true, // SSR ile önceden render edilmesi önemli
})

const ProgramsSection = dynamic(() => import("@/components/sections/ProgramsSection"))
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"))
const CTASection = dynamic(() => import("@/components/sections/CTASection"))
const Footer = dynamic(() => import("@/components/layout/Footer"))

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}>
          <FeaturesSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}>
          <ProgramsSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}>
          <CTASection />
        </Suspense>
      </main>
      <Footer />
    </>
  )
} 