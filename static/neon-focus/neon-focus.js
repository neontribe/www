(function () {
  var BORDER_SIZE = 2
  var PARENT_EL_PROP = 'neonFocusBoardEl'
  var BORDER_EL_CLASS = 'neon-border-el'
  var colours = ['#54FCFD', '#9013FE', '#48E6B6', '#FB37F1', '#FDF958']
  var colourIndex = 0

  function makeBorderEl (colour) {
    var el = document.createElement('span')

    el.className = BORDER_EL_CLASS

    Object.assign(el.style, {
      position: 'absolute',
      border: `${BORDER_SIZE}px solid ${colour}`,
      boxShadow: `0 0 8px ${colour}`,
      display: 'none',
      pointerEvents: 'none'
    })

    return el
  }

  function ucFirst (s) {
    return s[0].toUpperCase() + s.slice(1)
  }

  function getOuterSizes (el) {
    var sizes = {}
    var computed = getComputedStyle(el)

    ;['top', 'right', 'bottom', 'left'].forEach(function (side) {
      sizes[side] = 0

      sizes[side] += parseInt(computed['margin' + ucFirst(side)], 10) || 0
      sizes[side] +=
        parseInt(computed['border' + ucFirst(side) + 'Width'], 10) || 0
    })

    return sizes
  }

  function updateDateBorderEl () {
    var borders = document.querySelectorAll('.' + BORDER_EL_CLASS)

    borders.forEach(function (el) {
      var parent = el[PARENT_EL_PROP]

      if (parent) {
        var sizes = getOuterSizes(parent)

        Object.assign(el.style, {
          top: -BORDER_SIZE + -sizes.top,
          right: -BORDER_SIZE + -sizes.right,
          bottom: -BORDER_SIZE + -sizes.bottom,
          left: -BORDER_SIZE + -sizes.left
        })
      }
    })
  }

  function applyBorder (el) {
    if (!el) {
      return
    }

    Object.assign(el.style, {
      position: 'relative'
    })

    var colour = colours[colourIndex++ % colours.length]
    var borderEl = makeBorderEl(colour)

    el.appendChild(borderEl)
    borderEl[PARENT_EL_PROP] = el

    // Use the props mentioned in data-syncprops to apply the colour changes
    function syncProps (syncEl) {
      var syncProps = syncEl.dataset.syncprops
        ? syncEl.dataset.syncprops.split(',')
        : []

      syncProps.forEach(function (prop) {
        syncEl.style[prop] = colour
      })
    }

    syncProps(el)
    var syncEls = el.querySelectorAll('[data-syncprops]')
    if (syncEls.length) {
      syncEls.forEach(syncProps)
    }
  }

  var focusable = document.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )

  focusable.forEach(function (el) {
    applyBorder(el)
  })

  updateDateBorderEl()
})()
