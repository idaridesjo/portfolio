document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("mainNavbar");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 450) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
});

// Hämta knapp
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
    // Kontrollera om skärmen är bredare än 768px
    if (window.innerWidth > 768) {
        // Visa knapp när användare skrollat förbi hero-sektionen (300px)
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    } else {
        // Dölj knappen på mindre skärmar
        backToTopBtn.style.display = "none";
    }
});

// Skrolla tillbaka till toppen (smooth)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Kontaktformulär
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('feedback').style.display = "inline"; // Visa feedback
    this.reset(); // Töm formulär
});

// Slutlig prototyp video
function playVideo02(element) {
    const videoId = element.getAttribute('data-video-id');
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', `https://www.youtube.com/embed/Cvg_F-E-sFM?si=92UPk2Dr-8kaUi5Z`);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.classList.add('w-100', 'h-100'); // Gör iframen responsiv
    element.replaceWith(iframe); // Byt ut div:en mot iframe
}

// Gör texten klickbar på mobil
document.querySelectorAll('.hover-text').forEach(element => {
    element.addEventListener('click', function () {
        // Växla klassen 'active' för att visa/dölja bilden
        this.classList.toggle('active');
    });
});