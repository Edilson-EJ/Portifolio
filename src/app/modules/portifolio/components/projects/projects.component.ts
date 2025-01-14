import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/android.svg',
      alt: 'teste',
      title: 'teste',
      with: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'nome do projeto',
          href: 'link do projeto',
        },
      ],
    },
  ]);
}
