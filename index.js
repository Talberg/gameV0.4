function gameName() {
    let gameName = document.getElementById('gameName').value
    if (gameName !== "") {
        console.log(localStorage.getItem('GameState'))
        if (localStorage.getItem('GameList') == null) {
            console.log('New Game state')
            let newGameName = JSON.stringify([gameName])
            localStorage.setItem('GameList', newGameName)
            console.log(localStorage.getItem('GameList'))
            window.location.replace(`players.html?name=${gameName}`)

        }
        else {
            console.log(localStorage.getItem('GameList'))
            let oldGameState = JSON.parse(localStorage.getItem('GameList'))
            console.log(oldGameState)
            let GameList = JSON.stringify([...oldGameState, gameName])
            localStorage.setItem('GameList', GameList)
            console.log(localStorage.getItem('GameList'))
            window.location.replace(`players.html?name=${gameName}`)
        }



        // localStorage.setItem('GameState', gameName)
        // localStorage.getItem('GameState')
    }
}
function players(num) {
    let params = new URLSearchParams(document.location.search)
    let gameName = params.get("name")
    let gameState = JSON.stringify(
        {
            name: gameName,
            players: num,
        })
    localStorage.setItem(gameName, gameState)
    // console.log(localStorage.getItem(gameName))
    window.location.replace(`players${num}.html?name=${gameName}&playerNum=${num}`)

}
function is250(num) {
    for (let i = 1; i <= num; i++) {
        // console.log(i)
    }
}
function playersReadyCheck() {
    let params = new URLSearchParams(document.location.search)
    let playerNum = params.get("playerNum")
    let name = params.get("name")
    let gameObj = JSON.parse(localStorage.getItem(name))
    let player1Total = document.getElementById('total1').value
    let player2Total = document.getElementById('total2').value


    if (playerNum == 2) {
        if (player1Total == 250 && player2Total == 250) {
            if (document.getElementById('str1').value > 100 || document.getElementById('dex1').value > 100 || document.getElementById('int1').value > 100 || document.getElementById('wis1').value > 100 || document.getElementById('pow1').value > 100 || document.getElementById('me1').value > 100 || document.getElementById('str2').value > 100 || document.getElementById('dex2').value > 100 || document.getElementById('int2').value > 100 || document.getElementById('wis2').value > 100 || document.getElementById('pow2').value > 100 || document.getElementById('me2').value > 100) {
                console.log('over 100')
                alert("You can not have more than 99 in an stat")
            }
            else {
                let newGameObj = {
                    ...gameObj,
                    player1: {
                        name: document.getElementById('name1').value,
                        str: document.getElementById('str1').value,
                        dex: document.getElementById('dex1').value,
                        int: document.getElementById('int1').value,
                        wis: document.getElementById('wis1').value,
                        pow: document.getElementById('pow1').value,
                        me: document.getElementById('me1').value
                    },
                    player2: {
                        name: document.getElementById('name2').value,
                        str: document.getElementById('str2').value,
                        dex: document.getElementById('dex2').value,
                        int: document.getElementById('int2').value,
                        wis: document.getElementById('wis2').value,
                        pow: document.getElementById('pow2').value,
                        me: document.getElementById('me2').value
                    }
                }
                console.log(newGameObj)
                let flatObj = JSON.stringify(newGameObj)
                localStorage.setItem(name, flatObj)
            }



        }
    }
    if (playerNum == 3) {
        let player3Total = document.getElementById('total3').value
        if (player1Total == 250 && player2Total == 250 && player3Total == 250) {
            if (document.getElementById('str1').value > 100 || document.getElementById('dex1').value > 100 || document.getElementById('int1').value > 100 || document.getElementById('wis1').value > 100 || document.getElementById('pow1').value > 100 || document.getElementById('me1').value > 100 || document.getElementById('str2').value > 100 || document.getElementById('dex2').value > 100 || document.getElementById('int2').value > 100 || document.getElementById('wis2').value > 100 || document.getElementById('pow2').value > 100 || document.getElementById('me2').value > 100 ||  document.getElementById('str3').value > 100 || document.getElementById('dex3').value > 100 || document.getElementById('int3').value > 100 || document.getElementById('wis3').value > 100 || document.getElementById('pow3').value > 100 || document.getElementById('me3').value > 100) {
                console.log('over 100')
                alert("You can not have more than 99 in an stat")
            }
            else {
                let newGameObj = {
                    ...gameObj,
                    player1: {
                        name: document.getElementById('name1').value,
                        str: document.getElementById('str1').value,
                        dex: document.getElementById('dex1').value,
                        int: document.getElementById('int1').value,
                        wis: document.getElementById('wis1').value,
                        pow: document.getElementById('pow1').value,
                        me: document.getElementById('me1').value
                    },
                    player2: {
                        name: document.getElementById('name2').value,
                        str: document.getElementById('str2').value,
                        dex: document.getElementById('dex2').value,
                        int: document.getElementById('int2').value,
                        wis: document.getElementById('wis2').value,
                        pow: document.getElementById('pow2').value,
                        me: document.getElementById('me2').value
                    },
                    player3: {
                        name: document.getElementById('name3').value,
                        str: document.getElementById('str3').value,
                        dex: document.getElementById('dex3').value,
                        int: document.getElementById('int3').value,
                        wis: document.getElementById('wis3').value,
                        pow: document.getElementById('pow3').value,
                        me: document.getElementById('me3').value
                    }
                }
                console.log(newGameObj)
                let flatObj = JSON.stringify(newGameObj)
                localStorage.setItem(name, flatObj)
            }

            console.log('All 3 are correct')
        }


    }
    if (playerNum == 4) {
        let player3Total = document.getElementById('total3').value
        let player4Total = document.getElementById('total4').value

        if (player1Total == 250 && player2Total == 250 && player3Total == 250 && player4Total == 250) {
            console.log('All 4 are correct')
            if (document.getElementById('str1').value > 100 || document.getElementById('dex1').value > 100 || document.getElementById('int1').value > 100 || document.getElementById('wis1').value > 100 || document.getElementById('pow1').value > 100 || document.getElementById('me1').value > 100 || document.getElementById('str2').value > 100 || document.getElementById('dex2').value > 100 || document.getElementById('int2').value > 100 || document.getElementById('wis2').value > 100 || document.getElementById('pow2').value > 100 || document.getElementById('me2').value > 100 || document.getElementById('str3').value > 100 || document.getElementById('dex3').value > 100 || document.getElementById('int3').value > 100 || document.getElementById('wis3').value > 100 || document.getElementById('pow3').value > 100 || document.getElementById('me3').value > 100|| document.getElementById('str4').value > 100 || document.getElementById('dex4').value > 100 || document.getElementById('int4').value > 100 || document.getElementById('wis4').value > 100 || document.getElementById('pow4').value > 100 || document.getElementById('me4').value > 100) {
                console.log('over 100')
                alert("You can not have more than 99 in an stat")
            } else {
                let newGameObj = {
                    ...gameObj,
                    player1: {
                        name: document.getElementById('name1').value,
                        str: document.getElementById('str1').value,
                        dex: document.getElementById('dex1').value,
                        int: document.getElementById('int1').value,
                        wis: document.getElementById('wis1').value,
                        pow: document.getElementById('pow1').value,
                        me: document.getElementById('me1').value
                    },
                    player2: {
                        name: document.getElementById('name2').value,
                        str: document.getElementById('str2').value,
                        dex: document.getElementById('dex2').value,
                        int: document.getElementById('int2').value,
                        wis: document.getElementById('wis2').value,
                        pow: document.getElementById('pow2').value,
                        me: document.getElementById('me2').value
                    },
                    player3: {
                        name: document.getElementById('name3').value,
                        str: document.getElementById('str3').value,
                        dex: document.getElementById('dex3').value,
                        int: document.getElementById('int3').value,
                        wis: document.getElementById('wis3').value,
                        pow: document.getElementById('pow3').value,
                        me: document.getElementById('me3').value
                    },
                    player4: {
                        name: document.getElementById('name4').value,
                        str: document.getElementById('str4').value,
                        dex: document.getElementById('dex4').value,
                        int: document.getElementById('int4').value,
                        wis: document.getElementById('wis4').value,
                        pow: document.getElementById('pow4').value,
                        me: document.getElementById('me4').value
                    }
                }
                console.log(newGameObj)
                let flatObj = JSON.stringify(newGameObj)
                localStorage.setItem(name, flatObj)
            }
        }
    }
    //  for(let i = 1;i<=playerNum;i++){

    // }

}

