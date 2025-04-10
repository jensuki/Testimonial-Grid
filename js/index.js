const toggleBtns = document.querySelectorAll('.toggle-text');

toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const textEl = btn.previousElementSibling;

        textEl.classList.toggle('line-clamp-6');
        btn.textContent = textEl.classList.contains('line-clamp-6') ? 'Read More' : 'Show Less'
    })
})