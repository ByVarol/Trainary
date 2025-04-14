"use client"

import { motion } from "framer-motion"
import { 
  ActivitySquare, 
  Apple, 
  BarChart3, 
  Clock, 
  HeartPulse, 
  Smartphone 
} from "lucide-react"

const features = [
  {
    icon: <ActivitySquare className="h-6 w-6" />,
    title: "Kişiselleştirilmiş Programlar",
    description: "Özel hedef ve ihtiyaçlarınıza göre tasarlanmış fitness rutinleri."
  },
  {
    icon: <HeartPulse className="h-6 w-6" />,
    title: "Sağlık Takibi",
    description: "Hayati sağlık ölçümlerinizi takip edin ve fitness yolculuğunuzu optimize etmek için içgörüler alın."
  },
  {
    icon: <Apple className="h-6 w-6" />,
    title: "Beslenme Planlaması",
    description: "Antrenmanlarınızı tamamlamak için özel diyet önerileri ve öğün planları."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Esnek Programlama",
    description: "Yoğun yaşamınıza uyarlanabilir süre ve seans süreleriyle egzersizlerinizi planlayın."
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobil Uygulama Entegrasyonu",
    description: "Antrenmanlarınızı hareket halindeyken takip etmek için mobil uygulamamızla kusursuz senkronizasyon."
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "İlerleme Analizleri",
    description: "Zaman içindeki gelişiminizi görselleştirmek için detaylı ilerleme raporları ve analizler."
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Fitness Yolculuğunuz İçin <span className="text-primary">İhtiyacınız Olan Her Şey</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground"
          >
            Kapsamlı platformumuz, sağlık ve fitness hedeflerinize ulaşmanız için 
            gereken tüm araçları, rehberliği ve desteği sağlar.
          </motion.p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 