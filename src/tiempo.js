let seconds = 0;

const printSeconds = () => {
    seconds++;
    console.log(`Han pasado ${seconds} segundos`);
};

// Llamada a setInterval para ejecutar la función cada 1 segundo
setInterval(printSeconds, 1000);
