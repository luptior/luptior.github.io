# Website

Website Demo: [Gan Xu Science](https://ganxu.science)

This is a personal website based on style sheets of [*minimal*](https://github.com/pages-themes/minimal). It is purely based on HTML/CSS with TypeScript compiled to JavaScript.

## Development

### Prerequisites
- Node.js (v16 or higher)
- npm

### Setup
```bash
npm install
```

### Build TypeScript
```bash
npm run build
```

This compiles TypeScript files from `src/` to the appropriate JavaScript directories.

### Watch Mode
For development, you can use watch mode to automatically recompile on changes:
```bash
npm run watch
```

## Project Structure

- `src/` - TypeScript source files
  - `scale.fix.ts` - iOS viewport scaling fix
  - `head_footer_loader.ts` - Header/footer loader using Fetch API
  - `chore_door/script.ts` - Chore Door game logic
- `javascripts/` - Compiled JavaScript files (generated)
- `projects/` - Project pages and assets
- `resources/` - Static resources (images, PDFs, etc.)

## Deployment

The compiled JavaScript files are committed to the repository for GitHub Pages deployment. Make sure to run `npm run build` before committing changes to TypeScript files.