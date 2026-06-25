const card = document.getElementById('tilt-card');

// When the mouse moves over the card
card.addEventListener('mousemove', (e) => {
    // Get the dimensions and position of the card
    const rect = card.getBoundingClientRect();
    
    // Calculate the center point of the card
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    // Calculate mouse position relative to the center
    const mouseX = e.clientX - cardCenterX;
    const mouseY = e.clientY - cardCenterY;
    
    // Map the mouse coordinates to a rotation degree
    // Divide by a higher number to make the tilt more subtle
    const rotateX = (mouseY / (rect.height / 2)) * -15; // Max tilt 15 degrees
    const rotateY = (mouseX / (rect.width / 2)) * 15;   // Max tilt 15 degrees
    
    // Apply the 3D rotation
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// When the mouse leaves, snap the card back to flat with a smooth transition
card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.5s ease-in-out';
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
});

// When the mouse enters, remove the snap-back transition so it tracks instantly
card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.1s ease-out';
});