// inicando trabajo  Pre-Entrega 02

// array con cursos
const cursos = [{
        nombre: 'excel avanzado',
        precio: '32400 ',
        duracion: '4 semanas (16 horas)',
        modalidad: 'Online'
    },

    {
        nombre: 'google ads',
        precio: '33400',
        duracion: '6 semanas (24 horas)',
        modalidad: 'Online'
    },

    {
        nombre: 'looker studio',
        precio: '68500 ',
        duracion: '6 semanas (24 horas)',
        modalidad: 'Online'
    },

    {
        nombre: 'ilustracion digital',
        precio: '52640 ',
        duracion: '5 semanas (20 horas)',
        modalidad: 'Online'
    },

    {
        nombre: 'programacion con java',
        precio: '79120 ',
        duracion: '8 semanas (30 horas)',
        modalidad: 'Online'
    }

];

// carrito vacio
let carrito = []

// le solicitamos datos al usuario
let bienvenido = prompt('Por favor Coloque Nombre y Apellido');
alert('bienvenido ' + bienvenido);

let seleccion = prompt(bienvenido + ' Bienvenido a la plataforma CoderStore, desea realizar algun curso nuestro???');

console.log(bienvenido + ' Welcome a la plataforma CoderStore');


// mostramos la cartelera completa en la console
console.table(cursos);

//inicia nuestro bucle
while (seleccion != 'si' && seleccion != 'no') {
    alert('Por favor ingrese si o No');
    seleccion = prompt('Hola esta interesado en nuestros cursos');
}
// le damos las opciones si quiere comprar o no
if (seleccion == 'si') {
    alert('Aprovecha nuestros cursos disponibles para vos!!!! ');
    let todosLosCursos = cursos.map((cursos) => '\n ' + cursos.nombre + '\n');
    alert(todosLosCursos.join('-'));


    // le damos las opciones a elegir al usuario
    let opcion = prompt(todosLosCursos + '\n');

    switch (opcion) {
        case '1':
            console.log('Has Seleccionado Excel avanzado');
            break;
        case '2':
            console.log('Has Seleccionado Google ads ');
            break;
        case '3':
            console.log('Has Seleccionado Looker studio');
            break;
        case '4':
            console.log('Has Seleccionado Ilustracion digital');
            break;
        case '5':
            console.log('Has Seleccionado Programacion con java');
            break;
        default:
            console.log('Opcion invalida ');
            break;
    }


// le damos la opcion si no quiere continuar
} else if (seleccion == 'no') {
    alert('Ok gracias, te esperaremos mas adelante si estas interesado!!!');
}

// opcion de sellecionar un curso 
while (seleccion != 'no') {
    let cursos = prompt('Selecciona el  curso ah tu carrito');
    let precio = 0;

    if (cursos == 'excel avanzado' ||
        cursos == 'google ads' ||
        cursos == 'looker studio' ||
        cursos == 'ilustracion digital' ||
        cursos == 'programacion con java') {
        switch (cursos) {
            case 'excel avanzado':
                precio = '32400 ';
                duracion = '4 semanas (16 horas)'
                modalidad = 'Online'
                break;
            case 'google ads':
                precio = '33400 ';
                duracion = '6 semanas (24 horas)'
                modalidad = 'Online'
                break;
            case 'looker studio':
                precio = '68500 ';
                duracion = '6 semanas (24 horas)'
                modalidad = 'Online'
                break;
            case 'ilustracion digital':
                precio = '52640 ';
                duracion = '5 semanas (20 horas)'
                modalidad = 'Online'
                break;
            case 'programacion con java':
                precio = '79120';
                duracion = '8 semanas (30 horas)'
                modalidad = 'Online'
                break;
            default:
                break;
        }
        // le solicitamos cuantas unidades (cursos quiere escoger)
        let unidades = parseInt(prompt('cuantos cursos quiere escoger'));

        carrito.push({
            cursos,
            unidades,
            duracion,
            precio
        }) // pusheo el carrito

        console.log(carrito);

    } else {
        alert('No tenemos ese curso disponible');
    }

    seleccion = prompt('desea aprovechar otro curso nuestro??');

    while (seleccion === 'no') {
        alert('Gracias por llegar hasta aqui y confiar en nosotros');
        carrito.forEach((carritoFinal) => {
            console.log(`cursos: ${carritoFinal.cursos}, unidades: ${carritoFinal.unidades}, total a pagar por el curso ${carritoFinal.unidades * carritoFinal.precio} `)
        })
        break;
    }
}


// nos despedimos  del usuario/ cliente
console.log(bienvenido + ' Te esperamos para futuras capacitaciones')

// le damos la totalidad del valor por los cursos pagados
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log(`total a pagar es de: ${total}`);
console.table(total);