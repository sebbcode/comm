let saludo = prompt("Bienvenido, ¿Como te llamas?")
function saludar(){
    alert("Hola" + " " + saludo + " " + "bienvenido al Carrito de Sebas");
}
function carro(){
let producto = prompt("Ingresá el número de algun producto  \n1. Camisa Nike Oversize  \n2. Zapatillas Adidas  \n3. Reloj Tucci  \n4. Terminar");
    
while(producto != 4){
        switch(producto){
            case "1":
                alert("Agregaste una camisa al carrito de compra");
                break;
            case "2":
                alert("Agregaste un zapatilla al carrito de compra")
                break;
            case "3":
                alert("Agregaste un reloj al carrito de compra");
                break;
            case "4":
                alert("Compra Finalizada");
            default:
                alert("Producto no valido")
            break;
        }
    producto = prompt("Ingresá el numero de algun producto  \n1. Camisa Nike Oversize  \n2. Zapatillas Adidas  \n3. Reloj Tucci  \n4. Terminar")
}
}
saludar()
carro()
console.log(producto)