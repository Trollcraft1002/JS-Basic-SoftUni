function calculate(input){
    let n = Number(input);
    for (let i = 1; i <= 10;i++) {
        console.log(`${i} * ${n} = ${n * i}`);
    }
}
calculate(5)