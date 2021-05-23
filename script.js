const button = document.querySelector('button');

button.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;

  const innerX = x - buttonLeft;
  const innerY = y - buttonTop;
  console.log(innerX, innerY);

  const circle = document.createElement('span');
  circle.classList.add('circle');
  circle.style.top = innerY + 'px';
  circle.style.left = innerX + 'px';

  button.appendChild(circle);
});
