let input = {

  /* element */

  input: {
    classes: `
      rounded
      border
      focus:outline-none
      outline-none
    `,
    variant: {
      classes: `
        bg-white
        dark:bg-dark-800
      `,
      default: `
        dark:text-text-300
        border-secondary-300
        focus-within:border-secondary-400
        dark:border-dark-600
        focus-within:ring-primary-200
        dark:focus-within:ring-primary-300
      `,
      valid: `
        text-success-600
        dark:text-success-600
        border-success-300
        dark:border-success-400
        focus-within:ring-success-200
        dark:focus-within:ring-success-300
      `,
      invalid: `
        text-danger-600
        dark:text-danger-600
        border-danger-300
        dark:border-danger-400
        focus-within:ring-danger-200
        dark:focus-within:ring-danger-300
      `
    },
    effect: {
      ring: `
        focus-within:ring
        transition-shadow
        duration-200
      `
    }
  },

  /* element */

  icon: {
    classes: `
      w-6
      h-6
    `,
    variant: {
      default: `
        text-text-400
        dark:text-gray-400
      `,
      valid: `
        text-success-500
        dark:text-success-400
      `,
      invalid: `
        text-danger-500
        dark:text-danger-400
      `
    }
  },

  /* element */

  closeButtonWrapper: {
    effect: {
      optional: true,
      showOnHover: `
        invisible
        group-hover:visible
      `
    }
  },

  /* element */

  label: {
    classes: `
      text-sm
      pb-1
    `
  }
}

let underlinedInput = {
  input: {
    classes: `
      border-0 
      border-b-2 
      focus-within:ring-0 
      px-0.5
      bg-transparent
    `,
    variant: {
      default: `
        border-secondary-400
        dark:text-dark-300
        dark:border-dark-500;
      `,
      valid: `
        text-success-600
        border-success-300
        focus-within:ring-success-200
        dark:text-success-600
        dark:border-success-400
        dark:focus-within:ring-success-300
      `,
      invalid: `
        text-danger-600
        border-danger-300
        focus-within:ring-danger-200
        dark:text-danger-600
        dark:border-danger-400
        dark:focus-within:ring-danger-300
      `
    }
  },
  icon: {
    classes: `
      w-6
      h-6
    `,
    variant: {
      default: `
        text-text-400
        dark:text-gray-400;
      `,
      valid: `
        text-success-400
        dark:text-success-400
      `,
      invalid: `
        text-danger-400
        dark:text-danger-400
      `
    }
  },
  closeButtonWrapper: {
    classes: `

    `
  },
  label: {
    classes: `
      text-sm
      pb-1
    `
  }
}

export default {
  input,
  underlinedInput
}
