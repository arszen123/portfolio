# Portfolio APP in React

A simple SPA portfolio site in React, with Chakra UI.

An example firebase deployment can be found in the `live` branch, with a [live Demo](https://aliarsen.com).

Available pages:
- About
- Projects
- Resume

## Customization

### Theme

To change the primary color of the site, you can change the `primary` color in the [src/theme.ts](./src/theme.ts). You can find out more about the theme customization in the  [Chakra UI documentation](https://chakra-ui.com/docs/theming/customize-theme).

### Data

The displayed data on the site can be modified in the `src/resume.ts` file. See the example [src/resume.example.ts](src/resume.example.ts) for more information.

The meta tags and the website title can be modified through environment variables. See [.env.example](./.env.example) for the available variables.

## Before starting in development or deploying

1. Create an `src/resume.ts` file based on the [src/resume.example.ts](src/resume.example.ts) file.
1. Set the environment variables listed in the [.env.example](./.env.example) file.