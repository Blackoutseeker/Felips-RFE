import { NextPage } from 'next'
import Head from 'next/head'
import MainTitle from '@components/MainTitle'
import Summary from '@components/Summary'
import SimpleSection from '@components/SimpleSection'
import AttachmentsSection from '@components/AttachmentsSection'
import Signature from '@components/Signature'
import { SUMMARY_LINKS } from '@utils/constants'

const HomePage: NextPage = () => {
  return (
    <div
      className="flex justify-center items-center h-full w-full
      flex-col p-16 overflow-y-auto"
    >
      <Head>
        <title>FELIPE - RFE</title>
        <meta
          name="description"
          content="Felipe - Relatório Final de Estágio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainTitle />
      <Summary />
      <SimpleSection
        elementId={SUMMARY_LINKS.first}
        title="Agradecimentos"
        description="
          AGRADEÇO A LITERALMENTE TUDO QUE ME OCORREU DURANTE TODA MINHA
          VIVÊNCIA, TANTO PESSOAL, COMO ESCOLAR E PROFISSIONAL. CADA
          MOMENTO, CADA PALAVRA DITA, CADA AÇÃO COMETIDA, CADA ATITUDE
          TOMADA E A CADA DETALHE TRANSPARECIDO, TUDO ISSO PRESTOU-SE COMO
          ALICERCE PARA A CONSTRUÇÃO DA PESSOA CUJO A QUAL SOU HOJE.
        "
      />
      <SimpleSection
        elementId={SUMMARY_LINKS.second}
        title="A empresa concedente (Agência Savvy)"
        description="
          Meu estágio ocorreu na Agência Savvy (SAVVY INTELIGENCIA DIGITAL),
          localizada na Rua Pedro Furtado de Lacerda, Milagres – CE. Informações adicionais:
          Data de abertura: 16/02/2016; CNPJ: 24.186.866/0001-05; Razão Social: SAVVY
          INTELIGENCIA DIGITAL S/S LTDA; Nome fantasia: SAVVY INTELIGENCIA DIGITAL;
          Tipo: MATRIZ; Natureza Jurídica: 2240 - SOCIEDADE SIMPLES LIMITADA.
          A Agência Savvy é uma empresa que trabalha com mídias digitais e marketing
          digital, responsável por fazer postagens no Instagram de diversas empresas e comércios 
          da cidade de Milagres – CE, impulsionando a presença dessas empresas dentro do
          mercado digital. Possui a maioria da sua equipe composta por designers gráficos, já que
          a empresa trabalha veementemente com esse tipo de produto.
        "
      />
      <SimpleSection
        elementId={SUMMARY_LINKS.third}
        title="Atividades desenvolvidas durante o Projeto Social"
        description="
          Na cidade de Milagres – CE, existia um problema cotidiano partilhado entre os
          cidadãos locais: a falta de informação sobre profissionais autônomos que realizam
          determinado serviço. As referências desses profissionais eram passadas de boca em
          boca pelos residentes, e pouco se sabia quais eram as formas de contato com os
          mesmos, dificultando a contratação de serviços por esses ofertados. Mediante esse 
          cenário problemático e nada prático, no dia 30/11/2021, eu, Felipe Pereira de Souza
          Silva, sugeri a ideia de desenvolver um aplicativo para profissionais autônomos e seus
          contratantes, cujo o qual possibilitaria agregar mais visibilidade para esses profissionais,
          e consequentemente, impulsionando o mercado digital da cidade de Milagres – CE, a
          qual era o alvo da solução tecnológica. Após a conclusão do desenvolvimento da primeira
          versão do aplicativo, o publiquei na Google Play Store (loja oficial de aplicativos móveis
          do Sistema Operacional Android), possibilitando o acesso do aplicativo para o público
          alvo do problema. Após a disponibilidade do aplicativo dentro da loja, nós do Curso
          Técnico em Informática começamos a divulgar pelas redes sociais, e posteriormente,
          profissionais autônomos começaram a se cadastrar no aplicativo, como o esperado,
          facilitando a comunicação entre contratante e profissional.
        "
      />
      <SimpleSection
        elementId={SUMMARY_LINKS.fourth}
        title="Atividades desenvolvidas durante o estágio na Agência Savvy"
        description="
          No segundo dia de estágio, com o website interno definido como projeto a ser
          desenvolvido para a empresa, minha colega começou a atuar como UI/UX Designer, e
          eu como Desenvolvedor Web. Fazíamos o trabalho em dupla, de forma simultânea.
          Enquanto ela fazia os protótipos de telas a serem utilizadas no projeto, eu as
          transformava em código. O supervisor de estágio me concedeu liberdade para escolher
          quais tecnologias utilizar para desenvolver o website, e fiz as seguintes escolhas,
          conforme com o que eu já estava habituado a trabalhar: Next.js, um poderoso framework
          para aplicações web baseadas em Server Side Rendering (SSR); juntamente com React,
          uma biblioteca JavaScript para criar interfaces de usuário, possibilitando a criação de
          componentes visuais reutilizáveis e criar Single-Page Applications (SPA); usando styled-components como biblioteca utilitária de estilização de páginas web, a qual funciona
          como CSS-in-JS; Firebase Authentication, como forma de autenticar funcionários
          autorizados para terem acesso ao website; Firebase Real Time Database, o qual teve
          seu papel como banco de dados em tempo real, funcionando como Backend-as-a-Service (BaaS); Firebase Storage, como servidor de armazenamento de arquivos de
          mídia (fotos, vídeos, documentos e etc.); Redux, como biblioteca para gerenciamento de
          estados dentro da aplicação web; Jest, como framework JavaScript de testes unitários e
          de integração; Cypress, como framework para testes de ponto-a-ponto (end-to-end ou e-2-e), como forma de assegurar que novas funcionalidades não quebrassem outras
          existentes; Node.js, servindo como backend para envio de e-mails para os clientes da 
          empresa, usando o conceito de Application Programming Interface (API); Nodemailer,
          usado como módulo para envio de e-mails dentro do Node.js; Heroku, como plataforma
          para a hospedagem do backend feito em Node.js; Vercel, para a hospedagem do website
          em si, feita especialmente para aplicações web que utilizam Next.js; Git, como Sistema
          de Versionamento de código, atribuindo mais qualidade e segurança em refatorações de
          código-fonte; GitHub, para hospedar o código-fonte do website e do backend; e muito
          mais ferramentas para facilitar o desenvolvimento. O website tinha como objetivos
          gerenciar os clientes que contrataram os serviços da empresa, gerenciar o fluxo de
          pagamentos da contratação de serviços dos clientes, gerenciar funcionários da empresa
          que podem ter acesso ao website, e apresentar um dashboard contendo informações
          relacionadas aos pagamentos gerais. Vale ressaltar que, pela utilização de frameworks
          para testes, a técnica de desenvolvimento de software que mais se destacou dentro do
          projeto foi o Test Driven Development (TDD), Desenvolvimento guiado por testes, em
          português, onde são escritos testes primeiro, e depois suas funcionalidades que almejam
          serem testadas.
        "
      />
      <SimpleSection
        elementId={SUMMARY_LINKS.fifth}
        title="Conclusão"
        description="
          O estágio é uma das principais e mais importantes oportunidades para que o aluno
          possa amadurecer pessoalmente e profissionalmente. Ele proporciona de maneira quase
          “indireta”; ter responsabilidade com seus deveres, refletir sua postura como cidadão,
          agregar valores éticos e morais dentro da sociedade, arquitetar uma boa educação
          financeira, criar laços afetivos com as pessoas que o rodeiam dentro do ambiente de
          trabalho, aprimorar seus conhecimentos os colocando em prática de maneira profissional,
          e ganhar experiência para o mercado de trabalho. Sem dúvidas o estágio é um passo
          fundamental para os profissionais que almejam ter sucesso em sua carreira.
        "
      />
      <AttachmentsSection elementId={SUMMARY_LINKS.sixth} title="Anexos" />
      <Signature />
    </div>
  )
}

export default HomePage
