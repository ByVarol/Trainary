import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, Dumbbell, Users, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function StrengthPage() {
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
          <h1 className="text-4xl font-bold tracking-tight">Güç Antrenmanı Programı</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Maksimum kas kuvveti ve fiziksel güç için özel olarak tasarlanmış program
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop&q=80"
                alt="Güç antrenmanı yapan kişi"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2">
                  <Dumbbell className="h-4 w-4" />
                  <span className="text-sm font-medium">Orta-İleri Seviye</span>
                </div>
                <div className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-medium">1500+ Aktif Katılımcı</span>
                </div>
                <div className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">12 Haftalık Program</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Program Hakkında</h2>
              <p className="text-muted-foreground mb-6">
                Güç Antrenmanı Programımız, kas kütlenizi artırmak, fiziksel gücünüzü geliştirmek ve vücut kompozisyonunuzu iyileştirmek isteyen katılımcılar için bilimsel olarak tasarlanmıştır. Bu program, profesyonel sporcular ve vücut geliştirmecilerin kullandığı teknikleri günlük hayatınıza adapte eder.
              </p>
              
              <h3 className="text-xl font-bold mb-2">Bu Programın Faydaları</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Temel kas gruplarında güç ve hacim artışı</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Daha güçlü kemikler ve eklemler</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Metabolizma hızlanması ve yağ yakımı</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Günlük aktivitelerde daha fazla dayanıklılık</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Doğru duruş formu ve vücut farkındalığı</span>
                </li>
              </ul>
              
              <div className="bg-muted p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-2">Program İçeriği</h3>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Haftalık Antrenman Sayısı</span>
                    <span>4-5 gün</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Antrenman Süresi</span>
                    <span>45-60 dakika</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Ekipman İhtiyacı</span>
                    <span>Dumbbell, Barbell, Makine</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Antrenman Videoları</span>
                    <span>60+ HD Video</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Beslenme Planı</span>
                    <span>Dahil (Özelleştirilebilir)</span>
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
          <h2 className="text-3xl font-bold text-center mb-12">Antrenman Planı</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Hafta 1-4: Adaptasyon</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Temel egzersizlerin öğrenilmesi</li>
                <li>• Doğru form ve teknik geliştirme</li>
                <li>• Vücut uyumunun sağlanması</li>
                <li>• 3 set x 10-12 tekrar</li>
              </ul>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>40 dakika/seans</span>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Hafta 5-8: Güç Artışı</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Ağırlık artışı ve progresif overload</li>
                <li>• Birleşik hareketlere odaklanma</li>
                <li>• Kas gruplarına özel çalışmalar</li>
                <li>• 4 set x 8-10 tekrar</li>
              </ul>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>50 dakika/seans</span>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Hafta 9-12: Maksimum Kuvvet</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Yüksek yoğunluklu antrenmanlar</li>
                <li>• Drop setler ve süper setler</li>
                <li>• Gelişmiş antrenman teknikleri</li>
                <li>• 4-5 set x 6-8 tekrar</li>
              </ul>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>60 dakika/seans</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Sıkça Sorulan Sorular</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Bu program benim için uygun mu?</h3>
              <p className="text-muted-foreground">
                Bu program, temel fitness bilgisine sahip ve kas kütlesi ile fiziksel gücünü artırmak isteyen herkes için uygundur. Daha önce hiç spor yapmadıysanız, başlangıç programlarımızdan birini tercih etmenizi öneririz.
              </p>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Ne kadar sürede sonuç görebilirim?</h3>
              <p className="text-muted-foreground">
                Düzenli çalıştığınız ve beslenme planını takip ettiğiniz takdirde, ilk 3-4 haftada kas tonunda artış ve 8-12 hafta içerisinde belirgin kas kütlesi artışı görmeye başlayabilirsiniz. Genetik faktörler, yaş ve başlangıç fiziksel durumunuz sonuçları etkileyebilir.
              </p>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Beslenme planı programa dahil mi?</h3>
              <p className="text-muted-foreground">
                Evet, program kas geliştirme ve güç artışını destekleyen kapsamlı bir beslenme planı içerir. İhtiyaçlarınıza göre protein, karbonhidrat ve yağ oranları hesaplanır ve hedeflerinize uygun kalori miktarı belirlenir.
              </p>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Hangi ekipmanlara ihtiyacım olacak?</h3>
              <p className="text-muted-foreground">
                Program temel olarak dumbbelllar, barbelllar ve standart gym ekipmanlarıyla yapılmak üzere tasarlanmıştır. İdeal olarak bir spor salonuna üyelik önerilir, ancak evde yeteri kadar ekipmanınız varsa bazı antrenmanlar ev ortamına adapte edilebilir.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary/5">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Programa Şimdi Başlayın</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Siz de Güç Antrenmanı Programımıza katılın ve fiziksel gücünüzü bir üst seviyeye taşıyın. 14 gün ücretsiz deneme süresiyle hiçbir risk almadan başlayabilirsiniz.
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