function getFib(n) {
  let F,
    Fn = bigInt(1),
    Fn_1 = bigInt(1),
    Fn_2 = bigInt(1);
  for (let i = bigInt(3); i.lesserOrEquals(n); i = i.next()) {
    F = Fn_1.plus(Fn_2);
    Fn_2 = Fn_1;
    Fn = F;
    Fn_1 = Fn;
  }
  return Fn;
}

function getFibIndex(num) {
  let F,
    n = 2,
    Fn = getFib(n + 1),
    Fn_1 = bigInt(1),
    Fn_2 = bigInt(1);
  while (Fn.lesserOrEquals(num)) {
    n++;
    F = Fn_1.plus(Fn_2);
    Fn_2 = Fn_1;
    Fn = F;
    Fn_1 = Fn;
  }
  return n;
}

function getDigits(count) {
  return bigInt("1" + "0".repeat(--count));
}

function showFibInput() {
  let input;
  if ((input = prompt("Введите число", 1000))) {
    let n = getFibIndex(getDigits(input));
    if (confirm(`n = ${n}, хотите посчитать значение Fn для этого индекса ?`))
      alert(getFib(n));
  }
}

document.querySelector("button").addEventListener("click", showFibInput);
