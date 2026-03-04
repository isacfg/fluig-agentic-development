# FormController

> **Fonte:** [https://tdn.totvs.com/display/fluig/FormController](https://tdn.totvs.com/display/fluig/FormController)

---

# Índice



O FormController é um objeto enviado como parâmetro para todas as funções de personalização do formulário e possui os dados do formulário atual e informações que ajudaram a personalizar ainda mais o formulário



# Descrição

* * *

O objeto mais importante nos eventos de formulário é o [FormController](https://tdn.totvs.com/display/fluig/FormController). Com ele o desenvolvedor pode identificar melhor os dados gerais do registro de formulário como o código e a versão, se está no modo de visualização ou alteração, se está sendo visualizado no app mobile ou pelo navegador, além de manipular os valores e o status de cada um dos campos da tela.

Também consegue desabilitar os botões de imprimir e desabilitar o botão de exclusão de registro das tabelas pai x filho.

Esta documentação está em construção e por isso ainda está incompleta. Para ter visualizar todos os métodos, [acesse a nossa documentação antiga](https://tdn.totvs.com/pages/viewpage.action?pageId=662892312).



# Métodos da instância

* * *

[long getCompanyId()](https://tdn.totvs.com/pages/viewpage.action?pageId=745139690)

Retorna o código da empresa do registro de formulário atual



[int getDocumentId()](https://tdn.totvs.com/pages/viewpage.action?pageId=745139690)

Retorna o código de documento do registro de formulário atual



[int getVersion()](https://tdn.totvs.com/pages/viewpage.action?pageId=745139690)

Retorna a versão do registro de formulário atual



[int getCardIndex()](https://tdn.totvs.com/pages/viewpage.action?pageId=745139690)

Retorna o código do formulário do qual o registro de formulário pertence



[int getValue(String fieldname)](https://tdn.totvs.com/pages/viewpage.action?pageId=745139690)

Retorna o valor do campo *fieldname* no registro de formulário atual.
