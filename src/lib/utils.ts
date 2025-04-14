import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { sanitizeInput } from './auth';

/**
 * Tailwind CSS sınıfları birleştirme (clsx ve tailwind-merge kullanarak)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * XSS güvenliği için HTML içeriğini temizler
 */
export function sanitizeHTML(html: string): string {
  // Basit bir sanitizer - Gerçek projelerde DOMPurify gibi kütüphaneler kullanılmalıdır
  return html
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/`/g, '&#96;')
    .replace(/\(/g, '&#40;')
    .replace(/\)/g, '&#41;');
}

/**
 * SQL Injection koruma için string temizleme
 */
export function escapeSQLInput(input: string): string {
  return input
    .replace(/'/g, "''")
    .replace(/\\/g, '\\\\')
    .replace(/\x00/g, '\\0')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\x1a/g, '\\Z');
}

/**
 * Güvenli URL parametresi oluşturmak için
 */
export function safeUrlParam(param: string): string {
  return encodeURIComponent(param);
}

/**
 * JSON verilerini güvenli şekilde ayrıştırma
 */
export function safeParseJSON<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json) as T;
  } catch (e) {
    console.error('JSON ayrıştırma hatası:', e);
    return fallback;
  }
}

/**
 * URL'den güvenli domain kontrolü
 */
export function isValidDomain(url: string, allowedDomains: string[]): boolean {
  try {
    const urlObj = new URL(url);
    return allowedDomains.some(domain => urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`));
  } catch (e) {
    return false;
  }
}

/**
 * Güvenli veri eksikleri kontrolü - undefined/null/boş dizi durumlarını kontrol eder
 */
export function validateRequiredData<T>(data: T | null | undefined, errorMsg = 'Veri bulunamadı'): T {
  if (data === null || data === undefined) {
    throw new Error(errorMsg);
  }
  
  // Diziler için boş kontrol
  if (Array.isArray(data) && data.length === 0) {
    throw new Error('Veri dizisi boş');
  }
  
  return data;
}

/**
 * Kullanıcı girdisinden filename temizleme
 */
export function sanitizeFilename(filename: string): string {
  // Dosya adından tehlikeli karakterleri temizler
  return filename
    .replace(/[/\\?%*:|"<>]/g, '-')
    .replace(/\s+/g, '_')
    .replace(/\.{2,}/g, '.'); // Çift nokta vs engellemek için
}

/**
 * Güvenli gecikme fonksiyonu (timing attack koruması için)
 */
export async function secureDelay(minMs = 300, maxMs = 800): Promise<void> {
  // Sabit süre yerine rastgele süre kullanarak timing attack'leri engeller
  const delay = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
  return new Promise(resolve => setTimeout(resolve, delay));
}

/**
 * Form verilerini temizleme
 */
export function sanitizeFormData<T extends Record<string, unknown>>(formData: T): T {
  const sanitized = { ...formData };
  
  Object.keys(sanitized).forEach(key => {
    if (typeof sanitized[key as keyof T] === 'string') {
      (sanitized as Record<string, unknown>)[key] = sanitizeInput(sanitized[key as keyof T] as string);
    }
  });
  
  return sanitized;
} 