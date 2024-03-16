const metdoPago = 'efectivo';

switch(metdoPago){
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'efectivo':
        console.log('Usaste efectivo para pagar');
        break;
    default:
        console.log('No se vaya, tiene que pagar');
}