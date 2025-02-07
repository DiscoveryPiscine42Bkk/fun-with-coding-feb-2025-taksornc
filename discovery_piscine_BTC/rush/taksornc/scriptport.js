const hero = document.querySelector('.hero');
hero.style.opacity = 0; 

window.addEventListener('load', () => {
  setTimeout(() => { 
    hero.style.transition = 'opacity 1s ease-in'; 
    hero.style.opacity = 10; 
  }, 200); 
});

const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
});

const projectCards = document.querySelectorAll('.activity-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.1)'; 
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; 
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)'; 
    card.style.boxShadow = 'none'; 
  });
});

const skills = document.querySelectorAll('.skill-item');

skills.forEach(skill => {
    skill.style.width = '0%'; 
    skill.style.transition = 'width 1s ease-out'; 

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillName = skill.textContent;
                let widthPercentage = 0;
                switch (skillName) {
                    case 'PYTHON': widthPercentage = 90; break;
                    case 'HTML': widthPercentage = 85; break;
                    case 'CSS': widthPercentage = 75; break;
                    case 'SQL': widthPercentage = 60; break;
                    case 'JAVA': widthPercentage = 50; break;
                    case 'JAVASCRIPT': widthPercentage = 50; break;
                    default: widthPercentage = 50; 
                }

                skill.style.width = widthPercentage + '%';
                observer.unobserve(skill); 
            }
        });
    });

    observer.observe(skill);
});

