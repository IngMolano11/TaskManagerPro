import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-box.html',
  styleUrl: './search-box.css'
})
export class SearchBox {
  searchTerm: string = '';
  isLoading: boolean = false;
  showResults: boolean = false;
  searchResults: any[] = [];

  onSearch() {
    // Implementar lógica de búsqueda
    this.isLoading = true;
    this.showResults = true;
    // Simular búsqueda
    setTimeout(() => {
      this.searchResults = []; // Aquí irían tus resultados reales
      this.isLoading = false;
    }, 500);
  }

  selectResult(result: any) {
    // Implementar lógica de selección
    console.log('Resultado seleccionado:', result);
    this.showResults = false;
  }
}
