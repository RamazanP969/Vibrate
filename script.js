function vibrateSOS() {
    const pattern = [200, 200, 200, 600, 600, 600, 200, 200, 200]; // Длительности вибраций для SOS
    navigator.vibrate(pattern); // Вызов вибрации с заданным шаблоном
  }
  
  function vibrateFor3Seconds() {
    navigator.vibrate(3000); // Вибрация на 3 секунды
  }
  