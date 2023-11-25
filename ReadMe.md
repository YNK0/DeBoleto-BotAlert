# Alerta de Boletos Disponibles

Este script en Node.js utiliza Playwright para verificar la disponibilidad de boletos en la pagina web https://deboleto.mx/ y envía una alerta por correo electrónico si los boletos están disponibles.

## Configuración

1. Clona el repositorio:

   git clone "link del repositorio"

2. Instala las dependencias:

   npm install

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

EMAIL=correo@gmail.com
URL=https://ejemplo.com
EMAIL_ALERT=correo_alerta@hotmail.com
PASSWORD_ALERT=contraseña_alerta

1. `EMAIL`: Tu dirección de correo electrónico para recibir alertas.
2. `URL`: La URL del sitio web que deseas verificar (Solo funciona en la pagina deboleto.mx).
3. `EMAIL_ALERT`: Tu dirección de correo electrónico para enviar las alertas.
4. `PASSWORD_ALERT`: La contraseña asociada con el correo electrónico para enviar las alertas.

## Uso

Ejecuta el script con el siguiente comando:

    node index.js

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3. Realiza los cambios y haz commit (git commit -am 'Añadir nueva funcionalidad').
4. Haz push a la rama (git push origin feature/nueva-funcionalidad).
5. Crea un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT

# Creditos

Desarrollador del script: Francisco Magaña
