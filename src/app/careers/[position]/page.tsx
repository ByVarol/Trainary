import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Clock, Briefcase, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const openPositions = [
  {
    id: "kişisel-eğitmen",
    title: "Kişisel Eğitmen",
    department: "Fitness Eğitimi",
    location: "İzmir",
    type: "Tam Zamanlı",
    description: "Fitness üyelerimize bire bir eğitim vererek onları hedeflerine ulaştıracak, motivasyonlarını yüksek tutacak ve sağlıklı yaşam alışkanlıkları kazandıracak deneyimli eğitmenler arıyoruz.",
    longDescription: "Trainary olarak, fitness endüstrisinde yeni standartlar belirliyor ve üyelerimize en kaliteli hizmeti sunmak için çalışıyoruz. Kişisel Eğitmen ekibimize katılacak, üyelerimizin fitness yolculuklarında onlara rehberlik edecek, onları motive edecek ve hedeflerine ulaşmalarına yardımcı olacak tutkulu profesyoneller arıyoruz.",
    requirements: [
      "Spor Bilimleri, Egzersiz Fizyolojisi veya ilgili alanda lisans derecesi",
      "Uluslararası tanınmış bir kurumdan (ACE, NASM, ACSM vb.) geçerli bir kişisel eğitmenlik sertifikası",
      "En az 2 yıl kişisel eğitmenlik deneyimi",
      "Müşteri ilişkileri ve iletişim becerileri güçlü",
      "Çeşitli fitness ekipmanları ve teknikleri konusunda derin bilgi",
      "İlk yardım ve CPR sertifikası",
      "Esnek çalışma saatlerine uyum sağlayabilme",
      "Grup dersleri verebilme yeteneği tercih sebebi"
    ],
    responsibilities: [
      "Üyelerin fitness düzeylerini ve hedeflerini değerlendirmek",
      "Kişiselleştirilmiş, güvenli ve etkili egzersiz programları oluşturmak",
      "Üyelere doğru egzersiz teknikleri konusunda rehberlik etmek",
      "İlerlemeyi takip etmek, programları gerektiğinde ayarlamak",
      "Beslenme tavsiyeleri ve yaşam tarzı rehberliği sağlamak",
      "Motivasyonu artırmak ve üyelerin hedeflerine ulaşmalarına yardımcı olmak",
      "Fitness ekipmanlarının güvenli kullanımını sağlamak",
      "Gerektiğinde grup fitness dersleri vermek"
    ],
    benefits: [
      "Rekabetçi maaş ve performansa dayalı primler",
      "Kapsamlı sağlık sigortası",
      "Ücretsiz fitness üyeliği ve tesislerden yararlanma",
      "Sürekli eğitim ve sertifika programları için destek",
      "Profesyonel gelişim fırsatları",
      "Esnek çalışma saatleri",
      "Pozitif ve dinamik çalışma ortamı",
      "Kariyer ilerleme olanakları"
    ],
    applicationProcess: "Pozisyona başvurmak için lütfen güncel CV'nizi, kapak mektubunuzu ve sertifikalarınızın kopyalarını careers@trainary.com adresine gönderin. E-postanızın konu satırına 'Kişisel Eğitmen Başvurusu - [Adınız Soyadınız]' yazınız. Uygun adaylar mülakat için davet edilecektir.",
    imageUrl: "https://images.unsplash.com/photo-1571019113664-8a70d82d3e76?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "beslenme-uzmanı",
    title: "Beslenme Uzmanı",
    department: "Sağlık & Beslenme",
    location: "İzmir",
    type: "Tam Zamanlı",
    description: "Üyelerimize beslenme planları hazırlayacak, onlara beslenme konusunda danışmanlık yapacak ve diğer ekip üyeleri ile işbirliği içinde çalışacak diyetisyen arıyoruz.",
    longDescription: "Trainary, sağlıklı yaşam yolculuğunda beslenmenin kritik önemini bilerek, uzman bir beslenme danışmanı arıyor. İdeal adayımız, bilimsel temelli beslenme bilgisiyle üyelerimize rehberlik edecek, onların fitness ve sağlık hedeflerine ulaşmalarına yardımcı olacak bir profesyonel olacaktır.",
    requirements: [
      "Beslenme ve Diyetetik bölümünden lisans derecesi",
      "En az 2 yıl klinik veya spor beslenmesi alanında deneyim",
      "Geçerli diyetisyen lisansı",
      "Spor beslenmesi konusunda derin bilgi ve anlayış",
      "Güçlü iletişim ve danışmanlık becerileri",
      "Değişen müşteri ihtiyaçlarına uyarlanabilir esnek düşünce yapısı",
      "Ekip çalışmasına yatkınlık",
      "MS Office ve beslenme yazılımları konusunda yeterlilik"
    ],
    responsibilities: [
      "Üyelerin beslenme ihtiyaçlarını değerlendirmek ve analiz etmek",
      "Kişiselleştirilmiş beslenme planları ve stratejileri geliştirmek",
      "Bireysel beslenme danışmanlık seansları yürütmek",
      "Kilo yönetimi, kas gelişimi ve performans iyileştirme konularında rehberlik etmek",
      "Beslenme eğitim seminerleri ve atölye çalışmaları düzenlemek",
      "Fitness ekibi ile işbirliği içinde bütünsel yaklaşımlar geliştirmek",
      "Üyelerin ilerleme durumunu izlemek ve planları buna göre ayarlamak",
      "Beslenme trendleri ve araştırmaları takip ederek güncel kalmak"
    ],
    benefits: [
      "Rekabetçi maaş paketi",
      "Kapsamlı sağlık sigortası",
      "Esnek çalışma saatleri",
      "Mesleki gelişim fırsatları ve konferanslara katılım desteği",
      "Ücretsiz fitness üyeliği",
      "Ekip aktiviteleri ve sosyal etkinlikler",
      "Modern ve pozitif çalışma ortamı",
      "Sürekli eğitim ve sertifika programları için destek"
    ],
    applicationProcess: "Başvurmak için lütfen özgeçmişinizi, kapak mektubunuzu ve ilgili sertifikalarınızı careers@trainary.com adresine gönderin. E-posta konusu 'Beslenme Uzmanı Başvurusu - [Adınız Soyadınız]' şeklinde olmalıdır.",
    imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "mobil-uygulama-geliştirici",
    title: "Mobil Uygulama Geliştirici",
    department: "Teknoloji",
    location: "Uzaktan",
    type: "Tam Zamanlı",
    description: "Fitness uygulamamızın geliştirilmesi ve bakımı için React Native tecrübesi olan, kullanıcı deneyimi odaklı çalışacak yazılım geliştiricileri arıyoruz.",
    longDescription: "Trainary olarak, kullanıcılarımıza sınıfının en iyisi mobil fitness deneyimi sunmak için çalışıyoruz. Mobil uygulamamızın geliştirilmesi ve yeni özelliklerin eklenmesi için tutkulu ve yetenekli bir React Native geliştiricisi arıyoruz. Bu pozisyon, kullanıcı odaklı, performanslı ve teknik olarak üstün bir mobil uygulama oluşturmaya katkıda bulunmak isteyen yazılım geliştiricileri için ideal bir fırsattır.",
    requirements: [
      "Bilgisayar Mühendisliği, Yazılım Mühendisliği veya ilgili alanda lisans derecesi",
      "En az 3 yıl mobil uygulama geliştirme deneyimi",
      "React Native ile en az 2 yıl profesyonel deneyim",
      "JavaScript/TypeScript, Redux ve RESTful API'ler konusunda derin bilgi",
      "iOS ve Android platformlarında uygulama geliştirme ve test deneyimi",
      "Git versiyon kontrol sistemi tecrübesi",
      "CI/CD süreçleri bilgisi",
      "Güçlü problem çözme ve analitik düşünme becerileri",
      "İyi düzeyde İngilizce"
    ],
    responsibilities: [
      "React Native kullanarak mobil uygulamanın geliştirilmesi ve bakımı",
      "Uygulamanın hem iOS hem de Android platformlarında sorunsuz çalışmasını sağlamak",
      "Kullanıcı deneyimini iyileştirmek için yeni özellikler geliştirmek",
      "Var olan kodu optimize etmek ve performans iyileştirmelerinde bulunmak",
      "API'lerle entegrasyon yapmak ve backend ekibiyle birlikte çalışmak",
      "Code review süreçlerine katılmak ve teknik standartları korumak",
      "Uygulama hatalarını tespit etmek ve çözmek",
      "Uygulama store'larında yayınlama süreçlerini yönetmek",
      "Teknoloji trendlerini takip etmek ve uygulamaya entegre etmek"
    ],
    benefits: [
      "Rekabetçi maaş paketi",
      "Tamamen uzaktan çalışma imkanı",
      "Esnek çalışma saatleri",
      "Sağlık sigortası",
      "Profesyonel gelişim için eğitim bütçesi",
      "Yıllık izin ve tatil günleri",
      "Modern ekipman ve yazılım lisansları",
      "Kariyer gelişimi ve ilerleme fırsatları",
      "Ücretsiz fitness uygulaması üyeliği"
    ],
    applicationProcess: "Başvurmak için lütfen özgeçmişinizi, GitHub/GitLab profilinizi ve daha önce geliştirdiğiniz mobil uygulama örneklerini careers@trainary.com adresine gönderin. E-posta konusu 'Mobil Uygulama Geliştirici Başvurusu - [Adınız Soyadınız]' şeklinde olmalıdır.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "sosyal-medya-yöneticisi",
    title: "Sosyal Medya Yöneticisi",
    department: "Pazarlama",
    location: "İzmir",
    type: "Yarı Zamanlı",
    description: "Sosyal medya kanallarımızı yönetecek, içerik stratejisi oluşturacak ve markamızın dijital varlığını güçlendirecek yaratıcı bir sosyal medya uzmanı arıyoruz.",
    longDescription: "Trainary olarak, dijital platformlarda güçlü bir varlık göstermek ve hedef kitlemizle etkin iletişim kurmak için sosyal medya stratejilerimizi yönetecek yaratıcı bir Sosyal Medya Yöneticisi arıyoruz. İdeal adayımız, fitness ve sağlıklı yaşam dünyasına tutkulu, dikkat çekici içerikler oluşturabilen ve verilere dayalı kararlar alabilen dinamik bir profesyonel olacaktır.",
    requirements: [
      "Pazarlama, İletişim, Halkla İlişkiler veya ilgili alanda lisans derecesi",
      "En az 2 yıl sosyal medya yönetimi deneyimi",
      "Instagram, Facebook, Twitter, TikTok ve LinkedIn platformlarında içerik oluşturma deneyimi",
      "Sosyal medya analitikleri ve raporlama araçları konusunda deneyim",
      "Güçlü içerik oluşturma, yazma ve düzenleme becerileri",
      "Temel grafik tasarım becerileri (Canva, Adobe Creative Suite)",
      "Fotoğraf ve video düzenleme konusunda temel bilgi",
      "Spor ve fitness sektörüne ilgi",
      "Mükemmel iletişim ve organizasyon becerileri"
    ],
    responsibilities: [
      "Tüm sosyal medya platformlarını yönetmek ve içerik takvimi oluşturmak",
      "Markanın ses tonunu koruyarak etkileyici içerikler üretmek",
      "Sosyal medya kampanyaları planlamak ve yürütmek",
      "Topluluk yönetimi yapmak ve takipçilerle etkileşimde bulunmak",
      "İçerik performansını analiz etmek ve stratejileri buna göre ayarlamak",
      "Fitness trendlerini takip etmek ve güncel kalmak",
      "İçerik üretimi için fotoğraf ve video çekimlerini koordine etmek",
      "İnfluencer işbirliklerini yönetmek",
      "Aylık performans raporları hazırlamak"
    ],
    benefits: [
      "Rekabetçi ücret",
      "Esnek çalışma saatleri",
      "Haftada 20-25 saat çalışma",
      "Ücretsiz fitness üyeliği",
      "Uzaktan çalışma imkanı (haftada en az 1 gün ofiste bulunma şartıyla)",
      "Profesyonel gelişim fırsatları",
      "Dinamik ve yaratıcı çalışma ortamı",
      "Sosyal etkinlikler ve takım aktiviteleri"
    ],
    applicationProcess: "Başvurmak için lütfen özgeçmişinizi, kapak mektubunuzu ve sosyal medya portföyünüzü/örnek çalışmalarınızı careers@trainary.com adresine gönderin. E-posta konusu 'Sosyal Medya Yöneticisi Başvurusu - [Adınız Soyadınız]' şeklinde olmalıdır.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80"
  }
]

