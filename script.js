'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', function(event) { 
 event.preventDefault(); 
 let target = event.target.parentNode; 
 largeImg.src = target.href;
});

