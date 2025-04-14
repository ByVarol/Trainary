"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const programs = [
  {
    title: "Kilo Verme",
    description: "Yağ yakmak ve kas geliştirmek için etkili kardiyovasküler ve güç antrenmanları.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=80",
    level: "Tüm Seviyeler",
    duration: "8 Hafta",
    price: "59,99₺",
    link: "/programs/weight-loss"
  },
  {
    title: "Güç ve Kondisyon",
    description: "İlerleyici direnç antrenmanlarıyla ciddi güç ve kuvvet geliştirin.",
    image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=800&auto=format&fit=crop&q=80",
    level: "Orta Seviye",
    duration: "12 Hafta",
    price: "79,99₺",
    link: "/programs/strength"
  },
  {
    title: "Yoga ve Esneklik",
    description: "Yoga programımızla esneklik, denge ve farkındalığınızı geliştirin.",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&auto=format&fit=crop&q=80",
    level: "Tüm Seviyeler",
    duration: "6 Hafta",
    price: "49,99₺",
    link: "/programs/yoga"
  }
]

export default function ProgramsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight"
            >
              Popüler Fitness Programları
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 max-w-2xl text-xl text-muted-foreground"
            >
              Spesifik fitness hedeflerinize ulaşmanıza yardımcı olacak uzman tasarımlı programlar
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="outline" asChild>
              <Link href="/programs">
                Tüm Programları Gör <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-lg border bg-background shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{program.title}</h3>
                <p className="mb-4 text-muted-foreground">{program.description}</p>
                <div className="mb-4 flex items-center gap-4 text-sm">
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                    {program.level}
                  </div>
                  <div className="rounded-full bg-secondary/10 px-3 py-1 text-secondary">
                    {program.duration}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">{program.price}</span>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={program.link}>Detayları Gör</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 