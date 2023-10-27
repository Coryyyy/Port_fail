/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('click', (event) => {
            const link = item.querySelector('a');
            window.open(link.href, '_blank');
        });
    });
});
