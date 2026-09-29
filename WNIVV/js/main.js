/* ============================================================
   🎀 Anniversary Website — Logika Halaman
   (Tidak perlu diubah. Edit teks di js/config.js saja)
   ============================================================ */

/* ---------- Cover / amplop pembuka ---------- */
document.getElementById("cover-judul").textContent = CONFIG.coverJudul;
document.getElementById("cover-tombol").textContent = CONFIG.coverTombol;
document.getElementById("cover-hint").textContent = CONFIG.coverHint;
document.getElementById("cover-tanggal").textContent = CONFIG.tanggalAnnivTeks;
document.getElementById("paper-line1").textContent = CONFIG.paperLine1;
document.getElementById("paper-line2").textContent = CONFIG.paperLine2;
document.getElementById("paper-line3").textContent = CONFIG.paperLine3;

/* Sekuens buka amplop:
   0.0s  segel lilin terlepas & memudar
   0.5s  flap terbuka ke belakang
   1.0s  kertas naik dari dalam amplop
   2.6s  cover memudar → halaman utama */
var coverOpening = false;
function bukaCover() {
  if (coverOpening) return;
  coverOpening = true;
  var env = document.getElementById("env");
  env.classList.add("opening");
  document.querySelector(".cover-inner").classList.add("opening");
  setTimeout(function () {
    document.getElementById("page").classList.remove("hidden");
    window.scrollTo(0, 0);
    document.getElementById("cover").classList.add("opened");
  }, 2400);
  setTimeout(function () {
    document.getElementById("cover").style.display = "none";
  }, 3600);
}
document.getElementById("cover-tombol").addEventListener("click", bukaCover);
document.getElementById("env-wax").addEventListener("click", bukaCover);

/* ---------- Isi teks dari CONFIG ---------- */
document.getElementById("hero-names").innerHTML =
  CONFIG.namaKamu + " <span class='amp'>&amp;</span> " + CONFIG.namaDia;
document.getElementById("hero-sub").textContent = CONFIG.judulHero;
document.getElementById("date-pill").textContent = CONFIG.tanggalAnnivTeks;
document.getElementById("closing-title").textContent = CONFIG.judulPenutup;
document.getElementById("closing-msg").textContent = CONFIG.pesanPenutup;
document.getElementById("footer-text").textContent = CONFIG.footerTeks;

/* ---------- Timeline ---------- */
var tl = document.getElementById("timeline-list");
CONFIG.timeline.forEach(function (item, i) {
  var d = document.createElement("div");
  d.className = "tl-item " + (i % 2 === 0 ? "left" : "right") + " reveal";
  d.innerHTML =
    "<div class='tl-dot'></div>" +
    "<div class='tl-card'>" +
      "<span class='tl-date'>" + item.tanggal + "</span>" +
      "<h3>" + item.judul + "</h3>" +
      "<p>" + item.cerita + "</p>" +
    "</div>";
  tl.appendChild(d);
});

/* ---------- Galeri polaroid ----------
   Foto dicari di assets/photos/foto-1.jpg, foto-2.jpg, dst.
   Jika file belum ada → tampil placeholder cantik otomatis. */
var gg = document.getElementById("gallery-grid");
var rotations = [-3, 2.5, -2, 3, -2.5, 2];
CONFIG.galeri.forEach(function (cap, i) {
  var n = i + 1;
  var card = document.createElement("div");
  card.className = "polaroid reveal";
  card.style.setProperty("--r", rotations[i % rotations.length] + "deg");
  card.innerHTML =
    "<div class='ph-img'><img alt='" + cap + "' src='assets/photos/foto-" + n + ".jpg'></div>" +
    "<div class='ph-cap'>" + cap + "</div>";
  var img = card.querySelector("img");
  img.addEventListener("error", function () {
    var ph = document.createElement("div");
    ph.className = "ph-placeholder";
    ph.innerHTML = "<span>♥</span>Ganti fotoku";
    img.parentNode.replaceChild(ph, img);
  });
  gg.appendChild(card);
});

/* ---------- Animasi reveal saat scroll ---------- */
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

/* ---------- Surat cinta: efek ketik ---------- */
var letterTyped = false;
var letterEl = document.getElementById("letter-text");
var signEl = document.getElementById("letter-sign");
signEl.textContent = CONFIG.tandaTangan;

var to = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting && !letterTyped) {
      letterTyped = true;
      to.disconnect();
      var text = CONFIG.suratCinta;
      var i = 0;
      var tn = document.createTextNode("");
      var caret = document.createElement("span");
      caret.className = "caret";
      letterEl.appendChild(tn);
      letterEl.appendChild(caret);
      (function type() {
        if (i <= text.length) {
          tn.data = text.slice(0, i);
          i++;
          setTimeout(type, 22);
        } else {
          caret.remove();
          signEl.classList.add("show");
        }
      })();
    }
  });
}, { threshold: 0.3 });
to.observe(document.getElementById("letter"));

/* ---------- Hujan hati di background ---------- */
var rain = document.getElementById("hearts-rain");
for (var i = 0; i < 9; i++) {
  var s = document.createElement("span");
  s.className = "rain-heart";
  s.textContent = "♥";
  s.style.left = (Math.random() * 100) + "%";
  s.style.fontSize = (10 + Math.random() * 14) + "px";
  s.style.animationDuration = (8 + Math.random() * 8) + "s";
  s.style.animationDelay = (-Math.random() * 12) + "s";
  s.style.opacity = (0.12 + Math.random() * 0.28).toFixed(2);
  rain.appendChild(s);
}

/* ---------- Musik latar (opsional) ----------
   Taruh file musik di: assets/music.mp3
   Tombol muncul otomatis jika file ada. */
var musicBtn = document.getElementById("music-btn");
var audio = null;
var musicOk = false;
try {
  audio = new Audio("assets/music.mp3");
  audio.loop = true;
  audio.volume = 0.6;
  audio.preload = "metadata";
} catch (e) { audio = null; }

if (audio) {
  audio.addEventListener("canplaythrough", function () {
    musicOk = true;
    musicBtn.classList.remove("hidden");
  });
  audio.addEventListener("error", function () {
    musicBtn.classList.add("hidden");
  });
  audio.load();
}

/* Autoplay setelah interaksi pertama (aturan browser) */
var tried = false;
function tryAutoplay() {
  if (tried || !musicOk) return;
  tried = true;
  audio.play().then(function () { musicBtn.textContent = "⏸"; }).catch(function () {});
}
document.addEventListener("click", tryAutoplay, { once: true });

musicBtn.addEventListener("click", function (ev) {
  ev.stopPropagation();
  if (!musicOk) return;
  if (audio.paused) { audio.play(); musicBtn.textContent = "⏸"; }
  else { audio.pause(); musicBtn.textContent = "♪"; }
});
