/**
 * BLORIEN Brand System - Interactive Features
 * Main JavaScript file for enhanced user interactions
 */

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
  console.log('BLORIEN Brand System loaded successfully');

  // Initialize interactive features
  initializeInteractiveFeatures();
});

/**
 * Initialize all interactive features
 */
function initializeInteractiveFeatures() {
  // Add smooth scrolling for better UX
  addSmoothScrolling();

  // Add hover effects for better feedback
  addEnhancedHoverEffects();

  // Add copy-to-clipboard functionality for color codes
  addColorCodeCopyFeature();
}

/**
 * Add smooth scrolling behavior
 */
function addSmoothScrolling() {
  // Enable smooth scrolling for the entire document
  document.documentElement.style.scrollBehavior = 'smooth';
}

/**
 * Add enhanced hover effects
 */
function addEnhancedHoverEffects() {
  // Add subtle animation to usage cards
  const usageCards = document.querySelectorAll('.usage-card');
  usageCards.forEach((card) => {
    card.addEventListener('mouseenter', function () {
      this.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
    });
  });
}

/**
 * Add copy-to-clipboard functionality for color codes
 */
function addColorCodeCopyFeature() {
  const colorCodes = document.querySelectorAll('.color-code');

  colorCodes.forEach((colorCode) => {
    // Make color codes clickable
    colorCode.style.cursor = 'pointer';
    colorCode.title = 'Click to copy color code';

    colorCode.addEventListener('click', function () {
      const colorValue = this.textContent.trim();

      // Copy to clipboard
      navigator.clipboard
        .writeText(colorValue)
        .then(() => {
          // Show feedback
          showCopyFeedback(this, colorValue);
        })
        .catch((err) => {
          console.error('Failed to copy color code:', err);
        });
    });
  });
}

/**
 * Show copy feedback
 */
function showCopyFeedback(element, copiedText) {
  const originalText = element.textContent;
  element.textContent = 'Copied!';
  element.style.color = '#10b981';

  setTimeout(() => {
    element.textContent = originalText;
    element.style.color = '';
  }, 1500);
}

/**
 * Utility function to add fade-in animation to elements when they come into view
 */
function addScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all usage cards
  document.querySelectorAll('.usage-card').forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}
