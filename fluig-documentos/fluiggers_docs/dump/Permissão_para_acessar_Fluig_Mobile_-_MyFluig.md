# Permissão para acessar Fluig Mobile - MyFluig

> **Fonte:** [https://fluiggers.com.br/t/permissao-para-acessar-fluig-mobile-myfluig/3381](https://fluiggers.com.br/t/permissao-para-acessar-fluig-mobile-myfluig/3381)
> **Categoria:** Mobile
> **Criado em:** 20/08/2025, 12:32
> **Visualizações:** 42 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Rahyan Ramos** (@Ramos) — 20/08/2025, 12:32

Boa tarde, pessoal! Tudo bem?

Estou desenvolvendo um processo no **Fluig** que será utilizado principalmente pelo aplicativo mobile **MyFluig**.
No entanto, alguns usuários estão enfrentando problemas de acesso: após realizar o login no app, a tela fica completamente branca e nenhum componente é carregado.

Durante alguns testes, percebi que ao atribuir o papel **Admin** ao usuário, o acesso passa a funcionar normalmente. Porém, como sabemos, esse não é um papel que pode ser liberado para qualquer pessoa.

Minha suspeita é que exista alguma permissão padrão vinculada ao papel **Admin** que esteja habilitando o acesso ao mobile, mas ainda não consegui identificar qual seria.

Alguém já passou por essa situação ou sabe indicar por qual caminho devo seguir para resolver esse problema de permissões?

---

## Resposta #1

**Pietro** (@pietro) — 27/08/2025, 15:52

Boa tarde, tudo certo e contigo?

Pega uma conta limpa (sem acesso algum) para testar, e abre o my fluig, ao ocorrer o problema, baixa/abre o log, dependendo da sua plataforma (windows/linux, acesso local ou remoto), pode ser pelos parametros mesmo, lá aparece os erros de falta de permissão, só puxar as permissões na aba permissões do fluig.

Aqui ambas abas:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/b/b4285d9cad665ce670c974a249a482ade8437680_2_690x319.png)

Dentro do log é só clicar para baixar o log.

Não tenho o erro em mãos, mas vai ser uma stack trace padrão do Java, próximo a isso:

permissionDenied GET - URL\_DA\_API\_NEGADA
Só pegar por niveis (separa por ‘/’) e pesquisar na aba de permissões.

Dentro de permissões, pode pesquisar pelo input fornecido por padrão ou só usar ctrl + F

![image](https://fluiggers.com.br/uploads/default/optimized/2X/6/6c14dcef9da9be87327be35be404e70429b60ab3_2_690x435.png)

Entra na categoria e de acesso na api especifica com o erro ou na categoria por completo, depende como é gerenciado o acesso na sua empresa e se é publico ou não, caso um seleto grupo tenha acesso ao mobile, informe ele lá.

Caso precise de mais informações procura a FAQ de permissões:
[Plataforma ❙ Permissões - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=234455792)

Se precisar de mais algo ou não ter entendido é só avisar!

Att,
Pietro P. W.

---
