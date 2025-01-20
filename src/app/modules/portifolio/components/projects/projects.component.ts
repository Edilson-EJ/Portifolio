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
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPainelClass.projects,
    });
  }
}
