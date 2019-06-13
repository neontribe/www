// SIZE contstants
export const REM_PX = 16
export const PAGE_WIDTH_PX = 960
export const GUTTER_PX = 30
export const PAGE_WIDTH_REM = PAGE_WIDTH_PX / REM_PX

// ---------- COLOUR -----------
const COLOUR_NEON_PINK = '#fb37f1'
const COLOUR_NEON_PURPLE = '#9013fe'
const COLOUR_NEON_BLUE = '#54fcfd'
const COLOUR_NEON_YELLOW = '#fdf958'
const COLOUR_NEON_GREEN = '#48e6b6'
const COLOUR_BLACK = '#131313'
const COLOUR_WHITE = '#fff'

// Neons, shouldn't be used with some kind of randomisation, so only export an array
export const COLOUR_NEONS = [
  COLOUR_NEON_PINK,
  COLOUR_NEON_PURPLE,
  COLOUR_NEON_BLUE,
  COLOUR_NEON_YELLOW,
  COLOUR_NEON_GREEN,
]

// Text + background colour combinations
// PRIMARY
export const COLOUR_PRIMARY_TEXT = COLOUR_WHITE
export const COLOUR_PRIMARY_BACKGROUND = '#1f1e1f'
export const COLOUR_PRIMARY_BACKGROUND_ALTERNATIVE = COLOUR_BLACK
// Secondary
export const COLOUR_SECONDARY_TEXT = COLOUR_BLACK
export const COLOUR_SECONDARY_BACKGROUND = COLOUR_WHITE

// UI
export const COLOUR_CALL_TO_ACTION = COLOUR_NEON_PURPLE
