function checkSpam(str) {
  let chek = str.toLowerCase();

  return chek.includes('1xbet') || chek.includes('xxx');
}

checkSpam('1XbeT now') === true
checkSpam('free xxxxx') === true
checkSpam('innocent rabbit') === false