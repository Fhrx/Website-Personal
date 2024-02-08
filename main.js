window.addEventListener('resize', adjustCardWidth);

function adjustCardWidth() {
  var card = document.querySelector('.card');
  var windowWidth = window.innerWidth;
  var cardWidth = windowWidth * 0.8; // Misalnya, kita ingin menjaga lebar kartu menjadi 80% dari lebar jendela

  if (windowWidth > 768) {
    card.style.width = cardWidth + 'px';
  } else {
    // Jika lebar jendela kurang dari 768px, kita batasi lebar kartu maksimum menjadi 640px
    card.style.width = Math.min(cardWidth, 640) + 'px';
  }
}
