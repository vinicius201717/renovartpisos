# Renovarte Pisos

Landing page one-page premium em Next.js + TypeScript para a Renovarte Pisos.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Validar antes do deploy

```bash
npm run lint
npm run build
```

## Deploy na Vercel

Importe o repositório do GitHub na Vercel e mantenha as configurações padrão:

- Framework Preset: `Next.js`
- Root Directory: `./`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: deixe em branco, a Vercel detecta automaticamente
- Environment Variables: nenhuma obrigatória no momento

Depois do import, cada push na branch `main` gera um novo deploy de produção.

## Contato

Os dados de WhatsApp, telefone, mensagem padrão e logo ficam em:

```txt
src/lib/content.ts
```
