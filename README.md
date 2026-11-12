# Portfólio pessoal de Marcos Cravito

**Aluno:** Marcos Cravito

Portfólio de estudante do curso técnico em Desenvolvimento de Sistemas. O site apresenta meu perfil, meus projetos e meu [perfil no GitHub](https://github.com/Marcos-Cravito).

## Tecnologias

- **HTML** - estrutura das páginas e dos links.
- **CSS** - cores, cartões e rolagem suave.
- **Bootstrap 5.3.3** - grade responsiva e espaçamentos.
- **JavaScript** - exibição do botão de voltar ao topo e atualização do ano no rodapé.

## Funcionamento

O menu leva às seções Perfil, Projetos e Contato. Os projetos apresentados são uma landing page, um site responsivo e o próprio portfólio. O contato é feito pelo perfil do GitHub.

Para abrir o projeto localmente, extraia o ZIP e abra `index.html` no navegador. O Bootstrap é carregado pela internet.

## Botão de voltar ao topo

O botão aparece no canto inferior direito quando a rolagem passa de 300 pixels. Em `script.js`, a função `atualizarBotaoTopo` verifica a posição da página e atualiza o atributo `hidden` do link. Ao clicar, o link `#inicio` leva ao topo. Em `style.css`, a propriedade `scroll-behavior` deixa a rolagem suave e respeita a preferência de movimento reduzido.

