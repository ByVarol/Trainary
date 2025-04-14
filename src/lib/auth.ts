/**
 * Güvenli kimlik doğrulama işlevleri
 * Bu dosya kullanıcı kimlik doğrulama için güvenli fonksiyonlar içerir
 */

import crypto from 'crypto';

/**
 * Güvenli şifre hash'leme (Crypto modülü ile)
 */
export function hashPassword(password: string): { hash: string; salt: string } {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');
  return { hash, salt };
}

/**
 * Şifre doğrulama
 */
export function verifyPassword(
  password: string,
  hash: string,
  salt: string
): boolean {
  const verifyHash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');
  return hash === verifyHash;
}

/**
 * CSRF token oluşturma
 */
export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

/**
 * Rate limiting için fonksiyon - aynı IP'den çok fazla istek gelmesini engeller
 * Bu basit bir örnek - gerçek uygulamada Redis/DB tabanlı bir çözüm kullanılmalıdır
 */
const loginAttempts: Record<string, { count: number; lastAttempt: number }> = {};

export function checkRateLimit(ip: string, maxAttempts = 5, timeWindow = 300000): boolean {
  const now = Date.now();
  
  // IP'yi temizle (güvenli input yönetimi)
  const safeIP = ip.replace(/[^0-9.]/g, '');
  
  // Bu IP için daha önce kayıt yoksa oluştur
  if (!loginAttempts[safeIP]) {
    loginAttempts[safeIP] = { count: 1, lastAttempt: now };
    return true;
  }
  
  const attempt = loginAttempts[safeIP];
  
  // Zaman penceresi dışında ise sayacı sıfırla
  if (now - attempt.lastAttempt > timeWindow) {
    loginAttempts[safeIP] = { count: 1, lastAttempt: now };
    return true;
  }
  
  // Maksimum deneme sayısını aştı mı kontrol et
  if (attempt.count >= maxAttempts) {
    return false; // Rate limit aşıldı
  }
  
  // Deneme sayısını artır
  attempt.count += 1;
  attempt.lastAttempt = now;
  return true;
}

/**
 * Kullanıcı girişlerini güvenli hale getirme (XSS koruması)
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Güvenli token oluşturma (oturum, şifre sıfırlama vb. için)
 */
export function generateSecureToken(length = 32): string {
  return crypto.randomBytes(length).toString('hex');
}

/**
 * Şifre karmaşıklığını kontrol etme
 */
export function isPasswordStrong(password: string): boolean {
  // En az 8 karakter, en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return strongPasswordRegex.test(password);
} 