export default function CareerPositionPage({ params }: { params: { position: string } }) {
  const position = openPositions.find((pos) => 
    pos.id === params.position || 
    pos.title.toLowerCase().replace(/\s+/g, '-') === params.position
  )
  
  if (!position) {
    return (
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Pozisyon Bulunamadı</h1>
          <p className="text-muted-foreground mb-8">
            Aradığınız pozisyon mevcut değil veya kaldırılmış olabilir.
          </p>
          <Button asChild>
            <Link href="/careers">Kariyer Fırsatlarına Dön</Link>
          </Button>
        </div>
        <Footer />
      </main>
    )
  }
  
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <section className="bg-muted/30 py-12">
        <div className="container">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/careers">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tüm Pozisyonlara Dön
            </Link>
          </Button>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">{position.department}</span>
                <span className="bg-muted px-3 py-1 rounded-full text-sm flex items-center">
                  <MapPin className="mr-1 h-3 w-3" /> {position.location}
                </span>
                <span className="bg-muted px-3 py-1 rounded-full text-sm flex items-center">
                  <Clock className="mr-1 h-3 w-3" /> {position.type}
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight">{position.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {position.longDescription}
              </p>
            </div>
            <div className="relative w-full md:w-1/3 h-[250px] rounded-lg overflow-hidden">
              <Image
                src={position.imageUrl}
                alt={position.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="grid gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Briefcase className="mr-2 h-5 w-5 text-primary" />
                İş Tanımı
              </h2>
              <p className="text-lg mb-6">{position.description}</p>
              
              <h3 className="text-xl font-bold mb-3">Sorumluluklar</h3>
              <ul className="space-y-2 mb-6">
                {position.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-bold mb-3">Gereksinimler</h3>
              <ul className="space-y-2 mb-6">
                {position.requirements.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Sunduğumuz Olanaklar</h2>
              <ul className="space-y-2 mb-6">
                {position.benefits.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Başvuru Süreci</h2>
              <p className="text-lg mb-6">{position.applicationProcess}</p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" asChild className="flex-1">
                  <Link href="/contact?subject=Kariyer">Şimdi Başvur</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="flex-1">
                  <Link href="/careers">Diğer Pozisyonlara Göz At</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/30">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Trainary'de Çalışmanın Avantajları</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Profesyonel gelişiminizi destekleyen, yaratıcılığınızı teşvik eden ve sağlıklı bir yaşam tarzını destekleyen bir ortamda çalışın.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Kişisel Gelişim</h3>
              <p className="text-muted-foreground">
                Sürekli öğrenme ve gelişim imkanları, eğitimler ve konferanslarla yetkinliklerinizi artırın.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Sağlıklı Çalışma</h3>
              <p className="text-muted-foreground">
                Ücretsiz fitness üyeliği, wellbeing etkinlikleri ve sağlıklı beslenme opsiyonlarıyla form kalın.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">İş-Yaşam Dengesi</h3>
              <p className="text-muted-foreground">
                Esnek çalışma saatleri, uzaktan çalışma imkanı ve sağlıklı bir iş-yaşam dengesi için destek.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 