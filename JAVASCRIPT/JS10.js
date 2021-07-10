//alert("Events And Listening to Events")
let para = document.getElementById('para')
para.addEventListener('mouseover',function run(){
    //alert('Mouse inside')
    console.log('Mouse inside')
})

para.addEventListener('mouseout',function run(){
    //alert('Mouse gone outside')
    console.log('Mouse gone outside')
})

/*function togglehide(){
    let btn = document.getElementById('btn')
    let para = document.getElementById('para')
    if(para.style.display != 'none'){
        para.style.display = 'none'
    }
    else{
        para.style.display = 'block'
    }
}*/




//------------self created hide Function---------------------
function hide(){
    let btn = document.getElementById('btn')
    let para = document.getElementById('para')
    if(para.style.display != 'none'){
        para.style.display = 'none'
    }
    else{
        para.style.display= 'block'
    }
}