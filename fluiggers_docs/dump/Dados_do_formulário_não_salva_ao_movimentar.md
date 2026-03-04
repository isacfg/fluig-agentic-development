# Dados do formulário não salva ao movimentar

> **Fonte:** [https://fluiggers.com.br/t/dados-do-formulario-nao-salva-ao-movimentar/2630](https://fluiggers.com.br/t/dados-do-formulario-nao-salva-ao-movimentar/2630)
> **Categoria:** Mobile
> **Criado em:** 11/03/2024, 09:28
> **Visualizações:** 143 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Paulo Dias** (@pdias) — 11/03/2024, 09:28

Olá,
Estamos com um problema que ao preencher um processo no mobile via app My Fluig, ao movimentar a solicitação as informações que foram preenchidas não salvam. Isso não ocorre sempre, por exemplo, com a mesma solicitação ao tentar finalizar uma vez pode ser que salve, porém se tentar de novo pode ser que não salve. O que reparei no server.log de diferente em uma que deu certo e uma que deu errado é isso:

Solicitação que não salvou as informações:

# [](#p-5771-saving-card-process-aprov_ordem_servico-instance-77842-sequence-9-dados-wdkcontrolmobtrue-wkmobiletrue-1)Saving card. Process: Aprov\_ordem\_servico, Instance: 77842, Sequence: 9, Dados: {wdkcontrolmob=true, WKMobile=true}

Solicitação que salvou as informações:

# [](#p-5771-saving-card-process-aprov_ordem_servico-instance-77842-sequence-9-dados-isigbaserespfimos-fsigbaserespfimos-sigbasemanuini-asigbasemanufim-nomemanuini-isigbaserespfim-pmocattextarea-2)Saving card. Process: Aprov\_ordem\_servico, Instance: 77842, Sequence: 9, Dados: {IsigBaserespFimOs=, FsigBaserespFimOs=, sigBasemanuIni=, AsigBasemanuFim=, nomeManuIni=, IsigBaserespFim=, PMOCAtTextArea=}

A diferença é que a solicitação que salva as informações ele passa todos os campos do formulário, enquanto a que não salva ele só passa esses dois campos de mobile.

Alguém já passou por algo parecido?

---
