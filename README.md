# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

**for Routing:**
Used use route the main app will be wrapped inside the browser route of main.jsx page

# Header 

header name styling with sass used nested properties,@import

# footer 

footer name styling with sass used nested properties,@import 

# Sass

we can variable structure to define the css values
we can use nested properties 
## Example:
font: {
  family: Helvetica, sans-serif;
  size: 18px;
  weight: bold;
}

we can use @import when we use certain css the we use repetative for DRY code (dont repeat yourself)

## Important Note that can used:
Sass Partials
By default, Sass transpiles all the .scss files directly. However, when you want to import a file, you do not need the file to be transpiled directly.

Sass has a mechanism for this: If you start the filename with an underscore, Sass will not transpile it. Files named this way are called partials in Sass.

So, a partial Sass file is named with a leading underscore:

Sass Partial Syntax:

 _filename;

Example
"_colors.scss":

$myPink: #EE82EE;
$myBlue: #4169E1;
$myGreen: #8FBC8F;

Now, if you import the partial file, omit the underscore. Sass understands that it should import the file "_colors.scss":

Example
@import "colors";

body {
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  color: $myBlue;
  }
