class CubeData {
    constructor() {
        this.cube =
            [
                ["R", "R", "W"],
                ["G", "C", "W"],
                ["G", "B", "B"]
            ]
    }

    up() { //가장 윗줄을 왼쪽으로 한 칸 밀기 RRW -> RWR
        let first = this.cube[0].shift();
        this.cube[0].push(first);
    }

    _up() { //가장 윗줄을 오른쪽으로 한 칸 밀기 RRW -> WRR
        let last = this.cube[0].pop();
        this.cube[0].unshift(last);
    }

    down() { //가장 아랫줄을 오른쪽으로 한 칸 밀기 GBB -> BGB (B의 경우도 U와 방향이 반대임을 주의한다.)
        let last = this.cube[2].pop();
        this.cube[2].unshift(last);
    }

    _down() {  //가장 아랫줄을 왼쪽으로 한 칸 밀기 GBB -> BBG
        let first = this.cube[2].shift();
        this.cube[2].push(first);
    }

    right() { //가장 오른쪽 줄을 위로 한 칸 밀기 WWB -> WBW
        let first = this.cube[0].pop();
        let second = this.cube[1].pop();
        let third = this.cube[2].pop();

        this.cube[0].push(second);
        this.cube[1].push(third);
        this.cube[2].push(first);
    }

    _right() { //가장 오른쪽 줄을 아래로 한 칸 밀기 WWB -> BWW
        let first = this.cube[0].pop();
        let second = this.cube[1].pop();
        let third = this.cube[2].pop();

        this.cube[0].push(third);
        this.cube[1].push(first);
        this.cube[2].push(second);
    }

    left() { //가장 왼쪽 줄을 아래로 한 칸 밀기 RGG -> GRG (L의 경우 R과 방향이 반대임을 주의한다.)
        let first = this.cube[0].shift();
        let second = this.cube[1].shift();
        let third = this.cube[2].shift();

        this.cube[0].unshift(third);
        this.cube[1].unshift(first);
        this.cube[2].unshift(second);
    }

    _left() { //가장 왼쪽 줄을 위로 한 칸 밀기 RGG -> GGR
        let first = this.cube[0].shift();
        let second = this.cube[1].shift();
        let third = this.cube[2].shift();

        this.cube[0].unshift(second);
        this.cube[1].unshift(third);
        this.cube[2].unshift(first);
    }

    play(command) {
        switch (command) {
            case "U":
                this.up();
                break;

            case "U'":
                this._up();
                break;

            case "R":
                this.right();
                break;

            case "R'":
                this._right();
                break;

            case "L":
                this.left();
                break;

            case "L'":
                this._left();
                break;

            case "B":
                this.down();
                break;

            case "B'":
                this._down();
                break;

            case "Q":
                console.log("BYE~")
                break;
        }
    }
}

