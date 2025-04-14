import { NextResponse, NextRequest } from 'next/server';

/**
 * Temel güvenlik başlıklarını ekleyen middleware
 */
export function middleware(request: NextRequest) {
  // URL analizi
  const url = request.nextUrl.clone();
  
  // Yanıt oluşturma
  const response = NextResponse.next();

  // Temel güvenlik başlıkları
  
  // XSS koruması
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // İframe'de gösterilmesini kısıtlama
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  
  // MIME koruması
  response.headers.set('X-Content-Type-Options', 'nosniff');
  
  // Referrer Policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // HSTS (HTTP Strict Transport Security)
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  
  // Permissions Policy
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(self), interest-cohort=()'
  );
  
  // Content Security Policy - Daha esnek hali (geliştirirken)
  if (process.env.NODE_ENV === 'development') {
    response.headers.set(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:; font-src 'self' https:; connect-src 'self' https:; frame-ancestors 'self'; form-action 'self';"
    );
  } else {
    // Prodüksiyon ortamında daha sıkı CSP
    response.headers.set(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' https://images.unsplash.com https://randomuser.me data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; frame-ancestors 'self'; form-action 'self';"
    );
  }
  
  return response;
}

/**
 * Middleware'in hangi pathlerde çalışacağını belirtiyoruz
 */
export const config = {
  matcher: [
    /*
     * Tüm API isteklerini hariç tut
     * Tüm statik içerikleri hariç tut
     * Tüm geçerli sayfa isteklerini kapsa
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 