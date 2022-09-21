class formulario{
    constructor(reset = false){
        this.nID = 1
        if(reset){
            const boton = document.querySelector("#Enviar")
            boton.addEventListener("click", this.enviar_click)
            document.querySelector("#crear").addEventListener("click", this.crear_click)
            document.querySelector("#crear2").addEventListener("click", this.crear_click2)
            window.self = new formulario()
        }
    }

        enviar_click(e){
            if (e.preventDefault())
                console.log("Evento detenido")
            const data = self.recuperar()
            
            if(self.validar(data)){
                console.log("Se puede enviar los datos")
                console.log(data)
            }
            else 
                console.log("Error en los datos")
        }

        crear_click2(e){
            e.preventDefault()

            const ubicacion_elemento = document.querySelector("#ubicacion_elemento").value
            const elemento = document.querySelector(ubicacion_elemento)
            const tipo_elemento = document.querySelector("#tipo_elemento").value

            console.log(ubicacion_elemento)
            console.log(tipo_elemento)

            let nuevo2 = document.createElement('input')
            
            nuevo2.setAttribute("type", "text")

            console.log(self)
            console.log(self.nID)
            nuevo2.id = "I" + self.nID++

            ubicacion_elemento.appendChild(nuevo2)

            for(const nodo of ubicacion_elemento.children){
                console.log(nodo)
            }
        }

        crear_click(e){
            e.preventDefault()
            
            //Se selecciona el "main" de la pagina web
            const main = document.querySelector("main")
            
            //Se crear un nuevo elemento del tipo "input"
            let nuevo = document.createElement("input")
            
            //Se le asigan el atributo al nuevo elemento creado
            //para que sea del tipo "type" "text", atributo de ingresado de texto
            nuevo.setAttribute("type", "text")

            //Se le añade in ID
            console.log(self)
            console.log(self.nID)
            nuevo.id = "I" + self.nID++
            
            //Se asigna el atributo al "main" de la pagina web
            main.appendChild(nuevo)

            //Hacer el recorrido de los hijos dentro del "main" y mostrarlos en la consola
            for(const nodo of main.children){
                console.log(nodo)
            }
        }

    recuperar(){
        const data = {
            nombre: document.querySelector("#nombre1").value,
            apellido1: document.querySelector("#apellido1").value,
            apellido2: document.querySelector("#apellido2").value,
            f_nacimiento: document.querySelector("#f_nacimiento").value,
            departamento: document.querySelector("#departamento").value,
            genero: document.querySelector('input[name="genero"]:checked').value
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