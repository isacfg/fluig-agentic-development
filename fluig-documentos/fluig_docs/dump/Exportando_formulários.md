# Exportando formulários

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=239018344](https://tdn.totvs.com/pages/viewpage.action?pageId=239018344)

---

Após a criação do formulário e desenvolvimento de eventos sobre a plataforma, é possível exportá-los para o servidor fluig e realizar a publicação no sistema.

Para exportar os formulários siga os passos abaixo:



Ao exportar o formulário, os eventos desenvolvidos para ele também serão exportados.

Caso a exportação já tenha sido realizada, uma nova exportação deve ser feita para que os novos eventos sejam publicados.

Para exportar um formulário para um servidor fluig, basta clicar no arquivo principal do formulário com o botão direito do *mouse* e selecionar a opção **Export...**





Neste *wizard*, selecione a opção **Exportar para servidor Fluig** e clique em **Next**.



Na próxima janela, escolha o servidor destino. Se o formulário for novo, marque a opção **Criar nova versão**, caso contrário escolha a opção **Manter versão atual** e selecione um formulário existente para ser sobrescrito. Caso queira fixar uma opção por padrão, o desenvolvedor poderá configurar essa opção nas [preferências do eclipse](https://tdn.totvs.com/download/attachments/239018344/Screenshot%20from%202023-06-12%2010-23-20.png?api=v2).

Para criar um dataset que armazene os dados das solicitações deste formulário, preencha o campo **Nome Dataset**.

Obrigatoriamente, escolha uma pasta do fluig onde será publicado o formulário. Clique em **Pesquisar** e preencha o campo de busca com o nome ou código da pasta desejada para que o plugin localize-a.

No campo **Armazenar em**, mantenha a opção padrão Tabelas de Banco de Dados (recomendado). [Saiba mais](https://tdn.totvs.com/pages/viewpage.action?pageId=244716710).



**Tela de criação de novo formulário:**



**Tela de edição de formulário:**



Uma vez preenchidos os campos, é possível finalizar a exportação de formulário e aguardar o término do processamento. Também é possível clicar em **Next** e visualizar os campos que o fluig está considerando nos formulários.
