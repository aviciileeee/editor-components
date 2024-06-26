import LText from './LText.vue'
import type { App } from 'vue'

LText.install = (app: App) =>  {
  app.component(LText.name!, LText)
}

export default LText