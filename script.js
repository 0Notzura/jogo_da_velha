"use strict"
const squares=Array.from(document.getElementsByClassName('square'))
const endgame=document.getElementsByClassName('container')[0]
const tittle=document.createElement('h1')
const btn=document.getElementsByTagName('button')[0]
let turn=0
const player1=[],player2=[]
const winCondition=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]

squares.forEach(square => {
    square.addEventListener('click',()=>{
        if(square.classList.length!=1)return
        logic(square)
    })
});
btn.addEventListener('click',()=>{
    reestart()
})
function logic(square){
    if(turn==0){
        square.classList.add('x')
        player1.push(squares.indexOf(square))
        win(player1)
        turn=1
            

    }
    else{
        square.classList.add('o')
        player2.push(squares.indexOf(square))
        win(player2)
        turn=0
    }
}
function win(player){
    if(player.length<3) return
    let iswin
    winCondition.forEach(arr=>{
        let count=0
        player.forEach((n)=>{
            if(arr.includes(n))
                count++
        })
        if(count==3){
            iswin=true
        }
    })
    if(iswin)
        end()
}

function end(){
    tittle.innerText=`Jogador ${turn==0? '1': '2'} venceu`
    endgame.prepend(tittle)
    endgame.style.display='flex'
}
function reestart(){
    turn=0
    player1.splice(0,player1.length)
    player2.splice(0,player2.length)
    squares.forEach((square)=>{
        square.classList.remove('x')
        square.classList.remove('o')
    })
    endgame.style.display='none'
}