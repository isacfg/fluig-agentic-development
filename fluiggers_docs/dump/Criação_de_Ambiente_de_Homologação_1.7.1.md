# Criação de Ambiente de Homologação 1.7.1

> **Fonte:** [https://fluiggers.com.br/t/criacao-de-ambiente-de-homologacao-1-7-1/775](https://fluiggers.com.br/t/criacao-de-ambiente-de-homologacao-1-7-1/775)
> **Categoria:** Ambiente Fluig
> **Criado em:** 16/11/2021, 22:48
> **Visualizações:** 926 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Emerson Rodrigues** (@Emerson_Rodrigues) — 16/11/2021, 22:48

Olá meus queridos. Estou tentando criar um ambiente de homologação da base de produção de um fluig que foi atualizado desde a 1.5.13 até 1.7.1, em produção o ambiente roda certinho, porém ao tentar criar um ambiente de homologação da este erro abaixo (img). O procedimento foi o seguinte: Copiei a base de dados de produção do MySql versão 8.0.19, copiei a pasta da aplicação fluig, recriei os serviços do fluig e alterei os caminhos em host, standalone e domain.xml. Ao tentar subir o fluig aparece o erro.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/197ac10b307daa54cc00981877cee702d47110be_2_690x146.png)

Alguém já passou por esse tipo de erro que possa me ajudar?

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 29/11/2021, 23:28 | ❤️ 2

Boa noite Emerson,

Jamais utilize a mesma aplicação para este tipo de replicação, a recomendação é sempre rodar um instalador novo, da versão sucessora a que está trazendo o banco, por exemplo se teu banco de produção estava na 1.6.5, o mais indicado é tu pegar o bkp deste banco realizar o restore nele para se tornar um banco de homologacao e rodar um instalador novo da versão 1.7.0 por exemplo.
durante a execução deste instalador, deves tratar como se fosse uma instalação normal informando ips e portas que devem rodar neste ambiente de homologação.
no momento de configurar o banco de dados, realize o apontamento para o banco de homologacao restaurado, conclua a instalacao do fluig.
Não inicialize os servicos ainda.
Realize a copia de componentes personalisados que ficam em /appserver/apps
copie o volume do ambiente producao.
Sugestão é tentar manter o diretorio da aplicacao e do volume identicos ao do servidor de producao.

depois dessas parametrizacoes, tu pode iniciar o fluig e realizar os demais ajusstes, como edicao dos servicos, configuracao de SSL, e integracao com AD, envio de emails e até mesmo as validacoes de servicos e cadastros realizados que podem apontar para um ambiente produtivo.

Abrass

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Emerson Rodrigues** (@Emerson_Rodrigues) — 06/01/2022, 16:31

Valeu Igor,
Após muita dor de cabeça com este problema eu consegui resolver o problema seguindo basicamente o que vc escreveu com um adendo na hora de realizar as cópias de banco, volume e apps do fluig que por algum motivo de nomeclatura das pastas do windows estava dando pau, aí tive que realizar a cópia de pasta por pasta individualmente que estavam dando erros na cópia. Outra coisa foi realizar todos os backups com o Fluig de produção parado, porque eu estava perdendo algum jar na hora da cópia que quando o Fluig começava a subir os pacotes sempre estava faltando algo e dava muito erro. Mas muito obrigado aee mano.

---
