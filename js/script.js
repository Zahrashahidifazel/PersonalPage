// ==========================================
// هایلایت لینک فعال هنگام اسکرول
// ==========================================

const sections = document.querySelectorAll('.section1');
const navLinks = document.querySelectorAll('.nav ul li a');

function activateLink() {
    let current = '';
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', activateLink);
window.addEventListener('load', activateLink);


// ==========================================
// اسکرول نرم روی کلیک منو
// ==========================================

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});
// ==========================================
// انیمیشن نوارهای مهارت
// ==========================================

const skillBars = document.querySelectorAll('.skill-progress');

function animateSkills() {
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // وقتی نوار وارد دید کاربر شد، پر بشه
        if (barTop < windowHeight - 100) {
            bar.style.width = level + '%';
        }
    });
}

// اجرا هنگام اسکرول و لود صفحه
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);