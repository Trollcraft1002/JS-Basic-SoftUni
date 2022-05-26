function password (input) {
    let username = input[0]
    let password = input[1]
    let data = input[2]
    let index = 3;
    while (data !== password) {
        data = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`)
}
password((['trollcraft1002','myPassword','pass','123','44','password','pass','myPassword']))