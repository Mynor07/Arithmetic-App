// Paquete donde se encuentra la clase ArithmeticController
package com.example.arithmetic_api;

// Importamos las anotaciones necesarias para crear un controlador REST
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// Anotamos la clase ArithmeticController como un controlador REST
@RestController
public class ArithmeticController {

  // Método que se encarga de realizar la suma de dos números
  @GetMapping("/sum")
  public String sum(@RequestParam double num1, @RequestParam double num2) {
    // Realizamos la suma y devolvemos el resultado como una cadena
    return String.valueOf(num1 + num2);
  }

  // Método que se encarga de realizar la resta de dos números
  @GetMapping("/subtract")
  public String subtract(@RequestParam double num1, @RequestParam double num2) {
    // Realizamos la resta y devolvemos el resultado como una cadena
    return String.valueOf(num1 - num2);
  }

  // Método que se encarga de realizar la multiplicación de dos números
  @GetMapping("/multiply")
  public String multiply(@RequestParam double num1, @RequestParam double num2) {
    // Realizamos la multiplicación y devolvemos el resultado como una cadena
    return String.valueOf(num1 * num2);
  }

  // Método que se encarga de realizar la división de dos números
  @GetMapping("/divide")
  public String divide(@RequestParam double num1, @RequestParam double num2) {
    // Verificamos si el segundo número es cero para evitar una división por cero
    if (num2 == 0) {
      // Lanzamos una excepción si se intenta dividir por cero
      throw new ArithmeticException("La división no se puede hacer por 0.");
    }
    // Realizamos la división y devolvemos el resultado como una cadena
    return String.valueOf(num1 / num2);
  }
}