# 1. Corona Chart(코로나 현황)
## tech stack : css, react
## library react-chart-js2, axios
### chart 1. Monthly accumulative confirmed
### chart 2. Monthly qurantined
### chart 3. Monthly death
### chart 4. South-Korea accumulative confirmed

 주요 에러
 1. TypeError: Cannot read properties of undefined (reading 'map')
  이유 : 함수 map이 데이터가 들어오기 전 렌더링을 하느라 undefined로 실행함
  해결 방법 : map의 0번 인덱스를 초기화 하거나 xxx && xxx.map으로 true 조건 넣어주기

  2. Failed to load resource: the server responded with a status of 429 ()
  이유 : api에서 데이터 요청 횟수 초과
  해결 방법 : 다음을 기약한다.
  
---

