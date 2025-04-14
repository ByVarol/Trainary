// XSS Güvenlik Testi
import { sanitizeHTML, sanitizeFormData, escapeSQLInput } from './src/lib/utils';

// XSS Vektörleri
const xssVectors = [
  '<script>alert("XSS")</script>',
  '<img src="x" onerror="alert(\'XSS\')">',
  '<a href="javascript:alert(\'XSS\')">Tıkla</a>',
  '<div onmouseover="alert(\'XSS\')">Fare ile üzerine gel</div>',
  '"><script>alert("XSS")</script>',
  '\' OR 1=1 --',
  '<svg/onload=alert(\'XSS\')>',
  '<iframe src="javascript:alert(\'XSS\')"></iframe>',
  '<input onfocus=alert(\'XSS\') autofocus>',
];

// Form verilerinin sanitize edilmesi testi
const formData = {
  name: '<script>alert("XSS")</script>John',
  email: 'john@example.com"><script>alert("XSS")</script>',
  message: 'Merhaba<img src="x" onerror="alert(\'XSS\')">'
};

console.log('XSS GÜVENLİK TESTİ');
console.log('=================');
console.log('1. HTML Sanitize Testi:');
console.log('-----------------------');

xssVectors.forEach((vector, index) => {
  console.log(`Test #${index + 1}`);
  console.log(`Girdi: ${vector}`);
  console.log(`Çıktı: ${sanitizeHTML(vector)}`);
  console.log('-----------------------');
});

console.log('\n2. Form Data Sanitize Testi:');
console.log('-----------------------');
console.log('Orijinal Form Data:');
console.log(formData);

console.log('\nSanitize Edilmiş Form Data:');
try {
  const sanitizedFormData = sanitizeFormData(formData);
  console.log(sanitizedFormData);
} catch (error) {
  console.error('Sanitize hatası:', error);
}

console.log('\n3. SQL Injection Testi:');
console.log('-----------------------');
const sqlInjectionVector = "Robert'; DROP TABLE users; --";
console.log(`Girdi: ${sqlInjectionVector}`);
console.log(`Çıktı: ${escapeSQLInput(sqlInjectionVector)}`);

console.log('\nGüvenlik testleri tamamlandı.'); 