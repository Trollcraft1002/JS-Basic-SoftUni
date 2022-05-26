function squence(input) {
    let a = Number(input[0])
    let  start = 1
    console.log(1)
    while (start <= a) {
        start = start * 2 + 1
        if (start > a){
            break;
        }
        console.log(start)
    }

}
squence([8])