import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const programs = [
  {
    title: "Kilo Verme",
    description: "Yağ yakmak ve kas geliştirmek için etkili kardiyovasküler ve güç antrenmanları.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=80",
    level: "Tüm Seviyeler",
    duration: "8 Hafta",
    price: "59,99₺",
    longDesc: "Bu 8 haftalık program, güvenli ve sürdürülebilir kilo kaybı sağlamak için tasarlanmıştır. HIIT antrenmanları, güç egzersizleri ve özel beslenme planı içerir. Her gün için detaylı egzersiz planı ve video rehberliği sunulur.",
    features: [
      "Günlük video rehberli antrenmanlar",
      "Haftalık beslenme planları",
      "İlerleme takibi",
      "Grup desteği"
    ],
    link: "/programs/weight-loss"
  },
  {
    title: "Güç ve Kondisyon",
    description: "İlerleyici direnç antrenmanlarıyla ciddi güç ve kuvvet geliştirin.",
    image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=800&auto=format&fit=crop&q=80",
    level: "Orta Seviye",
    duration: "12 Hafta",
    price: "79,99₺",
    longDesc: "Güç ve kondisyon programımız, maksimum kas artışı ve kuvvet gelişimi için bilimsel olarak kanıtlanmış yöntemler kullanır. İlerleyici bir yaklaşımla, temel egzersizlerden gelişmiş hareketlere doğru ilerlersiniz.",
    features: [
      "Profesyonel antrenör rehberliği",
      "Periodizasyon tabanlı antrenman",
      "Form kontrolü ve incelemesi",
      "Özelleştirilmiş beslenme stratejisi"
    ],
    link: "/programs/strength"
  },
  {
    title: "Yoga ve Esneklik",
    description: "Yoga programımızla esneklik, denge ve farkındalığınızı geliştirin.",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&auto=format&fit=crop&q=80",
    level: "Tüm Seviyeler",
    duration: "6 Hafta",
    price: "49,99₺",
    longDesc: "Bu program, hem başlangıç hem de ileri seviye yoga pratisyenleri için tasarlanmıştır. Vinyasa, Hatha ve Restoratif yoga stillerini içerir ve her gün için farklı bir odak noktası sunar. Esneklik, denge ve zihinsel netliğinizi artırırken, stresi azaltır.",
    features: [
      "Sertifikalı yoga eğitmenleri",
      "Her seviye için alternatifler",
      "Nefes ve meditasyon teknikleri",
      "Evde pratik için asana kütüphanesi"
    ],
    link: "/programs/yoga"
  },
  {
    title: "Fonksiyonel Fitness",
    description: "Günlük yaşam aktivitelerinizi daha iyi hale getirmek için tasarlanmış program.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=80",
    level: "Tüm Seviyeler",
    duration: "10 Hafta",
    price: "69,99₺",
    longDesc: "Fonksiyonel fitness programımız, günlük yaşamda hareket kalitesini artırmaya odaklanır. Çekirdek gücü, denge, mobilite ve stabilite egzersizleri içerir. Her yaştan ve fitness seviyesinden kişiler için uygundur.",
    features: [
      "Fonksiyonel hareket taraması",
      "Kişiselleştirilmiş düzeltici egzersizler",
      "Çekirdek gücü programı",
      "Mobilite ve denge rutinleri"
    ],
    link: "/programs/functional"
  }
]

export default function ProgramsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <section className="bg-muted/30 py-12">
        <div className="container">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ana Sayfaya Dön
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tight">Fitness Programlarımız</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Fitness hedeflerinize ulaşmanıza yardımcı olacak uzman tasarımlı programlar
          </p>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg border bg-background shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="mb-2 text-2xl font-bold">{program.title}</h2>
                  <p className="mb-4 text-muted-foreground">{program.longDesc}</p>
                  
                  <h3 className="mb-2 text-lg font-semibold">Program Özellikleri:</h3>
                  <ul className="mb-6 space-y-2">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-4 flex items-center gap-4 text-sm">
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                      {program.level}
                    </div>
                    <div className="rounded-full bg-secondary/10 px-3 py-1 text-secondary">
                      {program.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{program.price}</span>
                    <Button asChild>
                      <Link href={program.link}>Programa Kaydol</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 