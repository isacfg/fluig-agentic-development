# Intervenção em widget padrão

> **Fonte:** [https://fluiggers.com.br/t/intervencao-em-widget-padrao/3358](https://fluiggers.com.br/t/intervencao-em-widget-padrao/3358)
> **Categoria:** Ambiente Fluig
> **Tags:** `widget`
> **Criado em:** 25/07/2025, 15:24
> **Visualizações:** 48 | **Likes:** 3 | **Respostas:** 2

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 25/07/2025, 15:24

Pessoal, boa tarde!

Já precisaram fazer algum tipo de intervenção ou manipulação em alguma widget padrão do Fluig sem clonar o componente? Quero ocultar um botão da central de tarefas - pensei na possibilidade de uma widget ‘invisível’ que navega no DOM e consegue interagir onde preciso. Acham possível?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 25/07/2025, 15:33 | ❤️ 1

O que já fiz foi fazer o header customizado que o Fluig permite com o custompage. Aí nele coloquei um JS que, de acordo com a URL, executava alguma coisa.

Fiz isso quando precisei que dar mais opções de itens por página no GED, já que só permitia 100 e aqui precisávamos de 1000 em algumas situações.

[https://tdn.totvs.com/pages/releaseview.action?pageId=232816834](https://tdn.totvs.com/pages/releaseview.action?pageId=232816834)

![](http://forum.totvs.io/uploads/default/optimized/1X/ab39652cdedb997d48411e844caff07a88291590_2_32x32.png) [Fórum para desenvolvedores e profissionais de negócios da TOTVS – 2 Sep 20](https://forum.totvs.io/t/aumentar-as-opcoes-de-paginacao-nos-documentos-atualmente-e-limitado-a-100/14848/4?u=brunogasparetto "04:14PM - 02 September 2020")

![](http://forum.totvs.io/uploads/default/original/1X/c133311686b9650598bdb0b9b7ee1c2af9c142ad.png)

### [Aumentar as opções de Paginação nos Documentos - Atualmente é limitado a 100](https://forum.totvs.io/t/aumentar-as-opcoes-de-paginacao-nos-documentos-atualmente-e-limitado-a-100/14848/4?u=brunogasparetto)

TOTVS Fluig Documentos (ECM)

documentos paginação

Seguindo a orientação do Rafael Vanat eu criei a custompagehead.ftl para personalizar as páginas do Fluig e inseri o seguinte código:

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 25/07/2025, 17:12

Sagaz, [@Bruno\_Gasparetto](/u/bruno_gasparetto) !! Muito obrigado! Quando acabar vou postar aqui o código.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Daniel Cabral Santos** (@daniel.cabral) — 28/07/2025, 11:12 | ❤️ 1

[@Bruno\_Gasparetto](/u/bruno_gasparetto) , seguindo a dica, criei meu custompagehead.ftl - não está completo e polido mas a ideia toda está aqui - ocultar um botão baseado no grupo do usuário:

```auto
<script>
$(function() {
  const roleFornecedor = '036'; // Role de fornecedor
  // ELMINAR BOTÃO DE INICIAR NOVA SOLICITAÇÃO QUANDO FORNECEDOR LOGADO
  // verifica se usuário está na central de tarefas OU se está com uma widget que contenha o componente da central de tarefas padrão
  if (!location.href.includes('/pagecentraltask') || !$("#ecm-centralTask-container").length) {
    return;
  } else {
    this.getCurrentUserInfo(() => {
      if (this.currentUserRoles.includes(roleFornecedor)) {
        // Se o usuário for fornecedor, remove o botão de iniciar nova solicitação
        // Remove o botão de iniciar nova solicitação e toda a div
        $('#divNewRequest').remove();
      }
    });
  }
});
/**
 * Obtém informações do usuário atual
 * @function getCurrentUserInfo
 * @param {Function} callback - Função de callback a ser executada após obter as informações
 * @description Recupera o login e roles do usuário atual através da API do Fluig.
 * Define roles padrão em caso de erro.
 */
getCurrentUserInfo: function(callback) {
  const that = this;
  try {
    this.currentUserLogin = WCMAPI.getUserLogin();
    console.log('Current user login:', this.currentUserLogin);
    FLUIGC.ajax({
      url: '/ecm/api/rest/ecm/user/get/' + this.currentUserLogin,
      type: 'GET'
    }, (err, data) => {
      if (!err && data) {
        that.currentUserRoles = data.roles || [];
        console.log('Current user roles:', that.currentUserRoles);
      } else {
        console.error('Error getting user roles:', err);
        that.currentUserRoles = ['user'];
      }
      if (callback) {
        callback();
      }
    });
  } catch (error) {
    console.error('Error getting user info:', error);
    this.currentUserRoles = ['user'];
    if (callback) {
      callback();
    }
  }
},
</script>
```

Uma das coisas que preciso terminar é a questão de aguardar o render para só depois executar as ações. Mas a ideia tá aí. Muito obrigado!

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 28/07/2025, 11:44 | ❤️ 1

Outra coisa é salvar um cache disso usando sessionStorage (acho que localStorage seria demais) ou cache mesmo, só pra não ficar fazendo consulta ajax em toda vez que entrar na central de tarefas.

---
