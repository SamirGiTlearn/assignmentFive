
const callBtns = document.querySelectorAll('#contact-icon');
const coinSpan = document.getElementById('coin');
const historyList = document.getElementById('historyList');

callBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    // parent card kojoh
    const contactBox = btn.closest('.contact');
    const title = contactBox.querySelector('h2').innerText;
    const number = contactBox.querySelector('h1').innerText;

    // current coins pawya
    let coins = Number(coinSpan.innerText);

    // Check coin balance
    if (coins < 20) {
      alert("Not enough coins to make a call! pleace top up coint");
      return;
    }

    //  alert Show koro sate service name and number thakbe
    alert(`Are you sure you want to call ${title} (${number})?`);

    // per call 20 coin kete naw
    coins -= 20;
    coinSpan.innerText = coins;

    // Get current time
    const now = new Date();
    const timeString = now.toLocaleTimeString();

    // Add call details theke  history te  time add koro
    const li = document.createElement('li');
    li.className = "text-gray-800 text-sm py-1";
    li.innerText = `Called ${title} (${number}) at ${timeString}`;
    historyList.appendChild(li);
  });
});


// clear buttone click korle all history clear hoye zabe
const clearBtn = document.getElementById('clear-history');
if (clearBtn && historyList) {
  clearBtn.addEventListener('click', function () {
    historyList.innerHTML = '   ';
  });
}