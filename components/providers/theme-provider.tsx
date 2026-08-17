"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes"

/**
 * Routes served by app/(landing) — marketing pages are always light, regardless
 * of the visitor's stored or system preference.
 */
const LIGHT_ONLY_ROUTES = ["/"]

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const pathname = usePathname()
  const forcedTheme = LIGHT_ONLY_ROUTES.includes(pathname) ? "light" : undefined

  return (
    <NextThemesProvider {...props} forcedTheme={forcedTheme}>
      {children}
    </NextThemesProvider>
  )
}
