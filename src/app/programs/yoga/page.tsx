import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, Heart, Users, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function YogaPage() {
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
          <h1 className="text-4xl font-bold tracking-tight">Yoga Programı</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Fiziksel ve zihinsel dengeyi buluşturan kapsamlı yoga programı
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&auto=format&fit=crop&q=80"
                alt="Yoga yapan kadın"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2">
                  <Heart className="h-4 w-4" />
                  <span className="text-sm font-medium">Tüm Seviyeler</span>
                </div>
                <div className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-medium">1800+ Aktif Katılımcı</span>
                </div>
                <div className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">6 Haftalık Program</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Program Hakkında</h2>
              <p className="text-muted-foreground mb-6">
                Yoga Programımız, modern yaşamın stresinden uzaklaşıp, fiziksel ve zihinsel dengeyi bulmanızı sağlamak için tasarlanmıştır. Farklı yoga stillerini birleştiren bu programda, vücut esnekliğinizi artırırken, zihninizi sakinleştirecek ve iç huzura ulaşmanıza yardımcı olacak teknikleri öğreneceksiniz.
              </p>
              
              <h3 className="text-xl font-bold mb-2">Bu Programın Faydaları</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Esneklik ve vücut farkındalığının artması</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Stres ve kaygının azalması</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Duruş ve denge gelişimi</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Nefes kontrolü ve meditasyon becerileri</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Günlük enerji seviyesinin artması</span>
                </li>
              </ul>
              
              <div className="bg-muted p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-2">Program İçeriği</h3>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Haftalık Uygulama</span>
                    <span>3-5 gün</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Seans Süresi</span>
                    <span>20-60 dakika</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Ekipman İhtiyacı</span>
                    <span>Yoga Matı, Rahat Kıyafetler</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Video Dersleri</span>
                    <span>40+ HD Video</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Yoga Stilleri</span>
                    <span>Hatha, Vinyasa, Yin, Meditasyon</span>
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
          <h2 className="text-3xl font-bold text-center mb-12">Program İçeriği</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Temel Yoga (Hafta 1-2)</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Temel yoga pozları ve duruşlar</li>
                <li>• Doğru nefes teknikleri</li>
                <li>• Vücut hizalaması ve farkındalık</li>
                <li>• Günlük yoga rutini oluşturma</li>
              </ul>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>20-30 dakika/seans</span>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Akış ve Güç (Hafta 3-4)</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Vinyasa akışları ve sekanslar</li>
                <li>• Kuvvet ve denge geliştirme</li>
                <li>• Güneş selamlamaları ve dinamik hareketler</li>
                <li>• İleri pozlar için hazırlık</li>
              </ul>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>30-45 dakika/seans</span>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Derinleşme (Hafta 5-6)</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Derin germe ve Yin yoga pratiği</li>
                <li>• Meditasyon ve mindfulness teknikleri</li>
                <li>• Restoratif yoga ve rahatlama</li>
                <li>• Kişisel pratik geliştirme</li>
              </ul>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>45-60 dakika/seans</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Neden Yoga?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Yoga sadece bir egzersiz değil, aynı zamanda bedenle zihni birleştiren bir yaşam felsefesidir. Düzenli yoga pratiği ile:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Zihinsel netlik ve odaklanma artışı sağlarsınız</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Kas tonunuzu ve esnekliğinizi geliştirebilirsiniz</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Stres ve kaygı seviyelerinizi düşürebilirsiniz</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Daha iyi bir uyku düzeni oluşturabilirsiniz</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Duruş bozukluklarını düzeltebilirsiniz</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Bağışıklık sisteminizi güçlendirebilirsiniz</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground">
                Programımız, yoga pratiğinin tüm bu faydalarından en üst düzeyde yararlanmanız için özel olarak tasarlanmıştır.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80"
                alt="Meditasyon yapan kadın"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Sıkça Sorulan Sorular</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Yoga yapmak için esnek olmam gerekiyor mu?</h3>
              <p className="text-muted-foreground">
                Hayır, yoga pratiğine başlamak için esnek olmanız gerekmiyor. Tam tersine, yoga esnekliğinizi artırmak için mükemmel bir yoldur. Programımız tüm seviyeler için uygundur ve her pozisyon için modifikasyonlar sunulur, böylece kendi seviyenizde başlayıp zamanla gelişebilirsiniz.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Bu program yeni başlayanlar için uygun mu?</h3>
              <p className="text-muted-foreground">
                Kesinlikle. Programımız, hiç yoga yapmamış kişilerden düzenli yoga pratiği olanlara kadar herkes için tasarlanmıştır. İlk haftalarda temel pozlar ve teknikler üzerinde durarak, kademeli olarak daha ileri seviyelere geçmenizi sağlarız.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Hangi ekipmanlara ihtiyacım olacak?</h3>
              <p className="text-muted-foreground">
                Başlangıç için sadece rahat kıyafetler ve bir yoga matına ihtiyacınız olacak. İlerledikçe yoga blokları, kayış ve yoga battaniyesi gibi destekleyici ekipmanlar pratiğinizi geliştirmenize yardımcı olabilir, ancak bunlar zorunlu değildir.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Sağlık sorunlarım var, yine de yoga yapabilir miyim?</h3>
              <p className="text-muted-foreground">
                Yoga genel olarak güvenlidir, ancak belirli sağlık sorunlarınız varsa (örn. sırt/boyun problemleri, yüksek tansiyon, hamilelik), programa başlamadan önce doktorunuza danışmanızı öneririz. Eğitmenlerimiz, özel durumlar için modifikasyonlar ve alternatifler sunacaktır.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary/5">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Yoga Yolculuğunuza Bugün Başlayın</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Deneyimli yoga eğitmenlerimiz eşliğinde, fiziksel ve zihinsel sağlığınızı geliştirecek bu transformatif yolculuğa çıkın. 14 gün ücretsiz deneme ile hiçbir risk almadan başlayabilirsiniz.
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