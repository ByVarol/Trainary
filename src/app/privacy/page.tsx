import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold tracking-tight">Gizlilik Politikası</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Son güncelleme: 10 Haziran 2023
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto prose">
            <h2>1. Toplanan Bilgiler</h2>
            <p>
              Trainary olarak, hizmetlerimizi sağlamak ve geliştirmek için aşağıdaki kişisel bilgileri toplayabiliriz:
            </p>
            <ul>
              <li>İsim, e-posta adresi, telefon numarası gibi kayıt bilgileri</li>
              <li>Ödeme bilgileri (kredi kartı bilgileri doğrudan tarafımızca saklanmaz)</li>
              <li>Yaş, cinsiyet, boy, kilo gibi fitness amaçlı demografik bilgiler</li>
              <li>Egzersiz alışkanlıkları, aktivite düzeyi, fitness hedefleri</li>
              <li>Uygulama kullanım verileri ve etkileşimler</li>
              <li>Cihaz bilgileri ve IP adresi</li>
            </ul>
            
            <h2>2. Bilgilerin Kullanımı</h2>
            <p>
              Topladığımız bilgileri aşağıdaki amaçlar için kullanırız:
            </p>
            <ul>
              <li>Hesabınızın oluşturulması ve yönetilmesi</li>
              <li>Kişiselleştirilmiş fitness ve beslenme programlarının sunulması</li>
              <li>Ürün ve hizmetlerimizin iyileştirilmesi</li>
              <li>Müşteri desteği sağlanması</li>
              <li>Güvenlik ve dolandırıcılık önleme</li>
              <li>Ürün güncellemeleri ve özel tekliflerin bildirilmesi (tercihlerinize bağlı olarak)</li>
            </ul>
            
            <h2>3. Bilgi Paylaşımı</h2>
            <p>
              Kişisel bilgilerinizi, açık izniniz olmadan üçüncü taraflarla paylaşmayız. Ancak aşağıdaki durumlarda bilgileriniz paylaşılabilir:
            </p>
            <ul>
              <li>Hizmet sağlayıcılarımız (ödeme işlemcileri, bulut depolama sağlayıcıları gibi)</li>
              <li>Yasal gereklilikler doğrultusunda (mahkeme kararı veya yasal süreç)</li>
              <li>Şirket birleşmesi, satın alma veya varlık satışı durumunda</li>
            </ul>
            
            <h2>4. Veri Güvenliği</h2>
            <p>
              Kişisel bilgilerinizi korumak için endüstri standardı güvenlik önlemleri alıyoruz. Bu önlemler şifreleme, güvenli sunucu altyapısı ve düzenli güvenlik değerlendirmelerini içerir. Ancak, internet üzerinden hiçbir veri iletiminin %100 güvenli olmadığını unutmayın.
            </p>
            
            <h2>5. Çerezler ve İzleme Teknolojileri</h2>
            <p>
              Web sitemizde ve uygulamalarımızda çerezler ve benzer izleme teknolojileri kullanmaktayız. Bu teknolojiler, kullanıcı deneyimini geliştirmek, site trafiğini analiz etmek ve hizmetlerimizi iyileştirmek için kullanılır. Çerezler hakkında daha fazla bilgi için <Link href="/cookies" className="text-primary hover:underline">Çerez Politikamıza</Link> göz atabilirsiniz.
            </p>
            
            <h2>6. Kullanıcı Hakları</h2>
            <p>
              Kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:
            </p>
            <ul>
              <li>Verilerinize erişim ve kopyasını alma</li>
              <li>Yanlış veya eksik bilgilerin düzeltilmesini isteme</li>
              <li>Belirli koşullar altında verilerinizin silinmesini talep etme</li>
              <li>Veri işlememize itiraz etme veya kısıtlama isteme</li>
              <li>Verilerinizin taşınabilirliğini talep etme</li>
            </ul>
            <p>
              Bu haklarınızı kullanmak için <Link href="/contact" className="text-primary hover:underline">İletişim</Link> sayfamız aracılığıyla bizimle iletişime geçebilirsiniz.
            </p>
            
            <h2>7. Çocukların Gizliliği</h2>
            <p>
              Hizmetlerimiz 18 yaş ve üzeri kişiler için tasarlanmıştır. 18 yaşından küçük bireylerin kişisel bilgilerini bilerek toplamayız. Eğer 18 yaşın altında bir kişinin bilgilerini topladığımızı fark edersek, bu bilgileri sistemlerimizden silmek için gerekli adımları atarız.
            </p>
            
            <h2>8. Değişiklikler</h2>
            <p>
              Gizlilik politikamızı zaman zaman güncelleyebiliriz. Politikada yapılan önemli değişiklikleri size bildireceğiz. Güncel politikamıza her zaman bu sayfadan ulaşabilirsiniz.
            </p>
            
            <h2>9. İletişim</h2>
            <p>
              Gizlilik politikamız hakkında sorularınız veya endişeleriniz varsa, <Link href="/contact" className="text-primary hover:underline">İletişim</Link> sayfamız aracılığıyla bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 