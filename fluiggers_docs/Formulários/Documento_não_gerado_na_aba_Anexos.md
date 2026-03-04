# Documento não gerado na aba Anexos

> **Fonte:** [https://fluiggers.com.br/t/documento-nao-gerado-na-aba-anexos/703](https://fluiggers.com.br/t/documento-nao-gerado-na-aba-anexos/703)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 04/10/2021, 20:08
> **Visualizações:** 356 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**vinicius** (@vinicius) — 04/10/2021, 20:08

Saudações,

Existem duas versões de processo chamado de Reembolso: um em ambiente de produção (onde o problema está) e também o de homologação (área de dev), a diferença entre eles é usuários, senhas e códigos de pastas ECM, nada do core é mudado, é basicamente o mesmo processo em ambientes distintos.

No decorrer do processo é gerado um base64 (que conferi, está tudo certo, tanto na geração quanto na utiização) que posteriomente virará um PDF (também gerando tranquilo) na atividade UGF, é nela que o base64 virará um pdf e também irá para a pasta no ECM. O que não ocorre, não vira PDF na aba Anexo e também não vai para pasta do ECM.

Mas esse comportamento só ocorre em produção e não ocorre em homologação, o que muda nesse arquivo (script beforeStateEntry) é apenas o usuario, senha e servidor.

Em conversa com um colega de trabalho resolvemos ver até onde o código é executado com log.info() para aparecer no nosso log até onde foi, verificamos que ele para nesse trecho de código:

hAPI.attachDocument(result.getItem().get(0).getDocumentId());

então fomos ver o que era impresso aqui: result.getItem().get(0).getDocumentId()

E o número “0” aparece, mas não sabemos o que isso significa.

logo após esse trecho o código é interrompido (havia um log.info após)

O que posso estar deixando passar?

link do código: [Imagens de código](https://imgur.com/a/8dl0GqK)

---

## Resposta #1

**Afonso Uliana Neto** (@Afonso) — 20/06/2022, 21:56

Boa noite [@vinicius](/u/vinicius)

voce conseguiu resolver o problema? Logo depois da funcao service.createSimpleDocument eu colocaria para gerar o LOG com log.dir(result); Isso porque o log.dir mostra todo a informação do objeto retornado.

---
