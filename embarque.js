class BilleteEmbarque {
    constructor(nombre, desde, hacia, claseEjecutiva, horaSalida, horaLlegada) {
        this.nombre = nombre;
        this.desde = desde;
        this.hacia = hacia;
        this.claseEjecutiva = claseEjecutiva;
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
    }

    upgrade() {
        if (this.claseEjecutiva) {
            console.log("¡Tu billete ya es de clase ejecutiva!");
        } else {
            this.claseEjecutiva = true;
            console.log("¡Has sido ascendido a clase ejecutiva!");
        }
    }

    tiempoDeVuelo() {
        let tiempo = this.horaLlegada - this.horaSalida;
        if (tiempo < 0) {
            tiempo += 24; 
        }
        console.log(`Tiempo de vuelo: ${tiempo} horas`);
        return tiempo;
    }
}

const billeteIda = new BilleteEmbarque("Antonio Jose", "Roma", "Serracines", false, 10, 22);
const billeteVuelta = new BilleteEmbarque("Antonio Jose", "Serracines", "Roma", false, 11, 23);

billeteIda.upgrade(); 
console.log(billeteIda);
billeteIda.tiempoDeVuelo(); 

console.log(billeteVuelta);
billeteVuelta.tiempoDeVuelo(); 
