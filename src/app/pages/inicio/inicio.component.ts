import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  input!:string[];

  constructor(private data:DataService){}

  ngOnInit(): void {

    this.data.getAll().subscribe( data => this.input = data);

  }
}
