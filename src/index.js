module.exports = function getZerosCount(number, base) {
    let res = Number.MAX_VALUE;
    divider(base).forEach(item => {
        let temp = number;
        const {divider, power} = item;
        let nulls = 0;
        while(temp > 0){
            temp = Math.floor(temp/divider);
            nulls += temp;
        }
        res = Math.min(res, Math.floor(nulls/power))
    });
    return res;
}

const divider = num => {
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
    return !result.length ? [{divider:num, power: 1}]: result ;
}