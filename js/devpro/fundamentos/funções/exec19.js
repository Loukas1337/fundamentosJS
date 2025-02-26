// Relógio Digital (Horas, Minutos e Segundos)
// Crie um relógio que exiba a hora atual no console a cada segundo.

setInterval (() => {
    let agora = new Date();
    let hora = agora.toLocaleTimeString();
    console.log(hora);
}, 1000);