var romanToInt = function (s) {
  let splited = s.split("");
  let numbs = [];
  for (let i = 0; i < splited.length; i++) {
    switch (splited[i]) {
      case "I":
        numbs.push(1);
        break;
      case "V":
        numbs.push(5);
        break;
      case "X":
        numbs.push(10);
        break;
      case "L":
        numbs.push(50);
        break;
      case "C":
        numbs.push(100);
        break;
      case "D":
        numbs.push(500);
        break;
      case "M":
        numbs.push(1000);
        break;
    }
  }

  let sumatoria = 0;

  for (j = 0; j < numbs.length; j++) {
    if (numbs[j] >= numbs[j + 1] || j === numbs.length - 1) {
      sumatoria += numbs[j];
    } else {
      sumatoria += numbs[j + 1] - numbs[j];
      j++;
    }
  }

  return sumatoria;
};
