# Campo zoom em modal - Widget

> **Fonte:** [https://fluiggers.com.br/t/campo-zoom-em-modal-widget/2322](https://fluiggers.com.br/t/campo-zoom-em-modal-widget/2322)
> **Categoria:** Sem categoria
> **Criado em:** 25/10/2023, 15:50
> **Visualizações:** 424 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**JHONATA MARTINS DA  COSTA** (@JHONATA_MARTINS_DA_C) — 25/10/2023, 15:50

Fala galera, tudo bem ?

Estou implementando uma widget e surgiu a necessidade de colocar um campo zoom dentro de um modal. Sei que o campo zoom em widgets funciona um pouco diferente do que em forms e eu tenho outras widgets que possuem campo zoom funcionando, porém neste caso, como ele vai dentro da modal não esta funcionando e o mesmo não esta buscando os dados do dataset que eu passo.

Alguém já passou por algo semelhante ? Abaixo segue um resumo de como estou tentando implementar.

Função que cria conteúdo do modal:

```auto
createAdminModalContent: function() {
    	var userNameLabel = '<label for="user_name">Usuário</label>'
    	var userNameInput = '<input class="form-control" id="user_name" type="text" name="user_name"/>'

    	var userEmailLabel = '<label for="user_email">Email</label>'
    	var userEmailInput = '<input id="user_email" class="form-control" disabled></input>'

    	var reservationLabel = '<label for="reservation_qty">Quantidade a reservar</label>'
    	var reservationInput = '<input id="reservation_qty" class="form-control" type="number"></input>'

    	return '<div>' +
    				'<div class="fs-display-flex fs-justify-content-space-between fs-sm-margin-bottom">' +
    					'<div style="width: 70%">' +
		    				userNameLabel +
		    				userNameInput +
		    			'</div>' +
		    			'<div>' +
		    				reservationLabel +
		    				reservationInput +
		    			'</div>' +
	    			'</div>' +
	    			'<div style="width: 100%">' +
		    			userEmailLabel +
		    			userEmailInput +
		    		'</div>'   +
    			'</div>'
    },
```

Função que cria o campo zoom:

```auto
initFilter: function() {

        var users = this.getDatasetUsers();

        var settingsExampleDataset = {
            source: users,
            displayKey: 'colleagueName',
            multiSelect: false,
            style: {
                autocompleteTagClass: 'tag-gray',
                tableSelectedLineClass: 'info'
            },
            table: {
                header: [{
                    'title': 'Nome',
                    'size': 'col-xs-9',
                    'dataorder': 'colleagueName',
                    'standard': true
                }],
                renderContent: ['colleagueName'],
            }
        };

        this.userFilter = FLUIGC.filter('#user_name', settingsExampleDataset);
    },
```

Função que cria o modal:

```auto
createModal: function(htmlElement) {
const modalContent = this.createAdminModalContent()

const saveLabel = htmlElement.textContent == '' ? 'Salvar' : 'Alterar'

    	var avaliableChromebooks = this.totalChromebooks

    	for (var i = 1; i <= 5 ; i++) {
    		var elementId = htmlElement.id.slice(0, -1) + i
    		var lineQty = parseInt($('#' + elementId + '-qty').text());

    	    if (!isNaN(lineQty) && elementId != htmlElement.id) {
    	    	avaliableChromebooks -= lineQty;
    	    }
    	}

    	const modalTitle = "Criar reserva: <span style='color:red'>" + avaliableChromebooks + "</span> chromebooks disponíveis."

    	var myModal = FLUIGC.modal({
    	    title: modalTitle,
    	    content: modalContent,
    	    id: 'fluig-modal',
    	    actions: [{
    	        'label': saveLabel ,
    	        'bind': 'data-createReservation',
    	        'autoClose': false
    	    },{
    	        'label': 'Excluir',
    	        'bind': 'data-deleteReservation',
    	        'autoClose': true,
    	        'classType': 'btn-danger'
    	    }, {
    	    	'label': 'Fechar',
    	    	'autoClose': true
    	    }]
    	}, () => {});
}
```

---
