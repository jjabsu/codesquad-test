//left
let o = [
    ["o", "o", "o"],
    ["o", "o", "o"],
    ["o", "o", "o"]
]

//front
let g = [
    ["g", "g", "g"],
    ["g", "g", "g"],
    ["g", "g", "g"]
]

//up
let w = [
    ["w", "w", "w"],
    ["w", "w", "w"],
    ["w", "w", "w"]
]

//right
let r = [
    ["r", "r", "r"],
    ["r", "r", "r"],
    ["r", "r", "r"]
]

//down
let y = [
    ["y", "y", "y"],
    ["y", "y", "y"],
    ["y", "y", "y"]
]

//bottom
let b = [
    ["b", "b", "b"],
    ["b", "b", "b"],
    ["b", "b", "b"]
]



//열만 뽑아서 배열로 만들어주는 함수
function makeColumn(color, num) {
    let temp = [];
    for (let i = 0; i < 3; i++) {
        temp.push(color[i][num])
    }
    return temp;
}


//배열을 0번째 세로에 넣기
function addToColumn0(arr, color) {
    for (let i = 0; i < 3; i++) {
        color[i].shift();
        color[i].unshift(arr[i])
    }
}

//배열을 2번째 세로에 넣기
function addToColumn2(arr, color) {
    for (let i = 0; i < 3; i++) {
        color[i].pop();
        color[i].push(arr[i])
    }
}

//배열 시계방향회전
function clockRotate(side) {
    let temp = [
        [],
        [],
        []
    ]
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            temp[i][j] = side[3 - j - 1][i]
        }
    }
    return temp
}

//배열 반시계방향회전
function counterClockRotate(side) {
    let temp = [
        [],
        [],
        []
    ]
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            temp[i][j] = side[j][3 - i - 1]
        }
    }
    return temp
}


//앞면 시계방향
function frontClockWise() {
    let oStorage = makeColumn(o, 2)
    let wStorage = w[2]
    let rStorage = makeColumn(r, 0)
    let yStorage = y[0]

    w[2] = oStorage
    addToColumn0(wStorage, r)
    y[0] = rStorage
    addToColumn2(yStorage, o)
    g = clockRotate(g)
}

//앞면 반시계방향
function frontInverted() {
    let oStorage = makeColumn(o, 2)
    let wStorage = w[2]
    let rStorage = makeColumn(r, 0)
    let yStorage = y[0]

    w[2] = rStorage
    addToColumn0(yStorage, r)
    y[0] = oStorage
    addToColumn2(wStorage, o)
    g = counterClockRotate(g)
}

function rightClockWise() {
    let wStorage = makeColumn(w, 2)
    let gStorage = makeColumn(g, 2)
    let yStorage = makeColumn(y, 2)
    let bStorage = makeColumn(b, 0)

    addToColumn2(gStorage, w)
    addToColumn2(yStorage, g)
    addToColumn2(bStorage, y)
    addToColumn0(wStorage, b)
    r = clockRotate(r)
}

function rightInverted() {
    let wStorage = makeColumn(w, 2)
    let gStorage = makeColumn(g, 2)
    let yStorage = makeColumn(y, 2)
    let bStorage = makeColumn(b, 0)

    addToColumn2(bStorage, w)
    addToColumn2(wStorage, g)
    addToColumn2(gStorage, y)
    addToColumn0(yStorage, b)
    r = counterClockRotate(r)
}

function upClockWise() {
    let oStorage = o[0]
    let gStorage = g[0]
    let rStorage = r[0]
    let bStorage = b[0]

    o[0] = gStorage
    g[0] = rStorage
    r[0] = bStorage
    b[0] = oStorage
    w = clockRotate(w)
}

function upInverted() {
    let oStorage = o[0]
    let gStorage = g[0]
    let rStorage = r[0]
    let bStorage = b[0]

    o[0] = bStorage
    g[0] = oStorage
    r[0] = gStorage
    b[0] = rStorage
    w = counterClockRotate(w)
}

function bottomClockWise() {
    let oStorage = makeColumn(o, 0)
    let wStorage = w[0]
    let rStorage = makeColumn(r, 2)
    let yStorage = y[2]

    addToColumn0(wStorage, o)
    w[0] = rStorage
    addToColumn2(yStorage, r)
    y[2] = oStorage
    b = clockRotate(b)
}

function bottomInverted() {
    let oStorage = makeColumn(o, 0)
    let wStorage = w[0]
    let rStorage = makeColumn(r, 2)
    let yStorage = y[2]

    addToColumn0(yStorage, o)
    w[0] = oStorage
    addToColumn2(wStorage, r)
    y[2] = rStorage
    b = counterClockRotate(b)
}

