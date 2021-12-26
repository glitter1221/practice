import './index.css';
// import './index.scss';
import image from './sea.jpg';

console.log(require('./animal.js'));

let sea = document.getElementById('sea');
console.log(sea);

sea.innerHTML = `<img src= '${image}' alt= '바다사진' />`;