import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const teamMembers = [
  {
    name: "Halil Varol",
    role: "Kurucu & Baş Eğitmen",
    bio: "10 yıllık fitness deneyimi, kişisel eğitmenlik sertifikası ve spor bilimleri lisansı sahibi. Profesyonel sporcu geçmişi var.",
    image: "https://instagram.fasr3-1.fna.fbcdn.net/v/t51.2885-19/397524297_3708430866145796_7509994190577281640_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fasr3-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QEUgPYWYSfGB3enqXvm9juAEl4naZhasBNiIEHLQwqy4Gt9gGS2HSSRTNwtIamr1L0&_nc_ohc=CLNl8JaQzf8Q7kNvwEtsEFy&_nc_gid=sjOYe_95UwoEpSu-O2zRgA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfEk0kBkg85B4J_P4iwpBoEP1SMFlgx_v8hmDpkrnMT9QA&oe=6803107A&_nc_sid=8b3546"
  },
  {
    name: "Zeynep Kaya",
    role: "Beslenme Uzmanı",
    bio: "Diyetetik lisansı ve klinik beslenme yüksek lisansı sahibi. 6 yıldır sporcu beslenmesi üzerine uzmanlaşmış.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Burak Demir",
    role: "Fitness Programları Direktörü",
    bio: "Egzersiz fizyolojisi doktorası, 8 yıllık program geliştirme deneyimi. Sporcu koçluğu geçmişi bulunuyor.",
    image: "https://images.unsplash.com/photo-1531727991582-cfd25ce79613?w=400&h=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Ayşe Öztürk",
    role: "Yoga & Meditasyon Eğitmeni",
    bio: "Uluslararası yoga eğitmenliği sertifikası, 7 yıllık öğretim deneyimi. Mindfulness eğitimi tamamlamış.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&auto=format&fit=crop&q=80"
  }
]

const values = [
  {
    title: "Kişiselleştirme",
    description: "Her birey eşsizdir ve herkesin fitness yolculuğu da öyle olmalıdır. Programlarımızı sizin özel ihtiyaçlarınıza göre tasarlıyoruz."
  },
  {
    title: "Bilimsel Yaklaşım",
    description: "Tüm programlarımız ve tavsiyelerimiz bilimsel araştırmalara dayanmaktadır. Trendleri değil, kanıtlanmış yöntemleri takip ediyoruz."
  },
  {
    title: "Sürdürülebilirlik",
    description: "Hızlı çözümler yerine, uzun vadeli yaşam tarzı değişikliklerine odaklanıyoruz. Sürdürülebilir sonuçlar için sürdürülebilir yöntemler sunuyoruz."
  },
  {
    title: "Topluluk",
    description: "Trainary'de yalnız değilsiniz. Motivasyon ve destek için benzersiz bir topluluğun parçası olacaksınız."
  }
]

export default function AboutPage() {
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
          <h1 className="text-4xl font-bold tracking-tight">Hakkımızda</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Misyonumuz, herkesin kendi potansiyeline ulaşmasına yardımcı olmaktır
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Hikayemiz</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Trainary, 2018 yılında Halil Varol tarafından kuruldu. Halil'in vizyonu, fitness dünyasındaki kişiselleştirme eksikliğini gidermek ve herkesin erişebileceği uzman programlar sunmaktı.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                İlk yılımızda küçük bir toplulukla başladık, ancak kısa sürede büyüdük ve şimdi Türkiye çapında 5000'den fazla aktif üyeye sahibiz.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Amacımız sadece fiziksel değişim değil, aynı zamanda zihinsel ve duygusal iyilik halini de teşvik eden bütünsel bir fitness yaklaşımı sunmaktır.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&auto=format&fit=crop&q=80"
                alt="Trainary ekibi birlikte çalışırken"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Değerlerimiz</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Ekibimiz</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-accent/5">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Bizimle Çalışmaya Hazır mısınız?
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Fitness yolculuğunuzda size yardımcı olmak için buradayız. İlk adımı bugün atın.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/register">Ücretsiz Deneme Başlat</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">İletişime Geçin</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 