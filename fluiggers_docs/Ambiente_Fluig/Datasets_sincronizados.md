# Datasets sincronizados

> **Fonte:** [https://fluiggers.com.br/t/datasets-sincronizados/967](https://fluiggers.com.br/t/datasets-sincronizados/967)
> **Categoria:** Ambiente Fluig
> **Criado em:** 17/03/2022, 09:45
> **Visualizações:** 1552 | **Likes:** 5 | **Respostas:** 4

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 17/03/2022, 09:45

Eu gostaria de saber por que a função defineStructure() é obrigatória em Datasets Sincronizados e qual o papel dela?
Eu não entendi o conceito.

Pelos exemplos eu não vi como conciliar o método OnSync() com esta função defineStructure().

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/03/2022, 12:11 | ❤️ 1

A documentação de [Datasets Sincronizados](https://tdn.totvs.com/pages/releaseview.action?pageId=212899013) até que explica bem essa parte.

> **Sincronização Jornalizada:** Este tipo de sincronização permite a atualização e cópia incremental de registros de acordo com o retorno do método *onSync* do dataset. Através do método *defineStructure* é possível definir de forma mais detalhada quais são os campos da tabela bem como seus tipos. Também é possível criar índices e uma chave principal para obter ainda mais performance durante as consultas aos dados do *dataset.* No método *OnSync* é possível determinar quais são as linhas novas a serem adicionadas na tabela como na sincronização comum. Com os métodos *updateRow* e *deleteRow* através da configuração da chave é possível atualizar registros já existentes bem como eliminar registros. Esse modelo é o recomendado para situações em que há uma grande quantidade de dados.

Então imagina que a função defineStructure é um *CREATE TABLE* no seu banco de dados. Ela vai criar a tabela que salvará as informações sincronizadas.

A função OnSync é onde você fará os inserts, updates e deletes na tabela que foi criada. Então nela você vai pesquisar o banco de dados (provavelmente um externo) ou algum web service pra puxar as informações e então definir se vai inserir o registro, excluir ou atualizar do “cache” que é a tabela que o dataset criou.

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 17/03/2022, 21:27

Obrigado, Bruno; como sempre prestativo.

Mas, perdoa a ignorância, embora sua explicação já tenha ajudado bastante, eu continuo não encontrando uma utilidade nesse recurso e eu explico porque: eu queria fazer uma espécie de ‘timer’ para me valer da periodicidade do sincronismo para pesquisar aniversariantes num banco de dados externo.
Assim, não me interessa criar tabela interna no Fluig, porque os dados de que preciso já estão guardados no banco de dados externo e seria uma redundância tê-los no Fluig também.

Logo vejo que minha abordagem não é a melhor para meu intento, mas encontrei alguns comentários de que isto eu poderia fazer assim e tentei, sem sucesso.

De qualquer maneira, como eu disse, já ajudou.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/03/2022, 21:56 | ❤️ 1

Temos que lembrar que a intenção da sincronização de dataset é fazer um cache dos dados carregados externamente, diminuindo assim a espera de consultar um WS a todo momento.

Mas te entendo perfeitamente, [@Mautresim](/u/mautresim). Eu mesmo estou estudando usar sincronização de Dataset pro Fluig criar os usuários diariamente buscando por novos funcionários no RM. No meu caso, ao menos, a tabela servirá pra salvar o último ID do RM e assim agilizar a busca.

Temos outra situação a qual queremos iniciar um processo automaticamente de acordo com a situação do contrato no RM e também imaginei em usar essa abordagem de usar dataset pra isso.

---

## Resposta #4

**MAURO SIMOES** (@Mautresim) — 18/03/2022, 09:59 | ❤️ 2

Caro Bruno, embora meio sem saber direito se fiz certo, o resultado é que funcionou para mim. Hoje, às 9 horas, hora do sincronismo agendado, foi enviado o email que eu queria.

---

## Resposta #5

**Igor Rodrigues** (@fluigor.com.br) — 18/03/2022, 16:49 | ❤️ 1

Ja fiz este procedimento [@Bruno\_Gasparetto](/u/bruno_gasparetto) !

Vou compartilhar o dataset em um novo Tópico.

Exatamente o mesmo envolvendo contrato no RM.

atenciosamente,

---
