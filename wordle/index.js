let answer = 'abcde';
document.querySelector('button').addEventListener('click', () => {
    
    let input = document.querySelectorAll('.input');

    for(let i = 0; i < 5; i++) {
        if(input[i].value == answer[i]) {
            input[i].style.background = 'green';
        } else if (answer.includes(input[i].value)) {
            input[i].style.background = 'yellow';
        } else {
            input[i].style.background = 'lightgrey';
        }

        input[i].classList.remove('input');

        // 다 맞으면 정답 공개하기

        let correctCount;

        for(j=0; j<5; j++) {
            if(input[j].style.background == 'green') {
                correctCount++;
            }
        }
        if(correctCount != 5) {
            correctCount = 0;
        } else if (correctCount == 5) {
            // 정답 화면 어떻게 만들지?
        }
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