function leftClockWise() {
    let wStorage = makeColumn(w, 0)
    let gStorage = makeColumn(g, 0)
    let yStorage = makeColumn(y, 0)
    let bStorage = makeColumn(b, 2)

    addToColumn0(bStorage, w)
    addToColumn0(wStorage, g)
    addToColumn0(gStorage, y)
    addToColumn2(yStorage, b)
    o = clockRotate(o)
}

function leftInverted() {
    let wStorage = makeColumn(w, 0)
    let gStorage = makeColumn(g, 0)
    let yStorage = makeColumn(y, 0)
    let bStorage = makeColumn(b, 2)

    addToColumn0(gStorage, w)
    addToColumn0(yStorage, g)
    addToColumn0(bStorage, y)
    addToColumn2(wStorage, b)
    o = counterClockRotate(o)
}

function downClockWise() {
    let oStorage = o[2]
    let gStorage = g[2]
    let rStorage = r[2]
    let bStorage = b[2]

    o[2] = bStorage
    g[2] = oStorage
    r[2] = gStorage
    b[2] = rStorage
    y = clockRotate(y)
}

function downInverted() {
    let oStorage = o[2]
    let gStorage = g[2]
    let rStorage = r[2]
    let bStorage = b[2]

    o[2] = gStorage
    g[2] = rStorage
    r[2] = bStorage
    b[2] = oStorage
    y = counterClockRotate(y)
}
////////////////////////////////////////////////////////////////////////////



function checkCommand(input) {

    switch (input) {
        case ("F"):
            frontClockWise()
            break;

        case ("F'"):
            frontInverted();
            break;

        case ("R"):
            rightClockWise()
            break;

        case ("R'"):
            rightInverted()
            break;

        case ("U"):
            upClockWise()
            break;

        case ("U'"):
            upInverted()
            break;

        case ("B"):
            bottomClockWise()
            break;

        case ("B'"):
            bottomInverted()
            break;

        case ("L"):
            leftClockWise()
            break;

        case ("L'"):
            leftInverted()
            break;

        case ("D"):
            downClockWise()
            break;

        case ("D'"):
            downInverted()
            break;

        case "Q":
            getTime();
            printEndComment();
            break;
    }
}

/////////////////////////////////////////////////////////////////////////////////
let command = document.querySelector("#command")
let commandBtn = document.querySelector("#commandBtn")
let init = document.querySelector("#init")
let totalCommand = document.querySelector("#totalCommand")
let play = document.querySelector("#play")
let mixBtn = document.querySelector("#mixBtn")
let allCommandArr = [];
let commandArr = [];

commandBtn.onclick = function () {
    commandArr = command.value.split("")
    for (let i = 0; i < commandArr.length; i++) {
        if (commandArr[i] === "'") {
            commandArr[i - 1] += "'";
            commandArr.splice(i, 1)
        }
    }
    console.log(commandArr)
    for (let i = 0; i < commandArr.length; i++) {
        checkCommand(commandArr[i]);
        printView(commandArr[i]);
        allCommandArr.push(commandArr[i])
    }
    totalCommand.innerHTML = `입력한 커맨드 CUBE>> ${commandArr.join("")}`;
    command.value = '';
}


init.innerHTML = `(초기 상태 출력)<br> &emsp;&emsp;&emsp;${w[0].join(" ")}<br>&emsp;&emsp;&emsp;${w[1].join(" ")} <br>&emsp;&emsp;&emsp;${w[2].join(" ")}<br>
                    ${o[0].join(" ")}&nbsp${g[0].join(" ")}&nbsp${r[0].join(" ")}&nbsp${b[0].join(" ")} <br>
                    ${o[1].join(" ")}&nbsp${g[1].join(" ")}&nbsp${r[1].join(" ")}&nbsp${b[1].join(" ")} <br>
                    ${o[2].join(" ")}&nbsp${g[2].join(" ")}&nbsp${r[2].join(" ")}&nbsp${b[2].join(" ")} <br>
                    &emsp;&emsp;&emsp;${y[0].join(" ")}<br>&emsp;&emsp;&emsp;${y[1].join(" ")} <br>&emsp;&emsp;&emsp;${y[2].join(" ")}<br>`

