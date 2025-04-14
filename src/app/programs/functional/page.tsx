import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, Zap, Users, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function FunctionalPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <section className="bg-muted/30 py-12">
        <div className="container">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/programs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tüm Programlar
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tight">Fonksiyonel Antrenman Programı</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Gerçek hayattaki hareketleri güçlendirmek için tasarlanmış çok yönlü program
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&auto=format&fit=crop&q=80"
                alt="Fonksiyonel antrenman yapan kişi"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm font-medium">Orta Seviye</span>
                </div>
                <div className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-medium">1200+ Aktif Katılımcı</span>
                </div>
                <div className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">10 Haftalık Program</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Program Hakkında</h2>
              <p className="text-muted-foreground mb-6">
                Fonksiyonel Antrenman Programımız, günlük hayatta kullandığınız hareket kalıplarını geliştirerek, daha güçlü, daha çevik ve daha dengeli bir vücuda kavuşmanızı sağlar. Çok eklemli hareketler ve çeşitli düzlemlerde çalışarak, vücudunuzun bir bütün olarak gelişmesini hedefler.
              </p>
              
              <h3 className="text-xl font-bold mb-2">Bu Programın Faydaları</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Günlük yaşam kalitesinin artması</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Çekirdek kuvvetinin gelişmesi</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Denge ve koordinasyon artışı</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Yaralanma riskinin azalması</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Genel atletik performans artışı</span>
                </li>
              </ul>
              
              <div className="bg-muted p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-2">Program İçeriği</h3>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Haftalık Antrenman Sayısı</span>
                    <span>3-4 gün</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Antrenman Süresi</span>
                    <span>30-45 dakika</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Ekipman İhtiyacı</span>
                    <span>Kettle Bell, Direnç Bantları, TRX</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Antrenman Videoları</span>
                    <span>50+ HD Video</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Teknik Değerlendirme</span>
                    <span>İsteğe Bağlı Video Geri Bildirim</span>
                  </li>
                </ul>
              </div>
              
              <Button size="lg" className="w-full mb-3">Programa Kaydol</Button>
              <p className="text-sm text-center text-muted-foreground">14 gün ücretsiz deneme ile başlayın</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Program Aşamaları</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Temel Aşama (Hafta 1-3)</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Temel hareket kalıplarını öğrenme</li>
                <li>• Doğru formun geliştirilmesi</li>
                <li>• Vücut ağırlığı ile başlangıç hareketleri</li>
                <li>• Mobilite ve stabilite çalışmaları</li>
              </ul>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>30 dakika/seans</span>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Gelişim Aşaması (Hafta 4-7)</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Ekipman kullanımının artırılması</li>
                <li>• Kompleks hareket kombinasyonları</li>
                <li>• Yoğunluk ve tempo artışı</li>
                <li>• Fonksiyonel HIIT antrenmanları</li>
              </ul>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>35-40 dakika/seans</span>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">İleri Aşama (Hafta 8-10)</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Karmaşık çalışma akışları</li>
                <li>• Reaktif ve pliometrik antrenmanlar</li>
                <li>• Atletik performans odaklı egzersizler</li>
                <li>• Zorlu devre antrenmanları</li>
              </ul>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>40-45 dakika/seans</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=800&auto=format&fit=crop&q=80"
                alt="Fonksiyonel antrenman ekipmanları"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Fonksiyonel Antrenman Nedir?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Fonksiyonel antrenman, günlük yaşamdaki doğal hareket kalıplarını taklit eden ve güçlendiren, çok eklemli ve çok düzlemli hareketlere odaklanan bir antrenman yaklaşımıdır.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Geleneksel fitness ekipmanlarından ziyade, vücut ağırlığı, kettle bells, TRX, direnç bantları gibi özgün ekipmanlarla çalışarak, izole kas grupları yerine hareket kalıplarını geliştirmeyi hedefler.
              </p>
              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-bold">Fonksiyonel Antrenmanın Temel İlkeleri</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Çok Eklemli Hareketler:</strong> Tek seferde birden fazla kas grubunu çalıştırır</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Çekirdek Aktivasyonu:</strong> Tüm hareketlerde merkez bölge stabilizasyonu sağlar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Hareket Kalıpları:</strong> İtme, çekme, squat, lunge, hinge, rotasyon, taşıma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Denge Gelişimi:</strong> Stabil olmayan yüzeylerde veya tek taraflı çalışmalar</span>
                  </li>
                </ul>
              </div>
              <Button asChild>
                <Link href="/register">Programa Katılın</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Sıkça Sorulan Sorular</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Fonksiyonel antrenman herkes için uygun mudur?</h3>
              <p className="text-muted-foreground">
                Evet, fonksiyonel antrenman gerçek hayattaki hareketlere odaklandığı için tüm yaş ve fitness seviyelerindeki kişiler için uygundur. Programımız kademeli bir ilerleme sağlar ve tüm hareketlerin farklı zorluklarda modifikasyonlarını sunar, böylece kendi seviyenize uygun çalışabilirsiniz.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Tüm ekipmanlara ihtiyacım var mı?</h3>
              <p className="text-muted-foreground">
                Hayır, program başlangıç seviyesinde minimal ekipman gerektirir. Temel hareketler genellikle vücut ağırlığı ile yapılabilir. İlerleyen seviyelerde kettle bell, direnç bantları veya TRX gibi ekipmanlar önerilir, ancak alternatif ev çözümleri de sunulur.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Bu program kilo vermeme yardımcı olur mu?</h3>
              <p className="text-muted-foreground">
                Fonksiyonel antrenman, yüksek kalori yakımı sağlar ve metabolik kondisyonu artırır. Birden fazla kas grubunu aynı anda çalıştırdığı için klasik izole egzersizlere göre daha verimli kalori yakımı sağlayabilir. Programımız, doğru beslenme ile birlikte uygulandığında sağlıklı kilo yönetimine katkıda bulunabilir.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Programdan sonra ne yapmalıyım?</h3>
              <p className="text-muted-foreground">
                10 haftalık programı tamamladıktan sonra, ileri seviye programımıza geçebilir veya mevcut programı daha yüksek yoğunlukla tekrarlayabilirsiniz. Ayrıca, öğrendiğiniz prensipleri kendi antrenman rutininize entegre edebilmeniz için "Kendi Fonksiyonel Programını Tasarla" adlı ek içeriğimizden yararlanabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary/5">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Fonksiyonel Antrenman Yolculuğunuza Başlayın</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Günlük hayattaki hareket kabiliyetinizi geliştirerek daha güçlü, daha sağlıklı ve daha yetenekli bir versiyonunuza dönüşün. 14 gün ücretsiz deneme ile hiçbir risk almadan başlayabilirsiniz.
          </p>
          <Button size="lg" asChild>
            <Link href="/register">Ücretsiz Denemeyi Başlat</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 