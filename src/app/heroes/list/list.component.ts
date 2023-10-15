import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroeNames: string[] = ['Spiderman', 'Ironman', 'Batman', 'Thor'];
  public deletedHero?: string;

  public eliminarHero(): void {
    this.deletedHero = this.heroeNames.pop();
  }
}
