let answer = 'abcde';
document.querySelector('button').addEventListener('click', () => {
    
    let input = document.querySelectorAll('.input');

    for(let i = 0; i < 5; i++) {
        if(input[0].value == answer[0]) {
            input[0].style.background = 'green';
        } else if (answer.includes(input[0].value)) {
            input[0].style.background = 'yellow';
        } else {
            input[0].style.background = 'lightgrey';
        }

        input[i].classList.remove('input');
    }

    let template = `<div>
        <input class="input">
        <input class="input">
        <input class="input">
        <input class="input">
        <input class="input">
    </div>`;
    document.querySelector('body').insertAdjacentHTML('beforeend', template);

    // 위치까지 맞으면 green box
    // 위치는 틀리면 yellow box
    // 둘 다 아니면 lightgrey box
});