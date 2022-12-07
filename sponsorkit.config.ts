import { defineConfig, presets } from 'sponsorkit'

const JETBRAINS_LOGO = (width: number, y: number) => `
<a xlink:href="https://www.jetbrains.com/?from=sundowndev" class="sponsorkit-link" target="_blank" id="JetBrains"><svg x="${(width - 361)/2}" y="${y}" width="360" height="100" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="32.64" x2="82.77" y1="61.16" y2="85.54"><stop offset=".21" stop-color="#fe2857"/><stop offset="1" stop-color="#293896"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="17.38" x2="82.95" y1="69.86" y2="21.23"><stop offset="0" stop-color="#fe2857"/><stop offset=".01" stop-color="#fe2857"/><stop offset=".86" stop-color="#ff318c"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="74.17" x2="160.27" y1="21.58" y2="99.76"><stop offset=".02" stop-color="#ff318c"/><stop offset=".21" stop-color="#fe2857"/><stop offset=".86" stop-color="#fdb60d"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="155.46" x2="55.07" y1="89.8" y2="158.9"><stop offset=".01" stop-color="#fdb60d"/><stop offset=".86" stop-color="#fcf84a"/></linearGradient><path d="m81.56 83.71-41.35-35a15 15 0 1 0 -14.47 25.7h.15l.39.12 52.16 15.89a3.53 3.53 0 0 0 1.18.21 3.73 3.73 0 0 0 1.93-6.91z" fill="url(#a)"/><path d="m89.85 25.93a10.89 10.89 0 0 0 -16.85-9.18l-50.5 30.66a15 15 0 1 0 17.9 24l45.27-36.89.36-.3a10.93 10.93 0 0 0 3.82-8.29z" fill="url(#b)"/><path d="m163.29 92-76.62-73.79a10.91 10.91 0 1 0 -14.81 16l.14.12 81.4 68.58a7.36 7.36 0 0 0 12.09-5.65 7.39 7.39 0 0 0 -2.2-5.26z" fill="url(#c)"/><path d="m165.5 97.29a7.35 7.35 0 0 0 -11.67-6l-92.71 45.3a15 15 0 1 0 15.48 25.59l85.73-58.84a7.35 7.35 0 0 0 3.17-6.05z" fill="url(#d)"/><path d="m60 60h60v60h-60z"/><g fill="#fff"><path d="m66.53 108.75h22.5v3.75h-22.5z"/><path d="m65.59 75.47 1.67-1.58a1.88 1.88 0 0 0 1.47.87c.64 0 1.06-.45 1.06-1.32v-5.92h2.58v5.94a3.44 3.44 0 0 1 -.92 2.63 3.52 3.52 0 0 1 -2.57 1 3.84 3.84 0 0 1 -3.29-1.62z"/><path d="m73.53 67.52h7.53v2.19h-5v1.43h4.49v2h-4.45v1.49h5v2.2h-7.6z"/><path d="m84.73 69.79h-2.8v-2.27h8.21v2.27h-2.81v7.09h-2.6z"/><path d="m66.63 80.58h4.42a3.47 3.47 0 0 1 2.55.83 2.09 2.09 0 0 1 .61 1.52 2.18 2.18 0 0 1 -1.45 2.09 2.27 2.27 0 0 1 1.86 2.29c0 1.69-1.31 2.69-3.55 2.69h-4.44zm5 2.89c0-.52-.42-.8-1.18-.8h-1.29v1.64h1.25c.78 0 1.24-.27 1.24-.81zm-.9 2.66h-1.57v1.73h1.62c.8 0 1.24-.31 1.24-.86-.02-.53-.4-.87-1.27-.87z"/><path d="m75.45 80.58h4.15a4.14 4.14 0 0 1 3.05 1 2.92 2.92 0 0 1 .83 2.18 3 3 0 0 1 -1.93 2.89l2.24 3.35h-3l-1.89-2.84h-.87v2.84h-2.6zm4 4.5c.87 0 1.4-.43 1.4-1.12 0-.75-.55-1.13-1.41-1.13h-1.39v2.27z"/><path d="m87.09 80.51h2.5l4 9.44h-2.79l-.67-1.69h-3.63l-.67 1.74h-2.71zm2.28 5.73-1.05-2.65-1.06 2.65z"/><path d="m94 80.55h2.6v9.37h-2.6z"/><path d="m97.56 80.55h2.44l3.37 5v-5h2.57v9.37h-2.27l-3.53-5.14v5.14h-2.58z"/><path d="m106.37 88.53 1.44-1.73a4.86 4.86 0 0 0 3 1.13c.71 0 1.08-.25 1.08-.65 0-.41-.3-.61-1.59-.91-2-.46-3.53-1-3.53-2.93 0-1.74 1.38-3 3.63-3a5.88 5.88 0 0 1 3.85 1.25l-1.25 1.78a4.56 4.56 0 0 0 -2.62-.92c-.63 0-.94.25-.94.6 0 .43.32.62 1.63.91 2.15.47 3.48 1.17 3.48 2.92 0 1.91-1.51 3-3.78 3a6.56 6.56 0 0 1 -4.4-1.45z"/></g><path d="m0 0h180v180h-180z" fill="none"/></svg>
</a>
`

export default defineConfig({
  // Providers configs
  github: {
    login: 'sundowndev',
    type: 'user',
  },
  opencollective: { },
  patreon: {},

  // Rendering configs
  width: 800,
  formats: ['json', 'svg', 'png'],
  tiers: [
    // Past sponsors, currently only supports GitHub
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    // Default tier
    {
      title: 'Backers',
      preset: presets.base,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 5,
      preset: presets.medium,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 50,
      preset: presets.large,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 100,
      preset: presets.xl,
    },
    {
      title: 'Supporters',
      monthlyDollars: Infinity,
      composeAfter(compose,_,config) {
        if (config.filter?.({ monthlyDollars: Infinity } as any, []) !== false) {
          compose
              .addSpan(20)
              .addText('Supported by', 'sponsorkit-tier-title')
              .addSpan(10)
              .addRaw(JETBRAINS_LOGO(config.width!, compose.height))
              .addSpan(130)
        }
      }
    },
  ],
})
