# Portfolio

Simon Manzler's portfolio, built with [TanStack Start](https://tanstack.com/start), Tailwind CSS and shadcn/ui.

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # output in .output/
pnpm start      # run the production build
pnpm lint
pnpm typecheck
```

## Contact form

The contact form sends mail over SMTP from a server function. Set these environment variables:

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`
- `CONTACT_EMAIL` (optional, the recipient)
