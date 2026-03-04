# WCMAPI

> **Fonte:** [https://tdn.totvs.com/display/fluig/WCMAPI](https://tdn.totvs.com/display/fluig/WCMAPI)

---

Para consultar dados do ambiente da sessão via JavaScipt (*client side*) é possível utilizar nos eventos a biblioteca **WCMAPI**. As propriedades disponíveis através da WCMAPI são:

Método

Especificação

WCMAPI.version

Retorna a versão do fluig.

Exemplo: "1.6.2"

WCMAPI.serverURL

ou

WCMAPI.getServerURL()

Retorna o endereço principal do servidor do fluig: "http://" ou "https://" seguido do endereço do servidor e a porta (se for diferente de 80).

Exemplo: "http://empresa.fluig.com:8080"

WCMAPI.organizationId

ou

WCMAPI.getOrganizationId()

Retorna o ID do tenant ao qual o usuário está conectado.

Exemplos: "1", "12", "99"

WCMAPI.tenantCode

 ou

WCMAPI.getTenantCode()

Retorna o código do tenant ao qual o usuário está conectado.

Exemplos: "suaempresa", "totvs", "demo"

WCMAPI.Create

Envia uma requisição ao servidor do fluig.

Exemplo:

```
WCMAPI.Create({
    url: '{url a ser consumida}',
    contentType: "text/xml",
    dataType: "xml",
    data: '{Request}',
    success: function(data){
		// código a ser executado em caso de sucesso
    }
});
```

WCMAPI.serverContextURL

ou

WCMAPI.getServerContextURL()

Retorna a raiz da URL do portal da plataforma.

Valor: "/portal" 

WCMAPI.logoff

Encerra a sessão de um usuário na plataforma.

Exemplo de utilização na função *click* de um botão implementado no arquivo JavaScript de um *widget*:

```
showMessage: function () {
    $div = $('#helloMessage_' + this.instanceId);
    $message = $('<div>').addClass('message').append(this.message);
    $div.append($message);

	WCMAPI.logoff(); //Chamada da API
}
```

WCMAPI.addListener

Adiciona um evento customizado na widget.

Exemplo de implementação:

```
addCustomListener: function () {
	// evName: Nome do evento disparado
	// data: Dados customizados que foram enviados
	WCMAPI.addListener(this, 'update-widget-list', function(evName, data) {
    	// Realizar alguma ação
	});
}
```

WCMAPI.fireEvent

Dispara um evento customizado pela widget.

Exemplo de implementação:

```
fireCustomListener: function () {
	// evName: Nome do evento disparado
	// data: Dados customizados que foram enviados
	var data = [/* custom data */];
	WCMAPI.fireEvent('update-widget-list', data);
}
```

WCMAPI.failHandler

Exibe um alerta detalhado sobre o erro de alguma requisição.

Exemplo de implementação:

```
FLUIGC.ajax({
	type: 'GET',
	url: '<PUBLIC_API>',
	success: function (result) {
		// faz algo com o sucesso
	},
	error: function(args) {
		// Dispara um alerta com os detalhes do erro
		WCMAPI.failHandler(args, true);
	}
});
```

WCMAPI.convertFtlAsync

Realiza a renderização de uma widget pelo frontend. Esse método retorna o HTML de uma widget parseado pelo backend e também inclui todos os resources (css e js) dessa widget na página.

**Observação: O método WCMAPI.convertFtl não deve ser usado pois ele realiza uma chamada síncrona e isso prejudica a experiência do usuário na página.**

Exemplo de implementação:

```
WCMAPI.convertFtlAsync('<WIDGET_NAME>', '<FTL_NAME>', JSON.stringify({ /* dados customizados */ }), function(data) {
	// Adiciona o HTML da widget em algum container
	$('MY_CONTAINER').append(data);
});
```

WCMAPI.generateId()

Retorna um ID único para ser usado no desenvolvimento de uma widget.

Exemplo de implementação:

```
var customId = WCMAPI.generateId(); // retorna wcmid4, wcmid5, wcmid6 e assim sucessivamente
```

WCMAPI.getSourceImage

Retorna a url da imagem ou o base64 dela caso ela possua algum tipo de customização feita pelo dispositivo que criou ela, como rotação feita por um celular.

Exemplo de implementação:

```
var $image = $('.my-image');
var src = $image.attr('src');
var options = {
    maxHeight: 74,
    orientation: true
};

WCMAPI.getSourceImage(src, options, function(src) {
	$image.attr('src', src);
});
```

WCMAPI.setSessionAttribute

Adiciona algum valor na sessão do usuário (backend).

Exemplo de implementação:

```
WCMAPI.setSessionAttribute('<MY_FLAG>', '<MY_VALUE>');
```

WCMAPI.getSessionAttribute

Retorna algum valor que foi adicionado na sessão do usuário (backend).

Exemplo de implementação:

```
WCMAPI.getSessionAttribute('<MY_FLAG>');
```

WCMAPI.getProtectedContextPath

Retorna o path protegido (que exige autenticação para acessar) do servidor do Fluig.

Exemplo de implementação:

```
WCMAPI.getProtectedContextPath(); // Retorna: /portal/p
```

WCMAPI.isNull

Retorna um booleano se um valor é nulo ou não.

**Observação: Recomenda-se usar JavaScript puro para realizar essa verificação.**

Exemplo de implementação:

```
var myValue = null;

// Com JavaScript puro
var isNull1 = myValue === null;

// Com WCMAPI
var isNull2 = WCMAPI.isNull(myValue);
```
