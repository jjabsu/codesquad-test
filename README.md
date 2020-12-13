# 루빅스 큐브 구현하기
<br>

# 1. 단어 밀어내기 구현
## 동작과정
 1. prompt로 단어 방향 얼만큼 움직일지 받는다.
 2. 음수 일경우 절대값으로 만들어준 뒤 방향을 반대로 만들어준다.

<br>
<br>

# 2. 평면 큐브 구현하기
## 동작과정 
 1. 각 명령어마다 push pop unshift shift를 이용해 함수구현
 2. 명령어에 '(어퍼스트로피)가 있는 경우에는 조건문으로 '앞에 엘리먼트에 '를 추가 한후 splice를 이용해서 '를 제거하였다.

<br>
<br>

# 3. 루빅스 큐브 구현하기
## 동작과정
 1. 전개도를 참고해서 각 명령어마다 2차원 배열의 어디가 움직이는지 파악한 했다.
 2. 행에서 행으로 움직이는 경우는 그냥 넣어주었다.
 3. 열에서 행으로 움직이는 경우는 열만 따로 뽑아서 배열을 만들어 준 뒤 다시 행으로 넣어주었다.
 4. 명령어에 '(어퍼스트로피)가 있는 경우에는 조건문으로 '앞에 엘리먼트에 '를 추가 한후 splice를 이용해서 '를 제거하였다.
 5. 경과시간은 처음화면이 띄어질때 Data.now()로 setTime을 해준뒤 Q입력시 getTime으로 경과시간을 구하였다.
 6. 랜덤으로 섞어주는 기능은 Math.random으로 임의의 값을 입력 받은 다음 for문으로 랜덤으로 나온 수만큼 각 명령어를 실행시키도록 하였다.
<br>

## 실행결과

![step3_1]https://github.com/jjabsu/codesquad-test/blob/main/%EC%9E%85%EB%A0%A5.png
![step3_2]https://github.com/jjabsu/codesquad-test/blob/main/%EB%9E%9C%EB%8D%A4.png
![step3_3]https://github.com/jjabsu/codesquad-test/blob/main/%EA%B2%BD%EA%B3%BC%EC%8B%9C%EA%B0%84.png
