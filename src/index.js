module.exports = function getZerosCount(number, base) {
    let res = 0;
    const [div, pow] = divider(base);
    while(number > 0){
        number = Math.floor(number/div);
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