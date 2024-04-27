const btn = document.getElementById('btn');
var colors = ['#000', '#fff', '#008000', '#ffd700']



btn.addEventListener('mouseenter', () => {
    function getRandomColor() {
        var randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
      }
      
      // Получаем случайный цвет
      var randomColor = getRandomColor();

anime({
    targets: btn,
    backgroundColor: randomColor,
    translateX: () => Math.random() * 700,
    translateY: () => Math.random() * 700,
    easing: "easeOutQuint",
    duration: 500
  })
})