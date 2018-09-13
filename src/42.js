function getZerosCount2(number, base) {
  
    var noz = Number.MAX_VALUE;
    // Now we can break the Base B as a product of primes :
    // B = a^p1 * b^p2 * c^p3 * …
    //Then the number of trailing zeroes in N factorial in Base B is given by the formulae
    // min{1/p1(n/a + n/(a*a) + ….), 1/p2(n/b + n/(b*b) + ..), ….}.
    var j = base;
    for (var i = 2; i <= base; i++) {
      if (j % i === 0) {
        var p = 0;
        while (j % i === 0) {
           j = j / i;     
           p++;
        }
        var c = 0;
        var z = Math.floor(number / i);
        while (z > 0) {
          c += z;
          z = Math.floor(z / i);
        }
        noz = Math.min(noz, Math.floor(c / p))
      }
    }
    return noz;
  }

  function getZerosCount(number, base) {
    let res = 0;
    const [div, pow] = divider(base);
    while(number > 0){
        number = Math.trunc(number/div);
        res += number;
    }
    return Math.floor(res/pow);
}


const divider = num => {
    let result = 1;
    let power = 1;
    const finish = num
    for(let i = 2; i < finish; i++){
        if(num % i === 0){
            let div = i;
            let pow = 0;
            while(num % i === 0){ 
                pow++;
                num /= i;
        }
        if(result ** power < div ** pow) {
            result = div;
            power = pow;
        }
        }
        
    }
    return result === 1 ? [num, 1]: [result, power] ;
}




const divider2 = num => {
    let result = [];
    const finish = num
    for(let i = 2; i < finish; i++){
        if(num % i === 0){
            let div = i;
            let pow = 0;
            while(num % i === 0){ 
                pow++;
                num /= i;
        }
        result.push(
            {
                divider: div,
                power: pow
            }
        )
        }
        
    }
    return !result.length ? [num, 1]: result ;
}



  console.log(divider2(190));