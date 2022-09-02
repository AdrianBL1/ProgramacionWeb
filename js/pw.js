class pw {
    constructor(){
        let nodos = document.querySelectorAll(".enNegrita")
        for (const nodo of nodos) {
            console.log(nodo)
        }

        let s1 = document.querySelector("#s1")
        s1.addEventListener("click",s1_click)

        function s1_click(e){
            alert("Hola")
            console.log("Hola")
        }

        //Ejercicio

        let s2 = document.querySelectorAll(".enNegrita")
        for (const nodo of s2) {
            nodo.addEventListener("click",s2_click)
        }

        function s2_click(e){
            alert("Hola2")
            console.log("Hola2")
        }

        ////////////////////////////////////

        s1.addEventListener("click",e =>{
            alert("Hola")
            console.log("Hola")
        })

        // Ejercicio

        for (const nodo of s2) {
            nodo.addEventListener("click",e =>{
                alert("Hola2")
                console.log("Hola2")
            })
        }
    }
}

//window.onload = (e) => {}
window.onload = (e) => new pw()
