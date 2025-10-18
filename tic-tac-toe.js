window.addEventListener("DOMContentLoaded", () => {
  const squ = document.querySelectorAll("#board div");
  squ.forEach(square => {
    square.classList.add("square");
  });
});
window.addEventListener('DOMContentLoaded', () => {
  const squ = document.querySelectorAll('#board div');
  const stat = document.getElementById('status');
  let activeplayer = 'X';
  let statonboard = Array(9).fill(null); // track board state

  squ.forEach((square, index) => {
    square.classList.add('square');

    square.addEventListener('click', () => {
      if (!statonboard[index]) { // only allow empty squares
        square.textContent = activeplayer;
        square.classList.add(activeplayer);
        statonboard[index] = activeplayer;

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    });
  });
});
window.addEventListener('DOMContentLoaded', () => {
  const squ = document.querySelectorAll('#board div');
  const stat = document.getElementById('status');
  let activeplayer = 'X';
  let statonboard = Array(9).fill(null);

  squ.forEach((square, index) => {
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
      square.classList.add('hover');
    });

    square.addEventListener('mouseout', () => {
      square.classList.remove('hover');
    });

    square.addEventListener('click', () => {
      if (!statonboard[index]) {
        square.textContent = activeplayer;
        square.classList.add(activeplayer);
        statonboard[index] = activeplayer;

        check();

        activeplayer = activeplayer === 'X' ? 'O' : 'X';
      }
    });
  });

  function check() {
  }
});
window.addEventListener('DOMContentLoaded', () => {
  const squ = document.querySelectorAll('#board div');
  const stat = document.getElementById('status');
  let activeplayer = 'X';
  let statonboard = Array(9).fill(null);
  const succomb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  squ.forEach((square, index) => {
    square.classList.add('square');

    square.addEventListener('mouseover', () => square.classList.add('hover'));
    square.addEventListener('mouseout', () => square.classList.remove('hover'));

    square.addEventListener('click', () => {
      if (!statonboard[index] && !check()) {
        square.textContent = activeplayer;
        square.classList.add(activeplayer);
        statonboard[index] = activeplayer;

        if (check()) {
          stat.textContent = `Player ${activeplayer} is the Winner!`;
          stat.classList.add('We have a Winner');
        } else {
          activeplayer = activeplayer === 'X' ? 'O' : 'X';
        }
      }
    });
  });

  function check() {
    return succomb.some(combo => {
      const [a, b, c] = combo;
      return (
        statonboard[a] &&
        statonboard[a] === statonboard[b] &&
        statonboard[a] === statonboard[c]
      );
    });
  }
});
window.addEventListener('DOMContentLoaded', () => {
  const squ = document.querySelectorAll('#board div');
  const stat = document.getElementById('status');
  const button = document.querySelector('.btn');
  let activeplayer = 'X';
  let statonboard = Array(9).fill(null);

  const succomb = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  squ.forEach((square, index) => {
    square.classList.add('square');

    square.addEventListener('mouseover', () => square.classList.add('hover'));
    square.addEventListener('mouseout', () => square.classList.remove('hover'));

    square.addEventListener('click', () => {
      if (!statonboard[index] && !check()) {
        square.textContent = activeplayer;
        square.classList.add(activeplayer);
        statonboard[index] = activeplayer;

        if (check()) {
          stat.textContent = `Player ${activeplayer} is the Winner!`;
          stat.classList.add('We have a Winner');
        } else {
          activeplayer = activeplayer === 'X' ? 'O' : 'X';
        }
      }
    });
  });

  button.addEventListener('click', () => {
    statonboard = Array(9).fill(null);
    activeplayer = 'X';
    squ.forEach(square => {
      square.textContent = '';
      square.classList.remove('X', 'O');
    });
    stat.textContent = 'Place mouse over square and click for X or O.';
    stat.classList.remove('We have a winner');
  });

  function check() {
    return succomb.some(([a, b, c]) => {
      return statonboard[a] && statonboard[a] === statonboard[b] && statonboard[a] === statonboard[c];
    });
  }
});