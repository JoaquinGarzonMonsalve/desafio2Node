const fs = require('fs/promises')
const path = require('path')

console.log('dirname', __dirname)
const rutaArchivoJson = path.join(__dirname, './archivo.json')
console.log(rutaArchivoJson)

class productos {
    constructor(path, id, titulo, description, rutaImagen, cantidad, precio, codigo) {
        this.nameFile = path;
        this.producto = [];
        this.id;
        this.titulo;
        this.description;
        this.rutaImagen;
        this.cantidad;
        this.precio;
        this.codigo;

    }

    // Metodo Save(Object)
    async save(product) {
        this.producto.push(this.id, this.titulo, this.description, this.rutaImagen, this.cantidad, this.precio,this.codigo)
        return this.product;

        
    }

    // Metodo getById(Number)
    async getById(id) {

    }

    // Metodo getAll()
    async getAll() {

        if (!fs.existsSync(fileNameJSON)) {
            console.error("Archivo no existe favor ejecutar comando: npm init -y ");
            throw Error("El archivo no se puede leer porque no existe: " + fileNameJSON);
        }
        let jsonString = await fs.promises.readFile(fileNameJSON, "utf-8");
        console.info("Archivo JSON obtenido desde archivo: ");
        console.log(jsonString);
    
        info.contenidoStr = jsonString;
        info.contenidoObj = JSON.parse(jsonString);
        console.log("Objeto info transformado desde arhivo:" + fileNameJSON);
        // console.log(info.contenidoObj.name);
        console.log(info);

         // guardamos en formato .json
        await fs.promises.writeFile(fileInfoJSON, JSON.stringify(info));


    // Lectura de resuldos
        let resultado = await fs.promises.readFile(fileInfoJSON, "utf-8");
        console.log("Archivo leido resultado:");
        console.log(resultado);
    

    }

    // Metodo deleteById(Number)
    async deleteById(id) {

    }

    async deleteAll() {

    }
}

const producto1= new productos ("rutaArchivoJson","id1","producto1"," description1", "rutaImagen1", "cantidad1", "precio1", "codigo1")
const producto2= new productos ("rutaArchivoJson","id2","producto2"," description2", "rutaImagen2", "cantidad2", "precio2", "codigo2")
const producto3= new productos("rutaArchivoJson","id3","producto3"," description3", "rutaImagen3", "cantidad3", "precio3", "codigo3")

await fs.promises.mkdir(rutaArchivoJson, { recursive: true })
await fs.promises.writeFile(fileNamePromesa, data)

// Lectura del archivo
let resultado = await fs.promises.readFile(fileNamePromesa, "utf-8");
console.log("Leyendo archivo");
console.log(resultado);

const datos1=producto1.save();
const datos2=producto2.save();
const datos3=producto3.save();
console.log(datos1);
console.log(datos2);
console.log(datos3);