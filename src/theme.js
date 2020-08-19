// SIZE contstants
const PAGE_WIDTH_PX = 1020

export const REM_PX = 16
export const GUTTER_PX = 10
export const PAGE_WIDTH_REM = `${PAGE_WIDTH_PX / REM_PX}rem`

export const SOCIAL_ICON_SIZE = REM_PX * 1.4

// ------ Media Queries (px taken from antd) -------
// Media queries breakpoints in em
// Extra small screen / phone
const MQ_XS_PX = 480
const MQ_XS_MIN = MQ_XS_PX / REM_PX

// Small screen / tablet
const MQ_SM_PX = 576
const MQ_SM_MIN = MQ_SM_PX / REM_PX

// Medium screen / desktop
const MQ_MD_PX = 768
const MQ_MD_MIN = MQ_MD_PX / REM_PX

// Large screen / wide desktop
const MQ_LG_PX = 992
const MQ_LG_MIN = MQ_LG_PX / REM_PX

// Extra large screen / full hd
const MQ_XL_PX = 1200
const MQ_XL_MIN = MQ_XL_PX / REM_PX

// Extra extra large screen / large desktop
const MQ_XXL_PX = 1600
const MQ_XXL_MIN = MQ_XXL_PX / REM_PX

export const breakpoint = size => {
  switch (size) {
    case 'xs':
      return `min-width: ${MQ_XS_MIN}em`
    case 'sm':
      return `min-width: ${MQ_SM_MIN}em`
    case 'md':
      return `min-width: ${MQ_MD_MIN}em`
    case 'lg':
      return `min-width: ${MQ_LG_MIN}em`
    case 'xl':
      return `min-width: ${MQ_XL_MIN}em`
    case 'xxl':
      return `min-width: ${MQ_XXL_MIN}em`
    default:
      throw new Error(`unknown ${size}`)
  }
}

// ---------- COLOUR -----------
const c_NEON_PINK = '#ff37ab'
const c_NEON_PURPLE = '#5600ee'
const c_BLACK = '#000'
const c_WHITE = '#fff'

// Text + background colours
export const c_TEXT_LIGHT = c_WHITE
export const c_TEXT_DARK = c_BLACK

export const c_PRIMARY_BACKGROUND = c_BLACK
export const c_COOKIE_BACKGROUND = c_WHITE
export const c_SECONDARY_BACKGROUND = c_WHITE

// UI
export const c_CALL_TO_ACTION = c_NEON_PURPLE
export const c_CALL_TO_ACTION_HOVER = '#620aff'
export const c_NAV_ACTIVE = c_NEON_PINK

// Typography
export const FONT_PRIMARY = 'Muli, sans-serif'
export const FONT_SECONDARY = 'KeepCalm, sans-serif'

export const fontSizes = {
  small: '0.85rem',
  normal: '1rem',
  medium: '1.25rem',
  large: '1.5rem',
}
