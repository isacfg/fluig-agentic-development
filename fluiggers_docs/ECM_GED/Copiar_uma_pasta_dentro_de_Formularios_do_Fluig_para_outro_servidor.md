# Copiar uma pasta dentro de Formularios do Fluig para outro servidor

> **Fonte:** [https://fluiggers.com.br/t/copiar-uma-pasta-dentro-de-formularios-do-fluig-para-outro-servidor/2666](https://fluiggers.com.br/t/copiar-uma-pasta-dentro-de-formularios-do-fluig-para-outro-servidor/2666)
> **Categoria:** ECM / GED
> **Criado em:** 25/03/2024, 18:38
> **Visualizações:** 181 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 25/03/2024, 18:38

Prezado, eu estou com um servidor de homologação.

Preciso copiar os dados somente de uma das pastas de dentro do Formulário do Fluig da instalação em produção para dentro da mesma pasta da instalação de homologação.

O formulário eu sei que posso exportar de dentro do Eclipse para o servidor de homologação, mas os dados não consegui a informação de como fazer.

Tem um jeito fácil de fazer isto?

Copiar e colar não me foi permitido fazer.

---

## Resposta #1

**venturelli** (@venturelli) — 03/04/2024, 11:19

Via Fluig não tem como fazer a migração de documentos de um ambiente para outro. Você pode fazer via volume diretamente, mas lembrando que ao fazer isso o Fluig não vai criar id’s ou versões do documento sozinho, ou seja, deve ser respeitado a estrutura que o Fluig para qual está sendo copiado possui.

Ou seja, o homologação pode ter 15 versionamentos e o produção 10. Você pode até copiar os dados da versão 15 para a versão 10 do produção, mas não pode querer que o Fluig ‘crie’ outras 5 versões sozinho pra igualar as quantidades.

E claro, cuidado com essa cópia de volume para não fazer coisas erradas e perder dados.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**MAURO SIMOES** (@Mautresim) — 03/04/2024, 17:37

Valeu, [@venturelli](/u/venturelli)! Nem vou tentar.
Aliás, já resolvi a cópia via javascript em Widget.

1.  Criei uma widget no Eclipse e exportei para o servidor de produção e para o remoto
2.  Exportei o mesmo formulário que abriga os documentos no GED da produção para o remoto e anotei o número da pasta criada dentro de Formulários do Fluig
3.  No servidor de produção, a widget tem um botão de exportação. Via javascript crio um arquivo CSV com toda a informação dos campos do formulário associado à pasta original
4.  No servidor remoto, a widget tem um botão de importação. Via javascript leio o arquivo CSV criado e crio o documento com base no formulário do item 2 e com destino para o número da pasta criada no item 2 também.

---
