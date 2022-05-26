function read(input) {
    index = 0 
   
    while (input[index] !== 'Stop'){
        console.log(input[index]);
        index ++
    }
}
read(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])