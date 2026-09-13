# Guia Completo de Deploy no Vercel & Manutenção

Parabéns! O site e a landing page de alta conversão de **Maze Gusmão - Terapeuta Sistêmica (Instituto NovaHera)** estão prontos para produção.

---

## 🚀 Como Fazer o Deploy no Vercel (Passo a Passo)

### Opção 1: Deploy Rápido via GitHub (Recomendada)
1. **Crie ou acesse sua conta no Vercel**:
   - Acesse [vercel.com](https://vercel.com) e faça login (pode usar sua conta do GitHub ou Google).
2. **Envie o projeto para um repositório GitHub**:
   - Crie um repositório no seu GitHub (ex: `maze-gusmao-terapia`).
   - Faça o push dos arquivos do projeto para o repositório.
3. **Importe o projeto no Vercel**:
   - No painel da Vercel, clique no botão **"Add New..."** → **"Project"**.
   - Selecione o repositório que acabou de criar.
4. **Configurações de Build (Já Detectadas Automaticamente)**:
   - **Framework Preset**: `Vite` (a Vercel detecta automaticamente graças ao arquivo `vercel.json` e `vite.config.ts`).
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. **Clique em "Deploy"**:
   - Em menos de 1 minuto seu site estará no ar com certificado SSL gratuito (HTTPS), alta performance e CDN global!

---

### Opção 2: Deploy Instantâneo via Terminal (Vercel CLI)
Se preferir deployar diretamente pelo terminal do seu computador:
```bash
# 1. Instale o Vercel CLI globalmente (se ainda não tiver)
npm i -g vercel

# 2. Na pasta raiz do projeto, execute:
vercel

# 3. Para atualizar a versão final em produção:
vercel --prod
```

---

## ⚙️ Como Personalizar Informações Principais

### 1. Número do WhatsApp para Agendamentos
No arquivo `src/data/therapyData.ts`:
```typescript
export const THERAPIST_INFO = {
  name: "Maze Gusmão",
  whatsappNumber: "5511999999999", // Altere para seu DDI + DDD + Telefone (ex: 5511987654321)
  whatsappFormatted: "(11) 99999-9999",
  email: "contato@institutonovahera.com.br",
  instagram: "@institutonovahera",
  // ...
};
```
*Na versão estática HTML pura (`public/site-estatico-html/js/main.js`), altere a constante `WHATSAPP_NUMBER`.*

### 2. Fotos e Imagens
As fotos oficiais de Maze Gusmão, das sessões de constelação e do consultório acolhedor estão salvas em:
- `/public/assets/images/maze-gusmao.jpg`
- `/public/assets/images/constelacao-familiar.jpg`
- `/public/assets/images/consultorio.jpg`

Para trocar alguma foto, basta substituir o arquivo com o mesmo nome ou alterar o caminho nos componentes.

### 3. Textos, Especialidades e Depoimentos
Todos os textos, frases do Método Euponikus®, perguntas do FAQ e depoimentos estão centralizados de forma modular em:
`src/data/therapyData.ts`

---

## 📁 Estrutura de Arquivos

```
├── public/
│   ├── assets/images/              # Fotos comprimidas e otimizadas
│   └── site-estatico-html/         # Versão alternativa 100% Vanilla HTML/CSS/JS
│       ├── index.html
│       ├── css/style.css
│       ├── js/main.js
│       └── assets/imagens/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Menu responsivo e barra superior
│   │   ├── Hero.tsx                # Hero de alta conversão com foto e CTA
│   │   ├── PainPoints.tsx          # Identificação de dores emocionais
│   │   ├── About.tsx               # Sobre Maze Gusmão & 4 Pilares Sistêmicos
│   │   ├── Services.tsx            # Especialidades detalhadas
│   │   ├── SystemicQuiz.tsx        # Guia interativo de autoavaliação
│   │   ├── ProcessTimeline.tsx     # Passo a passo do atendimento
│   │   ├── Testimonials.tsx        # Depoimentos e prova social
│   │   ├── FAQ.tsx                 # Perguntas frequentes com acordeão
│   │   ├── BookingForm.tsx         # Formulário com pré-agendamento e WhatsApp
│   │   ├── BookingModal.tsx        # Modal rápido de agendamento
│   │   ├── FloatingWhatsApp.tsx    # Botão flutuante de WhatsApp com pulso
│   │   └── Footer.tsx              # Rodapé com dados de contato e aviso ético
│   ├── data/
│   │   └── therapyData.ts          # Central de conteúdo, textos e links
│   ├── types.ts                    # Tipagens TypeScript
│   ├── App.tsx                     # Aplicação principal
│   └── index.css                   # Tailwind CSS e tipografia editorial
├── vercel.json                     # Configuração de build e roteamento Vercel
├── index.html                      # HTML com SEO, OpenGraph e Google Fonts
└── package.json                    # Dependências e scripts
```
