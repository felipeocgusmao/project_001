# Maze Gusmão | Site de Terapia Sistêmica

Landing page da terapeuta sistêmica e consteladora multidimensional **Maze Gusmão**, formada pelo método de Constelação Sistêmica Multidimensional do **Instituto Nova Era**.

O site apresenta o trabalho, explica o que é constelação familiar, detalha como é o atendimento online e leva a pessoa ao agendamento pelo WhatsApp.

**Site no ar:** https://mazegusmao.vercel.app

## Tecnologias

Somente **HTML, CSS e JavaScript puros**. Não há framework, gerenciador de pacotes nem etapa de build.

- HTML5 semântico, com ícones em um sprite SVG embutido
- CSS com variáveis (design tokens), responsivo, do celular ao desktop
- JavaScript sem dependências (menu, perguntas frequentes, autoavaliação, formulários e links do WhatsApp)
- Fontes: Playfair Display e Plus Jakarta Sans (Google Fonts)

## Estrutura

```
project_001/
├── index.html          Página principal (todas as seções)
├── privacidade.html    Política de Privacidade (LGPD)
├── termos.html         Termos de Uso
├── css/
│   └── style.css       Estilos do site e das páginas legais
├── js/
│   └── main.js         Comportamento da página
└── assets/
    └── images/         Fotos do site
        ├── profile-001.jpg          Foto principal (hero)
        ├── constelacao-familiar.jpg  Seção "Sobre"
        ├── consultorio.jpg           Seção "Sobre" (secundária)
        └── maze-gusmao.jpg           Foto reserva
```

### Seções da página principal

Início, Para quem é, Sobre, A Constelação (conceitos e leis sistêmicas), Atendimento (7 etapas), Áreas de atuação, Autoavaliação, Valores e ética, Dúvidas frequentes, Agendamento e Rodapé.

## Como rodar localmente

Não precisa instalar nada. Escolha uma opção:

1. Dê um duplo clique em `index.html` para abrir no navegador.
2. Ou use um servidor local, por exemplo a extensão **Live Server** do VS Code, ou:
   ```bash
   python -m http.server 8000
   ```
   e abra http://localhost:8000.

## Como editar

| O que mudar | Onde |
|---|---|
| Número de WhatsApp | Constante `WHATSAPP_NUMBER` em `js/main.js`, os links `https://wa.me/...` em `index.html` e o texto de contato do rodapé. Formato do link: código do país + DDD + número, sem espaços (ex.: `5511999999999`). |
| Textos | `index.html` |
| Cards de "Áreas de atuação" e opções da autoavaliação | Arrays `SERVICES` e `QUIZ_*` em `js/main.js` |
| Cores, fontes e espaçamentos | Variáveis em `:root`, no topo de `css/style.css` |
| Fotos | Pasta `assets/images/` (use o caminho relativo, ex.: `assets/images/profile-001.jpg`) |
| Prévia ao compartilhar o link | Tags `og:*` no `<head>` do `index.html` (a `og:image` precisa de URL completa) |

Dicas para imagens: mantenha o nome sem espaços nem acentos, respeite maiúsculas e minúsculas e prefira arquivos abaixo de ~300 KB para o site abrir rápido no celular.

## Como funcionam os formulários

Os formulários de agendamento **não enviam dados para nenhum servidor**. Eles apenas montam uma mensagem e abrem o WhatsApp com o texto pronto; a mensagem só chega à Maze se a pessoa a enviar.

Antes de avançar, a pessoa precisa marcar a caixa **"Li e concordo com a Política de Privacidade e os Termos de Uso"**. Sem isso, os botões não prosseguem.

## Privacidade e termos

- `privacidade.html`: política baseada na LGPD (Lei nº 13.709/2018).
- `termos.html`: condições de uso e natureza do atendimento (abordagem complementar, sem substituir acompanhamento médico ou psicológico).

Se forem adicionados Google Analytics, Meta Pixel ou qualquer coleta de dados, a política deve ser atualizada e um aviso de cookies passa a ser necessário. Os textos legais devem ser revisados por um profissional do direito antes de divulgação ampla.

## Deploy (Vercel)

O site é publicado automaticamente a cada `git push` na branch `main`.

Configuração do projeto na Vercel (**Settings → Build & Development Settings**):

- **Framework Preset:** Other
- **Build Command:** vazio
- **Output Directory:** vazio
- **Install Command:** vazio

Domínio gratuito configurado em **Settings → Domains**.

### Publicar uma alteração

```bash
git pull
git add -A
git commit -m "Descreva a alteração"
git push
```

Se editar arquivos pelo site do GitHub e também no computador, rode sempre `git pull` antes de começar, para evitar conflitos.

## Checklist antes de divulgar

- [ ] Botões de WhatsApp abrem a conversa com o número correto
- [ ] Fotos carregam no computador e no celular
- [ ] Prévia do link aparece com a foto ao compartilhar no WhatsApp
- [ ] Textos revisados pela Maze
- [ ] Página de privacidade e termos abrem pelo rodapé

## Conteúdo e ética

Os textos seguem o material de posicionamento do Instituto Nova Era. O site não promete cura milagrosa e deixa claro que o atendimento não substitui acompanhamento médico ou psicológico.

## Direitos

© Maze Gusmão • Instituto Nova Era. Todos os direitos reservados. Textos, imagens e identidade visual não podem ser copiados sem autorização.
