import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoa.model';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  id:number;
  nome: string;
  sobrenome: string;
  sexo: string;
  sexos: Array<string>;
  pessoas: Array<Pessoa>;


  constructor() { }

  ngOnInit() {
  this.id = 0;
  this.nome = '';
  this.sobrenome = '';
  this.sexos = ['Masculino', 'Feminino', 'Outros'];  
  this.pessoas = [
  ]
  
  }

  salvar(){
    this.pessoas.push(new Pessoa(this.id, this.nome, this.sobrenome, this.sexo));
    this.id++;
    console.log(this.pessoas);
    this.nome = '';
    this.sobrenome = '';
    this.sexo = '';
  }

  editar(i:Pessoa){ 
    let p = this.pessoas.splice(i.id, 1);
    let person = p[0];
    this.nome = person.nome;
    this.sobrenome = person.sobrenome;
    
  };

  excluir(i:Pessoa){
    this.pessoas.splice(i.id, 1);
  }

}
