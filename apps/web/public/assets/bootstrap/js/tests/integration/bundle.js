import { Tooltip } from '../../../dist/js/bootstrap.esm.js'

window.addEventListener('load', () => {
  document.querySelectorAll('[data-bs-toggle="tooltip"]').flat()
    .map(tooltipNode => new Tooltip(tooltipNode))
})
