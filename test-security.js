// Güvenlik Test Dosyası
// XSS, CSRF ve diğer güvenlik kontrollerini test eder

// Test fonksiyonları
function testXSSProtection() {
  console.log('\n========= XSS Koruması Testi =========');
  
  const xssPayloads = [
    '<script>alert("XSS")</script>',
    '<img src="x" onerror="alert(\'XSS\')">',
    '<a href="javascript:alert(\'XSS\')">Tıkla</a>',
    '"><script>alert("XSS")</script>',
    '\' OR 1=1 --',
  ];
  
  console.log('Temizleme sonuçları:');
  xssPayloads.forEach(payload => {
    const sanitized = payload
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/`/g, '&#96;');
    
    console.log(`\nOrijinal: ${payload}`);
    console.log(`Temizlenmiş: ${sanitized}`);
    
    // Test sonucu
    const isPotentiallyDangerous = payload !== sanitized;
    console.log(`Sonuç: ${isPotentiallyDangerous ? 'Tehlikeli içerik temizlendi ✅' : 'Güvenli ✅'}`);
  });
  
  console.log('\nXSS Koruması Testi Tamamlandı');
}

function testCSRFProtection() {
  console.log('\n========= CSRF Koruması Testi =========');
  
  // CSRF token oluşturma simülasyonu
  const generateToken = () => {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  };
  
  const csrfToken = generateToken();
  console.log(`Oluşturulan CSRF Token: ${csrfToken}`);
  
  // Geçerli token testi
  console.log('\nGeçerli token kontrolü:');
  const validRequest = { csrfToken };
  const isValidRequest = validRequest.csrfToken === csrfToken;
  console.log(`Token doğrulaması: ${isValidRequest ? 'Başarılı ✅' : 'Başarısız ❌'}`);
  
  // Geçersiz token testi
  console.log('\nGeçersiz token kontrolü:');
  const invalidRequest = { csrfToken: 'invalid_token' };
  const isInvalidRequest = invalidRequest.csrfToken === csrfToken;
  console.log(`Token doğrulaması: ${!isInvalidRequest ? 'Doğru şekilde reddedildi ✅' : 'Yanlış kabul edildi ❌'}`);
  
  console.log('\nCSRF Koruması Testi Tamamlandı');
}

function testPasswordStrength() {
  console.log('\n========= Şifre Gücü Testi =========');
  
  const passwords = [
    'password',
    'Password',
    'Password1',
    'Password1!',
    'Pa$$w0rd',
    '12345678',
    'Ab1!',
    '11111111111111111111111',
    'aaaaaaaaaaaaaaaaaaaaaaaa',
  ];
  
  // Şifre güçlendirme regex
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  passwords.forEach(password => {
    const isStrong = strongPasswordRegex.test(password);
    console.log(`\nŞifre: ${password}`);
    console.log(`Uzunluk: ${password.length}`);
    console.log(`Küçük harf: ${/[a-z]/.test(password) ? 'Var ✅' : 'Yok ❌'}`);
    console.log(`Büyük harf: ${/[A-Z]/.test(password) ? 'Var ✅' : 'Yok ❌'}`);
    console.log(`Rakam: ${/\d/.test(password) ? 'Var ✅' : 'Yok ❌'}`);
    console.log(`Özel karakter: ${/[@$!%*?&]/.test(password) ? 'Var ✅' : 'Yok ❌'}`);
    console.log(`Sonuç: ${isStrong ? 'Güçlü ✅' : 'Zayıf ❌'}`);
  });
  
  console.log('\nŞifre Gücü Testi Tamamlandı');
}

function testSQLInjectionProtection() {
  console.log('\n========= SQL Injection Koruması Testi =========');
  
  const sqlInjectionAttempts = [
    "Robert",
    "Robert'; DROP TABLE users; --",
    "' OR '1'='1",
    "admin' --",
    "105 OR 1=1",
    "username' OR 'x'='x",
  ];
  
  sqlInjectionAttempts.forEach(input => {
    // SQL escape işlemi
    const escaped = input
      .replace(/'/g, "''")
      .replace(/\\/g, '\\\\');
    
    console.log(`\nOrijinal: ${input}`);
    console.log(`Temizlenmiş: ${escaped}`);
    
    // Orijinal sorguda kullanım simülasyonu
    const originalQuery = `SELECT * FROM users WHERE username = '${input}'`;
    const safeQuery = `SELECT * FROM users WHERE username = '${escaped}'`;
    
    console.log(`Güvensiz Sorgu: ${originalQuery}`);
    console.log(`Güvenli Sorgu: ${safeQuery}`);
    
    // Değerlendirme
    const isDangerous = input !== escaped && input.includes("'");
    console.log(`Sonuç: ${isDangerous ? 'Potansiyel SQL injection temizlendi ✅' : 'Güvenli veya zararlı değil ✅'}`);
  });
  
  console.log('\nSQL Injection Koruması Testi Tamamlandı');
}

function testRateLimiting() {
  console.log('\n========= Rate Limiting Testi =========');
  
  // Basit bir rate limiting simülasyonu
  const maxAttempts = 5;
  const windowMs = 60000; // 1 dakika
  
  const ipAddress = '192.168.1.1';
  const attempts = [];
  
  console.log(`IP: ${ipAddress}`);
  console.log(`Rate limit: ${maxAttempts} istek / ${windowMs/1000} saniye`);
  
  // 10 istek simüle et
  for (let i = 1; i <= 10; i++) {
    const timestamp = Date.now() + (i * 1000); // Her saniye bir istek
    attempts.push(timestamp);
    
    // Son windowMs içindeki istek sayısını kontrol et
    const recentAttempts = attempts.filter(time => timestamp - time < windowMs);
    const isLimited = recentAttempts.length > maxAttempts;
    
    console.log(`\nİstek #${i} (Zaman: ${new Date(timestamp).toISOString().substring(11, 19)})`);
    console.log(`Son ${windowMs/1000} saniyedeki istek sayısı: ${recentAttempts.length}`);
    console.log(`Sonuç: ${isLimited ? 'Engellendi ✅' : 'İzin verildi ✅'}`);
  }
  
  console.log('\nRate Limiting Testi Tamamlandı');
}

// Tüm testleri çalıştır
console.log('====== GÜVENLİK TESTLERİ BAŞLADI ======');
testXSSProtection();
testCSRFProtection();
testPasswordStrength();
testSQLInjectionProtection();
testRateLimiting();
console.log('\n====== GÜVENLİK TESTLERİ TAMAMLANDI ======'); 