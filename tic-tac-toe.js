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