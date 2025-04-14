"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Vücudunu Dönüştür,{" "}
              <span className="text-primary">Hayatını Dönüştür</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Fitness devrimine katıl ve kişiselleştirilmiş programlarımızla 
              daha sağlıklı, daha güçlü ve daha özgüvenli bir versiyonunu keşfet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/programs">
                  Hemen Başla <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Daha Fazla Bilgi</Link>
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-background">
                    <Image
                      src={`https://randomuser.me/api/portraits/men/${i+10}.jpg`}
                      alt={`Kullanıcı ${i}`}
                      fill
                      sizes="40px"
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-bold">5.000+</span> mutlu üye
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px]"
          >
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&auto=format&fit=crop&q=80"
                alt="Egzersiz yapan kişi"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAADAAQDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACv/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AfwD/2Q=="
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Haftalık İlerleme</h3>
                  <p className="text-sm text-muted-foreground">Programın önündesin!</p>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className={`h-8 w-2 rounded-full ${i <= 3 ? "bg-primary" : "bg-primary/30"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 -z-10 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
    </section>
  )
} 