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
