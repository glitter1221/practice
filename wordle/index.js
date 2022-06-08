let answer = 'abcde';

let answerLine = document.getElementsByClassName('contents');
answerLine[0].classList.add('answerLine');

document.getElementById('retry').addEventListener('click', () => {
    location.reload();
})

document.getElementById('submit').addEventListener('click', () => {
    
    let input = document.getElementsByClassName('input');
    input.map = disabled = true;
    

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
    
    // document.querySelector('contents').insertAdjacentHTML('beforeend', template);

    // 위치까지 맞으면 green box
    // 위치는 틀리면 yellow box
    // 둘 다 아니면 red box

    /*
    만들어야 할 기능 목록
    - 정답 맞출 라인 색 표시하기
    - 정답 맞추기 최대 5회로 제한하기
    - 빈 칸일 때 정답 누르면 경고문과 함께 검사하지 않기
    - 한 칸에 한 글자만 입력할 수 있게 하기
        (maxlength는 입력 후에 삭제하는 방식임 아예 첫 글자만 입력하게 하는 방법?)
    - 정답 여러 개 만들어서 랜덤으로 돌리기
    - 정답 기회를 다 쓰거나 정답을 맞춘 경우 재도전 버튼을 주고
     맞추고 눌렀을 시 다른 정답 랜덤으로,
     틀리고 눌렀을 경우 재도전하기?
    - 정답을 맞추거나 틀렸을 경우 이펙트 혹은 사운드 결과 화면에 출력
    - 혹은 시스템 로그창을 만들어서 사용자에게 텍스트로 알려주기?
    */
});