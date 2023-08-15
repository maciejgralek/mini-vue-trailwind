let card = {
  shape: {
    rounded: `
      rounded-md
    `,
    square: `
      rounded-none 
    `,
    roundedExtra: `
      rounded-xl
    `
  },
  shadow: {
    medium: `
      shadow-md
      dark:shadow-lg
      dark:shadow-black/30
    `
  },
  border: {
    default: `
      border
    `,
    borderless: `
      border-0
    `
  },
  variant: {
    default: `
      dark:text-text-300
      bg-white
      dark:bg-dark-800
      border-secondary-200
      dark:border-dark-700
    `,
    transparent: `
      bg-transparent
      dark:bg-transparent
      dark:bg-dark-800
      border-secondary-200
      dark:border-dark-700
    `
  },
  effect: {
    optional: true,
    hoverable: `
      hover:shadow-lg
      transition-all
      hover:scale-105
    `
  },
  preset: {
    selectMenu: () => `
      ${card.shape.rounded}
      ${card.shadow.medium}
      ${card.border.borderless}
      ${card.variant.default}
    `,
    flatDropdown: () => `
      ${card.shape.square}
      ${card.shadow.medium}
      ${card.border.borderless}
      ${card.variant.default}
    `,
  }
}

export default {
  card
}