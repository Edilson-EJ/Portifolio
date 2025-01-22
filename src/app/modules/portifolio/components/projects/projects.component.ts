import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { EDialogPainelClass } from '../../enum/EDialogPainelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/sha-256.png',
      alt: 'classical-cryptography',
      title: 'classical-cryptography',
      with: '100px',
      height: '100px',
      description:
        'Projeto acadêmico de Segurança de Redes que implementa três criptografias clássicas: Cifra de César, Transposição e Chave Única. Desenvolvido em Angular, com interface responsiva e explicações didáticas.',
      links: [
        {
          name: 'classical-cryptography',
          href: 'https://github.com/Edilson-EJ/classical-cryptography',
        },
      ],
    },
    {
      src: 'assets/img/projects/api.png',
      alt: 'FirstAPI-CSharp-and-Angular',
      title: 'FirstAPI-CSharp-and-Angular',
      with: '100px',
      height: '100px',
      description:
        'APIAngularCSharp é um projeto que integra uma aplicação Angular com uma API em C# usando Entity Framework, permitindo gerenciar um cadastro de pessoas com funcionalidades de busca, filtragem e manipulação de dados.',
      links: [
        {
          name: 'FirstAPI-CSharp-and-Angular',
          href: 'https://github.com/Edilson-EJ/FirstAPI-CSharp-and-Angular',
        },
      ],
    },
    {
      src: 'assets/img/projects/noticia.png',
      alt: 'Jaguaribe_News',
      title: 'Jaguaribe_News',
      with: '100px',
      height: '100px',
      description:
        'Site de notícias criado com 4 Apis diferentes, nele você consegue consulta notícias do Brasil e do mundo, consulta a taxa de cambio das principais moedas e também o clima de cidades',
      links: [
        {
          name: 'Jaguaribe_News',
          href: 'https://github.com/Edilson-EJ/Jaguaribe_News',
        },
      ],
    },
    {
      src: 'assets/img/projects/marvel.svg',
      alt: 'Marvel-Comics',
      title: 'Marvel-Comics',
      with: '100px',
      height: '100px',
      description:
        'Marvel Comics Este site foi meticulosamente construído, integrando a API da Marvel para fornecer informações sobre essa renomada editora de quadrinhos, que possui décadas de histórias e um vasto universo de personagens. Além disso, o site faz uso da API do Google Maps.',
      links: [
        {
          name: 'Marvel-Comics',
          href: 'https://github.com/Edilson-EJ/Marvel-Comics',
        },
      ],
    },
    {
      src: 'assets/img/projects/star-channel.png',
      alt: 'Site-de-filmes-baseado-na-Star',
      title: 'Site-de-filmes-baseado-na-Star',
      with: '100px',
      height: '100px',
      description:
        'Este site, oferece aos usuários acesso a uma vasta coleção de filmes e conteúdos exclusivos. Utilizando a API de filmes do TMDB (The Movie Database), o portal proporciona uma experiência imersiva ao disponibilizar informações detalhadas sobre os filmes, como sinopse, elenco, avaliações dos usuários, trailers e muito mais.',
      links: [
        {
          name: 'Site-de-filmes-baseado-na-Star',
          href: 'https://github.com/Edilson-EJ/Site-de-filmes-baseado-na-Star-',
        },
      ],
    },
    {
      src: 'assets/img/projects/caracteristicas.png',
      alt: 'DesafioSquadraSistemaGerenciadorDeProdutos',
      title: 'DesafioSquadraSistemaGerenciadorDeProdutos',
      with: '100px',
      height: '100px',
      description:
        'Projeto desenvolvido com .NET 8 (backend) e Angular 17 (frontend), implementando um sistema de CRUD para gerenciamento de produtos com autenticação baseada em JWT.',
      links: [
        {
          name: 'DesafioSquadraSistemaGerenciadorDeProdutos',
          href: 'https://github.com/Edilson-EJ/DesafioSquadraSistemaGerenciadorDeProdutos',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPainelClass.projects,
    });
  }
}
