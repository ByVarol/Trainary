import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const nutritionPlans = [
  {
    title: "Kilo Verme Beslenme Planı",
    description: "Sağlıklı kilo kaybı hedefleyenler için kalori açığı yaratan dengeli beslenme planı.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=80",
    price: "44,99₺",
    features: [
      "7 günlük rotasyon menüsü",
      "Alışveriş listesi",
      "Makro ve mikro besin öğesi dengesi",
      "Kolay hazırlanabilen tarifler"
    ]
  },
  {
    title: "Kas Geliştirme Diyeti",
    description: "Kas kütlesi kazanımını destekleyen, protein bakımından zengin beslenme planı.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop&q=80",
    price: "49,99₺",
    features: [
      "Yüksek proteinli öğün planları",
      "Antrenman öncesi ve sonrası beslenme",
      "Kalori hesaplaması",
      "Supplement önerileri"
    ]
  },
  {
    title: "Vejetaryen / Vegan Plan",
    description: "Bitki bazlı beslenmeye odaklanan, tüm besin ihtiyaçlarını karşılayan beslenme planı.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=80",
    price: "39,99₺",
    features: [
      "Bitki bazlı protein kaynakları",
      "Dengeli amino asit profili",
      "Demir, B12 ve diğer kritik besinleri içerir",
      "Çeşitli dünya mutfaklarından tarifler"
    ]
  }
]

const nutritionArticles = [
  {
    title: "Egzersiz Öncesi ve Sonrası Beslenme Rehberi",
    description: "Performansınızı artırmak ve toparlanmayı hızlandırmak için ne zaman ve ne yemeniz gerektiği.",
    image: "https://images.unsplash.com/photo-1517932754320-e0def4d72b21?w=800&auto=format&fit=crop&q=80",
    link: "/blog/protein-tuketimi-rehberi"
  },
  {
    title: "Karbonhidratlar: Dost mu Düşman mı?",
    description: "Farklı karbonhidrat türleri ve fitness hedeflerinize nasıl entegre edeceğiniz hakkında bilimsel yaklaşım.",
    image: "https://images.unsplash.com/photo-1543255006-d6395b6f1171?w=800&auto=format&fit=crop&q=80",
    link: "/blog/kilo-vermede-kardiyo-ve-agirlik-denklemi"
  },
  {
    title: "Su ve Hidrasyon: Neden Bu Kadar Önemli?",
    description: "Su tüketiminin performans, metabolizma ve genel sağlık üzerindeki kritik etkileri.",
    image: "https://images.unsplash.com/photo-1570314032164-6a378a71e911?w=800&auto=format&fit=crop&q=80",
    link: "/blog/inflamasyon-ve-beslenme"
  }
]

export default function NutritionPage() {
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
          <h1 className="text-4xl font-bold tracking-tight">Beslenme Planları</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Fitness hedeflerinizi destekleyecek bilimsel temelli beslenme planları
          </p>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold">Özel Beslenme Planları</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {nutritionPlans.map((plan, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg border bg-background shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{plan.title}</h3>
                  <p className="mb-4 text-muted-foreground">{plan.description}</p>
                  
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{plan.price}</span>
                    <Button>Planı Satın Al</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-muted/30">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold">Beslenme Makaleleri</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {nutritionArticles.map((article, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg border bg-background shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{article.title}</h3>
                  <p className="mb-4 text-muted-foreground">{article.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={article.link}>
                      Makaleyi Oku
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-accent/5">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Kişiselleştirilmiş Beslenme Danışmanlığı
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Uzman diyetisyenlerimizle birebir çalışarak hedeflerinize özel beslenme planı oluşturun.
            </p>
            <Button size="lg" className="mt-8">
              Ücretsiz Konsültasyon Alın
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 