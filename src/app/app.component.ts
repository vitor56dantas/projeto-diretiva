import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  textoBotao = 'Esconder';
  esconder = false;

  pessoas = [
    { nome: 'José', idade: 18, cidade: 'São Paulo', estado: 'São Paulo' },
    { nome: 'Maria', idade: 22, cidade: 'São Paulo', estado: 'São Paulo' },
    { nome: 'Jorge', idade: 26, cidade: 'São Paulo', estado: 'São Paulo' },
    { nome: 'Mario', idade: 30, cidade: 'São Paulo', estado: 'São Paulo' },
    { nome: 'Nelson', idade: 34, cidade: 'São Paulo', estado: 'São Paulo' },
  ];

  alterarExibicao() {
    this.textoBotao = this.esconder ? 'Esconder' : 'Exibir';
    this.esconder = !this.esconder;
  }

  adicionar(nome, idade, cidade, estado) {
    this.pessoas = [
      { nome: nome, idade: idade, cidade: cidade, estado: estado },
      ...this.pessoas,
    ];
  }

  pegarCor(idade) {
    return idade >= 30 ? 'red' : 'blue';
  }
  title = 'projeto-diretiva';
}
