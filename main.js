const ul = document.querySelector( 'ul.list' )

for( let i = 0; i <= 100; i++){

    if(i % 15 == 0){
        const element = '<li style="color: red" >fizzBuzz</li>'
        ul.innerHTML += element

    }else if(i % 3 == 0){
        const element = '<li style="color: blue" >fizz</li>'
        ul.innerHTML += element
        
    }else if(i % 5 == 0){
        const element = '<li style="color: orange" >Buzz</li>'
        ul.innerHTML += element

    }else{
        const element = '<li style="color: black" ></li>'
        ul.innerHTML += element

    }
}


// for( let x = 0; x < 50; x++){
//     console.log(x)
// }


// const ul = document.querySelector( 'ul.list' )

// for( let i = 0; i <= 100; i++){

//     if( (i % 3) === 0 ){
//         const element = `<li style="color: red" > ${i}frizz3 </li>`
//         ul.innerHTML += element
//     }else{
//         const element = `<li style="color: blue" > ${i} </li>`
//         ul.innerHTML += element
//     }
// }



// const ul = document.querySelector( 'ul.list' )

// for( let index = 0; index < 100; index++){
//     const element = `<li  calss="box box--${index}"> Numero ${index} </li>`
//     ul.innerHTML += element;
// }