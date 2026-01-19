// ========================================
// PRODUCT DETAIL PAGE JAVASCRIPT
// ========================================

// === THUMBNAIL GALLERY ===
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.main-image .stamp-placeholder');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        // Remove active class from all thumbnails
        thumbnails.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked thumbnail
        this.classList.add('active');
        
        // Update main image (in a real app, you'd swap the actual image)
        console.log('Thumbnail clicked - Update main image');
    });
});

// === IMAGE ZOOM ===
const zoomBtn = document.querySelector('.zoom-btn');
if (zoomBtn) {
    zoomBtn.addEventListener('click', function() {
        console.log('Open zoom modal');
        // In production, open a fullscreen image viewer
        showNotification('Zoom özelliği yakında eklenecek', 'info');
    });
}

// === PRODUCT ACTIONS ===

// 1. ADD TO CART
const addToCartBtn = document.querySelector('.btn-primary-action');
if (addToCartBtn) {
    addToCartBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get product details
        const productCode = document.querySelector('.product-code strong').textContent;
        const productTitle = document.querySelector('.product-title-main').textContent;
        const productPrice = document.querySelector('.price-main').textContent;
        
        // Add to cart (in production, send to backend/localStorage)
        console.log('Adding to cart:', {
            code: productCode,
            title: productTitle,
            price: productPrice
        });
        
        // Update cart count
        const cartBadge = document.querySelector('.cart-badge');
        if (cartBadge) {
            const currentCount = parseInt(cartBadge.textContent);
            cartBadge.textContent = currentCount + 1;
            
            // Animate badge
            cartBadge.style.transform = 'scale(1.5)';
            setTimeout(() => {
                cartBadge.style.transform = '';
            }, 300);
        }
        
        // Show success notification
        showNotification('✓ Ürün sepete eklendi!', 'success');
        
        // Button feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
}

// 2. QUICK ORDER (Direct to checkout)
const quickOrderBtn = document.querySelector('.btn-quick-order');
if (quickOrderBtn) {
    quickOrderBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get product details
        const productCode = document.querySelector('.product-code strong').textContent;
        
        // In production: Add to cart and redirect to checkout
        console.log('Quick order:', productCode);
        
        showNotification('🚀 Ödeme sayfasına yönlendiriliyorsunuz...', 'success');
        
        // Simulate redirect (in production, use: window.location.href = 'checkout.html')
        setTimeout(() => {
            console.log('Redirect to checkout page');
        }, 1500);
    });
}

// 3. WHATSAPP ORDER
const whatsappBtn = document.querySelector('.btn-whatsapp');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get product details
        const productCode = document.querySelector('.product-code strong').textContent;
        const productTitle = document.querySelector('.product-title-main').textContent;
        const productPrice = document.querySelector('.price-main').textContent;
        const productURL = window.location.href;
        
        // Your WhatsApp business number (replace with actual number)
        const whatsappNumber = '905321234567'; // Format: country code + number (no + or spaces)
        
        // Create WhatsApp message
        const message = `Merhaba Asfilateli,

${productTitle} ürününü almak istiyorum.

📦 Ürün Kodu: ${productCode}
💰 Fiyat: ${productPrice}
🔗 Link: ${productURL}

Detaylı bilgi alabilir miyim?`;
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        
        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');
        
        console.log('WhatsApp order initiated');
    });
}

// === WISHLIST ===
const wishlistBtn = document.querySelector('.btn-wishlist');
if (wishlistBtn) {
    wishlistBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const productCode = document.querySelector('.product-code strong').textContent;
        
        // Toggle wishlist (in production, save to backend/localStorage)
        console.log('Toggle wishlist:', productCode);
        
        // Update button state
        const svg = this.querySelector('svg path');
        if (svg.style.fill === 'currentColor') {
            svg.style.fill = 'none';
            showNotification('Favorilerden çıkarıldı', 'info');
        } else {
            svg.style.fill = 'currentColor';
            showNotification('❤️ Favorilere eklendi!', 'success');
        }
    });
}

// === SHARE ===
const shareBtn = document.querySelector('.btn-share');
if (shareBtn) {
    shareBtn.addEventListener('click', async function(e) {
        e.preventDefault();
        
        const productTitle = document.querySelector('.product-title-main').textContent;
        const productURL = window.location.href;
        
        // Check if Web Share API is supported
        if (navigator.share) {
            try {
                await navigator.share({
                    title: productTitle,
                    text: `${productTitle} - Asfilateli'de buldum!`,
                    url: productURL
                });
                console.log('Shared successfully');
            } catch (err) {
                console.log('Share cancelled or failed', err);
            }
        } else {
            // Fallback: Copy to clipboard
            try {
                await navigator.clipboard.writeText(productURL);
                showNotification('🔗 Link kopyalandı!', 'success');
            } catch (err) {
                console.error('Failed to copy:', err);
                showNotification('Link kopyalanamadı', 'error');
            }
        }
    });
}

// === STICKY PURCHASE SECTION (Mobile) ===
function handleStickyPurchase() {
    if (window.innerWidth <= 768) {
        const purchaseSection = document.querySelector('.purchase-section');
        const footer = document.querySelector('.footer');
        
        if (!purchaseSection || !footer) return;
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    purchaseSection.style.position = 'relative';
                } else {
                    purchaseSection.style.position = 'sticky';
                    purchaseSection.style.bottom = '0';
                    purchaseSection.style.zIndex = '100';
                }
            },
            { threshold: 0 }
        );
        
        observer.observe(footer);
    }
}

// === NOTIFICATION HELPER (from main script.js) ===
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#059669' : type === 'error' ? '#DC2626' : '#1E3A5F'};
        color: white;
        border-radius: 0.75rem;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// === PRODUCT VIEW TRACKING ===
function trackProductView() {
    const productCode = document.querySelector('.product-code strong')?.textContent;
    
    if (productCode) {
        // In production, send to analytics
        console.log('Product viewed:', productCode);
        
        // You can also send to your backend
        // fetch('/api/track-view', {
        //     method: 'POST',
        //     body: JSON.stringify({ productCode, timestamp: Date.now() })
        // });
    }
}

// === INITIALIZE ===
document.addEventListener('DOMContentLoaded', () => {
    console.log('Product detail page loaded');
    
    // Track product view
    trackProductView();
    
    // Setup sticky purchase on mobile
    handleStickyPurchase();
    
    // Resize handler
    window.addEventListener('resize', handleStickyPurchase);
});

// === PRODUCT QUANTITY (if you want to add quantity selector) ===
// Uncomment if you want quantity feature:
/*
function createQuantitySelector() {
    const priceSection = document.querySelector('.price-section');
    
    const quantityHTML = `
        <div class="quantity-selector" style="display: flex; align-items: center; gap: 1rem; margin: 1rem 0;">
            <span style="color: rgba(255,255,255,0.8); font-size: 0.875rem;">Adet:</span>
            <div style="display: flex; align-items: center; background: rgba(255,255,255,0.1); border-radius: 0.5rem; padding: 0.25rem;">
                <button class="qty-minus" style="padding: 0.5rem 1rem; color: white; font-weight: bold;">-</button>
                <input type="number" class="qty-input" value="1" min="1" max="1" style="width: 50px; text-align: center; background: transparent; border: none; color: white; font-weight: bold;" readonly>
                <button class="qty-plus" style="padding: 0.5rem 1rem; color: white; font-weight: bold;">+</button>
            </div>
        </div>
    `;
    
    priceSection.insertAdjacentHTML('beforeend', quantityHTML);
    
    // Note: For collectible items, quantity is usually 1
    // This is just an example if you want to enable it
}
*/
