# Parametrização (TOTVS Colaboração 2.0)

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938829](https://tdn.totvs.com/pages/releaseview.action?pageId=423938829)
> **Domínio:** TDN (TOTVS Developer Network)

---

Primeiramente devemos parametrizar o ambiente para "TOTVS Colaboração 2.0".
Deverá ser parametrizado o campo "Tipo de movimento para inclusão automática de CT-e" que se encontra na tela de dados fiscais da Filial acessando o menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | Parâmetros por Filial | Importação/Envio de Arquivo XML 2/2.
Este campo deverá estar parametrizado com o tipo de movimento CT-e que será criado automaticamente à partir da entrada de um arquivo XML de recebimento de CT-e.
Somente tipos de movimento de entrada (1.2.xx) que possuem o campo "Integração Neogrid = Recebimento de CT-e" podem ser exibidos para escolha.
Caso a filial em questão não queria trabalhar com a criação automática de CT-e, esse campo não deverá ser preenchido.
