const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const isActive = header.classList.contains('active');

        document.querySelectorAll('.accordion-header.active').forEach(openHeader => {
            openHeader.classList.remove('active');
            openHeader.nextElementSibling.style.display = 'none';
        });

        if (!isActive) {
            header.classList.add('active');
            header.nextElementSibling.style.display = 'block';
        }
    });
});