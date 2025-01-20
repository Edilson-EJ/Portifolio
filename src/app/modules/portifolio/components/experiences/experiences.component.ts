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
        strong: 'Desenvolvedor full stack',
        p: 'Grupo de Pesquisa em Informática Aplicada, Redes e Telecomunicações (IART) | jan de 2024 - o momento | Meio período',
      },
      text: '<p>Atuo no desenvolvimento de sistemas robustos como parte do projeto IART, uma iniciativa do IFCE Jaguaribe em parceria com o Instituto Iracema e Sebraetechs. Minhas atividades incluem a criação de soluções tecnológicas utilizando as principais ferramentas de desenvolvimento, como Angular, Django e Flutter, para atender às demandas de projetos em conjunto com o IFCE e outras instituições parceiras.</p>',
    },
    {
      summary: {
        strong: 'Estagiário Cloud & DevSecOps',
        p: 'Compass UOL · Estágio | dez de 2023 - mai de 2024 | Remota',
      },
      text: '<p>Durante meu estágio na Compass UOL, tive a oportunidade de desenvolver habilidades práticas em AWS, Docker e Kubernetes, com ênfase na criação e gerenciamento de contêineres em ambientes de produção. Também aprofundei meus conhecimentos em Linux, compreendendo sua importância em ambientes de nuvem, e na segurança em aplicações web, focando na identificação e mitigação de vulnerabilidades. Esta experiência foi fundamental para meu crescimento profissional, preparando-me para os desafios do cenário tecnológico atual.</p>',
    },
    {
      summary: {
        strong: 'Operador de suporte técnico I',
        p: 'Brisanet Telecomunicações | ago de 2021 - ago de 2023',
      },
      text: '<p>Minha principal responsabilidade era entender rapidamente as necessidades dos clientes e oferecer soluções claras para resolver problemas, como diagnósticos de conectividade, configuração de dispositivos, resolução de falhas técnicas e orientações sobre o uso dos serviços da empresa.</p>',
    },
  ]);
}
