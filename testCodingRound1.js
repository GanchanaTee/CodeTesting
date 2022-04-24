function isEqual(value, expectedValue) {
    if (value === expectedValue) {
      console.log('Test Pass');
      return;
    };
    console.error('Expected', JSON.stringify(expectedValue), 'got', JSON.stringify(value))
  }
  
  /**
   * Encode Text
   * Return - String that encoded
   */
  
  function encode(input) {
      let splitInput = input.split('');
      let j = 1;
      for (let i = 0; i < splitInput.length ; i ++) {    
        if(j >=2) {
          splitInput.splice(i-1,1);
          i--; 
        }
        if(splitInput[i] !== splitInput[i+1] ) {
          splitInput.splice(i+1,0,j);
          j=0;
          i++;
        }
        j++;
      }
      return splitInput.join('');
  }

  isEqual(encode('schools'), 's1c1h1o2l1s1');