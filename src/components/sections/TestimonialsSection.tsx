"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Ayşe Yılmaz",
    role: "3 ayda 14 kilo verdi",
    content: "Trainary, fitness yaklaşımımı tamamen değiştirdi. Kişiselleştirilmiş programlar ve beslenme rehberliği sayesinde kilo verdim ve özgüven kazandım. Kendimi hiç bu kadar iyi hissetmemiştim!",
    image: "https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?w=200&h=200&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Mehmet Kaya",
    role: "Maraton Koşucusu",
    content: "Trainary'deki antrenman programları koşumu bir üst seviyeye taşıdı. Maraton zamanımı 15 dakika iyileştirdim ve toparlanma hiç bu kadar iyi olmamıştı. Kesinlikle tavsiye ederim!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Zeynep Demir",
    role: "Yoga Tutkunu",
    content: "Birçok fitness platformu denedim, ancak Trainary'nin yoga programı öne çıkıyor. Eğitmenler mükemmel ve ilerleme her seviye için ideal. Esnekliğim büyük ölçüde gelişti!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&auto=format&fit=crop&q=80",
    rating: 4
  },
  {
    id: 4,
    name: "Ahmet Öztürk",
    role: "12 haftada 7 kilo kas kazandı",
    content: "Güç programı beklentilerimi aştı. Sadece 12 haftada önemli ölçüde kas kütlesi ve güç kazandım. Beslenme rehberliği özellikle yararlıydı.",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=200&h=200&auto=format&fit=crop&q=80",
    rating: 5
  }
]

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const [totalVisible, setTotalVisible] = useState(1)
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setTotalVisible(3)
      } else if (window.innerWidth >= 768) {
        setTotalVisible(2)
      } else {
        setTotalVisible(1)
      }
    }
    
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  
  const next = () => {
    setCurrent(prev => (prev + 1) % (testimonials.length - totalVisible + 1))
  }
  
  const prev = () => {
    setCurrent(prev => (prev - 1 + (testimonials.length - totalVisible + 1)) % (testimonials.length - totalVisible + 1))
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Başarı Hikayeleri
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground"
          >
            Trainary'nin topluluğumuzun hayatlarını nasıl dönüştürdüğünü görün
          </motion.p>
        </div>
        
        <div className="relative">
          <div 
            ref={containerRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${current * 100 / totalVisible}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="min-w-[100%] md:min-w-[50%] lg:min-w-[33.333%] p-4"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="h-full rounded-lg border bg-background p-6 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mt-2 flex text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4" fill={i < testimonial.rating ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <p className="mt-4">{testimonial.content}</p>
                </motion.div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              disabled={current === 0}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              disabled={current === testimonials.length - totalVisible}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 