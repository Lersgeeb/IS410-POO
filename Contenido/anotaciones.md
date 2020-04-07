# Programacion Orientada a Objetos

### Formatos de transmision de informacion
#### CSV (Comma Separated Values)

Ejemplo:  
```
Juan, Perez, Masculino, 35, Honduras
```

#### XML:

```XML
<persona>
    <nombre>Juan</nombre>  
    <apellido>Perez</apellido>
    <edad>35</edad>
    <genero>Masculino</genero>
    <pais>Honduras</pais>
    <fecha-nacimiento>
        <dia>12</dia>
        <mes>12</mes>
        <anio>2012</anio>
    </fecha-nacimiento>
    <direccion>Col Kennedy, bloque 1</direccion>
</persona>
```


#### JSON (Javascript Object Notation): 
```javascript
persona = {
    nombre:"Juan",
    apellido:"Perez",
    edad:"35",
    genero:"Masculino",
    fechaNacimiento:{
        dia:12,
        mes:12,
        anio:2012
    }
}
```

### Servidor WEB:
PHP  
MySQL  
Apache  

- WAMP  -> WindowsApacheMysqlPHP
- LAMPP -> LinuxApacheMysqlPHPPython
- MAMP  -> MacApacheMysqlPHP
- XAMPP -> X Sistema Operativo ApacheMysqlPHPPython


#### Carpeta publica de Apache:  
- www(WAMP)  
- htdocs(XAMPP)  

### CSS: Hojas de estilo en cascada  
Es el lenguaje para definir el estilo o apariencia de las etiquetas de un documento html.  

#### Formas de incluir CSS:    
- **En linea:** Los estilos se escriben en la etiqueta que se desea modificar. Se utiliza la propiedad style y se escriben los estilos utilizando la siguiente sintaxis:  

`
estilo1:valor1;estilo2:valor2;...;estiloN:valorN;
`
- **En el encabezado del documento html:** Se aplican utilizando la etiqueta style dentro de la etiqueda head.

Para poder aplicar los estilos es necesario definir identificadores llamados SELECTORES los cuales pueden ser:  
1. Nombre de la etiqueta
2. Id de la etiqueta: Se utiliza el prefijo # (numeral)
3. Una clase de estilos: Se utiliza el prefijo . (punto)

La sintaxis para definir selectores es la siguiente:
```
selector{
        estilo1:valor1;
        estilo2:valor2;
        ...;
        estiloN:valorN;
}
```
- **En archivos externos:** Se crean archivos planos con la extension .css y luego se incluyen a un documento html utilizando la etiqueta link dentro de la etiqueta head.  


#### Prioridades estilos:
1. Estilos en linea
2. Estilos por ID
3. Estilos por clase css
4. Estilos por etiqueta

Se puede saltar la prioridad utilizando `!important`

### Media Query CSS
Sitios web responsivos o adaptables a diferentes tamaños de pantalla (Responsive websites).


### Bootstrap CSS  
### Javascript
### LocalStorage


## Segundo Parcial
### Peticiones hacia el servidor:

- **Peticiones Sincronas:** Son las peticiones en las cuales el cliente hace la petición y tiene que esperar a que el servidor termine de procesar para continuar. La forma básica de peticiones sincronas se hace mediante formularios, estos deben cumplir con los siguientes requisitos:
    1. Incluir la etiqueta form con las propiedades action y method. En action indicar el recurso del lado del servidor que recibirá y procesará la información. En method, se indica el método de envio de información que pueden ser: GET, POST, PUT, DELETE, ....
    2. Los componentes del formulario (input, select, textarea) deben tener el atributo name.
    3. El boton de acción que se encargará de realizar la petición, es decir enviar la información debe ser del tipo submit.



- **Peticiones Asincronas:**



### Metodos de envio de información:
1. GET: Envia la información a traves de la URL en formato URLEncoded
    Sintaxis: URL?nombre1=valor1&nombre2=valor2&...&nombreN=valorN
2. POST: Empaqueta la información y la envia al recurso indicado pero no visible (No se ve en la URL)
    

**Sincrono**: Una instruccion se ejecuta hasta que la anterior finaliza

```javascript
int a = 5;
int b = 10;
int suma = a+b;
System.out.println(suma);
```