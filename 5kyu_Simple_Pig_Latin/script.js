function pigIt(str){
  //Code here
  const newStr = str.split(' ').map(word => {
    if (/\.|\,|\?|\!/.test(word)) return word;
    const newWord = word.split('');
    newWord.push(newWord[0]);
    newWord.push('ay')
    newWord.shift(newWord[0]);
    return newWord.join('');
  }).join(' ');
  
  return newStr;
}