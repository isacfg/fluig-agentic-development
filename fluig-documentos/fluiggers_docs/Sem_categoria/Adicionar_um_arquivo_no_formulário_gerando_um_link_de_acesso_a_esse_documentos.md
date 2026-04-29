# Adicionar um arquivo no formulário gerando um link de acesso a esse documentos

> **Fonte:** [https://fluiggers.com.br/t/adicionar-um-arquivo-no-formulario-gerando-um-link-de-acesso-a-esse-documentos/3189](https://fluiggers.com.br/t/adicionar-um-arquivo-no-formulario-gerando-um-link-de-acesso-a-esse-documentos/3189)
> **Categoria:** Sem categoria
> **Criado em:** 11/03/2025, 15:34
> **Visualizações:** 57 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Fernando Ricardo de Almeida** (@feralm) — 11/03/2025, 15:34

Sou iniciante no Fluig e preciso de ajuda com o seguinte cenário:

Tenho um formulário que contém uma etapa de subprocesso, onde o responsável deve anexar um relatório em PDF.

Preciso que, ao concluir o subprocesso, a URL do documento anexado seja salva em um campo de texto e transferida via BPM para o formulário de origem. Esse campo deve exibir a URL como um link de acesso, permitindo que o usuário da próxima etapa visualize o documento com facilidade ao clicar no link.

Alguém poderia me orientar sobre como implementar essa funcionalidade? Agradeço desde já!

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 11/03/2025, 17:21

Você pode usar um evento de processo pra executar antes de entrar na atividade que finaliza o processo e nele procurar o anexo e salvar a URL num campo.

```javascript
/**
 * Executa ações antes de entrar na Atividade
 *
 * @param {number} sequenceId Sequência da atividade
 */
function beforeStateEntry(sequenceId) {

    if (sequenceId == NUMERO_ATIVIDADE_FINAL) {
        var anexos = hAPI.listAttachments();

        for (var i = 0; i < anexos.size(); ++i) {
            var anexo = anexos.get(i);

            if (anexo.getDocumentDescription() == "nome_do_arquivo_com_extensao.pdf") {
                hAPI.setCardValue("nome_campo_url_download", fluigAPI.getDocumentService().getDownloadURL(anexo.getDocumentId()));
                break;
            }
        }
    }
}
```

E no processo pai você configura pra ele puxar o campo que tem a URL, que aí ao finalizar o subprocesso esse campo será automaticamente preenchido.

Mas então você precisa com JS no navegador pegar o valor desse campo da URL e criar um link.

---

## Resposta #2

**Fernando Ricardo de Almeida** (@feralm) — 12/03/2025, 14:28

Boa tarde Bruno
Obrigado pelo retorno,
Vou aplicar a solução aqui no meu cenário.

---
