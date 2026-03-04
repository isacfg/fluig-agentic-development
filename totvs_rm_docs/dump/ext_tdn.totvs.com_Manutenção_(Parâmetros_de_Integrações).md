# Manutenção (Parâmetros de Integrações)

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938077](https://tdn.totvs.com/pages/releaseview.action?pageId=423938077)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Integrar objeto de oficina ao item de movimento:**  Habilitando esta opção será disponibilizado na pasta Integração do Item do Movimento/"TOTVS Manutenção/Objeto" o campo onde o usuário poderá associar um objeto do Officina ao item. Ao indicar o objeto de manutenção será habilitado o botão que informa o valor de indicador de uso do objeto de manutenção selecionado.



**Integração por API de Reporte:** Habilitando esta opção será marcado o tipo de movimento que reportará os dados para API: **Reporte de Itens Atendidos.**

Na tela de parâmetros -> Manutenção é possível escolher se o tipo de movimento selecionado terá integração com a API de Reporte, e qual fórmula poderá ser utilizado no valor reportado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/423938077/image2022-2-17_10-1-0.png?version=1&modificationDate=1645102860943&api=v2)

Para selecionar a integração basta marcar o Checkbox referente a ela.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/423938077/image2022-2-17_10-1-33.png?version=1&modificationDate=1645102894203&api=v2)

Ao marcar o Checkbox a opção para selecionar uma fórmula será habilitada, esta poderá  ser utilizada nas situações onde se deseja retornar um valor do item calculado por uma fórmula, conforme a necessidade da empresa, valor ressaltar que a fórmula criada deverá ter campos do item. 

Nas situações onde não for selecionada uma fórmula a API retornará o valor unitário do item do movimento.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/423938077/image2022-2-17_10-2-3.png?version=1&modificationDate=1645102924063&api=v2)



Para mais detalhes da API Reporte de Itens Atendidos acesso o Link  [https://api.totvs.com.br/apidetails/ReportInputs\_v1\_000.json](https://api.totvs.com.br/apidetails/ReportInputs_v1_000.json).

Atenção

A API esta disponível na release 12.1.2205 ou superior.
