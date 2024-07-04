let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let boxes = document.querySelectorAll('.box');



boxes.forEach(box => {
     box.addEventListener('click', () => {
        let text;
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
        console.log(text);
    });
});