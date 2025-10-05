# Back in Code

> **Um manifesto e um espaço para devs iniciantes em backend.**  
> Aqui eu aprendo e ensino, sem atalhos mágicos, traduzindo conceitos complexos em passos claros.  
> Projeto pessoal que acompanha meu canal no YouTube e evolui como blog/documentação técnica.

---

## 🚀 Tech Stack

[![Nuxt 3](https://img.shields.io/badge/Nuxt-3-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com) [![TailwindCSS v4](https://img.shields.io/badge/TailwindCSS-4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com) [![Cloudflare](https://img.shields.io/badge/Cloudflare-Router-F38020?logo=cloudflare&logoColor=white)](https://www.cloudflare.com) [![GitLab CI/CD](https://img.shields.io/badge/GitLab-CI%2FCD-FC6D26?logo=gitlab&logoColor=white)](https://docs.gitlab.com/ee/ci/) [![markdown-it](https://img.shields.io/badge/Markdown--it-Docs-000000?logo=markdown&logoColor=white)](https://github.com/markdown-it/markdown-it)

- **Nuxt 3** → full-stack Vue para site e blog  
- **TailwindCSS v4** → design minimalista e responsivo com tokens `@theme`  
- **Cloudflare** → usado como *roteador* de rotas (CDN + proxy + edge rules)  
- **GitLab CI/CD** → pipelines de build e deploy automatizados  
- **markdown-it** → renderização dos posts  
- **Fonts self-host** → Inter, Space Grotesk, JetBrains Mono  

---

## ✨ Visão Geral

- **Blog + YouTube**: todo código que aparece no canal também fica registrado aqui.  
- **Manifesto**: a página inicial é um chamado para devs juniores no backend, mostrando que não estão sozinhos.  
- **Minimalismo**: interface inspirada em FreeCodeCamp e DigitalOcean Blog, fácil de ler em longas sessões.  
- **Cloudflare como Router**: o projeto usa Cloudflare para roteamento inteligente de rotas, segurança e performance global.  
- **Open Knowledge**: posts escritos em Markdown com front-matter YAML para metadados.

---

## 📝 Estrutura de Conteúdo

Cada post tem metadados:

```yaml
---
title: "Hello, world"
slug: "hello-world"
date: "2025-09-25"
tags: ["nuxt", "markdown"]
summary: "Post de teste renderizado via markdown-it."
---
```

---

## ⚙️ Variáveis de Ambiente
NUXT_PUBLIC_SITE_NAME="Back in Code"

obs: As variáveis sensíveis são gerenciadas no GitLab CI/CD como protected variables.

---

## 📦 Rodando o Projeto
```bash
# instalar dependências
pnpm install

# ambiente de desenvolvimento
pnpm dev

# build de produção
pnpm build && pnpm preview
```
---

## 📖 Manifesto

Back in Code não é só um blog, é um movimento:
Tornar o backend acessível para quem está além do CRUD
Ensinar com clareza, sem arrogância
Registrar cada aprendizado (acertos e erros)
Criar base para comunidade futura de devs backend

---

## 🛠️ Roadmap
 - [x] Setup Nuxt + Tailwind
 - [x] Fontes self-host (Inter, Space Grotesk, JetBrains Mono)
 - [x] Markdown rendering com markdown-it
 - [x] Deploy com GitLab CI/CD + Cloudflare
 - [ ] Listagem de posts com tags e summaries
 - [ ] Página individual por slug
 - [ ] Integração com YouTube
 - [ ] Newsletter / Comunidade

---

## 👨‍💻 Autor
Bruno Roberto – Cientista da Computação com especialização em Arquitetura de Software e Cyber Security.
Atuo como dev pleno-sênior em backend (Node.js, NestJS, TypeScript).
Criei o Back in Code para ajudar devs juniores e plenos a encontrarem clareza e direção no mundo do backend.

---

## 📜 Licença
MIT © 2025 Bruno Roberto