# Página em manutenção

> **Fonte:** [https://fluiggers.com.br/t/pagina-em-manutencao/158](https://fluiggers.com.br/t/pagina-em-manutencao/158)
> **Categoria:** BPM
> **Criado em:** 17/03/2021, 14:46
> **Visualizações:** 789 | **Likes:** 4 | **Respostas:** 0

---

## Pergunta original

**Vagner Duarte** (@vagner_duarte) — 17/03/2021, 14:46 | ❤️ 1

Fala galera,

Tive uma necessidade que não sei se isso seria possível no fluig. Quando tiramos o fluig do ar, por qualquer motivo, seja manutenção no servidor ou atualização do fluig por exemplo, queria deixar uma página de avisa de manutenção de aviso aos usuários, para evitar a todo instante receber uma ligação de que o sistema está fora. Vocês ja fizeram isso? Caso alguém ja fez, pode dar uma luz para o caminho, obrigado a todos.

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 17/03/2021, 16:07 | ❤️ 3

Olá [@vagner\_duarte](/u/vagner_duarte)

Para fazer isso basta subir um serviço de IIS ou apache em um servidor separado do fluig e trabalhar uma mensagem para o erro 404 not found, quando ele não encontrar o servico do fluig no AR.

basicamente habilitando o recurso de proxy reverso no seu ambiente, tu ja consegue fazer esse tipo de solução.

Mais infos no link de documentação oficial: [Configuração de Proxy Reverso - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=257623455)

abrass

---
