document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "×" : "☰";
    });
  }

  document.querySelectorAll(".apply-link").forEach(link => {
    link.addEventListener("click", () => {
      const select = document.getElementById("roleSelect");
      if (select) select.value = link.dataset.role || "";
    });
  });

  const careerForm = document.getElementById("careerForm");
  if (careerForm) careerForm.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(careerForm);
    const subject = encodeURIComponent("Career Application - " + data.get("role"));
    const body = encodeURIComponent(
      "Name: " + data.get("name") + "\nEmail: " + data.get("email") +
      "\nPhone: " + data.get("phone") + "\nPosition: " + data.get("role") +
      "\n\nIntroduction:\n" + (data.get("message") || "") +
      "\n\nI will attach my resume before sending."
    );
    document.getElementById("careerStatus").textContent = "Opening your email app. Please attach your resume before sending.";
    window.location.href = "mailto:bluezinfomatic@gmail.com?subject=" + subject + "&body=" + body;
  });

  const contactForm = document.getElementById("contactForm");
  if (contactForm) contactForm.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const subject = encodeURIComponent("Website Enquiry - " + data.get("interest"));
    const body = encodeURIComponent(
      "Name: " + data.get("name") + "\nEmail: " + data.get("email") +
      "\nInterested in: " + data.get("interest") + "\n\nMessage:\n" + data.get("message")
    );
    document.getElementById("contactStatus").textContent = "Opening your email app. Review the message and press Send.";
    window.location.href = "mailto:bluezinfomatic@gmail.com?subject=" + subject + "&body=" + body;
  });
});