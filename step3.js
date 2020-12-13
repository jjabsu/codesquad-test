


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
