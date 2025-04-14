"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { sanitizeInput, isPasswordStrong, generateCSRFToken } from "@/lib/auth"

export default function RegisterPage() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    loading: false,
    submitted: false,
    error: "",
    csrfToken: ""
  })
  
  // CSRF token oluşturma - sayfa yüklendiğinde çalışır
  useEffect(() => {
    setFormState(prev => ({
      ...prev,
      csrfToken: generateCSRFToken()
    }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Güvenlik kontrolleri
    
    // 1. Form alanları temizleme (XSS koruması)
    const sanitizedName = sanitizeInput(formState.fullName);
    const sanitizedEmail = sanitizeInput(formState.email);
    const sanitizedPhone = sanitizeInput(formState.phone);
    
    // 2. Form doğrulama
    if (formState.password !== formState.confirmPassword) {
      setFormState({ ...formState, error: "Şifreler eşleşmiyor" })
      return
    }
    
    // 3. Güçlü şifre kontrolü
    if (!isPasswordStrong(formState.password)) {
      setFormState({ 
        ...formState, 
        error: "Şifre en az 8 karakter olmalı ve en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir" 
      })
      return
    }
    
    // 4. Email format kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setFormState({ ...formState, error: "Geçerli bir e-posta adresi giriniz" })
      return
    }
    
    setFormState({ ...formState, loading: true, error: "" })
    
    // Burada normalde API çağrısı olurdu
    // POST isteğinde CSRF token gönderilirdi
    setTimeout(() => {
      // Başarılı işlem simülasyonu
      setFormState({
        ...formState,
        loading: false,
        submitted: true
      })
    }, 1500)
  }

  const benefits = [
    "Kişiselleştirilmiş antrenman programları",
    "Günlük beslenme önerileri",
    "İlerleme takibi ve analizler",
    "Fitness uzmanlarına erişim",
    "Özel fitness topluluğumuza katılım",
    "Mobil uygulamadan 7/24 erişim"
  ]

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
          <h1 className="text-4xl font-bold tracking-tight">Ücretsiz Deneme</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            14 gün boyunca premium özelliklerin tadını çıkarın
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
          
            {/* Form */}
            <div className="bg-card p-8 rounded-lg border">
              {formState.submitted ? (
                <div className="text-center py-8">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <Check className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Kayıt Başarılı!</h2>
                  <p className="text-muted-foreground mb-6">
                    Kayıt işleminiz tamamlandı. Giriş bilgileriniz e-posta adresinize gönderildi.
                  </p>
                  <Button asChild>
                    <Link href="/">
                      Ana Sayfaya Dön
                    </Link>
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-bold mb-6">Hesap Oluştur</h2>
                  
                  {/* CSRF Token - Gizli alan */}
                  <input type="hidden" name="csrfToken" value={formState.csrfToken} />
                  
                  {formState.error && (
                    <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-md mb-6">
                      {formState.error}
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                        Ad Soyad
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formState.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        E-posta Adresi
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        autoComplete="email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Telefon (Opsiyonel)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        autoComplete="tel"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium mb-1">
                        Şifre
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formState.password}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        autoComplete="new-password"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        En az 8 karakter, bir büyük harf, bir rakam ve bir özel karakter içermelidir.
                      </p>
                    </div>
                    
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                        Şifre Tekrarı
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formState.confirmPassword}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        autoComplete="new-password"
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formState.agreeTerms}
                        onChange={handleChange}
                        required
                        className="mr-2"
                      />
                      <label htmlFor="agreeTerms" className="text-sm">
                        <span className="text-muted-foreground">
                          <Link href="/terms" className="text-primary hover:underline">Kullanım Koşulları</Link> ve <Link href="/privacy" className="text-primary hover:underline">Gizlilik Politikası</Link>'nı okudum ve kabul ediyorum.
                        </span>
                      </label>
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={formState.loading}>
                      {formState.loading ? "İşleniyor..." : "Ücretsiz Denemeyi Başlat"}
                    </Button>
                    
                    <p className="text-sm text-center text-muted-foreground">
                      Zaten bir hesabınız var mı? <Link href="/login" className="text-primary hover:underline">Giriş Yap</Link>
                    </p>
                  </div>
                </form>
              )}
            </div>
            
            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Ayrıcalıklarınız</h2>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <div className="bg-primary/10 text-primary rounded-full p-1 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80"
                  alt="Fitness uygulaması ekran görüntüsü"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 