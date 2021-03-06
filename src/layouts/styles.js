import { css } from "@emotion/core";

export const vars = css`
:root {
	--font-primary: sans-serif;
}
`;

export const typography = css`
:root {
    font-size: 62.5%;
    /* set base values */
    --text-base-size: 1.6em;
    --text-scale-ratio: 1.618;


    /* type scale */
    --text-xs: calc(1em / (var(--text-scale-ratio) * var(--text-scale-ratio)));
    --text-sm: calc(1em / var(--text-scale-ratio));
    --text-md: calc(1em * var(--text-scale-ratio));
    --text-lg: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio));
    --text-xl: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio));
    --text-xxl: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio));
    --text-xxxl: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio));

    @include respond-to(md) {
        // you can manage typography editing only these 2 variables
        --text-base-size: 2em;
    }
}

body {
    font-size: var(--text-base-size);
    font-family: var(--font-primary);
    line-height: var(--body-line-height);
    color: var(--color-text);
    background: black;
}

h1 {
    color: var(--color-text-heading);
}

h2 {
    color: var(--color-text-heading);

}

h3, h4, form legend {
    color: var(--color-text-heading);
    line-height: var(--heading-line-height);
}

/* text size */
.text--xxxl {
    font-size: var(--text-xxxl);
}

h1, .text--xxl {
    font-size: var(--text-xxl);
    line-height: calc(var(--baseline)*4);
}

h2, .text--xl {
    font-size: var(--text-xl);
    line-height: var(--space-xl);
}

h3, .text--lg {
    font-size: var(--text-lg);
    line-height: var(--heading-line-height);
}

h4, .text--md {
    font-size: var(--text-md);
    line-height: var(--heading-line-height);
}

.text--sm, small {
    font-size: var(--text-sm);
}

.text--xs {
    font-size: var(--text-xs);
}

p {
    line-height: var(--body-line-height);
}

a {
    color: var(--color-link);

    &:visited {
        color: var(--color-link-visited);
    }
}

ul li,
ol li {
    line-height: var(--body-line-height);
}

`;

export const spacing = css`
:root {
    --baseline: 24px;

    /* spacing values */
    --space-sm:   calc(var(--baseline)/2);
    --space-md:   var(--baseline);
    --space-lg:   calc(var(--baseline)*2);
    --space-xl:   calc(var(--baseline)*3);

    --body-line-height: var(--space-md);
    --heading-line-height: var(--space-lg);

    --heading-space: var(--space-md)
}

h1, .spacing--lg {
  --heading-space: var(--space-md);
  margin: var(--heading-space) 0;
}

h2, h3, h4, .spacing--md {
  margin: var(--heading-space) 0;
}

ul {
    margin: 0 0 var(--space-md);
    padding: 0 0 0 var(--space-md);
}

p {
  margin: var(--space-md) 0;
}
`;

export const colors = `
// #EA3556
// #ED146F
// #9BF0E9
// #61D2D6
// #EDE5E2
// #EDDE45

:root {
    /* main colors */
    --color-primary: #4D84F4;
    --color-primary-light: color-mod(var(--color-primary) tint(15%));
    --color-primary-dark: color-mod(var(--color-primary) shade(15%));
    --color-primary-bg: color-mod(var(--color-primary) alpha(20%));

    --color-accent: #f5414f;
    --color-accent-light: color-mod(var(--color-accent) tint(15%));
    --color-accent-dark: color-mod(var(--color-accent) shade(10%));
    --color-accent-bg: color-mod(var(--color-accent) alpha(20%));

    // shades - generated using chroma.js - 12 steps
    --black: black;
    --gray-10: #2e2e31;
    --gray-6: #7b7a7d;
    --gray-4: #a5a5a6;
    --gray-3: #bbbbbc;
    --gray-2: #d1d0d2;
    --gray-1: #e8e7e8;
    --white: white;

    /* feedback */
    --color-success: #88c459;
    --color-error: #f5414f;
    --color-warning: #ffd137;

    /* typography */
    --color-text: white;
    --color-text-heading: var(--gray-6);
    --color-text-subtle: var(--gray-6);
    --color-link: var(--color-primary);
    --color-link-visited: var(--color-primary-dark);
    --color-mark: var(--color-accent-bg);
    --color-blockquote-border: var(--gray-2);

    /* border */
    --color-border: var(--gray-2);

    /* body */
    --color-body: var(--white);

    /* forms */
    --form-element-border: var(--color-border);
    --form-element-border-focus: var(--color-primary);
    --form-element-border-error: var(--color-error);
    --form-element-bg: var(--white);
    --form-text-placeholder: var(--gray-4);

    /* buttons */
    --btn-primary-bg: var(--color-primary);
    --btn-primary-hover: var(--color-primary-light);
    --btn-primary-active: var(--color-primary-dark);
    --btn-primary-label: var(--white);

    /* icons */
    --color-icon-primary: var(--gray-4);
    --color-icon-secondary: inherit;
}
`;
