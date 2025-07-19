document.addEventListener("DOMContentLoaded", function () {
  const fadeEl = document.getElementById('apply-section');

  function onScroll() {
    const rect = fadeEl.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight * 0.9 && rect.bottom >= 0) {
      fadeEl.classList.add('is-visible');
      // Optionally remove the event listener if you only want this to happen once
      window.removeEventListener('scroll', onScroll);
    }
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // Trigger on page load in case already visible
});
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        steiner: ['Steinerlight', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
    fetch('https://internships-api.p.rapidapi.com/active-jb-7d', {
  headers: {
    'X-API-Key': 'your_api_key' // Only if key is required
  }
})
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('opportunities-list');
    container.innerHTML = '';
    data.forEach(opportunity => {
      const card = document.createElement('div');
      card.className = 'bg-white rounded-2xl shadow-xl p-6 mb-6';
      card.innerHTML = `
        <h2 class="text-xl font-bold mb-2">${opportunity.title}</h2>
        <p class="text-gray-600 mb-2">${opportunity.company_name}</p>
        <span class="text-sm text-gray-500 mb-4">${opportunity.location}</span>
        <a href="${opportunity.url}" class="mt-auto bg-black text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition" target="_blank">Apply Now</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Failed to fetch internships:', error);
  });
const card = document.createElement('div');
card.className = 'bg-white rounded-2xl shadow-xl p-6 mb-6';
card.innerHTML = `
  <h2 class="text-xl font-bold mb-2">${opportunity.title}</h2>
  <p class="text-gray-600 mb-2">${opportunity.company_name}</p>
  <span class="text-sm text-gray-500 mb-4">${opportunity.location}</span>
  <a href="${opportunity.url}" target="_blank" class="mt-auto bg-black text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition">
    Apply Now
  </a>
`;


