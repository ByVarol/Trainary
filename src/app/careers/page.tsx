import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const openPositions = [
  {
    title: "Kişisel Eğitmen",
    department: "Fitness Eğitimi",
    location: "İzmir",
    type: "Tam Zamanlı",
    description: "Fitness üyelerimize bire bir eğitim vererek onları hedeflerine ulaştıracak, motivasyonlarını yüksek tutacak ve sağlıklı yaşam alışkanlıkları kazandıracak deneyimli eğitmenler arıyoruz."
  },
  {
    title: "Beslenme Uzmanı",
    department: "Sağlık & Beslenme",
    location: "İzmir",
    type: "Tam Zamanlı",
    description: "Üyelerimize beslenme planları hazırlayacak, onlara beslenme konusunda danışmanlık yapacak ve diğer ekip üyeleri ile işbirliği içinde çalışacak diyetisyen arıyoruz."
  },
  {
    title: "Mobil Uygulama Geliştirici",
    department: "Teknoloji",
    location: "Uzaktan",
    type: "Tam Zamanlı",
    description: "Fitness uygulamamızın geliştirilmesi ve bakımı için React Native tecrübesi olan, kullanıcı deneyimi odaklı çalışacak yazılım geliştiricileri arıyoruz."
  },
  {
    title: "Sosyal Medya Yöneticisi",
    department: "Pazarlama",
    location: "İzmir",
    type: "Yarı Zamanlı",
    description: "Sosyal medya kanallarımızı yönetecek, içerik stratejisi oluşturacak ve markamızın dijital varlığını güçlendirecek yaratıcı bir sosyal medya uzmanı arıyoruz."
  },
]

export default function CareersPage() {
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
          <h1 className="text-4xl font-bold tracking-tight">Kariyer Fırsatları</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Fitness dünyasında fark yaratacak takım arkadaşları arıyoruz
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Neden Trainary'de Çalışmalısınız?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Trainary'de tutkulu, yenilikçi ve kullanıcı odaklı bir ekibin parçası olursunuz. İnsanların daha sağlıklı ve güçlü bir yaşam sürmelerine yardımcı olmak için çalışırken, kendinizi de sürekli geliştirme fırsatı bulursunuz.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Çalışanlarımıza sunduğumuz avantajlar:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Rekabetçi maaş ve yan haklar</li>
                <li>• Esnek çalışma saatleri</li>
                <li>• Profesyonel gelişim imkanları</li>
                <li>• Ücretsiz fitness üyeliği</li>
                <li>• Pozitif ve destekleyici çalışma ortamı</li>
                <li>• Kariyer gelişimi için mentorluk</li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80"
                alt="Trainary ekibi birlikte çalışırken"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Açık Pozisyonlar</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {openPositions.map((position, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">{position.department}</span>
                  <span className="bg-muted px-3 py-1 rounded-full text-sm">{position.location}</span>
                  <span className="bg-muted px-3 py-1 rounded-full text-sm">{position.type}</span>
                </div>
                <p className="text-muted-foreground mb-4">{position.description}</p>
                <Button asChild>
                  <Link href={`/careers/${position.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    Detayları Gör
                  </Link>
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-muted/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Aradığınız Pozisyonu Bulamadınız mı?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Yeteneğinizi göstermek için özgeçmişinizi bize gönderin, uygun bir pozisyon açıldığında sizinle iletişime geçelim.
            </p>
            <Button asChild>
              <Link href="/contact?subject=Kariyer">Özgeçmiş Gönder</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/10">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
            Ekip Değerlerimiz
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Tutku ve Bağlılık</h3>
              <p className="text-muted-foreground">
                Fitness ve sağlıklı yaşam konusunda tutkulu, kullanıcılarımıza en iyi hizmeti sunmak için tam bağlılık gösteren bireylerle çalışıyoruz.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Yenilikçilik</h3>
              <p className="text-muted-foreground">
                Sürekli gelişimi destekliyor, yaratıcı fikirleri teşvik ediyor ve fitness endüstrisinde fark yaratacak yenilikleri arıyoruz.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Takım Çalışması</h3>
              <p className="text-muted-foreground">
                Farklı uzmanlık alanlarından gelen profesyonellerle işbirliği içinde çalışarak, tek başımıza olduğumuzdan daha güçlü bir ekip oluyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 