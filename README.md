#Arithmetic App

Este proyecto consiste en dos aplicaciones: una aplicación Angular (`arithmetic-app`) y una API de Spring Boot (`arithmetic-api`). Este README proporciona las instrucciones necesarias para ejecutar ambas aplicaciones.

#Requisitos Previos

Herramientas Necesarias

- [Node.js](https://nodejs.org/) (incluye npm)
- [Angular CLI](https://angular.io/cli)
- [Java Development Kit (JDK) 17+](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html)
- [Maven](https://maven.apache.org/)

### Extensiones Recomendadas para Visual Studio Code

- **Angular**: Angular Language Service, Angular Snippets
- **Java**: Extension Pack for Java, Spring Boot Extension Pack

## Ejecución de la Aplicación Angular

1. **Instalar Node.js y npm**: Descarga e instala Node.js desde [nodejs.org](https://nodejs.org/). npm se incluye con Node.js.
    ```bash
    node -v
    npm -v
    ```

2. **Instalar Angular CLI**: Instala Angular CLI globalmente.
    ```bash
    npm install -g @angular/cli
    ```

3. **Instalar dependencias**: Navega a la carpeta `arithmetic-app` y ejecuta el siguiente comando para instalar todas las dependencias necesarias.
    ```bash
    cd arithmetic-app
    npm install
    ```

4. **Ejecutar la aplicación Angular**: Una vez que las dependencias estén instaladas, puedes iniciar la aplicación Angular.
    ```bash
    ng serve
    ```

5. **Acceder a la aplicación**: Abre tu navegador y navega a `http://localhost:4200/`.

## Ejecución de la API de Spring Boot

1. **Instalar JDK 17+**: Descarga e instala JDK 17+ desde [oracle.com](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html). Asegúrate de configurar las variables de entorno `JAVA_HOME` y `PATH`.
    ```bash
    java -version
    ```

2. **Instalar Maven**: Descarga e instala Maven desde [maven.apache.org](https://maven.apache.org/). Asegúrate de configurar las variables de entorno `MAVEN_HOME` y `PATH`.
    ```bash
    mvn -version
    ```

3. **Navegar a la carpeta del proyecto**: Abre una terminal y navega a la carpeta `arithmetic-api`.
    ```bash
    cd arithmetic-api
    ```

4. **Construir el proyecto**: Usa Maven para construir el proyecto.
    ```bash
    mvn clean install
    ```

5. **Ejecutar la aplicación Spring Boot**: Inicia la aplicación.
    ```bash
    mvn spring-boot:run
    ```

6. **Acceder a la API**: La API estará disponible en `http://localhost:8080/`.

## Notas Adicionales

- Asegúrate de que las versiones de las herramientas sean compatibles con las versiones especificadas en el archivo `package.json` (para Angular) y `pom.xml` (para Spring Boot).
- Consulta la documentación oficial de [Angular](https://angular.io/docs) y [Spring Boot](https://spring.io/projects/spring-boot) para obtener más detalles y solución de problemas.
