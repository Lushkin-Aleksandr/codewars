function alphabetPosition(text) {
  const textArr = [];
  
  text.toLowerCase().split('').forEach(el => {
    if (!/[a-z]/.test(el)) return;
    textArr.push(el.charCodeAt() - 96);
  })
  //test 4
  return textArr.join(' ');
}