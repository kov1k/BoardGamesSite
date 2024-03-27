document.addEventListener("DOMContentLoaded", function() {
    var showButton = document.getElementById('show-image');
    var overlay = document.getElementById('fullscreen-overlay');
    var image = document.getElementById('fullscreen-image');
    var sound = document.getElementById('sound');
    var interval = 40; // Интервал мигания в миллисекундах (меньше значение - быстрее мигание)
  
    sound.volume = 1;
    // При нажатии на кнопку показываем изображение на весь экран и воспроизводим звук
    showButton.addEventListener('click', function() {
      overlay.style.display = 'block';
      sound.play();
      toggleVisibility();
      openFullscreen();
    });

    function openFullscreen() {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
      }
    // Функция для мигания изображения
    function toggleVisibility() {
      var visible = true;
      intervalId = setInterval(function() {
        if (visible) {
          image.style.visibility = 'hidden';
        } else {
          image.style.visibility = 'visible';
        }
        visible = !visible;
      }, interval);
    }
  });
  