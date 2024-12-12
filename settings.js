// Objek untuk menyimpan semua pengaturan profil
const profileSettings = {
  favicon: "media/vynaa.jpg", // Path ke favicon
  title: "A R E S | Profile", // Judul halaman
  metaTitle: "Rez 777 || Profile", // Meta title untuk SEO
  metaDescription: "Profile Website A R E S, Creator and Dev", // Deskripsi meta untuk SEO
  metaKeywords: "Rez 777, A R E S, profile Rez, siapa Rez?", // Keywords meta untuk SEO
  metaRobots: "index, follow", // Pengaturan robot meta untuk SEO
  imageSrc: "media/vynaa.jpg", // Path ke gambar profil
  name: "A R E S", // Nama profil
  occupation: "Creator & Developer", // Pekerjaan atau jabatan
  links: [
    { title: "GitHub", url: "https://github.com/login", icon: "fa fa-buymeacoffee" }, // Tautan GitHub
    { title: "Instagram", url: "https://www.instagram.com/rez_6072/", icon: "fa-instagram" }, // Tautan Instagram
    { title: "Telegram", url: "https://cuty.io/RezTelegram", icon: "fa-telegram" }, // Tautan Telegram
    { title: "Email", url: "mailto:rezocf@gmail.com", icon: "fa-envelope" }, // Tautan Email
    { title: "WhatsApp", url: "https://cuty.io/RezOcf", icon: "fa-whatsapp" } // Tautan WhatsApp
  ]
};

// Mengatur favicon
document.getElementById('favicon').href = profileSettings.favicon;

// Mengatur judul halaman
document.getElementById('title').textContent = profileSettings.title;

// Mengatur meta tags
document.getElementById('meta-title').content = profileSettings.metaTitle;
document.getElementById('meta-description').content = profileSettings.metaDescription;
document.getElementById('meta-keywords').content = profileSettings.metaKeywords;
document.getElementById('meta-robots').content = profileSettings.metaRobots;

// Mengatur gambar profil
document.getElementById('profile-image').src = profileSettings.imageSrc;

// Mengatur nama profil
document.getElementById('profile-name').textContent = profileSettings.name;

// Mengatur teks pekerjaan atau jabatan
document.getElementById('occupation-text').textContent = profileSettings.occupation;

// Mengatur tautan-tautan
const linkBoxes = document.getElementById('link-boxes');
profileSettings.links.forEach(link => {
  // Hanya menambahkan tautan yang tidak kosong
  if (link.title && link.url) {
    const linkElement = document.createElement('a');
    linkElement.href = link.url;
    linkElement.innerHTML = `<i class="fa ${link.icon}" aria-hidden="true"></i> ${link.title}`;
    linkBoxes.appendChild(linkElement);
  }
});
 
