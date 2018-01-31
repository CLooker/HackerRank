// https://www.hackerrank.com/challenges/cut-the-sticks/problem

// declarative, immutable, recursive
const handleSticks = ({ mutableSticksArr, sticksLeftPerTurn, shortestStick }) => {
  const shortestStickReturned = shortestStick(mutableSticksArr);
  return mutableSticksArr.length > 0 
    ?   handleSticks({
            mutableSticksArr: mutableSticksArr
                .map(stick => stick - shortestStickReturned)
                .filter(stick => stick > 0),
            sticksLeftPerTurn: [...sticksLeftPerTurn, mutableSticksArr.length],
            shortestStick
        }) 
    :   sticksLeftPerTurn
}
const cutTheSticks = arr => (   
    handleSticks({
        mutableSticksArr: [...arr],
        sticksLeftPerTurn: [],
        shortestStick: (stickArr) => stickArr.slice(0).sort((a, b) => a - b)[0]
    })
)

// imperative, immutable
const cutTheSticks = arr => {
    let mutableSticksArr = Object.assign([], arr);
    let shortestStick = (stickArr) => stickArr.sort((a, b) => a - b)[0];
    let sticksLeftPerTurn = [];
    do {
        sticksLeftPerTurn = [...sticksLeftPerTurn, mutableSticksArr.length];
        shortestStickReturned = shortestStick(mutableSticksArr);
        mutableSticksArr = mutableSticksArr
            .map(stick => stick - shortestStickReturned)
            .filter(stick => stick > 0)
    }
    while(mutableSticksArr.length > 0)
    return sticksLeftPerTurn;
}
