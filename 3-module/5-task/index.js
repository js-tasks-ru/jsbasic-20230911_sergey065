function getMinMax(str) {
  let stringArr = str.split(' ');
  
  let arr = [];
  
  for (let i of stringArr) {
    if (isFinite(i)) arr.push(i);
  };
  
  return { min: Math.min(...arr), max: Math.max(...arr)};
}