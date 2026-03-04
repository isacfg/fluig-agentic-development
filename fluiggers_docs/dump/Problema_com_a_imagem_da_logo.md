# Problema com a imagem da logo

> **Fonte:** [https://fluiggers.com.br/t/problema-com-a-imagem-da-logo/368](https://fluiggers.com.br/t/problema-com-a-imagem-da-logo/368)
> **Categoria:** Ambiente Fluig
> **Tags:** `fluig`, `servlet`, `tema`, `logo`
> **Criado em:** 15/04/2021, 09:05
> **Visualizações:** 893 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Victor Castro** (@victorcastro) — 15/04/2021, 09:05

Recentemente criei um servidor mais atualizado na empresa de um cliente pra poder migrar o ambiente Fluig pra lá, aproveitando pra atualizar pra última versão (1.7.0-210406), tendo em vista que a versão de Fluig que eles utilizavam era muito antiga (1.6.5-190416).

Acredito que fiz tudo conforme orienta a [documentação](https://tdn.engpro.totvs.com.br/display/public/FF/ARQ+-+Como+migrar+o+servidor+da+plataforma) ao migrar a plataforma de servidor. Primeiro precisei instalar a última release da 1.6.5 pra depois atualizar pra 1.7.0, importei o bkp do banco da base oficial e copiei a pasta Volume.

Mas tô tendo um problema que acredito ser simples mas chato de resolver. Já tentei de tudo e até agora não descobri o problema.

Na personalização do tema, ao tentar importar uma imagem pra servir como logo, a imagem não upa de jeito nenhum. Faz o upload do arquivo mas ao fazer login novamente não encontra mais o caminho. Alguém tem alguma luz pra me dar?

![image](https://fluiggers.com.br/uploads/default/optimized/1X/2a4e35cc502cfe0153726bf51e04ff1ccc4f1a8d_2_690x267.png)

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 15/04/2021, 11:31

Cara, você já olhou as permissões de pastas e arquivos no volume? Como você migrou, pode ser que ele não esteja conseguindo acessar alguma parte do volume por problema de permissão.

Se for Windows, vai lá nas propriedades de segurança e redefine tudo pra subpastas e arquivos.

Se for Linux, usa CHMOD pra acertar as permissões de forma recursiva.

---

## Resposta #2

**Victor Castro** (@victorcastro) — 15/04/2021, 14:24

Aparentemente tá tudo ok nas permissões. Tanto que eu fiz um teste de upar uma imagem X como logo. No caminho **instalação/volume/custom/assets** a imagem aparece lá. Então voltei na plataforma e upei uma imagem Y no lugar dela e no diretório a imagem foi modificada. Mas ambas as vezes continua aparecendo da mesma forma que eu mostrei no print.

---
