# Documentação do site Crazy Up

Este guia explica, de forma simples, como editar e publicar o site. Para mudanças básicas, use um editor como o VS Code.

## Estrutura do projeto

```
crazup_site/
├── index.html                 # Página inicial
├── pages/
│   ├── servicos.html          # Serviços
│   ├── portfolio.html         # Seus trabalhos
│   ├── sobre.html             # Sobre a empresa
│   └── contato.html           # Contato
├── assets/
│   ├── css/style.css          # Cores e aparência
│   ├── js/script.js           # Funções, como o formulário
│   └── img/                   # Logo e imagens
└── DOCUMENTACAO.md            # Este guia
```

Os arquivos `.html` guardam o conteúdo. `style.css` controla aparência. Para trocar textos, projetos e links, quase sempre você editará os arquivos HTML.

## Abrir o site no computador

1. Abra a pasta do projeto.
2. Dê dois cliques em `index.html`.
3. O site abrirá no navegador.
4. Salve uma alteração no editor e aperte `F5` no navegador para atualizá-lo.

Para editar com mais conforto, instale o [VS Code](https://code.visualstudio.com/), abra a pasta `crazup_site` e clique no arquivo desejado.

## Adicionar projetos ao portfólio

A página está em `pages/portfolio.html`. Ela possui cinco modelos de projeto e um card final de chamada para contato.

### Alterar textos

Em um card, localize este trecho:

```html
<span class="project-type">SITE INSTITUCIONAL</span>
<h3>Nome do projeto</h3>
<p>Explique em uma ou duas frases qual problema o site resolveu...</p>
```

Troque o tipo do trabalho, o nome e a descrição curta. Preserve as tags HTML (`<span>`, `<h3>` e `<p>`); altere somente o texto entre elas.

### Alterar o link “Ver projeto”

Localize:

```html
<a class="project-link" href="#">Ver projeto <span aria-hidden="true">↗</span></a>
```

Troque o `#` pela URL real. Exemplo:

```html
<a class="project-link" href="https://meuprojeto.com.br" target="_blank" rel="noopener">Ver projeto <span aria-hidden="true">↗</span></a>
```

`target="_blank"` abre em outra aba. `rel="noopener"` é uma proteção recomendada para links externos.

### Colocar uma imagem do projeto

1. Crie a pasta `assets/img/projetos`.
2. Coloque uma imagem dentro dela, por exemplo `site-cliente.jpg`.
3. No card desejado, apague o conteúdo que mostra `SEU PROJETO` e coloque:

```html
<img src="../assets/img/projetos/site-cliente.jpg" alt="Página inicial do site Cliente Exemplo">
```

O texto em `alt` descreve a imagem para acessibilidade e aparece se ela não carregar. Use uma frase curta e objetiva.

Prefira imagens WebP ou JPG de até 1200 px de largura. Arquivos muito pesados deixam a página lenta.

### Adicionar outro card

Copie um bloco inteiro que começa com:

```html
<div class="col-md-6 col-lg-4">
    <article class="portfolio-card h-100">
```

e termina com:

```html
    </article>
</div>
```

Cole-o antes do card `PRÓXIMO PROJETO`. Altere os textos, a imagem e o link. O layout se ajusta automaticamente para computador, tablet e celular.

## Alterar a página inicial

`index.html` é a primeira página do site.

- Para trocar o título, procure por `<h1 class="display-title">`.
- Para alterar a apresentação, edite o parágrafo que possui `hero-text`.
- A seção “Projetos selecionados” é uma prévia do portfólio. Atualize os três cards dela para mostrar seus melhores trabalhos.

## Alterar dados de contato

Em `pages/contato.html`, procure os dados atuais de WhatsApp, e-mail, Instagram e LinkedIn e troque pelos seus.

O WhatsApp e o e-mail também aparecem em `assets/js/script.js`, porque o formulário usa esses dados para abrir uma mensagem pronta. Sempre altere os dois lugares.

No WhatsApp, use país + DDD + número, sem espaços ou símbolos. Exemplo: `5511999999999`.

## Mudar cores e aparência

Abra `assets/css/style.css`. No início existe este trecho:

```css
:root {
    --cu-navy: #020d1e;
    --cu-blue: #10b8ee;
    --cu-orange: #ff7a00;
}
```

Troque os códigos após `:` para mudar as cores principais. Faça uma mudança por vez, salve e atualize o navegador para comparar.

## Publicar o site

O projeto é estático: você pode enviá-lo para GitHub Pages, Netlify, Vercel ou uma hospedagem que aceite HTML.

Envie a pasta inteira, sem mudar sua estrutura. Os arquivos em `assets/` e `pages/` são necessários para imagens, estilos e links funcionarem.

Antes de publicar, confira:

- Todos os links do menu.
- Todos os botões “Ver projeto”.
- Imagens do portfólio.
- Formulário de contato e dados de WhatsApp/e-mail.
- Aparência em celular, usando a visualização responsiva do navegador.

## Dicas para não quebrar o site

- Faça uma cópia antes de alterações grandes.
- Não renomeie arquivos ou pastas sem corrigir os links que apontam para eles.
- Use aspas duplas nos links: `href="https://exemplo.com"`.
- Salve os arquivos em UTF-8 para os acentos aparecerem corretamente.
- Se algo sair errado, use `Ctrl + Z` no editor para desfazer a última mudança.
