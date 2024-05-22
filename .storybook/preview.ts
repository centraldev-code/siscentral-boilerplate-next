import type { Preview } from '@storybook/react'
import '../src/app/globals.css'
import { withThemeByDataAttribute } from '@storybook/addon-themes'

/* snipped for brevity */

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark'
    },
    defaultTheme: 'light',
    attributeName: 'data-mode'
  })
]

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
