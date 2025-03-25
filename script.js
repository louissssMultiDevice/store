document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        alert(`Kamu memilih: ${item.querySelector('h3').textContent}`);
    });
});
