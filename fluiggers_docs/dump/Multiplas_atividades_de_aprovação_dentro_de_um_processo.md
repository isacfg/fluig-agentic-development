# Multiplas atividades de aprovação dentro de um processo

> **Fonte:** [https://fluiggers.com.br/t/multiplas-atividades-de-aprovacao-dentro-de-um-processo/3137](https://fluiggers.com.br/t/multiplas-atividades-de-aprovacao-dentro-de-um-processo/3137)
> **Categoria:** BPM
> **Tags:** `processo`, `bpm`, `approval`
> **Criado em:** 28/01/2025, 10:43
> **Visualizações:** 84 | **Likes:** 0 | **Respostas:** 4

---

## Pergunta original

**matheus.jesus** (@matheus.jesus) — 28/01/2025, 10:43

tenho um processo de cotação de solicitação de compras. nesse processo é feita a analise da melhor cotação. para cada fornecedor vencedor deve ser gerada uma atividade de aprovação individual da cotação do fornecedor. existe algum modo disse ser responsivo? por exemplo, em uma solicitação posso ter 3 produtos, e 2 desses serem cotados por um fornecedor e o outro com outro fornecedor, logo, será gerado duas atividades de aprovação das cotações.

já pensei em fazer por subprocessos, por hAPI.starprocess, iniciando um novo processo pra cada aprovação de cotação, mas nenhum dos dois deu certo. importante dizer que essas aprovações seram feitas pelo myapproval.

resumindo, preciso gerar novas atividades dentro do meu processo de acordo com o numero de fornecedores vencedores da cotação.

à direita na foto é possivel ver que foram gerados dois “pré-pedidos”, isso é o que vai para a aprovação. num caso onde o mesmo fornecedor foi escolhido para os dois produtos só será gerado um “pré-pedido”. por conta disso deve ser automatica de acordo com a quantidade de fornecedores vencedores da cotação.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/b/b70c9724b9a82d0cc5826fa227d7b2f66450c55a_2_690x312.png)

---

## Resposta #1

**Pablo Valle** (@pablooav) — 28/01/2025, 11:37

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/m/839c29/48.png) matheus.jesus:
>
> > ssos, por hAPI.starprocess, iniciando um novo processo pra cada aprovação de cotação, mas nenhum dos dois deu certo. importante dizer que essas aprovações seram feitas pelo myapproval.

Por subprocesso acredito que realmente vc não vai conseguir, pois como é algo dinâmico vc não consegue fazer utilizando a caixinha de subprocesso.

Agora, como vc precisa aprovar pelo My Approval, vc vai precisar de um workflow sem gateway, com caixinhas apontando direto para o APROVADO/REPROVADO, acredito que com o startProcess vc consiga fazer funcionar sim.

Seu fluxo principal vai cair em uma atividade de integração que irá gerar as novas solicitações dinamicamente e em seguida movimenta para um evento condicional, esse evento vai ser responsável por verificar se as solicitações que foram abertas já foram aprovadas, caso todas estiverem aprovadas, prossegue para frente. Seria algo parecido com esse print:

![novo_diagrama](https://fluiggers.com.br/uploads/default/optimized/2X/b/b6eb986e3e46c91d4d3c5c9d6c16412c50563be5_2_690x338.png)

---

## Resposta #2

**matheus.jesus** (@matheus.jesus) — 28/01/2025, 11:41

obrigado pela resposta pablo. estou tentando ainda usar o hapi.starprocess, mas sempre dá errado. você tem algum exemplo onde já utilizou essa função?

---

## Resposta #3

**matheus.jesus** (@matheus.jesus) — 28/01/2025, 12:22

nem mesmo desse jeito bem basico dá certo, da esse erro:

> “Erro ao iniciar o processo: java.lang.NullPointerException: null” e esse “WFLYEJB0034: EJB Invocation failed on component NotifierServiceBean for method public void com.totvs.technology.sociabledocument.service.NotifierServiceBean.notifyWatchers(java.lang.Integer,java.lang.Integer,com.datasul.technology.webdesk.dm.business.DocumentEvent,java.lang.Long,java.lang.String) throws com.totvs.technology.foundation.common.exception.FDNException: javax.ejb.EJBException: java.lang.NullPointerException”

```auto
try {

        // IDs dos responsáveis pela próxima atividade
        var users = java.util.Arrays.asList("matheus.jesus");

        // Dados do formulário
        var formData = new java.util.HashMap();
        formData.put("valorTotal", "TESTE");

        log.info("Cotação.afterTaskSave Antes do hAPI.startProcess");

        // Inicia o processo sem anexos (attachments = null)
        var result = hAPI.startProcess("AprovacaodeCotação", "0", users, "Processo iniciado automaticamente via script.", true, formData, true);

        log.info("Processo iniciado com sucesso! ID da instância: " + result);

    } catch (e) {
        log.error("Erro ao iniciar o processo: " + e.message);
    }
```

---

## Resposta #4 ✅ RESPOSTA ACEITA

**Pablo Valle** (@pablooav) — 28/01/2025, 23:25

Faça alguns pequenos ajustes no seu código, primeiro sua variável users faça dessa forma criando um arrayList e depois adicionando o usuário.

E a segunda alteração necessária é passar o segundo parâmetro do startProcess no formato numérico 0, você passou “0”

Ficando assim:

```auto
try {

  var users = new java.util.ArrayList();
  users.add("matheus.jesus");

  // Dados do formulário
  var formData = new java.util.HashMap();
  formData.put("valorTotal", "TESTE");

  log.info("Cotação.afterTaskSave Antes do hAPI.startProcess");

  // Inicia o processo sem anexos (attachments = null)
  var result = hAPI.startProcess("AprovacaodeCotação", 0, users, "Processo iniciado automaticamente via script.", true, formData, true);

  log.info("Processo iniciado com sucesso! ID da instância: " + result);

} catch (e) {
  log.error("Erro ao iniciar o processo: " + e.message);
}
```

---

## Resposta #5

**matheus.jesus** (@matheus.jesus) — 29/01/2025, 11:37

deu certo, muito obrigado. sabe se tem como eu adicionar linhas em uma tabela paixfilho pelo hapi.startprocess?

---

## Resposta #6

**Pablo Valle** (@pablooav) — 18/02/2025, 10:01

Tem sim, só adicionar no seu formData seguindo o padrão da pai-filho, ficando assim:

```javascript
formData.put("paiFilhoNome___1", "TESTE");
formData.put("paiFilhoCod___1", "123");
formData.put("paiFilhoNome___2", "TESTE2");
formData.put("paiFilhoCod___2", "1232");
```

---
