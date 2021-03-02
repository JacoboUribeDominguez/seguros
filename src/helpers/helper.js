export const calcularYear = (year) => {
    return (new Date().getFullYear() - year);
}

export const calcularIncrementoMarca = (marca) => {

    let incremento;

    switch(marca){
        case 'Americano':
            incremento = 1.15;
            break;
        case 'Europeo':
            incremento = 1.30;
            break;
        case 'Asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;
}

export const calcularIncrementoPlan = ( plan ) => {
    return ( plan === 'basico') ? 1.20 : 1.50
}