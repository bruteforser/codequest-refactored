const showDate = new Date().toString();
const dateEl = document.createElement('div');
dateEl.textContent = showDate;
const heroSection = document.getElementById('hero-section-ctn');
heroSection.appendChild(dateEl);