function histogram(input){
    let n = input[0]
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (let i = 1; i <= n; i++){
        let count = input[i]
        if (count <200){
            p1+=1
        }else if (count<400){
            p2+=1
        }else if (count<600){
            p3+=1
        }else if (count<800){
            p4+=1
        }else if (count>=800){
            p5+=1
        }
        
    }
    console.log(((p1/n)*100).toFixed(2) + "%")
    console.log(((p2/n)*100).toFixed(2) + "%")
    console.log(((p3/n)*100).toFixed(2) + "%")
    console.log(((p4/n)*100).toFixed(2) + "%")
    console.log(((p5/n)*100).toFixed(2) + "%")


}
histogram(["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"])