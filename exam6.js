function pin(input){
 let firstNumLimit = Number(input[0])
 let secondNumLimit = Number(input[1])
 let thirdNumLimit = Number(input[2])
    for (g = 0; g <=9999; g++){
    for (i = 1; i<=firstNumLimit; i++){
        if(i%2==0){
            for (j = 2; j<=secondNumLimit; j++){
                if (j>=2 && j<=3 || j==5 || j==7 ){
                    for (k = 1; k<=thirdNumLimit; k++){
                        if(k%2==0){
                            for (l = 1; l<secondNumLimit; l++){
                            console.log(`${i} ${j} ${k} ${l}`)
                            console.log(g)
                            }
                            
                        }
                    }
                }
            }
        }
    }
}
}
pin(["9",
"9",
"9"])


