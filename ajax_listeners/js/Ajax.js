class Ajax {
	constructor(listener){
        this.listener = listener
	}

	post(servicio, datos = {}, callback) {
		let xhttp = new XMLHttpRequest()

		xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200)
                callback(this.responseText)
        }
		xhttp.open("POST", this.listener, true)
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
		xhttp.send("servicio=" + servicio + "&datos=" + JSON.stringify(datos))
	}
}