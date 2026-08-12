const cakeBox = document.getElementById('cakeBox');
const candle = document.getElementById('candle');
const wishMessage = document.getElementById('wish-message');
const instruction = document.getElementById('instruction');

cakeBox.addEventListener('click', function() {
  candle.classList.remove('hidden');
  wishMessage.classList.remove('hidden');
  instruction.innerText = " Happy Anniversary "; bgMusic.play(); // သီချင်းစဖွင့်ရန်
});
