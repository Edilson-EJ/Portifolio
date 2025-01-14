import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Operador de suporte técnico I',
        p: 'Brisanet Telecomunicações | ago de 2021 - ago de 2023',
      },
      text: '<p>Minha principal responsabilidade era entender rapidamente as necessidades dos clientes e oferecer soluções claras para resolver problemas, como diagnósticos de conectividade, configuração de dispositivos, resolução de falhas técnicas e orientações sobre o uso dos serviços da empresa.</p>',
    },
  ]);
}
