// OHRA UI Landing Page Script

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Typing effect for the main message
    const mainMessage = document.querySelector('.text-3xl');
    const originalText = mainMessage.textContent;
    
    // Apply a simple fade-in effect to the whole page
    fadeInPage();
    
    // Add hover sound effect to buttons (only if user has interacted with page)
    setupButtonEffects();
});

// Module for page animations
const fadeInPage = () => {
    const mainContent = document.querySelector('.text-center');
    
    // Start with opacity 0
    mainContent.style.opacity = '0';
    
    // Simple fade in animation
    let opacity = 0;
    const fadeInInterval = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.05;
            mainContent.style.opacity = opacity;
        } else {
            clearInterval(fadeInInterval);
        }
    }, 30);
};

// Module for button interactions
const setupButtonEffects = () => {
    const buttons = document.querySelectorAll('a');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            // Add a subtle scale effect on hover
            button.style.transform = 'translateY(-2px) scale(1.03)';
            button.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
        });
        
        button.addEventListener('mouseleave', () => {
            // Restore original state
            button.style.transform = '';
            button.style.boxShadow = '';
        });
    });
}; 