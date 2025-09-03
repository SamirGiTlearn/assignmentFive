const heartIcons = document.querySelectorAll('.heart');
const heartCountSpan = document.getElementById('love');

heartIcons.forEach(icon => {
  icon.addEventListener('click', function () {
    let count = Number(heartCountSpan.innerText);
    count += 1;
    heartCountSpan.innerText = count;
  });
});






