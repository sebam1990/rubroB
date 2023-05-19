const presupuesto = {

    numero : null,
    espacio: null,
    categoria : null,
    claves : []

}

// Capturar valores formulario y guardar presupuesto

    const crearPresupuesto = () => {

        const form_num = document.querySelector("#form_num").value
        const form_espacio = document.querySelector("#form_espacio").value
        const form_cat = document.querySelector("#form_cat").value

        presupuesto.numero = form_num
        presupuesto.espacio = form_espacio
        presupuesto.categoria = form_cat

        //console.log(presupuesto);

    }

// Capturar valores formulario y guardar claves

    const crearClaves = () => {


        const form_fila = document.querySelectorAll("tr")

        for(let i=0; i<form_fila.length; i++){

            const form_clave = form_fila[i].querySelector("#form_clave").value
            const form_unitario = form_fila[i].querySelector("#form_unitario").value
            const form_cantidad = form_fila[i].querySelector("#form_cantidad").value
            const form_subtotal = form_fila[i].querySelector("#form_subtotal")

            const clave = {

                clave : form_clave,
                unitario : Number(form_unitario),
                cantidad : Number(form_cantidad),
                subtotal : parseFloat(form_unitario*form_cantidad)
            
            }
    
            presupuesto.claves[i] = clave

        }

        console.log(presupuesto);

    }

// Función que combina ambas

    const cargarPresupuesto = () => {

        f1()
        f2()

    }

// Evento del botón "Cargar"
    
    window.addEventListener("load", () => {

        const cargar_btn = document.querySelector("#cargar_btn")

        cargar_btn.addEventListener("click", (e) => {

            e.preventDefault()

            cargarPresupuesto()

        })

    })
