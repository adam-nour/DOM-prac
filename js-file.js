const container = document.querySelector('#container');
const content0 = document.createElement('p');
content0.classList.add('content0');
content0.textContent = 'Hey I’m red!';
content0.style.cssText = 'color: red;'; 
container.appendChild(content0);
const content1 = document.createElement('h3');
content1.classList.add('content1');
content1.textContent = 'I’m a blue h3!';
content1.style.cssText = 'color: blue;';
container.appendChild(content1);
const content2 = document.createElement('div');
content2.classList.add('content2');
content2.style.cssText = 'border-style: solid; border-color: black; background: pink;'; 

const content3 = document.createElement('h1');
content3.classList.add('content3');
content3.textContent = 'I’m in a div';
content2.appendChild(content3);
const content4 = document.createElement('p');
content4.classList.add('content4');
content4.textContent = 'ME TOO!';
content2.appendChild(content4);
container.appendChild(content2);