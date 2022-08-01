let answer = 'abcde';

let contents = document.getElementsByClassName('contents');
contents[0].classList.add('answerLine');

document.getElementById('retry').addEventListener('click', () => {
    location.reload();
    alert("재도전!");
})

document.getElementById('submit').addEventListener('click', () => {
    
    for(let i in contents) {
        contents[i].classList.add('answerLine');
    }

    // getElementsByClassName은 Object라 forEach 안됨, disabled는 하나씩 하면 가능

    // for(let i = 0; i < 5; i++) {
    //     if(input[i].value === answer[i]) {
    //         input[i].style.background = 'green';
    //     } else if (answer.includes(input[i].value)) {
    //         input[i].style.background = 'yellow';
    //     } else {
    //         input[i].style.background = 'red';
    //     }
    //     answerLine[i].classList.remove('answerLine');
    // }

    /*
    만들어야 할 기능 목록
    - 정답 맞출 라인 색 제출 버튼과 함께 한 줄씩 내려가기
    - 제출 버튼 누를 때마다 한 줄씩 disabled 하기
    - 빈 칸일 때 정답 누르면 경고문과 함께 검사하지 않기
    - 정답 여러 개 만들어서 랜덤으로 돌리기
    - 정답 기회를 다 쓰거나 정답을 맞춘 경우 재도전 버튼을 주고
     맞추고 눌렀을 시 다른 정답 랜덤으로, 랜덤문 사용?
     틀리고 눌렀을 경우 재도전하기?
    - 정답을 맞추거나 틀렸을 경우 이펙트 혹은 사운드 결과 화면에 출력
    - 혹은 시스템 로그창을 만들어서 사용자에게 텍스트로 알려주기?
    */
});