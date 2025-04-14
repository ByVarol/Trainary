import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const blogPosts = [
  {
    id: "protein-tuketimi-rehberi",
    title: "Protein Tüketimi Rehberi: Ne Kadar, Ne Zaman, Hangi Kaynaklar?",
    excerpt: "Kas gelişimi ve genel sağlık için optimal protein tüketiminin detayları ve en kaliteli protein kaynaklarının incelemesi.",
    author: "Mehmet Kaya",
    date: "5 Kasım 2023",
    category: "Beslenme",
    imageUrl: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&auto=format&fit=crop&q=80",
    readTime: "6 dk",
  },
  {
    id: "kilo-vermede-kardiyo-ve-agirlik-denklemi",
    title: "Kilo Vermede Kardiyo ve Ağırlık Çalışmaları: Doğru Denklem",
    excerpt: "Yağ yakımını optimize etmek için kardiyo ve ağırlık antrenmanlarını nasıl dengeleyeceğinize dair bilimsel yaklaşım.",
    author: "Elif Şahin",
    date: "2 Ekim 2023",
    category: "Kilo Yönetimi",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
    readTime: "9 dk",
  },
  {
    id: "inflamasyon-ve-beslenme",
    title: "İnflamasyonla Mücadele: Anti-İnflamatuar Beslenme Stratejileri",
    excerpt: "Kronik inflamasyonu azaltmak, toparlanmayı hızlandırmak ve genel sağlığı desteklemek için beslenme yaklaşımları.",
    author: "Prof. Dr. Kemal Öztürk",
    date: "20 Eylül 2023",
    category: "Beslenme",
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=80",
    readTime: "8 dk",
  }
]

export default function BlogPage() {
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
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Fitness, beslenme ve sağlıklı yaşam hakkında uzman makaleleri
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link 
                href={`/blog/${post.id}`} 
                key={post.id}
                className="group block overflow-hidden rounded-lg border hover:shadow-md transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center">
                    <div className="text-sm">
                      <span className="font-medium">{post.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 bg-muted/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Makalelerimizden Haberdar Olun</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              En yeni fitness ve sağlık makalelerimiz, özel içeriklerimiz ve güncel bilgilendirmelerimiz için bültenimize abone olun.
            </p>
            <div className="flex max-w-md mx-auto gap-2">
              <input 
                type="email" 
                placeholder="E-posta adresiniz"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button>Abone Ol</Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 