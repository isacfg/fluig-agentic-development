# Recuperando o caminho de um documento no GED ou anexo ao processo

> **Fonte:** [https://fluiggers.com.br/t/recuperando-o-caminho-de-um-documento-no-ged-ou-anexo-ao-processo/734](https://fluiggers.com.br/t/recuperando-o-caminho-de-um-documento-no-ged-ou-anexo-ao-processo/734)
> **Categoria:** ECM / GED
> **Criado em:** 22/10/2021, 09:32
> **Visualizações:** 927 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Mauricio Freitas** (@mauriciolanner) — 22/10/2021, 09:32 | ❤️ 1

Bom dia pessoal, estou precisando consumir uma API externa que junta documentos PDF. Basicamente preciso recuperar todos documentos anexos em um processo, juntá-los e gravar no GED. Porém estou tendo uma dificuldade grande pra recuperar o caminho desse documento, já que a API que consumo, fica no mesmo servidor do Fluig, eu envio o caminho do arquivo pra ela e ela faz todo o trabalho. Alguem sabe se tem uma forma de eu enviar o ID do documento e recuperar o caminho, pode SQL ou APIfluig?

---

## Resposta #1

**Gabriel Franco da Rocha Nascimento** (@gabrielfrna) — 22/10/2021, 15:51 | ❤️ 1

[@mauriciolanner](/u/mauriciolanner) , segue função que retorna a URL do documento pelo ID:

```javascript
function retornaDocumento(idDoc, callback) {
    $.ajax({
        async: false,
        url: '/api/public/ecm/document/downloadURL/' + idDoc,
        method: 'GET',
        contentType: 'application/json;',
    }).done((result) => {
        callback(result.content);
    }).fail((result) => {
        console.error(result);
        FLUIGC.toast({
            title: 'Falha: ',
            message: 'Não foi possivel encontrar o arquivo.' ,
            type: 'danger'
        });
    });
} // retornaDocumento
```

---

## Resposta #2

**Mauricio Freitas** (@mauriciolanner) — 22/10/2021, 16:22

Muito bom, mas não seria exatamente isso, pois o que estou procurando é o arquivo dentro de C:\\ A API que consumo eu preciso enviar o arquivo na pasta, pois por protocolo http ele não consegue editar o arquivo e salvar depois. Mas acho que isso pode ser uma luz pra conseguir resolver o problema, muito obrigado desde já pela ajuda.

---

## Resposta #3

**Sérgio Machado** (@sergio.machado) — 22/10/2021, 16:46

Tenta isso:

Lembra de alterar o caminho de acordo com sua instalação.

```auto
var docs = hAPI.listAttachments(); // Lista com os anexos presentes na solicitação
// Percorre a lista de anexos da solicitação
for (var i = 0; i < docs.size(); i++) {
	var anexo = docs.get(i);
	// Procurar por anexo onde a descrição do documento seja "REGISTRO DE NASCIMENTO.pdf"
	if (anexo.getDocumentDescription() == "REGISTRO DE NASCIMENTO.pdf") {
		var caminho = "D:/volumes/minha_empresa/public/" + anexo.getDocumentId() + "/" + anexo.getVersion() + "/" + anexo.getPhisicalFile();
		log.info("### caminho no disco")
		log.dir(caminho)
		break;
	}
}
```

---
