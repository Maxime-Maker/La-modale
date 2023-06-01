// recup const
const close = document.querySelector('.btn-close');
const open = document.querySelector('.btn-container');
const over = document.querySelector('.modal-overlay');

open.addEventListener('click', function () {
  over.style.display = 'block';
});

close.addEventListener('click', function () {
  over.style.display = 'none';
});
