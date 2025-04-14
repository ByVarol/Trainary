"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Image from "next/image"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    submitted: false,
    loading: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState({ ...formState, loading: true })
    
    // Burada normalde bir API çağrısı yapılırdı, şimdilik sadece simüle ediyoruz
    setTimeout(() => {
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
        submitted: true,
        loading: false
      })
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

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
          <h1 className="text-4xl font-bold tracking-tight">İletişim</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Sorularınız veya geri bildirimleriniz için bizimle iletişime geçin
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Bize Ulaşın</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Adres</h3>
                    <p className="text-muted-foreground">
                      Adatepe Mahallesi, 62.Sokak<br />
                      Buca, İzmir 35400
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Telefon</h3>
                    <p className="text-muted-foreground">+90 (312) 511 11 11</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">E-posta</h3>
                    <p className="text-muted-foreground">halilvarol321@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Çalışma Saatleri</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><span className="font-semibold">Pazartesi - Cuma:</span> 08:00 - 21:00</li>
                  <li><span className="font-semibold">Cumartesi:</span> 09:00 - 18:00</li>
                  <li><span className="font-semibold">Pazar:</span> 10:00 - 16:00</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Mesaj Gönderin</h2>
              
              {formState.submitted ? (
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-2">Teşekkürler!</h3>
                  <p className="mb-4">Mesajınız bize ulaştı. En kısa sürede size dönüş yapacağız.</p>
                  <Button 
                    onClick={() => setFormState({ ...formState, submitted: false })}
                  >
                    Yeni Mesaj Gönder
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Adınız
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      E-posta Adresiniz
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Telefon Numaranız
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={formState.loading}
                  >
                    {formState.loading ? "Gönderiliyor..." : "Mesaj Gönder"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">
            Haritada Bizi Bulun
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg border border-muted bg-muted/20 p-10 text-center">
            <div className="flex flex-col items-center justify-center space-y-4">
              <MapPin className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Adatepe Mahallesi, 62.Sokak</h3>
              <p className="text-muted-foreground">Buca, İzmir 35400</p>
              <Button asChild className="mt-4">
                <Link 
                  href="https://maps.google.com/?q=Adatepe,+Buca,+İzmir,+Turkey" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Google Maps'te Görüntüle
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 