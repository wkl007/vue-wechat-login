import type { App } from 'vue'
import { Button, Cell, CellGroup } from 'vant'

/**
 * vant 配置
 * @param app
 */
export function setupVant (app: App<Element>): void {
  app
    .use(Button)
    .use(Cell)
    .use(CellGroup)
}
