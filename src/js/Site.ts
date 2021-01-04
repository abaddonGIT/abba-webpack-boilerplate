import { FANCYBOX_SELECTOR } from './constants'

class Site {
  constructor() {}

  public init = (): void => {
    ;(<any>$(FANCYBOX_SELECTOR)).fancybox()
  }
}

export default Site
