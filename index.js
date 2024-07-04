let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let boxes = document.querySelectorAll('.box');
let infoDiv = document.getElementById('info');
let closeB = document.getElementById('closeBtn');
let infoContent = document.getElementById('infoContent');
let text;

boxes.forEach(box => {
     box.addEventListener('click', () => {
        switch(box.id){
            case 'box1':
                text = 'question 1'
                break;
            case 'box2':
                text = 'question 2'
                break;
            case 'box3':
                text = 'question 3'
                break;
        }
        document.querySelector('#infoContent').textContent = text;
        infoDiv.style.display = 'flex';
    });
});

closeB.addEventListener('click', () => {
    infoDiv.style.display = 'none';
});