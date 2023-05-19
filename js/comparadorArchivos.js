// REQUERIR FS

    const fs = require("fs");

// LEER DIRECTORIO

    const leerDirectorio = () => {

        const urlDirectorio = "C:/Users/sebas/OneDrive/Escritorio/Presupuestos"
        const archivosDirectorio = []

        fs.readdirSync(urlDirectorio).map(archivo => {

            archivosDirectorio.push(archivo.slice(-9,-4))
        
        })

        return archivosDirectorio

    }

// LEER ARCHIVO

    const leerArchivo = () => {

        const urlArchivo = "../presupuestos.txt"
        const presupuesto = fs.readFileSync(urlArchivo, "utf-8")

        const archivosExcel = presupuesto.split("\r\n")

        return archivosExcel

    }

// COMPARAR LISTADOS

    const compararListados = () => {

        const directorio = leerDirectorio();

        const excel = leerArchivo();

        console.log("Presupuestos faltantes en el directorio:");

        for(let i=0; i<excel.length; i++){

            if(excel[i] != directorio[i]){

                console.log(excel[i])

            }


        }

    }

    compararListados()