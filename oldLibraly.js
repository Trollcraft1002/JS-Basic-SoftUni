function oldLibraly(input){
    let index = 0
    let favotiteBook = input[0];
    index++
    while (true){
        var nextbook = input[index]
        if(nextbook == favotiteBook){
            index --
            console.log(`You checked ${index} books and found it.`)
            break;
        }else if (nextbook == 'No More Books'){
            index --
            console.log(`The book you search is not here!\nYou checked ${index} books.`)
            break;
        }
        
        index++
        
    }
}
oldLibraly(["Troy",
"Stronger",
"Life Style",
"Troy"])