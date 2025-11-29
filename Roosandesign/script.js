document.querySelectorAll('.toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const statusText = toggle.parentElement.querySelector('.status');
    toggle.classList.toggle('on');
    statusText.textContent = toggle.classList.contains('on') ? 'Päällä' : 'Pois';
  });
});
