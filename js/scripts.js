document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("mainNavbar");
    // Visar eller döljer bakgrunden till nav utifrån position (efter hero-bild)
    window.addEventListener("scroll", function () {
      if (window.scrollY > 450) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
});

// Hämta tillbaka till toppen-knapp
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

// Hantering av att skicka kontaktformulär
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // // Förhindrar att formuläret skickas
    document.getElementById('feedback').style.display = "inline"; // Visa feedback-meddelande
    this.reset(); // Töm formulär
});

// Projektsida - Spela upp prototyp-video när användare klickar på thumbnail-bild
function playVideo02(element) {
    const videoId = element.getAttribute('Cvg_F-E-sFM');
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', `https://www.youtube.com/embed/Cvg_F-E-sFM?si=92UPk2Dr-8kaUi5Z`);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.classList.add('w-100', 'h-100'); // Gör iframe responsiv
    element.replaceWith(iframe); // Byter ut video-thumbnail div mot iframe
}

// About me - Gör texten 'hobbies' klickbar på mobil
document.querySelectorAll('.hover-text').forEach(element => {
    element.addEventListener('click', function () {
        // Byter till 'active' för att visa/dölja bilden
        this.classList.toggle('active');
    });
});