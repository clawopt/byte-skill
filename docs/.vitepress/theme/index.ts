import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp?.(ctx)

    if (typeof window !== 'undefined') {
      const initPagefind = () => {
        const anyWindow = window as any
        if (anyWindow.PagefindUI && document.querySelector('#search')) {
          new anyWindow.PagefindUI({
            element: '#search',
            showSubResults: true
          })
        }
      }

      ctx.router.onAfterRouteChanged?.(() => {
        setTimeout(initPagefind, 0)
      })

      window.addEventListener('DOMContentLoaded', initPagefind)
    }
  }
}

export default theme
