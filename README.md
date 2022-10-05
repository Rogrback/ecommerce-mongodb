# ecommerce-mongodb
# Proyecto Módulo Backend Avanzado NoSQL
# Descripción
Se desarrollará un proyecto con nodejs, express, sesiones con tokens jwt y conexión a una base de datos nosql(mongodb) de una API de un sistema de e-commerce
# Tareas
    - Diseño de la base de datos
    - Lista de rutas que tenga el sistema
## Pseudo-requerimientos
- El sistema de tienda en linea cuenta con dos roles
  - Administrador
  - Cliente
- Los administradores se encargan de:
  - Registrar productos, modificarlos o eliminarlos
  - Los campos necesarios para registrar un producto son:
    - Nombre del producto
    - Cantidad en inventario
    - Precio
    - Especificaciones
    - Descripción
    - Proveedor
  - Pueden dar de baja a los clientes
  - Enlistar a los clientes registrados en el sistema.
- Los clientes pueden buscar productos, filtrando y ordenando por nombre, rango de precio, proveedor.
- Los clientes no podrán ver los productos que no tengan stock en inventario
- Los clientes pueden agregar productos a su carrito de compras
- Por medio de una ruta, los clientes pueden ejercer una compra de su respectivo carrito
- Las compras deberán guardar:
  - El total del carrito comprado
  - La fecha de la compra
- Los clientes pueden ver su historial de compras.
- Para que un cliente pueda interactuar con el sistema, deberá tener una cuenta y una sesión iniciada.
- Los datos necesario para registrar a un cliente, son:
  - Nombre
  - Apellidos
  - Teléfono
  - Correo
  - Contraseña
  - No. de tarjeta
  - Dirección de envío
- El sistema deberá conectarse a una base de mongodb alojada en mongo atlas
- Las rutas del sistema deberán estar protegidas con token
