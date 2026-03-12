import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp?.(ctx)

    if (typeof window !== 'undefined') {
      const anyWindow = window as any

      const ensureTopRightSearch = () => {
        const path = window.location.pathname
        const isHome = path === '/' || path === '/byte-skill/'
        if (isHome) return

        let el = document.getElementById('bt-search-top-right') as HTMLElement | null
        if (!el) {
          el = document.createElement('div')
          el.id = 'bt-search-top-right'
          el.setAttribute('data-bytetech-search', '')
          el.style.position = 'fixed'
          el.style.top = '16px'
          el.style.right = '16px'
          el.style.zIndex = '999'
          el.style.maxWidth = '320px'
          el.style.minWidth = '220px'
          el.style.padding = '8px 14px'
          el.style.borderRadius = '999px'
          el.style.background = 'rgba(15, 23, 42, 0.94)'
          el.style.boxShadow = '0 14px 35px rgba(15, 23, 42, 0.65)'
          el.style.border = '1px solid rgba(148, 163, 184, 0.6)'
          document.body.appendChild(el)
        }
      }

      const initPagefind = () => {
        if (!anyWindow.PagefindUI) return

        const containers = document.querySelectorAll<HTMLElement>('[data-bytetech-search]')
        containers.forEach((el) => {
          const anyEl = el as any
          if (anyEl._pagefindInited) return

          new anyWindow.PagefindUI({
            element: el,
            showSubResults: true
          })

          anyEl._pagefindInited = true

          const trigger = el.querySelector<HTMLElement>('[data-bytetech-search-trigger]')
          if (trigger) {
            trigger.addEventListener('click', () => {
              const input = el.querySelector<HTMLInputElement>('input[type="search"], input')
              input?.focus()
            })
          }
        })
      }

      const handleRouteChanged = () => {
        ensureTopRightSearch()
        setTimeout(initPagefind, 0)
      }

      ctx.router.onAfterRouteChanged?.(() => {
        handleRouteChanged()
      })

      window.addEventListener('DOMContentLoaded', () => {
        handleRouteChanged()
      })
    }
  }
}

export default theme
