const markhorPaperButton = document.getElementById("markhor-paper-info");
const markhorPaperNotice = document.getElementById("markhor-paper-notice");

if (markhorPaperButton && markhorPaperNotice) {
    markhorPaperButton.addEventListener("click", () => {
        const isExpanded =
            markhorPaperButton.getAttribute("aria-expanded") === "true";

        markhorPaperButton.setAttribute(
            "aria-expanded",
            String(!isExpanded)
        );

        markhorPaperNotice.hidden = isExpanded;
    });
}
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    },
    {
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0
    }
);

sections.forEach((section) => observer.observe(section));
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-links");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        navToggle.classList.toggle("active", isOpen);
        navToggle.setAttribute("aria-expanded", String(isOpen));
        navToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    navMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            navToggle.classList.remove("active");
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        });
    });
}