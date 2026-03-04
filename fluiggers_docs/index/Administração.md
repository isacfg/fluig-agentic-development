# Administração

> **14 tópicos**

---

## Sumário

- [Alterar Timezone](#alterar-timezone)
- [Bloquear Usuários de seguir outros usuários](#bloquear-usurios-de-seguir-outros-usurios)
- [Cadastro de Usuário](#cadastro-de-usurio)
- [Como funcionam os Processos e Formulários quando o Fluig possuí mais de uma empresa/tenant?](#como-funcionam-os-processos-e-formulrios-quando-o-fluig-possu-mais-de-uma-empresatenant)
- [Como usar os Adapters](#como-usar-os-adapters)
- [Diretório dos arquivos de processos e registros de formulário](#diretrio-dos-arquivos-de-processos-e-registros-de-formulrio)
- [Manual Integração/Apresentação](#manual-integraoapresentao)
- [Modificar o Diretório default](#modificar-o-diretrio-default)
- [Perca dos servidores de banco de dados do Fluig](#perca-dos-servidores-de-banco-de-dados-do-fluig)
- [Pesquisa: no seu ambiente os Devs são Admin?](#pesquisa-no-seu-ambiente-os-devs-so-admin)
- [Processo FLUIGADHOC - como removê-lo do menu de processos do Fluig?](#processo-fluigadhoc-como-remov-lo-do-menu-de-processos-do-fluig)
- [Sobre a categoria Administração](#sobre-a-categoria-administrao)
- [Verificar histórico de acessos no Fluig](#verificar-histrico-de-acessos-no-fluig)
- [É possível bloquear o usuário comum de alterar o email no perfil?](#-possvel-bloquear-o-usurio-comum-de-alterar-o-email-no-perfil)

---

# Alterar Timezone

> **Fonte:** [https://fluiggers.com.br/t/alterar-timezone/70](https://fluiggers.com.br/t/alterar-timezone/70)
> **Categoria:** Administração
> **Tags:** `timezone`, `jboss`
> **Criado em:** 12/03/2021, 15:22
> **Visualizações:** 1150 | **Likes:** 4 | **Respostas:** 0

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 12/03/2021, 15:22 | ❤️ 3

No hosts.xml:

```auto
# Configurando o Time Zone
		<host>
			<servers>
				<server>
					<jvm>
						<jvm-options>
							<option value="-Duser.timezone='-04:00'"/>
						</jvm-options>
```

---

## Resposta #1

**Emerson Rodrigues** (@Emerson_Rodrigues) — 04/03/2022, 14:29 | ❤️ 1

Boooaaaa brother como sempre salvando hehe … Só pra complementar aqui galera essa resolução do nosso daniel resolve um erro que pode vir a aparecer no console (Moment Timezone has no data for GMT-03:00. See [Moment Timezone | Docs](http://momentjs.com/timezone/docs/#/data-loading/). z @ wcm\_global\_pt\_BR.js?v=1.6.4-180814:30) do chrome quando as horas no SLA estão todos errados na aba de complemento dos processos. Pelo menos aqui pra mim resolveu legal.

---

---

# Bloquear Usuários de seguir outros usuários

> **Fonte:** [https://fluiggers.com.br/t/bloquear-usuarios-de-seguir-outros-usuarios/767](https://fluiggers.com.br/t/bloquear-usuarios-de-seguir-outros-usuarios/767)
> **Categoria:** Administração
> **Criado em:** 08/11/2021, 12:22
> **Visualizações:** 305 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Giovani Hardt** (@ghardt) — 08/11/2021, 12:22

Fluiggers,

Por acaso existe alguma forma de bloquear que usuários sigam outros usuários, nem mesmo listem nas pesquisas. Nas configurações nas Permissões já consegui bloquear alguns itens, mas ainda não de um usuario conseguir seguir outro

Giovani

---

---

# Cadastro de Usuário

> **Fonte:** [https://fluiggers.com.br/t/cadastro-de-usuario/2863](https://fluiggers.com.br/t/cadastro-de-usuario/2863)
> **Categoria:** Administração
> **Tags:** `usuario`
> **Criado em:** 25/06/2024, 10:09
> **Visualizações:** 76 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Gabriel Douglas Fernandes Barbosa** (@GabrielDouglas) — 25/06/2024, 10:09

No cadastro de usuários, eu não vi nenhum campo destinado a departamento/setor, e que normalmente nesses cadastro de departamento tem um gestor, como vocês controlam os gestores dos usuários? Por comunidade?

Estou criando um processo que preciso identificar o gerente do departamento e o diretor, mas pelos cadastros padrões do Fluig não estou encontrando! Help.

---

## Resposta #1

**venturelli** (@venturelli) — 25/06/2024, 10:35 | ❤️ 1

Você pode usar o mecanismo de atribuição por associação.

Crie um grupo do departamento e um grupo dos gerentes, algo como:
**Grupo Loja Matriz**
Aline
Beatriz
Caroline
Daiane
Eliane

**Grupo Gerentes**
Aline
Fernanda
Gabriela

E no mecanismo de atribuição use a associação entre os dois grupos: Gerentes e Loja Matriz.

Edit: [Mecanismo de atribuição - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=270921079#samples-872616687) tem um pouco mais sobre esse mecanismo nessa doc

---

---

# Como funcionam os Processos e Formulários quando o Fluig possuí mais de uma empresa/tenant?

> **Fonte:** [https://fluiggers.com.br/t/como-funcionam-os-processos-e-formularios-quando-o-fluig-possui-mais-de-uma-empresa-tenant/3227](https://fluiggers.com.br/t/como-funcionam-os-processos-e-formularios-quando-o-fluig-possui-mais-de-uma-empresa-tenant/3227)
> **Categoria:** Administração
> **Criado em:** 31/03/2025, 12:04
> **Visualizações:** 26 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Bruno Gasparetto** (@Bruno_Gasparetto) — 31/03/2025, 12:04

Por aqui sempre usei o Fluig com uma única empresa/tenant, então nunca vi na prática como é a situação de desenvolvimento de processos e outros detalhes quando o Fluig está configurado para várias empresas.

Por isso gostaria que os colegas que possuem situações assim compartilhassem um pouco sobre esse funcionamento.

Por exemplo, quando publica/atualiza um Processo ele vai automaticamente para todas as empresas ou só pra empresa do usuário logado que fez o processo?

E com os formulários, há diferenças também entre as empresas, já que o Volume de cada empresa é separada no wcm. Se tem diferença aí cada processo precisa indicar um formulário específico pensando na empresa?

---

---

# Como usar os Adapters

> **Fonte:** [https://fluiggers.com.br/t/como-usar-os-adapters/351](https://fluiggers.com.br/t/como-usar-os-adapters/351)
> **Categoria:** Administração
> **Criado em:** 13/04/2021, 10:13
> **Visualizações:** 397 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 13/04/2021, 10:13

Bom dia pessoal ,

Alguém já usou os adapters do fluig?
Para que eles servem?
estou querendo criar alguns recursos novos e me pareceu um bom ponto departida.

---

---

# Diretório dos arquivos de processos e registros de formulário

> **Fonte:** [https://fluiggers.com.br/t/diretorio-dos-arquivos-de-processos-e-registros-de-formulario/315](https://fluiggers.com.br/t/diretorio-dos-arquivos-de-processos-e-registros-de-formulario/315)
> **Categoria:** Administração
> **Tags:** `ged`, `arquivo`, `servidor`, `diretorio`
> **Criado em:** 08/04/2021, 14:51
> **Visualizações:** 1204 | **Likes:** 2 | **Respostas:** 2

---

## Pergunta original

**Victor Castro** (@victorcastro) — 08/04/2021, 14:51

Alguém sabe me falar qual o diretório dos arquivos dos processos e das solicitações geradas de formulários?

Mais precisamente, vou precisar migrar de servidor. Pela [documentação](https://tdn.engpro.totvs.com.br/display/public/FF/ARQ+-+Como+migrar+o+servidor+da+plataforma), eu preciso importar o bkp do banco e a pasta de volume. Por curiosidade, estou procurando no diretório os arquivos gerados dos processos e das solicitações e não encontrei. Se eu copiar manualmente a pasta volume pro novo diretório e o bkp do banco, todos os processos e solicitações do servidor antigo estarão no novo?

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 08/04/2021, 16:40

Victor, o procedimento ‘normal’ é levar o volume todo mesmo. Mas se me lembro bem, fica tudo em ‘public’, mas tudo ‘codificado’ no formato do GED.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Victor Castro** (@victorcastro) — 08/04/2021, 17:07

Tava fuçando no banco do fluig, parece que tudo relativo aos processos (códigos, config, etc) ficam salvos em tabelas. Na tabela `event_proces`, por exemplo, tem o evento, qual processo está vinculado, a versão e o código propriamente dito. Achei que quando exportava um processo pro server ele publicava em algum lugar na pasta volume os arquivos **.processs** e **.js**, igual é com os formulários. Mas parece que não.

Dá uma olhada.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/85c8e0bc9c5662662374aafc0baa4e2df4aae74f_2_640x500.png)

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 08/04/2021, 17:22 | ❤️ 1

Não não, fica tudo armazenado no banco mesmo. Inclusive quando precisamos fazer algum reparo em versões anteriores de certos eventos, taí a gambeta. :crazy_face:

---

## Resposta #4

**Victor Castro** (@victorcastro) — 08/04/2021, 17:23 | ❤️ 1

Como eu fui descobrir isso só agora?! :joy:

---

---

# Manual Integração/Apresentação

> **Fonte:** [https://fluiggers.com.br/t/manual-integracao-apresentacao/1193](https://fluiggers.com.br/t/manual-integracao-apresentacao/1193)
> **Categoria:** Administração
> **Criado em:** 19/07/2022, 16:59
> **Visualizações:** 266 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Jorge Fachini** (@JorgeFachini) — 19/07/2022, 16:59

Boa tarde,

Alguem teria algum manual de integração do fluig para uma apresentação de Integração para novo Colaboradores? Um overview da ferramenta e funcionalidades basicas.

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 20/07/2022, 12:51

Olá [@JorgeFachini](/u/jorgefachini)

me chame no skype igorskater

Atenciosamente,

---

---

# Modificar o Diretório default

> **Fonte:** [https://fluiggers.com.br/t/modificar-o-diretorio-default/2362](https://fluiggers.com.br/t/modificar-o-diretorio-default/2362)
> **Categoria:** Administração
> **Criado em:** 21/11/2023, 08:17
> **Visualizações:** 146 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Antonio Augusto Nogueira Neto** (@AntonioNogueira) — 21/11/2023, 08:17

Olá, gostaria de saber se há a possibilidade de modificar o Diretório default, caso sim, onde há a documentação das etapas?

---

---

# Perca dos servidores de banco de dados do Fluig

> **Fonte:** [https://fluiggers.com.br/t/perca-dos-servidores-de-banco-de-dados-do-fluig/2883](https://fluiggers.com.br/t/perca-dos-servidores-de-banco-de-dados-do-fluig/2883)
> **Categoria:** Administração
> **Tags:** `banco-de-dados`
> **Criado em:** 15/07/2024, 09:11
> **Visualizações:** 68 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Rodrigo NL** (@rodrigo.lima) — 15/07/2024, 09:11

Bom dia,

Tivemos a perca do servidor que continha o banco de dados do fluig e seus respectivos bkp.

Minha duvida é:

Se criar um banco de dados novo e apontar minha aplicação, irei perder os formulários que haviam?

---

## Resposta #1

**MAURO SIMOES** (@Mautresim) — 15/07/2024, 10:57

Seja bem-vindo, [@rodrigo.lima](/u/rodrigo.lima)

Eu creio que sim, porque toda a estrutura do Fluig está no banco de dados. Mas, vou deixar os mais experientes dar a resposta final.

---

## Resposta #2

**venturelli** (@venturelli) — 15/07/2024, 12:11 | ❤️ 1

Os formulários em si ficam armazenados no volume, mas os eventos ficam na base, então foram perdidos também.

Já os dados (os registros do formulário) ficam todos armazenados no banco de dados como o [@Mautresim](/u/mautresim) já deu a má noticia.

Assim como toda estrutura de documentos e solicitações…

Dependendo do volume de dados, acho que vale a pena consultar uma consultoria de recuperação de dados. A não ser no caso de um ataque de ransomware, dai provavelmente não tem solução.

Claro que agora já sabes, mas nunca se deve confiar apenas em um dispositivo pra backup, mas pra futuras referências, tem esse post [https://www.kingston.com/br/blog/personal-storage/computer-backup-tips:](https://www.kingston.com/br/blog/personal-storage/computer-backup-tips:)

> Teoria de backup 3-2-1
>
> Esta regra é baseada na teoria de que você tem três cópias de seus arquivos, armazena duas cópias em diferentes dispositivos (seja na nuvem ou no armazenamento externo) e uma cópia em um local seguro como um cofre ou fora do local. Para algumas pessoas esta teoria pode soar ligeiramente exagerada, mas se alguma coisa acontecer com seus backups você vai agradecer por ter feito isso!

---

## Resposta #3

**Rodrigo NL** (@rodrigo.lima) — 15/07/2024, 13:30

Sim, como o que se tinha no Fluig não era nada critico, não teve essa precaução nos BKP.

Vou criar uma banco do zero e aponta a aplicação, para ver como se comporta.

Após os testes retorno aqui o que conseguimos evoluir ou não.

Obrigado pela ajuda.

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 16/07/2024, 11:29 | ❤️ 1

Um exemplo de implementação da estratégia 3-2-1 que vejo em alguns clientes:

A cópia original (o banco online em operação)
Uma cópia quente em nuvem
Uma cópia fria em dispositivo offline (HDs externos, fita, etc).

…fora as possibilidades em um ambiente virtualizado, como os backups da máquina virtual em si e os snapshots periódicos.

Backup nunca é demais.

---

---

# Pesquisa: no seu ambiente os Devs são Admin?

> **Fonte:** [https://fluiggers.com.br/t/pesquisa-no-seu-ambiente-os-devs-sao-admin/3226](https://fluiggers.com.br/t/pesquisa-no-seu-ambiente-os-devs-sao-admin/3226)
> **Categoria:** Administração
> **Criado em:** 29/03/2025, 10:52
> **Visualizações:** 50 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Bruno Gasparetto** (@Bruno_Gasparetto) — 29/03/2025, 10:52

O [@Daniel\_Sales](/u/daniel_sales) teve uma iniciativa incrível de criar uma widget personalizada para fornecer mais recursos à nossa extensão do vscode. Pra isso ela criará endpoints no Fluig.

Porém eu me preocupo muito com a segurança e estou tentando usar o serviço de checar a permissão do usuário (que está difícil, pois alguns pacotes do Fluig exigem credenciais diferentes do Nexus).

Aí tive essa dúvida se normalmente dão papel de admin pros devs. E é muito mais simples identificar se o usuário é admin.

Por isso a enquete :grin:

Nos ambientes que administram e/ou desenvolvem, os Devs são cadastrados como admin?

-   Sim
-   Não

0 votante

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 31/03/2025, 06:46

Acredito que o ideal será admin mesmo, pois o Fluig nem deve ter permissões pra cada detalhe que um dev pode executar.

A Widget tá começando a tomar forma. Já inserimos no nosso GitHub.

[github.com](https://github.com/fluiggers/fluig-widget-helper)

![](https://opengraph.githubassets.com/57f0b6cfa5444844601af1c62c2cfe67/fluiggers/fluig-widget-helper)

### [GitHub - fluiggers/fluig-widget-helper: Conjunto de endpoints para auxiliar no...](https://github.com/fluiggers/fluig-widget-helper)

Conjunto de endpoints para auxiliar no desenvolvimento no Fluig usando a extensão do VS Code

Depois que finalizar a parte de atualizar script de workflow já vamos começar a configurar a extensão pra usar a widget.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Daniel Sales** (@Daniel_Sales) — 31/03/2025, 10:37 | ❤️ 1

Se o DEV não for admin ele não consegue publicar nada. e se for liberar só as permissões de publicação para um usuário da uma serie de problemas em outras partes. O ideal é o dev ser sempre admin

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 31/03/2025, 10:49

Ótimo saber.

Nunca pesquisei a fundo se tinha como dar permissões específicas.

Porém sei que o Fluig é bem fraco nisso, pois queria dar algumas permissões pro nosso suporte poder indicar usuário substituto e outras coisas mais usuais pro suporte e só consegui isso os colocando como Admin também.

---

---

# Processo FLUIGADHOC - como removê-lo do menu de processos do Fluig?

> **Fonte:** [https://fluiggers.com.br/t/processo-fluigadhoc-como-remove-lo-do-menu-de-processos-do-fluig/549](https://fluiggers.com.br/t/processo-fluigadhoc-como-remove-lo-do-menu-de-processos-do-fluig/549)
> **Categoria:** Administração
> **Tags:** `menu`, `fluigadhoc`
> **Criado em:** 03/07/2021, 09:22
> **Visualizações:** 1153 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Bruno Gasparetto** (@Bruno_Gasparetto) — 03/07/2021, 09:22

No nosso Fluig (e acredito que de todos) é padrão vir esse processo FLUIGADHOC.

Aqui nós tentamos remover esse processo, pois o julgamos desnecessário, simplesmente indo em Configurar Processos e o desabilitando. Porém o Fluig mantém aquele link “Listar Tarefas” no menu (quando clicado ele exibe um erro informando que o processo não existe mais).

Alguém sabe como remover esse link do menu?

![image](https://fluiggers.com.br/uploads/default/original/1X/d107b9f7670a2e6ca6bcbc52a91d829e7a552546.png)

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Magno Silva Adauto** (@Magno_Silva_Adauto) — 04/07/2021, 12:01 | ❤️ 1

Olá,

Acesse o painel de controle / Permissões:

-   Selecione a aba “Papel” e clique em “Próxima Etapa”.
-   Na coluna “Papéis” escolha a opção “user” para seleciona-la e clique em “Próxima Etapa”.
-   No campo de busca digite “Listar” para filtrar os recursos e quando aparecer o “Listar Tarefas” desabilite a opção “Visualizar página” e clique em “Aplicar Permissões” para finalizar.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/2123a8ea4e83c4ff0bdbe91e58afd6bd5e40a721_2_690x128.png)

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 05/07/2021, 12:00

Muito obrigado, [@Magno\_Silva\_Adauto](/u/magno_silva_adauto) !

---

## Resposta #3

**system** (@system) — 06/07/2021, 04:00

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---

---

# Sobre a categoria Administração 

> **Fonte:** [https://fluiggers.com.br/t/sobre-a-categoria-administracao/33](https://fluiggers.com.br/t/sobre-a-categoria-administracao/33)
> **Categoria:** Administração
> **Criado em:** 11/03/2021, 13:49
> **Visualizações:** 282 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Igor Rodrigues** (@fluigor.com.br) — 11/03/2021, 13:49

(Substitua este primeiro parágrafo por uma breve descrição de sua nova categoria. Esta orientação aparecerá na área de seleção da categoria, então tente mantê-la abaixo de 200 caracteres.)

Use os parágrafos a seguir para uma descrição mais longa, ou para estabelecer as instruções ou regras da categoria:

-   Por que as pessoas devem usar essa categoria? Para que ela serve?

-   Como exatamente ela é diferente das outras categorias que já existem?

-   O que os tópicos nessa categoria devem conter, em geral?

-   Precisamos dessa categoria? Podemos juntá-la com outra categoria ou subcategoria?

---

---

# Verificar histórico de acessos no Fluig

> **Fonte:** [https://fluiggers.com.br/t/verificar-historico-de-acessos-no-fluig/1559](https://fluiggers.com.br/t/verificar-historico-de-acessos-no-fluig/1559)
> **Categoria:** Administração
> **Criado em:** 03/01/2023, 08:36
> **Visualizações:** 795 | **Likes:** 4 | **Respostas:** 0

---

## Pergunta original

**Portela** (@Portela) — 03/01/2023, 08:36

Bom dia, pessoal. É possível verificar dentro do Fluig um histórico de acesso dos usuários na plataforma?

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 03/01/2023, 08:47 | ❤️ 1

Basta consultar a tabela fdn\_accesslog do fluig que você tem o historico dos acessos.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/b32274bf4a7ce5f8faae24317b89f99a5f663795_2_690x275.png)

---

## Resposta #2

**Portela** (@Portela) — 03/01/2023, 08:50

Onde eu faço essa consulta? eu baixo essas informações em alguma parte do painel de controle do Fluig? Como eu faço pra ter acesso à esse banco? São muitas perguntas kkkk

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Daniel Sales** (@Daniel_Sales) — 03/01/2023, 09:27 | ❤️ 3

Basta gerar um dataset vou colocar aqui o script.

```javascript
function createDataset(fields, constraints, sortFields) {

	var newDataset = DatasetBuilder.newDataset();
	var dataSource = "/jdbc/AppDS";
	var ic = new javax.naming.InitialContext();
	var ds = ic.lookup(dataSource);
	var created = false;
	//criar constraints
    if(constraints != null){
        for(var x = 0; x < constraints.length; x++){
            if(constraints[x].fieldName == "EMP"){
            	EMP = constraints[x].initialValue;
            }
            if(constraints[x].fieldName == "FIL"){
                FIL = constraints[x].initialValue;
            }
        }
    }

	var QUERY  = " SELECT * FROM fdn_accesslog";

	try {
		var conn = ds.getConnection();
		var stmt = conn.createStatement();
		var rs = stmt.executeQuery(QUERY);
		var columnCount = rs.getMetaData().getColumnCount();
		while (rs.next()) {
			if (!created) {
				for (var i = 1; i <= columnCount; i++) {
					newDataset.addColumn(rs.getMetaData().getColumnName(i));
				}
				created = true;
			}
			var Arr = [];
			for (var i = 1; i <= columnCount; i++) {
				var obj = rs.getObject(rs.getMetaData().getColumnName(i));
				if (null != obj) {
					Arr[i - 1] = rs.getObject(rs.getMetaData().getColumnName(i)).toString();
				} else {
					Arr[i - 1] = "null";
				}
			}
			newDataset.addRow( Arr );
		}
	} catch (e) {
		log.error("ERRO==============> " + e.message);
	} finally {
		if (stmt != null) {
			stmt.close();
		}
		if (conn != null) {
			conn.close();
		}
	}
	return newDataset;
}
```

---

## Resposta #4

**Portela** (@Portela) — 03/01/2023, 09:38

Muito obrigado, amigo!! Salvou demais

---

---

# É possível bloquear o usuário comum de alterar o email no perfil?

> **Fonte:** [https://fluiggers.com.br/t/e-possivel-bloquear-o-usuario-comum-de-alterar-o-email-no-perfil/1839](https://fluiggers.com.br/t/e-possivel-bloquear-o-usuario-comum-de-alterar-o-email-no-perfil/1839)
> **Categoria:** Administração
> **Criado em:** 13/04/2023, 09:33
> **Visualizações:** 378 | **Likes:** 4 | **Respostas:** 0

---

## Pergunta original

**Portela** (@Portela) — 13/04/2023, 09:33

Bom dia pessoal. Pra deixar o ambiente mais seguro, queria tirar a permissão de alterar o email do usuário comum, mas não consigo. Já mexi muito nas permissões do painel de controle, mas nao consigo. Podem me ajudar?

---

## Resposta #1

**Marco Comassetto** (@marcommas) — 13/04/2023, 11:13 | ❤️ 2

É preciso customizar com o evento global beforeUpdateUser, colocando a regra de negócio que você precisa.
O campo ficaria ‘aberto’, mas ao salvar, vc dispara uma mensagem de erro, informando que não é possível alterar o e-mail

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Giovani Hardt** (@ghardt) — 13/04/2023, 13:36 | ❤️ 2

Eu uso este código, no caso bloqueamos qq alteração por parte do usuario

function beforeUpdateUser(user) {

```
var userLogado = getValue("WKUser");

if (userLogado != "usuário-admin") {
		throw "Opsssss... Você não pode alterar seus dados !!!";
} else {
	// Adiciona um dado adicional ao usuário informando a última data de
	// atualização
	let dateFormat = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
	user.putData("LastUpdateDate", dateFormat.format(new Date()));

}
```

}

---

---
