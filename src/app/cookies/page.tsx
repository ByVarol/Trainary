import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function CookiesPage() {
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
          <h1 className="text-4xl font-bold tracking-tight">Çerez Politikası</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Son güncelleme: 10 Haziran 2023
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto prose">
            <h2>Çerezler Hakkında</h2>
            <p>
              Çerezler, web sitemizi ziyaret ettiğinizde cihazınıza yerleştirilen küçük metin dosyalarıdır. Bu dosyalar, web sitemizi nasıl kullandığınıza dair bilgiler toplar ve sonraki ziyaretlerinizde sizi tanımamıza yardımcı olur.
            </p>
            
            <h2>Kullandığımız Çerez Türleri</h2>
            <p>
              Web sitemizde aşağıdaki çerez türlerini kullanmaktayız:
            </p>
            
            <h3>1. Zorunlu Çerezler</h3>
            <p>
              Bu çerezler, web sitemizin temel işlevleri için gereklidir ve kapatılamazlar. Genellikle sadece sizin yaptığınız hizmet talepleri (form doldurma, gizlilik tercihlerinizin ayarlanması vb.) ile bağlantılı olarak ayarlanırlar.
            </p>
            
            <h3>2. Performans ve Analitik Çerezleri</h3>
            <p>
              Bu çerezler, web sitemizin performansını ölçmek ve iyileştirmek için kullanılır. Sitemizin en çok ziyaret edilen sayfaları, yaşanan hata mesajları gibi bilgileri toplarlar. Bu çerezler tarafından toplanan tüm bilgiler anonimdir.
            </p>
            
            <h3>3. İşlevsellik Çerezleri</h3>
            <p>
              Bu çerezler, web sitemizi kullanımınızı kişiselleştirmemize olanak tanır. Örneğin, dil tercihlerinizi veya oturum açma bilgilerinizi hatırlayabilirler.
            </p>
            
            <h3>4. Hedefleme ve Reklam Çerezleri</h3>
            <p>
              Bu çerezler, ilgi alanlarınıza uygun reklamlar sunmak için kullanılır. Ayrıca, bir reklamın görüntülenme sayısını sınırlamaya ve reklam kampanyalarının etkinliğini ölçmeye yardımcı olurlar.
            </p>
            
            <h2>Üçüncü Taraf Çerezleri</h2>
            <p>
              Bazı çerezler, web sitemiz üzerinden üçüncü taraf hizmet sağlayıcılarımız tarafından yerleştirilir. Bu üçüncü taraflar şunları içerebilir:
            </p>
            <ul>
              <li>Google Analytics - Sitemizdeki trafiği analiz etmek için</li>
              <li>Facebook Pixel - Reklam kampanyalarımızın etkinliğini ölçmek için</li>
              <li>Ödeme işlemcileri - Ödeme işlemlerinizi güvence altına almak için</li>
            </ul>
            
            <h2>Çerezleri Nasıl Kontrol Edebilirsiniz</h2>
            <p>
              Çoğu web tarayıcısı, çerezlerin kullanımını kontrol etmenize izin verir. Tarayıcı ayarlarınızdan çerezleri engelleyebilir veya hangi çerezlerin cihazınıza yerleştirileceği konusunda uyarı alabilirsiniz. Ancak, tüm çerezleri bloke ederseniz, web sitemizin bazı özelliklerini kullanamayabilirsiniz.
            </p>
            <p>
              Çerezleri nasıl yönetebileceğiniz hakkında daha fazla bilgi için tarayıcınızın "Yardım" bölümünü ziyaret edebilirsiniz. Aşağıda en popüler tarayıcılar için çerez ayarlarını değiştirme bağlantıları bulabilirsiniz:
            </p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/tr/kb/cerezleri-silme-web-sitelerinin-bilgilerini-kaldirma" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.microsoft.com/tr-tr/windows/microsoft-edge-g%C3%B6z-atma-verilerini-silme-8c213e32-9fed-fe69-2b0d-7f27f8721431" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
              <li><a href="https://support.apple.com/tr-tr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
            </ul>
            
            <h2>Değişiklikler</h2>
            <p>
              Çerez politikamızı zaman zaman güncelleyebiliriz. Değişiklikler yapıldığında, bu sayfada güncellenmiş bir politika yayınlayacağız. Düzenli olarak bu sayfayı ziyaret ederek, çerez kullanımımızdaki değişikliklerden haberdar olabilirsiniz.
            </p>
            
            <h2>İletişim</h2>
            <p>
              Çerez politikamız hakkında sorularınız veya endişeleriniz varsa, <Link href="/contact" className="text-primary hover:underline">İletişim</Link> sayfamız aracılığıyla bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 