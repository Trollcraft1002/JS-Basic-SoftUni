    function Temp(input){
        let temp = Number(input[0])
        let time = input[1]
        let shoes, outfit
            if(temp>=25){
                switch (time) {
                    case 'Morning':
                        outfit = "T-Shirt"
                        shoes = "Sandals"
                        console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
                        break;
                        case 'Afternoon':
                            outfit = 'Swim Suit'
                            shoes = 'Bаrefoot'
                            console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
                        break;
                        case 'Evening':
                            outfit = 'Shirt'
                            shoes = 'Moccasins'
                            console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
                        break;
                
                    default:console.log('something is not right :/ -1')
                        break;
                }

            }
            else if (temp>=10&&temp<=18){
                switch (time) {
                    case 'Morning':
                        outfit = "Sweatshirt"
                        shoes = 'Sneakers'
                        console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
                        break;
                        case 'Afternoon':
                            outfit = 'Shirt'
                            shoes = 'Moccasins'
                            console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
                        break;
                        case 'Evening':
                            outfit = 'Shirt'
                            shoes = 'Moccasins'
                            console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
                        break;
                
                    default:console.log('something is not right :/ -2')
                        break;
                }
            }
            else if (temp>18 && temp<=24){
                switch (time) {
                    case 'Morning':
                        outfit = 'Shirt'
                        shoes = 'Moccasins'
                        console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
                        break;
                        case 'Afternoon':
                        outfit = 'T-Shirt'
                        shoes = 'Sandals'
                            console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
                        break;
                        case 'Evening':
                            outfit = 'Shirt'
                            shoes = 'Moccasins'
                            console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
                        break;
                
                    default:console.log('something is not right :/ -3')
                        break;
                }

            }
    }
Temp([13,'Morning'])