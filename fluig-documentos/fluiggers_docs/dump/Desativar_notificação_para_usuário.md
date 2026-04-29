# Desativar notificação para usuário

> **Fonte:** [https://fluiggers.com.br/t/desativar-notificacao-para-usuario/312](https://fluiggers.com.br/t/desativar-notificacao-para-usuario/312)
> **Categoria:** BPM
> **Criado em:** 08/04/2021, 10:34
> **Visualizações:** 1555 | **Likes:** 1 | **Respostas:** 3

---

## Pergunta original

**Jessé Augusto** (@jessealvessilva) — 08/04/2021, 10:34

Bom dia!
É possível desativar as notificações de um processo para apenas um usuário específico, de forma que o este não receba os avisos de interaçãoes das tarefas ?
Tenho um cenário aqui em que um usuário específico não quer receber os e-mails de interação.
Grato.

---

## Resposta #1

**Alef Vinicius** (@alefvinicius) — 08/04/2021, 16:59

Jesse, no Fluig é possível que o próprio usuário indique as notificações que deseja receber.

Segue a documentação que pode te auxiliar: [Plataforma ❙ Configuração de notificações - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=233763976)

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 09/04/2021, 08:36

[@alefvinicius](/u/alefvinicius) se entendi bem ele quer não receber notificações de um processo específico, é isso [@jessealvessilva](/u/jessealvessilva) ? Não sei se tem jeito…mas poxa…o cara pode deixar só o sininho lá no fluig se quiser :slight_smile:

---

## Resposta #3

**Victor Castro** (@victorcastro) — 09/04/2021, 08:49 | ❤️ 1

[@jessealvessilva](/u/jessealvessilva) esse usuário é fixo ou, pelo menos a princípio, é o único responsável pela tarefa? Se sim, já aconteceu comigo do usuário pedir pra parar de ser notificado em determinada atividade. Mas a atividade era direcionada a um papel onde só tinha ele (porque era o único responsável por ela no momento). Então, na atividade, eu desmarquei a opção de notificar responsável.

![image](https://fluiggers.com.br/uploads/default/original/1X/53c970faf998a64f69cee83aa8be9c8ce97eaeaf.png)

Mas se o usuário não for o único responsável, talvez tenha como fazer isso no evento [onNotify](https://tdn.totvs.com/pages/releaseview.action?pageId=183730587), mas eu acho que não compensa o esforço rs

Pode seguir a orientação dos colegas acima ou simplesmente criar uma regra diretamente na caixa de entrada de email do usuário, pra quando receber um email do fluig com o assunto “**tal**”, marca como lido e envia pra uma pasta **X**.

Espero ter ajudado.

---

## Resposta #4 ✅ RESPOSTA ACEITA

**Jessé Augusto** (@jessealvessilva) — 09/04/2021, 10:48

Bom dia pessoal!
É isso mesmo Daniel!
Em contato com a Totvs, recebi a orientação em anexo.
Apliquei e estou monitorando. Se funcionar, informo aqui.
De toda forma, agradeço muito a atenção de vocês.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/6db074ef854e1314e1b649fdbcf03305a664c783_2_690x180.png)

---

## Resposta #5

**Victor Castro** (@victorcastro) — 09/04/2021, 10:55

[@jessealvessilva](/u/jessealvessilva) lembrando que ao desativar essas configurações elas serão aplicadas em todos os processos.

---

## Resposta #6

**Jessé Augusto** (@jessealvessilva) — 09/04/2021, 13:09

Bem observado Victor! Obrigado!

---

## Resposta #7

**Alef Vinicius** (@alefvinicius) — 09/04/2021, 14:49

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/j/dc4da7/48.png) jessealvessilva:
>
> > Bom dia pessoal!
> > É isso mesmo Daniel!
> > Em contato com a Totvs, recebi a orientação em anexo.
> > Apliquei e estou monitorando. Se funcionar, informo aqui.
> > De toda forma, agradeço muito a atenção de vocês.
> >
> > ![image](https://fluiggers.com.br/uploads/default/optimized/1X/6db074ef854e1314e1b649fdbcf03305a664c783_2_690x180.png)

Jesse, como mencionado pelo Daniel, essa configuração se aplica a toda a plataforma. A orientação em anexo dada pela TOTVS é a mesma que passamos por aqui [Plataforma ❙ Configuração de notificações - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=233763976). Você pode acessar ela para entender um pouco mais e ver se realmente atende a sua demanda. Ficamos na expectativa, hein?!

Boa sorte!

---

## Resposta #8

**system** (@system) — 10/04/2021, 13:18

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
