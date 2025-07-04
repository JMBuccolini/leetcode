var isValid = function (s) {
  const stack = [];
  const dictionary = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if (char in dictionary) {
      const lastIn = stack.length > 0 ? stack.pop() : "#";

      if (dictionary[char] != lastIn) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
