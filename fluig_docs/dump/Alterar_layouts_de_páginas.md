# Alterar layouts de páginas

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=185745580](https://tdn.totvs.com/pages/viewpage.action?pageId=185745580)

---

# Índice



# Visão Geral

O objetivo deste guia é demonstrar como funciona a modificação de *layout* de uma página do TOTVS Fluig Plataforma. É possível mudar o *layout* de qualquer página editável no Fluig Plataforma, tornando a edição de páginas - e em especial a Home - mais flexível. Isso também significa que cada comunidade pode ter um *layout* completamente personalizado.



# Escolhendo um novo *layout*

A seguir são apresentados os passos para efetuar a alteração do *layout* de páginas.



-   Em uma página que o usuário possua permissão de modificação, acessar o menu **Configurações** no canto superior direito e acionar **Editar Página**.


**Editar página**



-   Ao mudar a página para o modo de edição, acessar novamente o menu **Configurações**. Uma nova opção chamada Trocar *layout* estará disponível.

-   Acionar **Trocar *layout***.

**Trocar *layout***





-   A janela para troca de *layout* será exibida trazendo o *layout* atual selecionado e o botão Aplicar *layout* desabilitado.

**Opções de *layouts***





-   Escolher o *layout* desejado e o botão Aplicar *layout* será habilitado.


-   Acionar **Aplicar *layout***.

**Aplicação da alteração de *layout***





-   Aplicando a mudança, a tela de seleção de *layouts* é fechada e os *widgets* são redistribuídos na página conforme o novo *layout*.


-   Para ajustar a página da forma desejada, é possível arrastar e rearranjar os *widgets* nos demais *slots*.

**Novo *layout* da página**





-   Ao publicar a página, ela será apresentada com os *widgets* renderizados obedecendo a nova ordenação.

**Nova versão da página publicada**



# Restaurando versões com *layouts* diferentes

No histórico da página é possível acompanhar informações sobre os *layouts* que já foram utilizados por ela. Se desejado, é possível restaurar uma versão antiga.

**Consulta ao histórico de alterações na página**



# Sobre o processo de troca de *layout* em uma página

Quando uma página tem seu *layout* alterado, a plataforma Fluig redistribui os *widgets* pelos novos *slots* obedecendo as seguintes regras:

1.  Cada *widget* é analisado de forma independente obedecendo a posição em que se encontra na página e *[slot](https://tdn.totvs.com/display/fluig/Layouts#Layouts-Slot)*.
2.  Se o novo *layout* possuir um *slot* com o mesmo nome daquele em que o *widget* estava alocado no *layout* antigo, a plataforma Fluig determinará que o *widget* deve assumir a posição do *slot* com o mesmo nome.
3.  Se não houver um *[slot](https://tdn.totvs.com/display/fluig/Layouts#Layouts-Slot)* de mesmo nome, um outro será escolhido de forma aleatória e a página é apresentada de maneira diferente.
4.  Sempre que o *widget* é inserido em seu novo *[slot](https://tdn.totvs.com/display/fluig/Layouts#Layouts-Slot)* (seja ele de mesmo nome ou não), será disposto na última posição possível para aquele *[slot](https://tdn.totvs.com/display/fluig/Layouts#Layouts-Slot).*



**E quando há mais *slots*?**

A quantidade de *widgets* por *[slot](https://tdn.totvs.com/display/fluig/Layouts#Layouts-Slot)* diminui, uma vez que eles ficam mais espalhados, obedecendo a regra de mesmo nome citada anteriormente na regra 2.



**E quando há menos *slots*?**

A quantidade de *widgets* por *[slot](https://tdn.totvs.com/display/fluig/Layouts#Layouts-Slot)* aumenta.
