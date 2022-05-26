function examPrep(input){
    let index1 = 1
    let index = 2
    badGradesLimit =  Number(input[0])
    let  badGrades,sumGrades,lastExcercise,grades
    while (true){
        task = input[index1]
        grades =  Number(input[index])
        if (grades <=4 ){
            badGrades++;	
        }
        if (task  == 'Enough'){
            console.log('done')
            break;
        }else if (badGrades >= badGradesLimit){console.log('break')}else
        index +=2
        index1+=2
        
        sumGrades += Number(grades)
        console.log(task,grades)
    

    }
    }

examPrep(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])