// let  seidr = '<img title="Seidr" src="https://fire-emblem-heroes.com/common/img/sp/index/characterSlide/character_thumb_43.png" alt=""></img>';
// let gullveig = '<img title="Gullveig" src="https://fire-emblem-heroes.com/common/img/sp/index/characterSlide/character_thumb_44.png" alt="">';
// let tiandra = '  <img title="Tiandra" src="https://fire-emblem-heroes.com/common/img/sp/index/characterSlide/character_thumb_20.png" alt="">';
// let freyja = ' <img title="Freyja" src="https://fire-emblem-heroes.com/common/img/sp/index/characterSlide/character_thumb_27.png" alt="">';




// function createvs(player1, player2){
// return `
// <li class="vs">
// ${player1}
// <Strong>VS</Strong>
// ${player2}
// </li>   
// `
// }

// function createCard( date, day, vs) {
//     return `
//     <div class="card">
//     <h2>${date} <span>${day}</span></h2>
//     <ul>
//          ${vs}
//     </ul>
// </div>
//     `
// }

// document.querySelector("#apps").innerHTML = `
// <header>
// <img src="https://static.wikia.nocookie.net/fireemblem/images/9/98/Logo_Fire_Emblem_Heroes.png/revision/latest?cb=20170119202643&path-prefix=es" alt="Logo - Fire Emblem Heroes Logo ">

// </header>

// <main id="cards">
//     ${createCard('13/02', 'segunda',
//     createvs(seidr, gullveig) + createvs(freyja, tiandra)
//     )}
//     ${createCard('13/05', 'terça',
//     createvs(freyja, tiandra)
//     )}
// </main>
// `

  // <li class="vs">
        //     <img title="Tiandra" src="https://fire-emblem-heroes.com/common/img/sp/index/characterSlide/character_thumb_20.png" alt="">
        //     <Strong>VS</Strong>
        //     <img title="Freyja" src="https://fire-emblem-heroes.com/common/img/sp/index/characterSlide/character_thumb_27.png" alt="">
        // </li>

        let promocoes = document.querySelector(".btn")
        let divProduct = document.querySelector("#cards")
    
        fetch("dados.json").then((response) => {
            response.json().then((dados) => {
              
                dados.products.map((product) => {
                    if (product.disponivel == 1){
                        divProduct.innerHTML += `
                    <ul>
                        <li class= "card">
                            <img title="${product.nome} " class="food" src="./assets/${product.img}.jpg" alt=""></img><div class="content">  <h3> ${product.nome}  </h3> <p> ${product.desc} </p> <div class="price">${product.price} </div></div>
                            </li>
                        </ul>
                    `
                }
                  
                })       
            //     dados.products.map((product) => {
            //         document.getElementById('btn').onclick = function()  {
            //         if (product.promocao == "b"){
            //             divProduct.innerHTML += `
            //         <ul>
            //             <li class= "card project-box">
            //                 <img title="${product.nome} " class="food" src="/assets/${product.img}.jpg" alt=""></img><div class="content">  <h3> ${product.nome}  </h3> <p> ${product.desc} </p> <div class="price">${product.price} </div></div>
            //                 </li>
            //             </ul>
            //         `
            //     }
            // }
                  
            //     })   
            })
        })

        // function promocoes() {
        //     document.getElementById("cards").innerHTML = `
        //     <ul>
        //     <li class= "card">
        //         <img title="${product.nome} " class="food" src="/assets/${product.img}.jpg" alt=""></img><div class="content">  <h3> ${product.nome}  </h3> <p> ${product.desc} </p> <div class="price">${product.price} </div></div>
        //         </li>
        //     </ul>
        // `
        // }

        // filterbtn
      