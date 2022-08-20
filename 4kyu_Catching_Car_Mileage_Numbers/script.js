function isInteresting(number, awesomePhrases) {
    // Go to town!
    if (number < 0 || number > 999999999) return 0;
    
    if(checkAllInterestingConditions(number, awesomePhrases)) {
      return 2;
    }
    
    if(checkAllInterestingConditions(number + 1, awesomePhrases)
      || checkAllInterestingConditions(number + 2, awesomePhrases)) {
      return 1;
    }
    
    return 0;
  }
  
  function isFollowedByAllZeros(number) {
    let str = number.toString();
    str = str.slice(1)
    return +str === 0;
  }
  
  function isPalindrome(number) {
    let newNumber = Number(number.toString().split('').reverse().join(''));
    
    return number === newNumber;
  }
  
  function isSequentialDecrementing(number) {
    let referenceStr = '9876543210';
    
    return referenceStr.includes(number.toString())
  }
  
  function isSequentialIncrementing(number) {
    let referenceStr = '1234567890';
    
    return referenceStr.includes(number.toString())
  }
  
  function hasAllTheSameDigits(number) {
    let str = number.toString();
    let strArr = str.split('');
    
    let result = true;
    
    strArr.forEach((el, i, arr) => {
      if (el !== arr[0]) result = false;
    })
    
    return result;
  }
  
  function isAwesome(number, arr) {
    return arr.includes(number);
  }
  
  function checkAllInterestingConditions(number, arr) {
    if (number < 100) return false;
    if(isFollowedByAllZeros(number)
      || hasAllTheSameDigits(number)
      || isSequentialIncrementing(number)
      || isSequentialDecrementing(number)
      || isPalindrome(number)
      || isAwesome(number, arr)) {
       return true;
       }
    
    return false;
  }

  console.log();