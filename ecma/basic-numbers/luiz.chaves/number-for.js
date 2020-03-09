let result = "";

for (let flag = 0; flag < 100; flag++) {
  result += flag < 10 ? "0" + flag : flag;
  if (flag % 10 === 9) {
    result += "\n";
  } else {
    result += " ";
  }
}

console.log(result);
