(function () {
  const latos = document.getElementsByClassName('lato');
  const score = document.getElementById('score');
  const sound = document.getElementById('sound');
  const arena = document.querySelector('.arena');
  console.log('arena');

  let speed = 7;
  let rotate = 10;
  let isPlay = false;
  let scoreValue = 0;

  arena.onclick = function () {
    if (isPlay) {
      rotate = 10;
      UpdatePosition();
      sound.pause();
    } else {
      sound.play();
    }
    isPlay = !isPlay;
  };

  function UpdateScore() {
    score.innerHTML = `Score: ${scoreValue}`;
  }

  function UpdatePosition() {
    latos[0].style.cssText = `transform: translate(40px,0) rotate(${rotate}deg);`;
    latos[1].style.cssText = `transform: translate(-40px,0) rotate(-${rotate}deg);`;
  }
  function UpdateGame() {
    if (isPlay) {
      rotate += speed;
      scoreValue += 1;
      UpdatePosition();
      UpdateScore();
    }
  }

  //intial call function
  UpdatePosition();
  setInterval(UpdateGame, 10);
})();
