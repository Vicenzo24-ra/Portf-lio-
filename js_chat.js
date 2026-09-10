
const elementos = document.querySelectorAll(
    ".card, section h2, section p, .check li"
);


const observer = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar");

        }

    });


},{
    threshold:0.15
});



elementos.forEach((elemento)=>{

    elemento.classList.add("animar");

    observer.observe(elemento);

});





// Ano automático no rodapé

const ano = new Date().getFullYear();

const footerText = document.querySelector("footer p:last-child");


if(footerText){

    footerText.innerHTML =
    `© ${ano} Todos os direitos reservados.`;

}





// Efeito de navegação ao clicar nos links

document.querySelectorAll("nav a").forEach(link=>{


    link.addEventListener("click", function(e){


        const destino =
        document.querySelector(
            this.getAttribute("href")
        );


        if(destino){

            e.preventDefault();


            destino.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});





// Mensagem no console

console.log(
"BJ Web Solutions carregado com sucesso 🚀"
);