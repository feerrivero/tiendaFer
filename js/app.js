alert ("¡Bienvenido a tiendaFer, el lugar donde encontrarás las mejores ofertas!");

let preguntaNovedades = confirm ("¿Te gustaria recibir las ultimas novedades y las mejores ofertas?");

if (preguntaNovedades == true){
    
    let correo = prompt ("Ingrese su correo electronico.");

    if ((correo != null) && (correo != "")) {
        alert ("¡Te enteraras de nuestras novedades antes que nadie!");}

    else { alert ("¡No hay problema! Siempre podrás encontrar las mejores ofertas en nuestra web.")};

} else { alert ("¡No hay problema! Siempre podrás encontrar las mejores ofertas en nuestra web.")}; 


function costoEnvio (){

    let codigoPostal = parseInt ( prompt ("Ingresá tu codigo posta y descubrí si el envío es gratis."));

    if ((codigoPostal != null) && (codigoPostal != "")){

        if ((codigoPostal == 1665) || (codigoPostal == 1663)) {
            alert ("¡El envío es gratis!");
        } 
    
        else { 
            alert ("¡Si tu compra supera los $25000, te lo enviamos gratis!");
        }    

    }

    else {

        alert ("¡No hay problema, podrás descubrir el costo de envio más tardes!");}

    }


costoEnvio();
