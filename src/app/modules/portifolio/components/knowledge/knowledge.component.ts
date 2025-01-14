import { Component, signal } from '@angular/core';
import { IKnowLedge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowLedge[]>([
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento de angular',
    },
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'Icone de conhecimento de typescript',
    },
    {
      src: 'assets/icons/knowledge/js.svg',
      alt: 'Icone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de conhecimento de html5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone de conhecimento de css3',
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Icone de conhecimento de sass',
    },
    {
      src: 'assets/icons/knowledge/csharp.svg',
      alt: 'Icone de conhecimento de csharp',
    },
    {
      src: 'assets/icons/knowledge/dotnet-framework.svg',
      alt: 'Icone de conhecimento de dotnet-framework',
    },
  ]);
}
