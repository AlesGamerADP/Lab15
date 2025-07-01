# 💻 Proyecto Laboratorio 15 - CRUD Categorías y Productos

Este proyecto es una aplicación web Full Stack que permite gestionar categorías y productos mediante un CRUD (Crear, Leer, Actualizar y Eliminar).  
Está desarrollado con:

- ⚙️ **Backend:** Spring Boot + Java 17
- 🎨 **Frontend:** React + Node.js

## 🚀 Tecnologías usadas

- ☕ Java 17
- 🌱 Spring Boot
- 🐘 MySQL
- ⚛️ React
- 🟩 Node.js + NPM

## 🔥 Requisitos previos

- Tener instalado **Java JDK 17**  
  👉 [Descargar JDK 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)

- Tener instalado **Node.js y NPM**  
  👉 [Descargar Node.js](https://nodejs.org/)

- Tener instalado un motor de base de datos como **MySQL**.

## ⚙️ Instalación y ejecución

### 1️ Backend (Spring Boot)

📍 Carpeta: `/Laboratorio15`

#### ✔️ Pasos:

1. Abrir el proyecto en IntelliJ, Eclipse o tu IDE preferido.
2. Verificar que esté configurado con **JDK 17**.
3. Configurar la base de datos en el archivo:


Ejemplo de configuración:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/comercial
spring.datasource.username=root
spring.datasource.password=tu_contraseña
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```
- Ejecutar la clase principal:

Laboratorio15Application.java

- El backend quedará corriendo en:

http://localhost:8081

# Frontend (React)

- 📍 Carpeta: /frontend
- ✔️ Pasos:

Abrir terminal en la carpeta frontend.

Ejecutar para instalar dependencias:

    npm install

Luego iniciar la app con:

    npm start

El frontend abrirá automáticamente en:

    http://localhost:3000

## 🌐 Endpoints API
### Categorías:

GET /api/v1/categorias → Listar categorías

POST /api/v1/categorias → Crear categoría

GET /api/v1/categoria/{id} → Obtener categoría por ID

PUT /api/v1/categoria/{id} → Actualizar categoría

DELETE /api/v1/categoria/{id} → Eliminar categoría

### Productos:

GET /api/v1/productos → Listar productos

POST /api/v1/productos → Crear producto

GET /api/v1/producto/{id} → Obtener producto por ID

PUT /api/v1/producto/{id} → Actualizar producto

DELETE /api/v1/producto/{id} → Eliminar producto

#  📜 Licencia
###  Este proyecto es de uso educativo para el curso de Desarrollo Web Full Stack.

# ✨ Autor
### 👨‍💻 Alessandro 




