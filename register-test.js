// Register Form Güvenlik Testi

// Sahte form verisi - XSS payload içeren
const formData = {
  fullName: '<script>alert("XSS in Name")</script>John Doe',
  email: 'hacker@evil.com" onmouseover="alert(\'XSS in Email\')',
  phone: '+905551234567<img src=x onerror=alert("XSS in Phone")>',
  password: 'password123', // Zayıf şifre
  confirmPassword: 'password123',
  agreeTerms: true,
  csrfToken: 'fake_token'
};

// Şifre güçlendirme regex
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// XSS temizleme fonksiyonu
function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Form güvenlik kontrollerini simüle et
function testFormSecurity(data) {
  console.log('=== KAYIT FORMU GÜVENLİK TESTİ ===\n');
  console.log('Orijinal Form Verisi:');
  console.log(data);
  
  console.log('\n--- XSS Koruma Testi ---');
  // XSS Temizleme
  const sanitizedData = {
    ...data,
    fullName: sanitizeInput(data.fullName),
    email: sanitizeInput(data.email),
    phone: sanitizeInput(data.phone)
  };
  
  console.log('\nTemizlenmiş Form Verisi:');
  console.log(sanitizedData);
  
  // XSS kontrolü
  const hasXSS = data.fullName !== sanitizedData.fullName || 
                 data.email !== sanitizedData.email || 
                 data.phone !== sanitizedData.phone;
  
  console.log(`\nXSS Temizleme Sonucu: ${hasXSS ? 'XSS tespit edildi ve temizlendi ✅' : 'XSS bulunamadı ❓'}`);
  
  console.log('\n--- Şifre Güvenliği Testi ---');
  
  // Şifre uzunluğu kontrolü
  const isLongEnough = data.password.length >= 8;
  console.log(`Şifre Uzunluğu (min. 8): ${isLongEnough ? 'Başarılı ✅' : 'Başarısız ❌'}`);
  
  // Şifre eşleşme kontrolü
  const passwordsMatch = data.password === data.confirmPassword;
  console.log(`Şifre Eşleşmesi: ${passwordsMatch ? 'Başarılı ✅' : 'Başarısız ❌'}`);
  
  // Şifre gücü kontrolü
  const isStrongPassword = strongPasswordRegex.test(data.password);
  console.log(`Şifre Gücü: ${isStrongPassword ? 'Güçlü ✅' : 'Zayıf ❌'}`);
  console.log(`Büyük harf: ${/[A-Z]/.test(data.password) ? 'Var ✅' : 'Yok ❌'}`);
  console.log(`Küçük harf: ${/[a-z]/.test(data.password) ? 'Var ✅' : 'Yok ❌'}`);
  console.log(`Rakam: ${/\d/.test(data.password) ? 'Var ✅' : 'Yok ❌'}`);
  console.log(`Özel karakter: ${/[@$!%*?&]/.test(data.password) ? 'Var ✅' : 'Yok ❌'}`);
  
  console.log('\n--- Email Formatı Testi ---');
  
  // Email formatı kontrolü
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmailFormat = emailRegex.test(sanitizedData.email);
  console.log(`Email Format Kontrolü: ${isValidEmailFormat ? 'Geçerli ✅' : 'Geçersiz ❌'}`);
  
  console.log('\n--- CSRF Koruması Testi ---');
  
  // CSRF token kontrolü (simülasyon)
  const validToken = 'valid_token';
  const hasValidCSRFToken = data.csrfToken === validToken;
  console.log(`CSRF Token Kontrolü: ${hasValidCSRFToken ? 'Geçerli ✅' : 'Geçersiz ❌'}`);
  
  // Genel sonuç
  console.log('\n=== TEST SONUÇLARI ===');
  console.log(`1. XSS Koruması: ${hasXSS ? 'Başarılı ✅' : 'Kontrol Edilmeli ⚠️'}`);
  console.log(`2. Şifre Güvenliği: ${isStrongPassword ? 'Başarılı ✅' : 'Başarısız ❌'}`);
  console.log(`3. Email Doğrulaması: ${isValidEmailFormat ? 'Başarılı ✅' : 'Başarısız ❌'}`);
  console.log(`4. CSRF Koruması: ${hasValidCSRFToken ? 'Başarılı ✅' : 'Başarısız ❌'}`);
  
  // Form gönderiminin kabul edilip edilmemesi kararı
  const isFormAcceptable = passwordsMatch && isLongEnough && isValidEmailFormat;
  console.log(`\nForm Gönderimi: ${isFormAcceptable ? 'Kabul Edilebilir ✅' : 'Reddedilmeli ❌'}`);
  
  if (!isFormAcceptable) {
    console.log('\nRed Nedenleri:');
    if (!passwordsMatch) console.log('- Şifreler eşleşmiyor');
    if (!isLongEnough) console.log('- Şifre yeterince uzun değil');
    if (!isStrongPassword) console.log('- Şifre yeterince güçlü değil');
    if (!isValidEmailFormat) console.log('- Email formatı geçersiz');
    if (!hasValidCSRFToken) console.log('- CSRF token geçersiz');
  }
}

// Testi çalıştır
testFormSecurity(formData); 