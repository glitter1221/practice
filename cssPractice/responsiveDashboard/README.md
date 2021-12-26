# Responsive DashBoard

## from : https://www.youtube.com/watch?v=nUUsUAPEjFc&t=0s



---


### responsive webpage 

+ common
 + when any single row is hovered, it's bg blue and txt white.
 + just only one page look at now
 + it made only html,css and some script(only 8 lines)


+ max-width 991px
 + sidebar toggle text or icon

 ![images1](https://user-images.githubusercontent.com/76437987/145678409-e798477e-bc8a-4689-8343-bb219d9edf80.PNG)
 ![images2](https://user-images.githubusercontent.com/76437987/145678412-1c506a16-0e81-4ad5-86b8-05943407a827.PNG)



+ max-width 768px
 + sidebar toggle icon or nothing

 ![images3](https://user-images.githubusercontent.com/76437987/145678413-fff6923f-ae25-4f6e-af33-a724f07540b9.PNG)
 ![images4](https://user-images.githubusercontent.com/76437987/145678414-95df93cb-9438-423b-a457-a84cb0db9f65.PNG)



+ max-width 500px
 + sidebar toggle all screen or nothing

![images5](https://user-images.githubusercontent.com/76437987/145678415-668b5e09-df23-4e05-8985-932bec57b0a6.PNG)
![images6](https://user-images.githubusercontent.com/76437987/145678417-52266a57-754c-40e3-bdc1-7af09a1153c9.PNG)
![images7](https://user-images.githubusercontent.com/76437987/145678407-7db0f2cb-5aee-4f42-8cb5-2eb988a4d440.PNG)



---
오류 발생.
정확한 원인은 모르지만 다른 폴더에 있던 .gitignore를 복붙했더니 생겼음
그냥 파일 생성으로 만드니 아무런 오류 없음.





warning: LF will be replaced by CRLF in touchSlide/index.css.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in cssPractice/reponsiveDashboard/reponsiveDashboard.css.
The file will have its original line endings in your working directory

warning: LF will be replaced by CRLF in bora.txt.
The file will have its original line endings in your working directory	
경고 : bora.txt에서 LF는CRLF로 대체됩니다.
파일은 작업 디렉토리에 원래 줄 끝이 있습니다.





LF(Line-Feed)
Mac, Linux (Unix 계열) 줄바꿈 문자열 = \n 
ASCII 코드 = 10
커서 위치는 그대로 두고 종이의 한라인 위로 올리는 동작
현재 위치에서 바로 아래로 이동
종이를 한칸올리기
 

CR(Carriage-Return)
Mac 초기 모델 줄바꿈 문자열 = \r
ASCII 코드 = 13
커서 위치를 맨앞으로 옮기는 동작
커서 위치를 앞으로 이동 
 

CRLF (Carriage-Return+Line-Feed)
Windows, DOS 줄바꿈 문자열 = \r\n
CR(\r) + LR(\n) 두 동작을 합쳐서 (\r\n)
커서를 다음라인 맨앞으로 옮겨주는 동작
 

이렇게 플랫폼(OS)마다 줄바꿈을 바라보는 문자열이 다르기에
형상관리를 해주는 Git이 바라볼 땐 둘 중 어느 쪽을 선택할지 몰라 경고 메세지를 띄워준 것.





autocrlf 사용
check-in, check-out할 때 파일을 어떻게 처리할지 설정하는 변수

+ 시스템 전체 적용하고 싶다면 --global 옵션 추가하고
전체가 아닌 해당 프로젝트에만 적용하고싶다면 옵션을 빼주면 됩니다.


core.autocrlf = true
CRLF > LF 변경

core.autocrlf = false
기본 설정
플랫폼(OS) 상관없이 줄바꿈에 대한 문자열 그대로 인식해 저장 (문제발생 가능성 존재)

core.autocrlf = input
LF를 line ending으로 사용한다.





Windows, DOS 명령어
git config --global core.autocrlf true
--> ?? 윈도우인데 true는 fatal: bad boolean config value 'ture' for 'core.autocrlf' 오류 나고 input은 정상 작동함.

Linux, MAC 명령어
git config --global core.autocrlf input