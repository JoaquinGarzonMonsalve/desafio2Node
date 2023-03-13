const fs = require('fs');
let producto = [];

class Producto{
    constructor(id, title, description, price, path){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.nameFile = path;
        this.producto = [];

    }

     // Metodo getAll()
     async getAll() {

        fs.readFile('./data.json', 'utf8', (err, producto) => {
         if(err){console.log(err);}
            else{
            try{
                const data=JSON.parse(producto);
                console.log(data);
                console.log("get all");
                }
            catch(err){console.log('error parsing');}
            }   
        })}

        async addProduct(){
            const nuevoProducto = [{"id":this.id,"title":this.title,"description":this.description,"price":this.price}];
            const datastring = JSON.stringify(nuevoProducto);
            //  const actualizando= fs.watchFile("./data.json",`${datastring}`, (error) => {
            //      if (error) throw Error("No se pudo actualizar el archivo!");
            // })
            // console.log("actualizando");
            // console.log("add product");
            console.log(datastring);
            return datastring;

        }



        async actualizarArchivo(){
            setTimeout(()=>{

        
            },2000)
            
            
        }

        //Traemos el Producto con la ID 
            async getProductById(id){
        //Traemos los archivos en formato JSON para poder realizar la busqueda del ID
        const productos = await this.obtenerJson();

        //Buscamos si el ID existe, si no existe enviamos NOT FOUND, si existe mostramos cual es el producto
        const busqueda = productos.find(dato => dato.id === id);
        if(!busqueda){
            throw new Error('Not found')
        }else{
            console.log(`El producto con id ${id} es:`);
            console.log(busqueda)
        }
    }

}

console.log(` este es el producto al iniciar ${producto}`);

const producto1= new Producto(1,"producto1","description1",1,"producto1");


producto1.addProduct();

setTimeout(()=>{

    producto1.producto= producto1.getAll();
    console.log("añadiendo a producto");
    console.log(`mostranddo el valor de producto ${producto1.producto }`)
},3000)

setTimeout(()=>{

    producto=producto.push(producto1.addProduct());
    proString=JSON.stringify(producto);

    fs.writeFile("./data.json",proString,(err)=>{
        if(err){
            console.log("Error writing");
        }

    })

},4000)


