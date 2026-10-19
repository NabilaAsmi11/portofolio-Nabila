/* ============================================
   FILE: script.js
   ============================================ */

// ===== BACKGROUND CODE RAIN (PUTIH) =====
const canvas = document.getElementById('codeRain');
if (canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const codeChars = '01{}[]()<>;=+-*/&|!?$#@%ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const fontSize = 16;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  function drawCodeRain() {
    ctx.fillStyle = 'rgba(255, 105, 180, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffff';
    ctx.font = fontSize + 'px monospace';
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 8;

    for (let i = 0; i < drops.length; i++) {
      const text = codeChars.charAt(Math.floor(Math.random() * codeChars.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawCodeRain, 50);

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');

      if (el.classList.contains('skill')) {
        const bar = el.querySelector('.skill-progress');
        if (bar && !bar.classList.contains('animated')) {
          bar.classList.add('animated');
          setTimeout(() => {
            bar.style.width = bar.getAttribute('data-width');
          }, 300);
        }
      }
    } else {
      el.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== FUNGSI KIRIM PESAN KE WHATSAPP =====
function kirimKeWhatsApp(e) {
  e.preventDefault(); 

  const nama = document.getElementById('namaPengirim').value;
  const email = document.getElementById('emailPengirim').value;
  const pesan = document.getElementById('pesanPengirim').value;

  const noWA = '6282286445872'; 

  const teksPesan = `Halo Kak Nabila,%0A%0ASaya *${nama}* (${email}) ingin menghubungi Anda melalui portofolio website.%0A%0APesan:%0A${pesan}`;

  window.open(`https://wa.me/${noWA}?text=${teksPesan}`, '_blank');
  
  e.target.reset();
}