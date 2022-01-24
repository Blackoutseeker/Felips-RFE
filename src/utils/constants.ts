import { SummaryItemTemplate } from '@models/summary'
import { AttachmentTemplate } from '@models/attachment'

export enum SUMMARY_LINKS {
  first = '#thanks',
  second = '#enterprise',
  third = '#socialProject',
  fourth = '#enterpriseActivities',
  fifth = '#conclusion',
  sixth = '#attachments'
}

export const summaryItems: SummaryItemTemplate[] = [
  {
    number: 1,
    name: 'Agradecimentos',
    link: SUMMARY_LINKS.first
  },
  {
    number: 2,
    name: 'A empresa concedente (Agência Savvy)',
    link: SUMMARY_LINKS.second
  },
  {
    number: 3,
    name: 'Atividades desenvolvidas durante o Projeto Social',
    link: SUMMARY_LINKS.third
  },
  {
    number: 4,
    name: 'Atividades desenvolvidas durante o estágio na Agência Savvy',
    link: SUMMARY_LINKS.fourth
  },
  {
    number: 5,
    name: 'Conclusão',
    link: SUMMARY_LINKS.fifth
  },
  {
    number: 6,
    name: 'Anexos',
    link: SUMMARY_LINKS.sixth
  }
]

export const attachments: AttachmentTemplate[] = [
  {
    imageUrl: process.env.FIREBASE_ASSET_01!,
    alt: 'Usando a plataforma Trello para organizar nosso workflow'
  },
  {
    imageUrl: process.env.FIREBASE_ASSET_02!,
    alt: '1° Quebra-Cabeça: Listagem de TODOS os clientes, em apenas uma página, usando paginação limitada'
  },
  {
    imageUrl: process.env.FIREBASE_ASSET_03!,
    alt: '2° Quebra-Cabeça: Quando habilitar os botões de página anterior e próxima?'
  },
  {
    imageUrl: process.env.FIREBASE_ASSET_04!,
    alt: 'Implementando botões com as funções anteriormente apresentadas'
  },
  {
    imageUrl: process.env.FIREBASE_ASSET_05!,
    alt: '3° Quebra-Cabeça: "Complicando para facilitar", declarando Tear-Offs'
  },
  {
    imageUrl: process.env.FIREBASE_ASSET_06!,
    alt: 'Test Suites com Jest: Passando de primeira!'
  },
  {
    imageUrl: process.env.FIREBASE_ASSET_07!,
    alt: 'Qual é o poder de programação do estagiário? É de mais de 8000!'
  }
]

export const signatureImageUrl: string = process.env.FIREBASE_ASSET_SIGNATURE!
