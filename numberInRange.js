function check(input){
    let n = Number(input[0])
    if (n >0 && n <=100){
        console.log('Yes')
    }else if(n<0&&n>=-100){
        console.log('Yes')
    }else console.log('No')
}
check([-100])