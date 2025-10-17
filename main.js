const faqItems = document.querySelectorAll('.faq-item');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})

faqItems.forEach(item => {
    const toggleBtn = item.querySelector('.toggle-btn');
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', e => {
        e.preventDefault();

        if (item.classList.contains('active')) {
            item.classList.remove('active');
            toggleBtn.textContent = '+';
        } else {
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.toggle-btn').textContent = '+';
            });
            item.classList.add('active');
            toggleBtn.textContent = '-';
        }
    });
});