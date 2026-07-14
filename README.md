# Graciano Inmobiliaria

Este proyecto es una landing page para una inmobiliaria con una seccion de productos y carrito de compras dinamico. La idea es mostrar propiedades destacadas, servicios, contacto y un catalogo de accesorios con una interfaz limpia y elegante.

Autor: Graciano Gonzalez Fausto

## Caracteristicas
- Estructura semantica HTML5
- Diseno responsive basico
- Catalogo de propiedades
- Catalogo dinamico de productos y carrito de compras
- Agregado y eliminacion de articulos
- Total del carrito actualizado en pantalla
- Persistencia de datos con LocalStorage
- Formulario de contacto
- Seccion de servicios
- Hero con video de fondo
- Tarjetas de contenido y footer completo

## Estructura
```
graciano-inmobiliaria/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── carrito.js
├── images/
└── video/
	└── video_hero.mp4
```

## Uso
- Descargar o clonar el proyecto
- Abrir index.html en el navegador
- Personalizar contenido e imagenes

## Funcionamiento del carrito
- Los productos se cargan dinamicamente desde JavaScript
- Se pueden agregar y quitar articulos desde la interfaz
- El monto total se calcula automaticamente
- El carrito se guarda en LocalStorage para conservar los datos al recargar
- La accion de pago muestra una alerta de confirmacion

## Tecnologias
- HTML5
- CSS3
- JavaScript
- LocalStorage
- SweetAlert2 para las alertas de pago
- Google Fonts
- Font Awesome

## Licencia
Uso libre para proyectos educativos o personales.