const profiles = document.querySelectorAll('.profile');

profiles.forEach(profile => {
    profile.addEventListener('mouseenter', () => {
        profile.style.transform = 'scale(1.02)';
        profile.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
        profile.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });

    profile.addEventListener('mouseleave', () => {
        profile.style.transform = 'scale(1)';
        profile.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
});
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.profile');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.8) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        } else {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
        }
    });
});