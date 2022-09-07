class formulario{
    constructor(reset = false){
        if(reset){
            const boton = document.querySelector("#Enviar")
            boton.addEventListener("click", this.enviar_click)
            window.self = new formulario()
        }
    }

        enviar_click(e){
            e.preventDefault()
            console.log("Evento detenido")
            const data = self.recuperar()
            
            console.log("Evento detenido")
            if(self.validar(data)){
                console.log("Se puede enviar los datos")
                console.log(data)
            }
            else 
                console.log("Error en los datos")
        }

    recuperar(){
        const data = {
            nombre: document.querySelector("#nombre1").value,
            apellido1: document.querySelector("#apellido1").value,
            apellido2: document.querySelector("#apellido2").value,
            f_nacimiento: document.querySelector("#f_nacimiento").value,
            departamento: document.querySelector("#departamento").value,
            radios1: document.querySelector("#radios1").value,
            radios2: document.querySelector("#radios2").value,
        }
        return data
    }

    validar(data){
        if(data.opinion == ""){
            console.log("Error, 'nombre' opinión inválida")
            return false
        }
        if(data.apellido1 == ""){
            console.log("Error, 'apellido 1' opinión inválida")
            return false
        }
        if(data.apellido2 == ""){
            console.log("Error, 'apellido 2' opinión inválida")
            return false
        }
        if(data.f_nacimiento== ""){
            console.log("Error, 'fecha de nacimiento' opinión inválida")
            return false
        }
        if(data.departamento == ""){
            console.log("Error, 'departamento' opinión inválida")
            return false
        }
        if(data.select == ""){
            console.log("Error, 'select' opinión inválida")
            return false
        }
        if(data.radios1 == ""){
            console.log("Error, 'radios 1' opinión inválida")
            return false
        }
        if(data.radios2 == ""){
            console.log("Error, 'radios 2' opinión inválida")
            return false
        }
        return true
    }
}
window.onload = () => new formulario(true)