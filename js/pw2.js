class pw2{
    constructor(reset = false){
        if(reset){
            const boton = document.querySelector("#Enviar")
            boton.addEventListener("click", this.enviar_click)
            window.self = new pw2()
        }
    }

        enviar_click(e){
            e.preventDefault()
            console.log("Evento detenido")
            const data = self.recuperar()
            
            console.log("Evento detenido")
            if(self.validar(data))
                console.log("Se puede enviar los datos")
            else 
                console.log("Error en los datos")
        }

    recuperar(){
        const data = {
            opinion: document.querySelector("#opinion").value,
            nombre: document.querySelector("#nombre").value
        }
        return data
    }

    validar(data){
        if(data.opinion == ""){
            console.log("Error, opinión inválida")
            return false
        }
        if(data.opinion.lenght >= 30){
            console.log("Error, sobrepasó el número de carácteres")
            return false
        }
        if(data.nombre == ""){
            console.log("Error, opinión inválida")
            return false
        }
        return true
    }
}
window.onload = () => new pw2(true)