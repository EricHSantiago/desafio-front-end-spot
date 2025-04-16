# Painel do Cliente - Desafio Técnico

Este projeto foi desenvolvido como parte de um desafio técnico para uma vaga de Desenvolvedor(a) Front-End Júnior. O objetivo era construir uma aplicação com foco em UX/UI, front end, organização de código e responsividade utilizando as tecnologias React/Next.js, TailwindCSS e Radix UI.

## 🚀 Tecnologias utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 📁 Estrutura de pastas

```
├── public/
│   └── assets/
│       └── img-page-sign-in.jpg
├── src/
│   ├── app/
│   │   ├── (private)/
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── (public)/
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   │   └── page.tsx
│   │   │   └──  sign-in/
│   │   │        └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── components/
│   │   ├── Buttons/
│   │   │   └── ButtonForm/
│   │   │       └── button-form.tsx
│   │   │       └── button-form.type.tsx
│   │   ├── Calendar/
│   │   │   └── Calendar.tsx
│   │   ├── Header/
│   │   │   └── header.tsx
│   │   ├── Input/
│   │   │   └── input.tsx
│   │   │   └── input.type.tsx
│   │   ├── Password/
│   │   │   └── input-password.tsx
│   │   │   └── input-password.type.tsx
│   │   ├── Sidebar/
│   │   │   └── sidebar.tsx
│   │   │   └── sidebar.type.tsx
│   │   └── User Panel/
│   │       └── user-panel.tsx
│   └── middleware.tsx/
```

## 🔐 Acesso ao sistema

A autenticação é simulada com validação de usuário fixo.

**Credenciais para login:**

```
Usuário: spotmkt
Senha: 123
```

## 💻 Telas do projeto

### 1. Tela de Login
- Responsiva
- Com validação de usuário e senha
- Feedback de erro
- Oculta imagem lateral em telas pequenas

### 2. Painel Principal (Dashboard)
- Cards de métricas
- Calendário de ações (fake)
- Notificações e histórico de ações
- Informações do usuário com menu suspenso
- Menu lateral com navegação entre seções
- Layout responsivo com Header fixo e Sidebar adaptativa

## 📱 Responsividade

A aplicação é responsiva e otimizada para diferentes tamanhos de tela. Na versão mobile:
- A imagem da tela de login é ocultada
- A Sidebar se ajusta ou pode ser adaptada para um drawer/menu
- Layouts reorganizados com Flex/Grid

## 🧠 Conceitos aplicados

- Componentização e reutilização
- Responsividade com Tailwind
- Acessibilidade com Radix UI
- Organização de pastas e separação por responsabilidades
- Simulação de login com cookies e rota protegida

## 📌 Como rodar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
```

2. Instale as dependências:
```bash
npm install
```

3. Rode o projeto:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:3000
```

## 📩 Contato

Caso queira saber mais sobre o projeto:

- 💼 LinkedIn: [seu-linkedin](https://www.linkedin.com/in/erichsantiago/)
- 📧 Email: erichsantiago@outlook.com.br

---

Feito por [Eric Henrique]

