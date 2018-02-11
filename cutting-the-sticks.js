// https://www.hackerrank.com/challenges/cut-the-sticks/problem

// declarative, immutable, recursive, ES6 arrow IIFE, implicit return
const cutTheSticks = arr =>
  (handleSticks = ({ sticks, sticksLeftPerTurn, findShortestStick }) => (
    (shortestStick = findShortestStick(sticks)),
    sticks.length > 0
      ? handleSticks({
          sticks: sticks
            .map(stick => stick - shortestStick)
            .filter(stick => stick > 0),
          sticksLeftPerTurn: [...sticksLeftPerTurn, sticks.length],
          findShortestStick
        })
      : sticksLeftPerTurn
  ))({
    sticks: [...arr],
    sticksLeftPerTurn: [],
    findShortestStick: stickArr => stickArr.slice(0).sort((a, b) => a - b)[0]
  });

// declarative, immutable, recursive, ES6 arrow IIFE
const cutTheSticks = arr =>
  (handleSticks = ({ sticks, sticksLeftPerTurn, findShortestStick }) => {
    const shortestStick = findShortestStick(sticks);
    return sticks.length > 0
      ? handleSticks({
          sticks: sticks
            .map(stick => stick - shortestStick)
            .filter(stick => stick > 0),
          sticksLeftPerTurn: [...sticksLeftPerTurn, sticks.length],
          findShortestStick
        })
      : sticksLeftPerTurn;
  })({
    sticks: [...arr],
    sticksLeftPerTurn: [],
    findShortestStick: stickArr => stickArr.slice(0).sort((a, b) => a - b)[0]
  });

// declarative, immutable, recursive, IIFE
const cutTheSticks = arr =>
  (function handleSticks({ sticks, sticksLeftPerTurn, findShortestStick }) {
    const shortestStick = findShortestStick(sticks);
    return sticks.length > 0
      ? handleSticks({
          sticks: sticks
            .map(stick => stick - shortestStick)
            .filter(stick => stick > 0),
          sticksLeftPerTurn: [...sticksLeftPerTurn, sticks.length],
          findShortestStick
        })
      : sticksLeftPerTurn;
  })({
    sticks: [...arr],
    sticksLeftPerTurn: [],
    findShortestStick: stickArr => stickArr.slice(0).sort((a, b) => a - b)[0]
  });

// // declarative, immutable, recursive, function extraction
const handleSticks = ({ sticks, sticksLeftPerTurn, findShortestStick }) => {
  const shortestStick = findShortestStick(sticks);
  return sticks.length > 0
    ? handleSticks({
        sticks: sticks
          .map(stick => stick - shortestStick)
          .filter(stick => stick > 0),
        sticksLeftPerTurn: [...sticksLeftPerTurn, sticks.length],
        findShortestStick
      })
    : sticksLeftPerTurn;
};
const cutTheSticks = arr =>
  handleSticks({
    sticks: [...arr],
    sticksLeftPerTurn: [],
    findShortestStick: stickArr => stickArr.slice(0).sort((a, b) => a - b)[0]
  });

// imperative, immutable
const cutTheSticks = arr => {
  let sticks = [...arr];
  let sticksLeftPerTurn = [];
  while (sticks.length > 0) {
    sticksLeftPerTurn = [...sticksLeftPerTurn, sticks.length];
    const shortestStick = sticks.sort((a, b) => a - b)[0];
    sticks = sticks
      .map(stick => stick - shortestStick)
      .filter(stick => stick > 0);
  }
  return sticksLeftPerTurn;
};

// imperative, mutable
function cutTheSticks(arr) {
  let sticksLeftPerTurn = [];
  while (arr.length > 0) {
    sticksLeftPerTurn.push(arr.length);
    const shortestStick = arr.sort((a, b) => a - b)[0];
    let sticks = [];
    for (let i = 0; i < arr.length; i++) {
      sticks.push(arr[i] - shortestStick);
    }
    let sticksGreaterThanZero = [];
    for (let i = 0; i < sticks.length; i++) {
      if (sticks[i] > 0) {
        sticksGreaterThanZero.push(sticks[i]);
      }
    }
    arr = sticksGreaterThanZero;
  }
  return sticksLeftPerTurn;
}
