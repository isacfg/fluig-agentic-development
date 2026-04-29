# Habilitando Experiências de Uso

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=181964698](https://tdn.totvs.com/pages/viewpage.action?pageId=181964698)

---

# Índice



# Objetivo

* * *

O objetivo deste guia é habilitar as Experiências de Uso no TOTVS Fluig Plataforma.

Para utilização das Experiências de Uso mencionadas abaixo, é imprescindível que tanto a plataforma Fluig quanto o ERP estejam previamente integrados com o TOTVS Identity:

-   **#1 - Single Sign-on**
-   **#3 - Acesso Centralizado**
-   **#4 - Widgets de Gestão**
-   **#5 - Consulta Rápida**



Fazer *log out* no TOTVS Fluig Plataforma e acessar a URL do Fluig adicionando: */portal/home?wcmadmin=true*

**Exemplo:** *minhaempresa.fluig.com/portal/home?wcmadmin=true*



Ao aparecer a tela para informar o login, utilize os dados para entrar no Fluig Plataforma:







Após fazer *login* na plataforma Fluig, acessar: **Painel de Controle >** agrupador **WCM > Empresas**.

Selecione a empresa e clique em editar.





Clique em ***Cadastrar Dados Adicionais***







No cadastro de dados adicionais, adicionar o registro com a chave/valor.

Chave: **USER-EXPERIENCE-ACTIVE**

Valor: **true**



Em alguns sistemas (RM e Logix, por exemplo), pode ser necessária a inclusão de outras duas chaves, referentes à autenticação no ERP, para utilização do *widget* de consulta rápida:

Chave: **QUICKVIEW-AUTH-USER** 

Valor: Usuário "mestre" do ERP

Chave: **QUICKVIEW-AUTH-PASSWORD** 

Valor: Senha do usuário "mestre" do ERP





Em seguida verifique que o registro foi incluído e clique em Salvar.





Salve os dados da empresa e a plataforma Fluig está pronta para ser utilizada com as Experiências de Uso.
