// Importamos las clases Component y OnInit desde la biblioteca de Angular
import { Component, OnInit } from '@angular/core';

// Importamos las clases FormGroup, FormBuilder y Validators desde la biblioteca de formularios de Angular
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Decoramos la clase ArithmeticFormComponent con la metadata de componente
@Component({
  // Selector del componente (etiqueta HTML que se utilizará para renderizar el componente)
  selector: 'app-arithmetic-form',
  // Ruta del template HTML del componente
  templateUrl: './arithmetic-form.component.html',
  // Ruta del archivo CSS del componente
  styleUrls: ['./arithmetic-form.component.css']
})

// Definimos la clase ArithmeticFormComponent que implementa la interfaz OnInit
export class ArithmeticFormComponent implements OnInit {
  // Propiedad form de tipo FormGroup (formulario reactivo)
  form!: FormGroup;
  // Propiedad result de tipo string o number (resultado de la operación)
  result: string | number = ''; // Inicializa la variable result

  // Constructor de la clase, inyectamos el servicio FormBuilder
  constructor(private fb: FormBuilder) { }

  // Método ngOnInit, se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    // Creamos un formulario reactivo con tres campos: num1, num2 y operation
    this.form = this.fb.group({
      num1: ['', Validators.required], // Campo num1, requerido
      num2: ['', Validators.required], // Campo num2, requerido
      operation: ['', Validators.required] // Campo operation, requerido
    });
  }

  // Método onSubmit, se ejecuta cuando se envía el formulario
  onSubmit(): void {
    // Verificamos si el formulario es válido
    if (this.form.valid) {
      // Obtenemos los valores de los campos del formulario
      const num1 = this.form.get('num1')?.value;
      const num2 = this.form.get('num2')?.value;
      const operation = this.form.get('operation')?.value;

      // Declarar variable result de tipo string o number
      let result: string | number;

      // Utilizamos un switch statement para realizar la operación matemática correspondiente
      switch (operation) {
        case 'suma':
          result = num1 + num2;
          break;
        case 'resta':
          result = num1 - num2;
          if (result === 0) {
            result = '0';
          }
          break;
        case 'multiplicacion':
          result = num1 * num2;
          if (result === 0) {
            result = '0';
          }
          break;
        case 'division':
          if (num2 === 0) {
            alert('Error: No se puede dividir entre 0');
            result = 'Error: No se puede dividir entre 0';
          } else {
            result = num1 / num2;
          }
          break;
        default:
          result = 'Error: Operación no válida';
      }

      // Imprimimos el resultado en la consola
      console.log(`El resultado es: ${result}`);
      // Asignamos el resultado a la propiedad result
      this.result = result;
    } else {
      // Si el formulario no es válido, imprimimos un mensaje en la consola
      console.log('El formulario no es válido');
    }
  }
}
