let answer = 'abcde';
document.querySelector('button').addEventListener('click', () => {
    
    let input = document.querySelectorAll('.input');

    for(let i = 0; i < 5; i++) {
        if(input[i].value == answer[i]) {
            input[i].style.background = 'green';
        } else if (answer.includes(input[i].value)) {
            input[i].style.background = 'yellow';
        } else {
            input[i].style.background = 'red';
        }

        input[i].classList.remove('input');


        // 정답 기회 5번 기능?
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
    // 둘 다 아니면 red box

    /*
    만들어야 할 기능 목록
    1. 정답 맞추기 최대 5회로 제한하기
    2. 빈 칸일 때 정답 누르면 경고문과 함께 검사하지 않기
    3. 한 칸에 한 글자만 입력할 수 있게 하기
    4. 정답 여러 개 만들어서 랜덤으로 돌리기
    5. 정답 기회를 다 쓰거나 정답을 맞춘 경우 재도전 버튼을 주고
     맞추고 눌렀을 시 다른 정답 랜덤으로,
     틀리고 눌렀을 경우 재도전하기?
    6. 정답을 맞추거나 틀렸을 경우 이펙트 혹은 사운드 결과 화면에 출력
    6-2. 혹은 시스템 로그창을 만들어서 사용자에게 텍스트로 알려주기?
    */
});