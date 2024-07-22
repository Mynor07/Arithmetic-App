import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'arithmetic-app';
  result: string = ''; // Inicializar la propiedad result con un valor por defecto

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080', { responseType: 'text' })
      .subscribe(response => {
        this.result = response;
      });
  }
}
