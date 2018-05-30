import _merge from 'lodash/merge'

import BASE from '../../../config/cfg.base.json'
import DEV from '../../../config/cfg.dev.json'
import PROD from '../../../config/cfg.prod.json'

const IS_PROD = process.env.NODE_ENV === 'production'

const CFG = _merge({IS_PROD}, BASE, IS_PROD ? PROD : DEV)

export default CFG