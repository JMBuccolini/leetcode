var longestCommonPrefix = function (strs) {
  strs.sort(); //al ordenarlo, te quedan las iguales juntas, y la última es punto de comparación

  const firstStr = strs[0];
  const lastStr = strs[strs.length - 1];

  const commonPrefix = [];
  for (let i = 0; i < firstStr.length; i++) {
    if (i < lastStr.length && firstStr[i] === lastStr[i]) {
      commonPrefix.push(firstStr[i]);
    } else {
      break;
    }
  }

  return commonPrefix.join("");
};
