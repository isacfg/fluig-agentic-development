# Upload de Fotos da Câmera - MyFLuig

> **Fonte:** [https://fluiggers.com.br/t/upload-de-fotos-da-camera-myfluig/2371](https://fluiggers.com.br/t/upload-de-fotos-da-camera-myfluig/2371)
> **Categoria:** Formulários
> **Criado em:** 25/11/2023, 16:41
> **Visualizações:** 525 | **Likes:** 2 | **Respostas:** 7

---

## Pergunta original

**Rafael Rubin** (@rafaelrubin) — 25/11/2023, 16:41

Estou com uma situação usando o componente File, em um formulário do Fluig. Ele está com a sintaxe abaixo:

Funciona corretamente, pois uso a instância do arquivo para publica-lo no GED. O ponto é referente a dialog aberta pelo componente, quando usado o app MyFluig. Ele abre somente a galeria do dispositivo, e não permite a integração/busca da câmera. Nos testes que realizei, usei o mesmo trecho html em uma widget WCM, e lá, me dá a opção de carregar a câmera, sem qualquer tratativa adicional ou diferente. Se abro o formulário via navegador mobile (Android + Chrome), a integração com a câmera também é nativa. A limitação é apenas no App.

Com isso, fiquei em dúvida de qual biblioteca que poderia agregar ao meu formulário para ter esse funcionamento.

Após a abertura de ticket com a TOTVS S/A, testei a função showcamera, porém encontrei limitações em sua utilização. Não consigo acessar o arquivo no momento de sua publicação, para redireciona-lo ao GED. Além disso, encontrei alguns chamados reportando limitação do showcamera no MyFluig, após a atualização mais recente.

Algúem já teve problema semelhante e conseguiu solucionar?

---

## Resposta #1

**Guilherme Mesquita Rocha** (@gmesquita) — 04/12/2023, 10:37

Bom dia Rafael.

Você pode optar por utilizar a biblioteca abaixo:

![](https://github.githubassets.com/favicons/favicon.svg) [GitHub](https://github.com/blueimp/jQuery-File-Upload)

![](https://opengraph.githubassets.com/91fc49041139ddb13835d18d15559965a9381991680fb7bc6c6cf222d6635865/blueimp/jQuery-File-Upload)

### [GitHub - blueimp/jQuery-File-Upload: File Upload widget with multiple file...](https://github.com/blueimp/jQuery-File-Upload)

File Upload widget with multiple file selection, drag&drop support, progress bar, validation and preview images, audio and video for jQuery. Supports cross-domain, chunked and resumable file up...

Já utilizei em alguns projetos e me atendeu super bem.

---

## Resposta #2

**Rafael Rubin** (@rafaelrubin) — 05/12/2023, 08:55

Bom dia Guilherme.

Obrigado pelo retorno. Atualmente estou usando essa biblioteca, e atende corretamente. O único problema que enfrentei é no App do Fluig, na compatibilidade do componente html “file”. Ele abre somente a Galeria, e não permite a integração com a Câmera. Se abro o mesmo formulário com o mesmo componente em um navegador mobile (Chrome com Android), a integração ocorre. E se uso o mesmo componente num widget, integra corretamente também no App Mobile. Abri chamado na TOTVS S/A reportando o ocorrido e não conseguiram me ajudar, apenas me sugeriram o uso do ShowCamera. Entendo que é algum problema de biblioteca/renderização, mas não consigo encontrar como resolver

---

## Resposta #3

**Guilherme Mesquita Rocha** (@gmesquita) — 05/12/2023, 09:50

Bom dia Rafael!
Inclua no seu input type fale o seguinte formato:
`<input type="file" accept="image/*" capture>`

Não sei se irá funcionar, mas acredito que seja válido testar…

---

## Resposta #4

**Rafael Rubin** (@rafaelrubin) — 05/12/2023, 10:24

Já havia testado e não funcionava. Testei novamente e o comportamento é o mesmo da simulação anterior:

-   App: só abre a galeria
-   Navegador mobile: abre a câmera

---

## Resposta #5

**Guilherme Mesquita Rocha** (@gmesquita) — 05/12/2023, 10:28

Pior que acredito que o problema seja no dispositivo + app My Fluig… No Android ele só abre a galeria, testando no iOS ele abre a câmera e a galeria. Irei continuar pesquisando para te auxiliar…

---

## Resposta #6

**Rafael Rubin** (@rafaelrubin) — 05/12/2023, 10:51

Você está certo. Simulei o App MyFluig com o IOS e a integração com a câmera ocorre de forma nativa. Já no Android não. Obrigado pela atenção!

---

## Resposta #7

**Guilherme Mesquita Rocha** (@gmesquita) — 05/12/2023, 13:28

Rafael, não é possível utilizar em conjunto a funcionalidade nativa do `ShowCamera` (nativo do TOTVS Fluig) juntamente com uma opção customizada de **Visualizar o Arquivo** (como se fosse um botão) para quando for Mobile?
Onde no caso, você adicionaria um `evento onclick` nesse botão e é exibido um frame/modal do Style Guide do Fluig para o usuário visualizar o anexo que ele realizou a inserção? Ex:

```auto
function viewDocMob() {
    if (isMob == "true") {
        let docId = documentid;
        let fileName = nomeDoArquivo;
        var url = `http://ambiente.fluig.com/webdesk/streamcontrol/${fileName}?WDCompanyId=1&WDNrDocto=${docId}&WDNrVersao=1000`
        FLUIGC.modal({
            title: 'Visualizador de Documento',
            content: `<img src='${url}'  width='100%' height='100%' />`,
            id: 'modalMobile',
            size: 'full',
            actions: [{
                'label': 'Close',
                'autoClose': true
            }]
        }, function (err, data) {
            if (err) {
                console.error(err)
            } else {

            }
        })

    } else {
        visualizarDocument(element)
    }
}

function visualizarDocument(e) {
    var documentId = $(e).siblings()[1].value;
    var versao = 1000;
    openDocument(documentId, versao);
}

function openDocument(docId, docVersion) {
    var topWindow = window.top;

    var cfg = {
        url: "/ecm_documentview/documentView.ftl",
        maximized: true,
        title: "Visualizador de Documentos",
        callBack: function () {
            topWindow.ECM.documentView.getDocument(docId, docVersion);
        },
        customButtons: []
    };

    topWindow.ECM.documentView.panel = topWindow.WCMC.panel(cfg);
}
```

PS: Apenas substitua as variáveis (isMob, docId, documentId, fileName) das funções e a URL para apontar ao seu ambiente de trabalho.

---

## Resposta #8

**Guilherme Mesquita Rocha** (@gmesquita) — 05/12/2023, 14:05

Pode ser viável também a utilização do seguinte componente do Style Guide:
[https://style.fluig.com/components.html#upload](https://style.fluig.com/components.html#upload)

Ao testar no navegador, funcionou… (Câmera e Galeria).

---

## Resposta #9

**Rafael Rubin** (@rafaelrubin) — 12/12/2023, 13:36 | ❤️ 1

Boa tarde. Cheguei a simular o uso, mas não funcionou para mim dentro de um formulário. Acredito que deva ter errado em algo, mas não consegui testar mais.

Voltando ao problema do App, estou com chamado em aberto, agora com a demonstração do comparativo entre iOS x Android. Está pendente com a equipe de desenvolvimento da TOTVS S/A, para verificar se vão fazer a equiparação das versões. Assim que tiver um retorno, respondo nesa thread. Por ora, estou com o problema parcialmente resolvido.

Obrigado pela ajuda!

---

## Resposta #10

**Rafael Rubin** (@rafaelrubin) — 31/01/2024, 13:00 | ❤️ 1

A TOTVS atualizou o App MyFluig apra Android, e agora o component input realiza a integração automática com a câmera. Testei e está funcionando corretamente. Segue retorno do chamado:

Liberamos a versão 1.11.24 para o My Fluig em Android, onde contém a correção do seu ticket. Seguem algumas instruções de como está o funcionamento com base nesta nova versão.

Agora implementamos o acesso à câmera através do componente de input, porém se torna necessária uma permissão para que o aplicativo possa se comunicar com a câmera do dispositivo. Por isto, ao acessar o processo, será exibido um modal semelhante a este:

![](https://lh7-us.googleusercontent.com/6AmpnPb43oeeLOQTfo5FMhcdkFcVglJHB3FRz7hNTc6CBPm-ybW05n3a4SEo121tVXoVxGJi_wMjVRwhAJcfTArWqk4qBBQi-xFDRBJwYzYWx8IqzS2aKIgQHAuzhR9xf951fmAaY85VzVAo9ZnwSis)

Basta aceitar a permissão, que ao interagir com o componente, será apresentada a opção ‘câmera’ para uso.

Vale lembrar que caso a permissão já esteja concedida, não será apresentado o modal de interação.

**Observação**: Caso a permissão esteja negada, o modal não será apresentado e também a opção ‘câmera’ não estará disponível, precisando habilitar de forma manual da seguinte maneira:

Acessar as configurações do dispositivo e ir até a opção ‘aplicativos’.

Selecionar o aplicativo My Fluig.

Acessar a opção ‘Permissões’ ou ‘Gerenciar permissões’.

Selecionar a opção ‘câmera’ e conceder a permissão para o My Fluig.

Estamos à disposição para qualquer dúvida ou eventual apoio!

---
