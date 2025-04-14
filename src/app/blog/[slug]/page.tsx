import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Share2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const blogPosts = [
  {
    id: "protein-tuketimi-rehberi",
    title: "Protein Tüketimi Rehberi: Ne Kadar, Ne Zaman, Hangi Kaynaklar?",
    excerpt: "Kas gelişimi ve genel sağlık için optimal protein tüketiminin detayları ve en kaliteli protein kaynaklarının incelemesi.",
    content: `
    <p>Protein, kas gelişimi, toparlanma ve genel sağlık için en önemli makrobesinlerden biridir. Bu kapsamlı rehberde, protein tüketiminin tüm yönlerini inceleyeceğiz: ihtiyacınız olan miktar, en iyi tüketim zamanları ve en kaliteli kaynaklar.</p>

    <h2>Günlük Protein İhtiyacı: Bilim Ne Diyor?</h2>
    <p>Protein ihtiyacı, aktivite seviyenize ve hedeflerinize göre değişir:</p>
    <ul>
      <li>Sedanter bireyler: Vücut ağırlığının kg başına 0.8-1.0 gram</li>
      <li>Düzenli egzersiz yapan bireyler: Vücut ağırlığının kg başına 1.2-1.7 gram</li>
      <li>Kas kütlesi kazanmaya çalışan sporcular: Vücut ağırlığının kg başına 1.6-2.2 gram</li>
      <li>Kilo vermek isteyen aktif bireyler: Vücut ağırlığının kg başına 1.8-2.7 gram</li>
    </ul>
    <p>Bu miktarlar, Uluslararası Spor Beslenmesi Derneği'nin en güncel önerileridir ve birçok meta-analizle desteklenmektedir.</p>

    <h2>Protein Zamanlama Stratejileri</h2>
    <p>Protein alımınızın zamanlaması, kaslarınızın protein sentezi sürecini optimize edebilir:</p>
    <ul>
      <li><strong>Antrenman öncesi (1-2 saat):</strong> 20-30g protein, antrenman sırasında kas yıkımını azaltabilir</li>
      <li><strong>Antrenman sonrası (30 dakika içinde):</strong> 20-40g protein, kas protein sentezini maksimize eder</li>
      <li><strong>Yatmadan önce:</strong> 30-40g yavaş sindirilen protein (kazein gibi), gece boyunca kas onarımını destekler</li>
      <li><strong>Gün boyunca:</strong> Toplam proteini 3-5 öğüne bölmek, protein sentezini sürekli stimüle eder</li>
    </ul>

    <h2>En Kaliteli Protein Kaynakları</h2>
    <p>Tüm protein kaynakları eşit değildir. Protein kalitesini belirleyen ana faktörler:</p>
    <ul>
      <li>Esansiyel amino asit profili (özellikle lösin içeriği)</li>
      <li>Biyoyararlanım (sindirilebilirlik ve emilim)</li>
      <li>Toplam besin değeri</li>
    </ul>

    <h2>Sonuç: Kişiselleştirilmiş Protein Stratejisi</h2>
    <p>Optimal protein tüketimi, hedeflerinize, aktivite seviyenize ve kişisel tercihlerinize göre şekillenmelidir. Genel önerileri bir başlangıç noktası olarak kullanın ve vücudunuzun tepkisine göre ayarlamalar yapın.</p>
    `,
    author: "Mehmet Kaya",
    authorTitle: "Spor Beslenmesi Uzmanı",
    authorImageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
    date: "5 Kasım 2023",
    category: "Beslenme",
    imageUrl: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&auto=format&fit=crop&q=80",
    readTime: "6 dk",
  },
  {
    id: "kilo-vermede-kardiyo-ve-agirlik-denklemi",
    title: "Kilo Vermede Kardiyo ve Ağırlık Çalışmaları: Doğru Denklem",
    excerpt: "Yağ yakımını optimize etmek için kardiyo ve ağırlık antrenmanlarını nasıl dengeleyeceğinize dair bilimsel yaklaşım.",
    content: `
    <p>Kilo vermek için hem kardiyo hem de ağırlık antrenmanları önemlidir. Bu makalede, en iyi sonuçları almak için bu iki antrenman türünü nasıl dengeleyeceğinizi öğreneceksiniz.</p>
    
    <h2>Kardiyonun Rolü</h2>
    <p>Kardiyo antrenmanları kalori yakımını artırır ve kardiyovasküler sağlığı iyileştirir. Düşük yoğunluklu uzun süreli kardiyo (LISS) ve yüksek yoğunluklu interval antrenman (HIIT) en etkili iki yaklaşımdır.</p>
    
    <h2>Ağırlık Çalışmalarının Önemi</h2>
    <p>Ağırlık antrenmanları kas kütlesini korur ve bazal metabolizma hızını artırır. Bu, dinlenme halindeyken bile daha fazla kalori yakmanızı sağlar.</p>
    
    <h2>Optimal Denge</h2>
    <p>Bir başlangıç önerisi olarak, haftada 3-4 ağırlık antrenmanı ve 2-3
    kardiyo seansı planlanabilir. Ağırlık antrenmanı sonrası 20-30 dakikalık HIIT veya ayrı günlerde 40-60 dakikalık LISS kardiyo yapılabilir.</p>
    `,
    author: "Elif Şahin",
    authorTitle: "Kilo Yönetimi ve Fitness Uzmanı",
    authorImageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80",
    date: "2 Ekim 2023",
    category: "Kilo Yönetimi",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
    readTime: "9 dk",
  },
  {
    id: "inflamasyon-ve-beslenme",
    title: "İnflamasyonla Mücadele: Anti-İnflamatuar Beslenme Stratejileri",
    excerpt: "Kronik inflamasyonu azaltmak, toparlanmayı hızlandırmak ve genel sağlığı desteklemek için beslenme yaklaşımları.",
    content: `
    <p>Kronik inflamasyon, pek çok sağlık sorununa yol açabilir ve fitness hedeflerinize ulaşmanızı engelleyebilir. Bu makalede, inflamasyonla mücadele etmek için beslenme stratejilerini inceleyeceğiz.</p>
    
    <h2>İnflamasyonu Artıran Besinler</h2>
    <ul>
      <li>Rafine şekerler ve karbonhidratlar</li>
      <li>İşlenmiş gıdalar ve trans yağlar</li>
      <li>Aşırı omega-6 yağ asitleri</li>
      <li>Aşırı alkol tüketimi</li>
    </ul>
    
    <h2>Anti-İnflamatuar Özellikli Besinler</h2>
    <ul>
      <li>Yağlı balıklar (somon, uskumru, sardalye)</li>
      <li>Zeytinyağı</li>
      <li>Yeşil yapraklı sebzeler</li>
      <li>Berries (çilek, yaban mersini, ahududu)</li>
      <li>Zerdeçal ve zencefil</li>
    </ul>
    
    <h2>Toparlanma Stratejisi Olarak Anti-İnflamatuar Beslenme</h2>
    <p>Yoğun antrenmanlar sonrası vücuttaki inflamasyonu azaltmak için anti-inflamatuar besinleri tüketmek, kas ağrılarını azaltabilir ve toparlanma sürecini hızlandırabilir.</p>
    `,
    author: "Prof. Dr. Kemal Öztürk",
    authorTitle: "Beslenme ve Metabolizma Uzmanı",
    authorImageUrl: "https://images.unsplash.com/photo-1553514029-1318c9127859?w=400&auto=format&fit=crop&q=80",
    date: "20 Eylül 2023",
    category: "Beslenme",
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=80",
    readTime: "8 dk",
  }
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.id === params.slug)
  
  if (!post) {
    return (
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Makale Bulunamadı</h1>
          <p className="text-muted-foreground mb-8">
            Aradığınız makale mevcut değil veya kaldırılmış olabilir.
          </p>
          <Button asChild>
            <Link href="/blog">Tüm Makalelere Dön</Link>
          </Button>
        </div>
        <Footer />
      </main>
    )
  }
  
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <article className="flex-1">
        <div className="container max-w-4xl py-8">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tüm Makalelere Dön
            </Link>
          </Button>
          
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4">
            {post.category}
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image 
                src={post.authorImageUrl}
                alt={post.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-medium">{post.author}</div>
              <div className="text-sm text-muted-foreground">{post.authorTitle}</div>
            </div>
            <div className="text-muted-foreground text-sm flex items-center ml-auto">
              <Clock className="mr-1 h-4 w-4" /> {post.readTime} okuma süresi
            </div>
          </div>
          
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-10">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
          
          <div 
            className="prose prose-lg max-w-none mb-10"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="border-t pt-8 mt-10">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image 
                    src={post.authorImageUrl}
                    alt={post.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-lg">{post.author}</div>
                  <div className="text-muted-foreground">{post.authorTitle}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-muted/30 py-16">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center">İlgili Makaleler</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
              <Link 
                href={`/blog/${relatedPost.id}`} 
                key={relatedPost.id}
                className="group block overflow-hidden rounded-lg border bg-background hover:shadow-md transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={relatedPost.imageUrl}
                    alt={relatedPost.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-primary/10 text-primary px-2 py-0.5 rounded-full text-sm mb-3">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 