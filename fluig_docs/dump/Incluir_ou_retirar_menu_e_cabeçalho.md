# Incluir ou retirar menu e cabeçalho

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=185749423](https://tdn.totvs.com/pages/viewpage.action?pageId=185749423)

---

# Índice

# Objetivo

O objetivo desse guia é apresentar as alterações que devem ser feitas ao criar um *layout* personalizado.

# Personalizando um *layout*

Quando se personaliza um *layout* e é necessário retirar o cabeçalho ou o menu padrão da plataforma, há um elemento cuja edição é necessária. Procure pelo elemento "wcm-all-content" no código:

```
<div class="wcm-all-content">
		...
    </div>
```

Caso não deseje colocar o menu *(tag* "<@wcm.menu />"*)*, modifique o *style* da div acima, conforme código a seguir:

```
<div class="wcm-all-content" style="padding: [60px, 0px, 0px, 0px];">
		...
    </div>
```

Se, pelo contrário, for necessário retirar o cabeçalho, então o código ficará assim:

```
<div class="wcm-all-content" style="padding: [0px, 0px, 0px, 90px];">
		...
    </div>
```

No último cenário, quando não se deseja nem menu e nem cabeçalho, utilize os seguintes parâmetros:

```
<div class="wcm-all-content" style="padding: [0px, 0px, 0px, 0px];">
		...
    </div>
```
