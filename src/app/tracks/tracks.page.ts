import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TracksService } from '../services/tracks.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.page.html',
  styleUrls: ['./tracks.page.scss'],
})
export class TracksPage implements OnInit {

  selected: number[] = []; // Array que almacena los índices de las cards seleccionadas
  results: Observable<any[]> | undefined;
  searchTerm: string ='';
  constructor(private tracksService: TracksService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.searchTerm = (this.activateRoute.snapshot.paramMap.get("searchTerm")|| '').toString(); 
    this.results = this.tracksService.searchData(this.searchTerm);
  }

  toggleSelected(index: number) {
    // Si la card ya está seleccionada, la quitamos de la lista de seleccionadas
    if (this.isSelected(index)) {
      this.selected = this.selected.filter(i => i !== index);
    }
    // Si no está seleccionada, la añadimos a la lista
    else {
      this.selected.push(index);
    }
  }

  isSelected(index: number): boolean {
    return this.selected.includes(index);
  }

  viewDetails(itemId: string) {
    this.router.navigate(['/details', itemId]);
  }
}

