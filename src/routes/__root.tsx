import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Link in Bio',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scanlines">
      <head>
        <HeadContent />
      </head>
      <body>
        <Particles />
        <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
        <Scripts />
      </body>
    </html>
  )
}

function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${(i * 13 + 3) % 100}%`,
    delay: `${(i * 1.1) % 10}s`,
    duration: `${7 + (i * 2.3) % 14}s`,
    size: i % 4 === 0 ? '4px' : i % 3 === 0 ? '2px' : '3px',
  }))

  return (
    <div className="particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  )
}