function printView(command) {
    let div = document.createElement("div")
    div.innerHTML = `<br>현재 커맨드${command}<br><br> &emsp;&emsp;&emsp;${w[0].join(" ")}<br>&emsp;&emsp;&emsp;${w[1].join(" ")} <br>&emsp;&emsp;&emsp;${w[2].join(" ")}<br>
                    ${o[0].join(" ")}&nbsp${g[0].join(" ")}&nbsp${r[0].join(" ")}&nbsp${b[0].join(" ")} <br>
                    ${o[1].join(" ")}&nbsp${g[1].join(" ")}&nbsp${r[1].join(" ")}&nbsp${b[1].join(" ")} <br>
                    ${o[2].join(" ")}&nbsp${g[2].join(" ")}&nbsp${r[2].join(" ")}&nbsp${b[2].join(" ")} <br>
                    &emsp;&emsp;&emsp;${y[0].join(" ")}<br>&emsp;&emsp;&emsp;${y[1].join(" ")} <br>&emsp;&emsp;&emsp;${y[2].join(" ")}<br>`
    play.appendChild(div)
}


function printEndComment() {
    play.innerHTML = `경과시간: ${getTime()}<br>
                    조작갯수: ${allCommandArr.length} <br>
                    이용해주셔서 감사합니다.`

}

//섞기 기능

mixBtn.onclick = scramble;
let startTime;

function scramble() {
    let randomNum = Math.floor(Math.random() * 10)

    for (let i = 0; i < randomNum; i++) {
        frontClockWise()
        rightClockWise()
        leftClockWise()
        bottomClockWise()
        downClockWise()
        upClockWise()
    }
    init.innerHTML = `섞임<br> &emsp;&emsp;&emsp;${w[0].join(" ")}<br>&emsp;&emsp;&emsp;${w[1].join(" ")} <br>&emsp;&emsp;&emsp;${w[2].join(" ")}<br>
                    ${o[0].join(" ")}&nbsp${g[0].join(" ")}&nbsp${r[0].join(" ")}&nbsp${b[0].join(" ")} <br>
                    ${o[1].join(" ")}&nbsp${g[1].join(" ")}&nbsp${r[1].join(" ")}&nbsp${b[1].join(" ")} <br>
                    ${o[2].join(" ")}&nbsp${g[2].join(" ")}&nbsp${r[2].join(" ")}&nbsp${b[2].join(" ")} <br>
                    &emsp;&emsp;&emsp;${y[0].join(" ")}<br>&emsp;&emsp;&emsp;${y[1].join(" ")} <br>&emsp;&emsp;&emsp;${y[2].join(" ")}<br>`
    startTime = setTime()
}



//초기화
let reset = document.querySelector("#reset")
reset.onclick = function () {
    let o = [
        ["o", "o", "o"],
        ["o", "o", "o"],
        ["o", "o", "o"]
    ]

    let g = [
        ["g", "g", "g"],
        ["g", "g", "g"],
        ["g", "g", "g"]
    ]

    let w = [
        ["w", "w", "w"],
        ["w", "w", "w"],
        ["w", "w", "w"]
    ]

    let r = [
        ["r", "r", "r"],
        ["r", "r", "r"],
        ["r", "r", "r"]
    ]

    let y = [
        ["y", "y", "y"],
        ["y", "y", "y"],
        ["y", "y", "y"]
    ]

    let b = [
        ["b", "b", "b"],
        ["b", "b", "b"],
        ["b", "b", "b"]
    ]

    init.innerHTML = `초기화<br> &emsp;&emsp;&emsp;${w[0].join(" ")}<br>&emsp;&emsp;&emsp;${w[1].join(" ")} <br>&emsp;&emsp;&emsp;${w[2].join(" ")}<br>
                    ${o[0].join(" ")}&nbsp${g[0].join(" ")}&nbsp${r[0].join(" ")}&nbsp${b[0].join(" ")} <br>
                    ${o[1].join(" ")}&nbsp${g[1].join(" ")}&nbsp${r[1].join(" ")}&nbsp${b[1].join(" ")} <br>
                    ${o[2].join(" ")}&nbsp${g[2].join(" ")}&nbsp${r[2].join(" ")}&nbsp${b[2].join(" ")} <br>
                    &emsp;&emsp;&emsp;${y[0].join(" ")}<br>&emsp;&emsp;&emsp;${y[1].join(" ")} <br>&emsp;&emsp;&emsp;${y[2].join(" ")}<br>`

    play.innerHTML = ''
    totalCommand.innerHTML = ''
}

function setTime() {
    return Date.now();
}

function getTime() {
    let time = (Date.now() - startTime) / 1000;
    let minute = Math.floor(time / 60);
    let second = Math.floor((time / 60 - minute) * 60);
    minute = minute.toString().length === 1 ? "0" + minute : minute;
    second = second.toString().length === 1 ? "0" + second : second;
    return `${minute}:${second}`;
}