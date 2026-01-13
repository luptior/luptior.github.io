// Modern Fetch API replacement for jQuery .load() method
// Loads HTML content into elements using native Fetch API
(function() {
  'use strict';
  
  async function loadHTML(url, elementId) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const html = await response.text();
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = html;
      } else {
        console.warn(`Element with id "${elementId}" not found`);
      }
    } catch (error) {
      console.error(`Error loading ${url}:`, error);
    }
  }
  
  // Auto-load header and footer when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    const headerElement = document.getElementById('header');
    const footerElement = document.getElementById('footer');
    
    if (headerElement) {
      loadHTML('resources/header.html', 'header');
    }
    if (footerElement) {
      loadHTML('resources/footer.html', 'footer');
    }
  });
})();
