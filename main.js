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

      let url = 'https://api.jsonbin.io/v3/b/63dd69c3c0e7653a056e79bf';
        let divProduct = document.querySelector("#promo") 
        let divAll = document.querySelector("#all") 
        let divBebidas = document.querySelector("#bebidas") 
        let divChoco = document.querySelector("#choco") 

         //todas
  fetch(url).then((response) => {
    response.json().then((dados) => {
        console.log(dados)
        dados.record.products.map((product) => {
                    if (product.disponivel == 1){
                        divAll.innerHTML += `
                    <ul>
                        <li class= "card">
                            <img title="${product.nome} " class="food" src= ${product.img} alt=""></img><div class="content">  <h3> ${product.nome}  </h3> <p> ${product.desc} </p> <div class="price">${product.price} </div></div>
                            </li>
                        </ul>
                    `
                }
            
                  
                })       
         
            })
        })
        
        //promo
        fetch(url).then((response) => {
            response.json().then((dados) => {
                console.log(dados)
                dados.record.products.map((product) => {
                    if (product.promocao == 13){
                    if (product.disponivel == 1){
                        divProduct.innerHTML += `
                        <ul>
                        <li class= "card">
                            <img title="${product.nome} " class="food" src= ${product.img} alt=""></img><div class="content">  <h3> ${product.nome}  </h3> <p> ${product.desc} </p> <div class="price">${product.price} </div></div>
                            </li>
                        </ul>
                    `
                }
            }
                  
                })       
         
            })
        })
  //bebidas
  fetch(url).then((response) => {
    response.json().then((dados) => {
        console.log(dados)
        dados.record.products.map((product) => {
                    if (product.promocao == 1){
                    if (product.disponivel == 1){
                        divBebidas.innerHTML += `
                        <ul>
                        <li class= "card">
                            <img title="${product.nome} " class="food" src= ${product.img} alt=""></img><div class="content">  <h3> ${product.nome}  </h3> <p> ${product.desc} </p> <div class="price">${product.price} </div></div>
                            </li>
                        </ul>
                    `
                }
            }
                  
                })       
         
            })
        })
//choco
fetch(url).then((response) => {
    response.json().then((dados) => {
        console.log(dados)
        dados.record.products.map((product) => {
                    if (product.promocao == 2){
                    if (product.disponivel == 1){
                        divChoco.innerHTML += `
                        <ul>
                        <li class= "card">
                            <img title="${product.nome} " class="food" src= ${product.img} alt=""></img><div class="content">  <h3> ${product.nome}  </h3> <p> ${product.desc} </p> <div class="price">${product.price} </div></div>
                            </li>
                        </ul>
                    `
                }
            }
                  
                })       
         
            })
        })
 
        

        //tabs

        function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
              tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
          }
          
          // Get the element with id="defaultOpen" and click on it
          document.getElementById("defaultOpen").click();
    
        // function promocoes() {
        //     document.getElementById("cards").innerHTML = `
        //     <ul>
        //     <li class= "card">
        //         <img title="${product.nome} " class="food" src="/assets/${product.img}.jpg" alt=""></img><div class="content">  <h3> ${product.nome}  </h3> <p> ${product.desc} </p> <div class="price">${product.price} </div></div>
        //         </li>
        //     </ul>
        // `
        // }

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

        // filterbtn
      