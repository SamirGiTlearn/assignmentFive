
const copyIcons = document.querySelectorAll('#copy-icon');
const copyCountSpan = document.getElementById('copy');

copyIcons.forEach(icon => {
  icon.addEventListener('click', function () {
    // Find the hotline number in the same card (assumes <h1> contains the number)
    const card = icon.closest('.contact');
    const hotline = card.querySelector('h1').innerText.trim();

    // Copy to clipboard
    navigator.clipboard.writeText(hotline);

    // Show alert
    alert('Hotline number copied!');

    // Increase copy count in navbar
    let count = Number(copyCountSpan.innerText);
    count += 1;
    copyCountSpan.innerText = count;
  });
});







