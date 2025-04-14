import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, Flame, Users, Calendar, Clock, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function WeightLossPage() {
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
          <h1 className="text-4xl font-bold tracking-tight">Kilo Kaybı Programı</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Sağlıklı ve sürdürülebilir kilo yönetimi için bilimsel temelli yaklaşım
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1487956382158-bb926046304a?w=800&auto=format&fit=crop&q=80"
                alt="Kilo kaybı programı antrenmanı"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2">
                  <Flame className="h-4 w-4" />
                  <span className="text-sm font-medium">Tüm Seviyeler</span>
                </div>
                <div className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-medium">2500+ Aktif Katılımcı</span>
                </div>
                <div className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">12 Haftalık Program</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Program Hakkında</h2>
              <p className="text-muted-foreground mb-6">
                Kilo Kaybı Programımız, uzun vadeli başarı için tasarlanmış kapsamlı bir yaklaşım sunar. Sadece kilo vermek değil, sağlıklı alışkanlıklar geliştirerek yeni bir yaşam tarzı oluşturmanıza yardımcı olur. Beslenme, egzersiz ve zihinsel dayanıklılık stratejilerini bir araya getirerek dengeli bir program sunar.
              </p>
              
              <h3 className="text-xl font-bold mb-2">Bu Programın Faydaları</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Sağlıklı ve sürdürülebilir kilo kaybı</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Metabolizma hızının artması</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Enerji seviyesinde belirgin artış</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Kalp sağlığında iyileşme</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Sağlıklı beslenme alışkanlıkları kazanma</span>
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
                    <span>30-45 dakika</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Beslenme Planı</span>
                    <span>Kişiselleştirilmiş</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">İlerleme Takibi</span>
                    <span>Haftalık Ölçümler ve Değerlendirme</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Destek Sistemi</span>
                    <span>Grup Koçluğu ve Kişisel Danışmanlık</span>
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
              <h3 className="text-xl font-bold mb-3">Temel Aşama (Hafta 1-4)</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Mevcut durumunuzun değerlendirilmesi</li>
                <li>• Beslenme düzeninizin analizi</li>
                <li>• Temel egzersiz rutinlerinin öğrenilmesi</li>
                <li>• Su tüketimi ve uyku düzeninin yeniden yapılandırılması</li>
              </ul>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>30 dakika/seans</span>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">İlerleme Aşaması (Hafta 5-8)</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Kardiyo ve kuvvet antrenmanlarının yoğunlaştırılması</li>
                <li>• Beslenme planında ince ayarlar</li>
                <li>• Metabolizmayı hızlandırıcı stratejiler</li>
                <li>• Stres yönetimi teknikleri</li>
              </ul>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>35-40 dakika/seans</span>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Sürdürülebilirlik Aşaması (Hafta 9-12)</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Kişiselleştirilmiş antrenman programının oluşturulması</li>
                <li>• Uzun vadeli beslenme stratejilerinin belirlenmesi</li>
                <li>• Kilo sabitlemesi için metabolik uyum</li>
                <li>• Program sonrası sürdürülebilirlik planı</li>
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
                src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&auto=format&fit=crop&q=80"
                alt="Sağlıklı beslenme tabağı"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Neden Bizim Kilo Kaybı Programımız?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Birçok kilo verme programı sadece kalori kısıtlamasına ve yoğun egzersize odaklanırken, bizim yaklaşımımız çok daha kapsamlıdır. Biz kilo kaybını bir yaşam tarzı değişikliği olarak ele alıyoruz.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Programımızın temelinde üç ana unsur bulunur: Akıllı beslenme, etkili egzersiz ve zihinsel dayanıklılık. Bu üçlü yaklaşım, klasik "diyet" yaklaşımlarında olmayan uzun vadeli sürdürülebilirliği sağlar.
              </p>
              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-bold">Programın Özellikleri</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Uzman Ekibi:</strong> Diyetisyenler, egzersiz fizyologları ve davranış uzmanlarından oluşan ekip</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Kişiselleştirilmiş Yaklaşım:</strong> Metabolizmanıza ve hedeflerinize göre özelleştirilmiş planlar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Topluluk Desteği:</strong> Aynı hedefler için çalışan kişilerle motivasyon ve deneyim paylaşımı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Teknoloji Desteği:</strong> İlerlemenizi izleyen ve sizi motive eden mobil uygulama</span>
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
          <h2 className="text-3xl font-bold text-center mb-12">Program Bileşenleri</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="mb-4 bg-primary/10 p-3 w-12 h-12 flex items-center justify-center rounded-full">
                <Scale className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Akıllı Beslenme</h3>
              <p className="text-muted-foreground">
                Katı kalorili diyetler yerine, yiyecek seçimlerini kalitesine, besin değerine ve metabolik etkisine göre düzenleyen bir beslenme planı. Kısıtlama yerine dengeli beslenme ve bilinçli yeme teknikleri öğretilir.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="mb-4 bg-primary/10 p-3 w-12 h-12 flex items-center justify-center rounded-full">
                <Flame className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Etkili Egzersiz</h3>
              <p className="text-muted-foreground">
                HIIT (Yüksek Yoğunluklu Interval Antrenman), kuvvet antrenmanı ve esneklik çalışmalarını birleştiren, maksimum kalori yakımı ve kas gelişimi sağlayan dengeli bir antrenman programı. Seviyeniz ne olursa olsun, size uyarlanabilir.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="mb-4 bg-primary/10 p-3 w-12 h-12 flex items-center justify-center rounded-full">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Zihinsel Dayanıklılık</h3>
              <p className="text-muted-foreground">
                Yeme alışkanlıklarını değiştirmek ve yeni rutinler oluşturmak için davranışsal stratejiler ve zihinsel egzersizler. Stres yönetimi, uyku optimizasyonu ve motivasyon teknikleri yolculuğunuzun önemli parçalarıdır.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Başarı Hikayeleri</h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-muted/30 p-6 rounded-lg">
              <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=800&auto=format&fit=crop&q=80"
                  alt="Başarı hikayesi - Ayşe"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-2">Ayşe, 28 - İstanbul</h3>
              <p className="text-muted-foreground mb-3">
                "12 haftada 14 kilo verdim ve en önemlisi kendime olan güvenimi geri kazandım. Program sonrası 6 ay geçti ve hala formumu koruyorum."
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-primary">-14 kg</span>
                <span>12 hafta</span>
              </div>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-lg">
              <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1518644961665-ed172691aaa1?w=800&auto=format&fit=crop&q=80"
                  alt="Başarı hikayesi - Mehmet"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-2">Mehmet, 42 - Ankara</h3>
              <p className="text-muted-foreground mb-3">
                "Yıllardır denediğim birçok diyetin aksine, bu program bana kalıcı çözüm sundu. Sadece kilo vermedim, sağlığım da büyük ölçüde iyileşti."
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-primary">-18 kg</span>
                <span>12 hafta</span>
              </div>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-lg">
              <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1626333235088-8f8c23196e81?w=800&auto=format&fit=crop&q=80"
                  alt="Başarı hikayesi - Zeynep"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-2">Zeynep, 35 - İzmir</h3>
              <p className="text-muted-foreground mb-3">
                "İki çocuktan sonra eski formuma kavuşamayacağımı düşünüyordum. Bu program bana sadece kilo vermedi, yeni bir yaşam tarzı kazandırdı."
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-primary">-12 kg</span>
                <span>12 hafta</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Sıkça Sorulan Sorular</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Ne kadar hızlı kilo vereceğim?</h3>
              <p className="text-muted-foreground">
                Programımız sağlıklı ve sürdürülebilir kilo kaybını hedefler, bu genellikle haftada 0.5-1 kg arası bir oran anlamına gelir. Başlangıçta daha hızlı bir düşüş görebilirsiniz, ancak uzun vadeli hedefimiz sabit bir hızda sağlıklı kilo kaybıdır. Kilo kaybı kişisel faktörlere bağlı olarak değişiklik gösterir.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Beslenme planı benim için özelleştirilecek mi?</h3>
              <p className="text-muted-foreground">
                Evet, programımızın en güçlü yönlerinden biri kişiselleştirmedir. Program başlangıcında detaylı bir değerlendirme yaparak metabolizmanızı, besin tercihlerinizi ve yaşam tarzınızı dikkate alan bir beslenme planı oluşturuyoruz. Bu plan, program ilerledikçe ihtiyaçlarınıza göre ayarlanır.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Spor salonuna gitmem gerekiyor mu?</h3>
              <p className="text-muted-foreground">
                Hayır, egzersiz rutinlerimiz ev ortamında minimal ekipmanla veya tamamen ekipmansız yapılabilecek şekilde tasarlanmıştır. Tabii ki spor salonu üyeliğiniz varsa, size özel daha gelişmiş antrenman seçenekleri de sunabiliriz, ancak bu kesinlikle gerekli değildir.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Program sonrası verdiğim kiloları geri alır mıyım?</h3>
              <p className="text-muted-foreground">
                Programımızın son aşaması özellikle sürdürülebilirlik üzerine odaklanır. Size sadece kilo verdirmeyi değil, yeni alışkanlıklarınızı yaşam tarzınıza entegre etmeyi öğretiriz. Program bitiminde, uzun vadeli başarı için bir "mezuniyet planı" da sunuyoruz ve takip sistemimizle 6 ay boyunca yanınızda olmaya devam ediyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary/5">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Kilo Verme Yolculuğunuza Bugün Başlayın</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sadece kilo vermek değil, tamamen yeni bir yaşam tarzı kazanmak için ilk adımı atın. 14 gün ücretsiz deneme ile sonuçları kendiniz görün.
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