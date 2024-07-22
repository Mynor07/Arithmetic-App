// Paquete donde se encuentra la clase CorsConfiguration
package com.example.arithmetic_api.config;

// Importamos las clases necesarias para la configuración de CORS
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// Anotamos la clase CorsConfiguration como una configuración de Spring
@Configuration
// Habilitamos el soporte para Web MVC
@EnableWebMvc
public class CorsConfiguration implements WebMvcConfigurer {

    // Método que se encarga de agregar las configuraciones de CORS
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Agregamos una configuración de CORS para todas las rutas (/**)
        registry.addMapping("/**")
                // Permitimos solicitudes desde el origen http://localhost:4200
                .allowedOrigins("http://localhost:4200")
                // Permitimos los métodos GET, POST, PUT, DELETE y OPTIONS
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                // Permitimos los headers Content-Type y Authorization
                .allowedHeaders("Content-Type", "Authorization")
                // Permitimos credenciales en las solicitudes
                .allowCredentials(true);
    }
}