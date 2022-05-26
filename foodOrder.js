function foodOrder(input){
    let chikenMenu,beerMenu,veganMenu
    chikenMenu = 10.35
    beerMenu = 12.4
    veganMenu = 8.15

    let chikenMenuBuyed,beerMenuBuyed,veganMenuBuyed
    chikenMenuBuyed = Number(input[0]) * chikenMenu
    beerMenuBuyed = Number(input[1]) * beerMenu
    veganMenuBuyed = Number(input[2]) * veganMenu
    let deliveryPrice = 2.5

    let totalPrice = chikenMenuBuyed + beerMenuBuyed + veganMenuBuyed
    let desert = totalPrice * 0.20
    let result = totalPrice + desert + deliveryPrice
        console.log(result)
}
foodOrder([2,4,3])