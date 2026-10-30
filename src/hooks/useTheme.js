import { useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'

function getPreferredTheme() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function initTheme() {
  const theme = getPreferredTheme()
  document.documentElement.dataset.theme = theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    'content',
    theme === 'light' ? '#f8f6ff' : '#07070a',
  )
}

export function useTheme() {
  const [theme, setThemeState] = useState(() =>
    document.documentElement.dataset.theme || getPreferredTheme(),
  )

  const setTheme = (next) => {
    document.documentElement.dataset.theme = next
    localStorage.setItem(STORAGE_KEY, next)
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      next === 'light' ? '#f8f6ff' : '#07070a',
    )
    setThemeState(next)
  }

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return { theme, toggleTheme }
}
