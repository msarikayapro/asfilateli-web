# 🎨 ASFILATELI - Web Arayüz Tasarımı

Türkiye'nin en güvenilir filateli (pul koleksiyonu) platformu için modern, responsive web tasarımı.

## 📋 Tamamlanan Sayfalar

### ✅ Kullanıcı Tarafı
1. **index.html** - Ana Sayfa
   - Hero section
   - Öne çıkan ürünler
   - Aktif mezatlar
   - Özellikler showcase

2. **catalog.html** - Katalog Sayfası
   - Gelişmiş filtreleme (yıl, ülke, kondisyon, fiyat)
   - Grid/List view toggle
   - Sıralama seçenekleri
   - Pagination
   - Mobil uyumlu sidebar

3. **product-detail.html** - Ürün Detay
   - Görsel galerisi (thumbnail + zoom)
   - 3 Sipariş Butonu:
     * 🛒 Sepete Ekle
     * ⚡ Hızlı Sipariş
     * 💬 WhatsApp Sipariş (otomatik mesaj)
   - Detaylı ürün bilgileri
   - Trust badges

4. **cart.html** - Sepet Sayfası
   - Ürün listesi
   - Toplam hesaplama
   - Ürün çıkarma
   - Checkout butonu

### 📱 Responsive Tasarım
- Desktop (1280px+)
- Tablet (768px - 1024px)
- Mobil (320px - 767px)

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Primary:** #1E3A5F (Lacivert) - Güven
- **Secondary:** #D4AF37 (Altın) - Premium
- **Accent:** Yeşil, Kırmızı, Mavi

### Tipografi
- **Display:** Playfair Display (başlıklar)
- **Body:** Inter (içerik)

### Özellikler
- ✅ Sticky header
- ✅ Smooth scroll
- ✅ Hover animasyonlar
- ✅ Loading states
- ✅ Notification system
- ✅ WhatsApp entegrasyonu
- ✅ Sepet yönetimi

## 🚀 Kullanım

### 1. GitHub'a Yükleme
```bash
# Dosyaları repoya kopyala
git init
git add .
git commit -m "İlk tasarım"
git remote add origin https://github.com/KULLANICI-ADIN/asfilateli-web.git
git push -u origin main
```

### 2. GitHub Pages Aktifleştirme
1. Repo'ya git: github.com/KULLANICI-ADIN/asfilateli-web
2. Settings → Pages
3. Source: **main** branch seç
4. Save
5. URL: `kullanici-adin.github.io/asfilateli-web`

### 3. WhatsApp Numarası Güncelleme
`product-detail.js` dosyasında (58. satır):
```javascript
const whatsappNumber = '905321234567'; // Kendi numaran
```

## 📁 Dosya Yapısı
```
asfilateli-web/
├── index.html              # Ana sayfa
├── catalog.html            # Katalog
├── product-detail.html     # Ürün detay
├── cart.html               # Sepet
├── style.css               # Ana CSS
├── catalog.css             # Katalog CSS
├── product-detail.css      # Detay CSS
├── cart.css                # Sepet CSS
├── script.js               # Ana JavaScript
├── catalog.js              # Katalog JS
├── product-detail.js       # Detay JS
├── cart.js                 # Sepet JS
└── README.md               # Bu dosya
```

## 🔧 Yapılacaklar (Backend Gerekli)

Bu tasarım **statik HTML/CSS/JS** ile yapılmıştır. Gerçek e-ticaret için gerekli:

### Backend İhtiyaçları
- [ ] Kullanıcı sistemi (kayıt/giriş)
- [ ] Ürün veritabanı
- [ ] Sepet API
- [ ] Sipariş yönetimi
- [ ] Dekont yükleme/onay sistemi
- [ ] Admin paneli
- [ ] Mezat sistemi

### Önerilen Stack
- **Backend:** Laravel / Node.js + Express
- **Database:** MySQL / PostgreSQL
- **Hosting:** DigitalOcean / AWS
- **Ödeme:** Dekont bazlı (havale/EFT)

## 💡 İpuçları

### Gerçek Görseller Eklemek
SVG placeholder'ları gerçek pul görselleri ile değiştir:
```html
<!-- Eski -->
<div class="stamp-placeholder">...</div>

<!-- Yeni -->
<img src="/images/products/pul-1.jpg" alt="Türkiye 1972">
```

### Backend Bağlantısı
JavaScript dosyalarında `console.log` yerlerine API çağrıları ekle:
```javascript
// Mock
console.log('Adding to cart:', productId);

// Real
fetch('/api/cart/add', {
    method: 'POST',
    body: JSON.stringify({ productId })
});
```

## 📞 Destek

Sorular için:
- GitHub Issues
- mustafa@asfilateli.com

## 📄 Lisans

Proje sahibi: Asfilateli / Mustafa Küçük
© 2026 Tüm hakları saklıdır.
