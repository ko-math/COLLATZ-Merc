alert(max(5));

function max(n){
  let i = n;
  let max = 0;
  let Merc = 0;
  while(i !== 1){
    i = ((i % 2 === 0)?(i / 2):(3 * i + 1) / 2);
    if(i > max)max = i;
    if(i !== 1){
      if(fraction(i + 1))Merc ++;
    }
  }
  return Merc;
}
function fraction(x) {
  if (!(Number.isFinite(x) && x !== 0)) return null;

  let f, e;
  if (Math.abs(x) >= 1) {
    for (f = Math.abs(x), e = 0; f >= 2; f /= 2, ++e);
  } else { // 0 < Math.abs(x) < 1
    for (f = Math.abs(x), e = 0; f < 1; f *= 2, --e);
  }
  return f == 1;
}
