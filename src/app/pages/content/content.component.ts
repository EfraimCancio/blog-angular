import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../pages/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  photoCover: string = "https://img.freepik.com/fotos-premium/um-porsche-911-vermelho-esta-estacionado-em-uma-rua-escura_796580-1885.jpg"
  contentTitle: string = "MEU TITULO"
  contentDescription: string = "Minha descrição"
  private id: string | null = "0"

  constructor(private route: ActivatedRoute) { };

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.id = value.get("id")
    );

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover
  }



}
