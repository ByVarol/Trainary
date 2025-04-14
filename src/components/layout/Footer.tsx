import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-primary">Trainary</h3>
          <p className="text-muted-foreground">
            Hedeflerinize ve yaşam tarzınıza uygun modern fitness çözümleri.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Hızlı Erişim</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link href="/programs" className="text-muted-foreground hover:text-primary">
                Programlar
              </Link>
            </li>
            <li>
              <Link href="/nutrition" className="text-muted-foreground hover:text-primary">
                Beslenme
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Şirket</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-primary">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-muted-foreground hover:text-primary">
                Kariyer
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Yasal</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                Gizlilik Politikası
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-muted-foreground hover:text-primary">
                Kullanım Koşulları
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-muted-foreground hover:text-primary">
                Çerez Politikası
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-8 border-t pt-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Trainary. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 