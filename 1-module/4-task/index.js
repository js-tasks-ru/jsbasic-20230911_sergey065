function checkSpam(str) {
  let chek = str.toLowerCase();

  return chek.includes('1xBet') || chek.includes('XXX');
}

checkSpam('1XbeT now') === true
checkSpam('free xxxxx') === true
checkSpam('innocent rabbit') === false