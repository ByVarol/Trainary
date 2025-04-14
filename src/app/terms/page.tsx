import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold tracking-tight">Kullanım Koşulları</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Son güncelleme: 10 Haziran 2023
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto prose">
            <h2>1. Hizmet Kullanımı</h2>
            <p>
              Trainary platformunu kullanarak, bu şartlar ve koşulları kabul etmiş olursunuz. Platformumuzu yasal olmayan veya yetkisiz amaçlar için kullanmayacağınızı taahhüt edersiniz. Trainary hizmetlerini kullanımınız, yürürlükteki tüm yasalara ve düzenlemelere tabidir.
            </p>
            
            <h2>2. Üyelik ve Ödeme</h2>
            <p>
              Trainary'ye kaydolarak, doğru, güncel ve eksiksiz bilgiler sağlayacağınızı kabul edersiniz. 18 yaşın altındaki kişilerin bir ebeveyn veya yasal vasi gözetiminde kayıt olması gerekmektedir. Üyelik ücretleri ve ödeme koşulları, seçtiğiniz plana bağlı olarak değişiklik gösterir ve abonelik satın alırken size bildirilir.
            </p>
            
            <h2>3. Ücretsiz Deneme</h2>
            <p>
              Ücretsiz deneme süresinin sonunda, aksi belirtilmedikçe otomatik olarak ücretli üyeliğe geçiş yapılmaz. Deneme süresi bitiminde hizmetlerimizi kullanmaya devam etmek için bir abonelik planı seçmeniz gerekecektir.
            </p>
            
            <h2>4. İptal ve İade Politikası</h2>
            <p>
              Aboneliğinizi istediğiniz zaman hesap ayarlarınızdan iptal edebilirsiniz. İptal işlemi, mevcut fatura döneminin sonunda geçerli olur. Ödeme yapıldıktan sonraki 14 gün içinde iade talep edilebilir, ancak hizmetin kullanılmış olması durumunda iade tutarı orantılı olarak azaltılabilir.
            </p>
            
            <h2>5. Fikri Mülkiyet</h2>
            <p>
              Trainary platformunda bulunan tüm içerikler, markalar, logolar, uygulamalar, tasarımlar ve diğer materyaller Trainary'nin veya lisans verenlerin fikri mülkiyetidir. Bu içeriklerin izinsiz kullanımı, kopyalanması veya dağıtılması yasaktır.
            </p>
            
            <h2>6. Kullanıcı İçeriği</h2>
            <p>
              Platformumuzda paylaştığınız içeriklerden (yorumlar, fotoğraflar, videolar vb.) siz sorumlusunuz. Paylaşılan içeriklerin yasal, uygun ve başkalarının haklarını ihlal etmeyecek nitelikte olması gerekir. Trainary, uygunsuz içeriği kaldırma ve gerektiğinde kullanıcı hesaplarını askıya alma hakkını saklı tutar.
            </p>
            
            <h2>7. Sorumluluk Reddi</h2>
            <p>
              Trainary, fitness ve beslenme konusunda bilgi ve rehberlik sağlar, ancak profesyonel tıbbi tavsiye sunmaz. Programlarımızı uygulamadan önce bir doktora danışmanızı öneririz. Platformumuz ve içeriğimiz "olduğu gibi" sunulmaktadır ve herhangi bir garanti içermez.
            </p>
            
            <h2>8. Değişiklikler</h2>
            <p>
              Trainary, bu kullanım koşullarını herhangi bir zamanda değiştirme hakkını saklı tutar. Önemli değişiklikler durumunda kullanıcılarımıza bildirim yapılacaktır. Değişikliklerden sonra hizmetlerimizi kullanmaya devam etmeniz, güncellenmiş koşulları kabul ettiğiniz anlamına gelir.
            </p>
            
            <h2>9. İletişim</h2>
            <p>
              Kullanım koşulları hakkında sorularınız veya endişeleriniz varsa, <Link href="/contact" className="text-primary hover:underline">İletişim</Link> sayfamız aracılığıyla bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 