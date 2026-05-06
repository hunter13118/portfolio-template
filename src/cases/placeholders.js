// Generate colored placeholder data URIs for each layout variant
// Colors match the Figma mockup: pink, yellow, blue, cyan, green

const colors = ['#E8A0BF', '#F2D388', '#7FB5D5', '#7ECEC1', '#A8D5A2'];

function createPlaceholder(color, label = '') {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800">
    <rect width="800" height="800" fill="${color}"/>
    ${label ? `<text x="400" y="410" text-anchor="middle" font-family="sans-serif" font-size="32" fill="rgba(0,0,0,0.3)">${label}</text>` : ''}
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export function getPlaceholders(variantIndex) {
  const color = colors[variantIndex % colors.length];
  return {
    img1: createPlaceholder(color),
    img2: createPlaceholder(color),
    img3: createPlaceholder(color),
  };
}

export default colors;
