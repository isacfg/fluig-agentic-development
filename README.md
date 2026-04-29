# fluig-agentic-development

Repositório de **skills** para desenvolvimento na plataforma TOTVS Fluig e TOTVS RM, utilizadas como instruções contextuais em assistentes de IA.

## Skills disponíveis

| Skill | Localização | Descrição |
|---|---|---|
| `fluig-development` | `building-skills/Fluig/fluig-developemnt/` | Desenvolvimento na plataforma TOTVS Fluig (datasets, eventos, workflows, formulários, widgets) |
| `edit-existing-process-diagram` | `building-skills/Fluig/edit-existing-process-diagram/` | Edição de diagramas de processo existentes no Fluig |
| `read-process-for-display-validate-fields` | `building-skills/Fluig/read-process-for-display-validate-fields/` | Leitura de processos para exibição e validação de campos |
| `fluig-mcp` | `mcp/fluig-api/skill/` | Uso do MCP readonly para consultar APIs Fluig, começando por Dataset Handle `/ecm/dataset/search` |
| `rm-development` | `building-skills/RM/` | Desenvolvimento e troubleshooting para TOTVS RM (Nucleus, Fórmula Visual, IntelliTrace) |

---

## Rodando o MCP Fluig pela raiz do repositório

Crie o config real a partir do exemplo:

```bash
cp mcp/fluig-api/fluig-mcp.config.example.json mcp/fluig-api/fluig-mcp.config.json
```

Edite `mcp/fluig-api/fluig-mcp.config.json` com as credenciais OAuth 1.0a de cada Fluig. Esse arquivo é ignorado pelo Git.

Instale, compile e rode a partir da pasta principal do repositório:

```bash
npm run mcp:install
npm run mcp:build
npm run mcp:start
```

O servidor MCP usa `stdio`, então é normal ele ficar aguardando um cliente. Para conectar um cliente MCP, use:

```json
{
  "command": "npm",
  "args": ["run", "mcp:start"],
  "cwd": "/Users/isaac/Documents/Coding/repos/fluig-agentic-developemnt"
}
```

Para testar com o MCP Inspector:

```bash
npm run mcp:inspect
```

---

## Instalação no Claude Code

### Pré-requisito

Tenha o [Claude Code](https://docs.anthropic.com/pt/docs/claude-code) instalado e configurado.

### Passo a passo

1. **Clone o repositório** (ou baixe a pasta da skill desejada):

   ```bash
   git clone https://github.com/isacfg/fluig-agentic-development.git
   ```

2. **Copie a pasta da skill** para o diretório de skills do Claude Code:

   ```bash
   # Crie o diretório de skills se ele não existir
   mkdir -p ~/.claude/skills

   # Copie a skill desejada (exemplo: fluig-development)
   cp -r building-skills/Fluig/fluig-developemnt ~/.claude/skills/fluig-development

   # Para a skill de RM
   cp -r building-skills/RM ~/.claude/skills/rm-development
   ```

3. **Verifique a instalação** — o diretório deve conter o arquivo `SKILL.md`:

   ```bash
   ls ~/.claude/skills/fluig-development/
   # SKILL.md  references/
   ```

4. A skill será carregada automaticamente pelo Claude Code quando o contexto da conversa for relevante (ex.: ao mencionar "fluig", "dataset fluig", "TOTVS RM", etc.).

### Instalando todas as skills de uma vez

```bash
mkdir -p ~/.claude/skills
cp -r building-skills/Fluig/fluig-developemnt ~/.claude/skills/fluig-development
cp -r building-skills/Fluig/edit-existing-process-diagram ~/.claude/skills/edit-existing-process-diagram
cp -r building-skills/Fluig/read-process-for-display-validate-fields ~/.claude/skills/read-process-for-display-validate-fields
cp -r building-skills/RM ~/.claude/skills/rm-development
```

---

## Instalação no GitHub Copilot

O GitHub Copilot não possui suporte nativo ao formato de skills. Para utilizar as instruções deste repositório com o Copilot, adicione o conteúdo da skill como **instruções customizadas do repositório**.

### Opção 1 — Instruções do repositório (`.github/copilot-instructions.md`)

Crie o arquivo `.github/copilot-instructions.md` no seu projeto e cole o conteúdo do `SKILL.md` da skill desejada:

```bash
mkdir -p .github

# Copie o conteúdo da skill de Fluig como instruções do Copilot
cp building-skills/Fluig/fluig-developemnt/SKILL.md .github/copilot-instructions.md
```

O GitHub Copilot lerá automaticamente esse arquivo e aplicará as instruções em todas as sugestões do repositório.

> **Nota:** Caso precise combinar múltiplas skills, concatene os arquivos `SKILL.md` desejados em `.github/copilot-instructions.md`, separando cada um por uma linha `---`.

### Opção 2 — Instruções pessoais do VS Code

Para aplicar as instruções apenas para você (sem commitar no repositório), crie um arquivo de instruções pessoais no VS Code:

1. Abra as configurações do VS Code (`Ctrl+Shift+P` → `Open User Settings (JSON)`)
2. Adicione:

   ```json
   {
     "github.copilot.chat.codeGeneration.instructions": [
       {
         "file": "/caminho/para/building-skills/Fluig/fluig-developemnt/SKILL.md"
       }
     ]
   }
   ```

3. Substitua o caminho pelo caminho absoluto do `SKILL.md` no seu sistema.

### Opção 3 — Prompt manual no chat

Cole o conteúdo do `SKILL.md` diretamente no início de uma conversa no **GitHub Copilot Chat** para ativar o contexto manualmente:

```
@workspace Considere as seguintes diretrizes de desenvolvimento:

[cole aqui o conteúdo do SKILL.md]
```

---

## Estrutura do repositório

```
building-skills/
├── Fluig/
│   ├── fluig-developemnt/         # skill: fluig-development
│   │   ├── SKILL.md
│   │   └── references/
│   ├── edit-existing-process-diagram/
│   │   ├── SKILL.md
│   │   └── ...
│   └── read-process-for-display-validate-fields/
│       ├── SKILL.md
│       └── ...
└── RM/                            # skill: rm-development
    ├── SKILL.md
    └── references/
```
