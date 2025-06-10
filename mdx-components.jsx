import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs';
// Placeholder for actual Logo component if used in MDX, otherwise remove
// import Logo from './components/logo';

const docsComponents = getDocsMDXComponents();

export function useMDXComponents(components) {
  return {
    ...docsComponents,
    // Example of adding a custom component:
    // MyCustomComponent: () => <div>Hello from MDX!</div>,
    // Logo, // If you have a global Logo component for MDX
    ...components,
  };
}
