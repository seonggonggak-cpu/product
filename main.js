document.addEventListener('DOMContentLoaded', () => {
  const lottoNumbersDiv = document.getElementById('lotto-numbers');
  const generateBtn = document.getElementById('generate-btn');
  const themeBtn = document.getElementById('theme-btn');
  const body = document.body;

  // Initialize theme from local storage
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', savedTheme);
  themeBtn.textContent = savedTheme === 'dark' ? '라이트 모드' : '다크 모드';

  // Lotto number generation logic
  function generateLottoNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
      const num = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    numbers.sort((a, b) => a - b);
    return numbers;
  }

  function displayNumbers(numbers) {
    lottoNumbersDiv.innerHTML = '';
    numbers.forEach(num => {
      const ball = document.createElement('div');
      ball.className = 'ball';
      ball.textContent = num;
      lottoNumbersDiv.appendChild(ball);
    });
  }

  generateBtn.addEventListener('click', () => {
    const numbers = generateLottoNumbers();
    displayNumbers(numbers);
  });

  // Theme toggle logic
  themeBtn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeBtn.textContent = newTheme === 'dark' ? '라이트 모드' : '다크 모드';
  });

  // Generate initial numbers
  displayNumbers(generateLottoNumbers());
});
