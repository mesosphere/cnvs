CNVS (pronounced "Canvas") is a system of user interface elements and components built for use across Mesosphere sites and products. CNVS defines stylistic guidelines for the design and structure of digital interfaces in an effort to ensure consistency in brand and interaction. For reference and user guidelines, check out [mesosphere.github.io/cnvs](http://mesosphere.github.io/cnvs/).

# Getting Started

CNVS is available both as a standalone directory and as a [Node Module](https://www.npmjs.com/package/cnvs).  There are a couple ways to get started:

* Clone the repository: `git clone https://github.com/mesosphere/cnvs.git`
* Install with [npm](https://www.npmjs.com/): `npm install cnvs`

# Project Structure

Within the download or check-out you'll find the following directories and files:

```
dist/
docs/
styles/
```

The `dist/` directory contains both compiled and minified variations of the CNVS stylesheet.  CSS source maps (`cnvs.*.map`) are available for both both the compiled and minified stylesheets and can with certain browsers' developer tools.

```
dist/
├──  cnvs.css
├──  cnvs.css.map
├──  cnvs.min.css
├──  cnvs.min.css.map
```

## CNVS Styles Structure

The CNVS project structure is fairly simple, but it requires a basic understanding of how things are work together to provide value to your project.  Within the `/styles` directory you'll find a handful of top-level directories.  The basic structure looks like this:

```
components/
├── badge
├── button
├── ...
contents/
├── code
├── color
├── ...
layout/
├── container
├── divider
├── ...
utilities/
cnvs.less
```

The `cnvs.less` file sitting in the root directory is your main project file in which all project `.less` files are imported.  When including in your project and compiling, the `cnvs.less` file is what you should point your LESS compiler at.

**TIP:** For more info on LESS css pre-processor, including Getting Started and Compilation Guides, check out: [lesscss.org](http://lesscss.org/)

The contents of all 4 top-level directories are all included by default, but certain components can be enabled or disabled using cnvs-defined variables.  Whenever possible, avoid modifying `cnvs.less` or any of it's files/directories directly.  Instead create overrides in your specific project as needed.  The content of the 4 top-level directories is defined as follows:

* `components/`: style definitions for unique and reusable components such as buttons, forms, and panels.  It is assumed that most if not all of these components could be easily enabled/disabled as desired by the user.
* `contents/`: style definitions for unique and reusable components such as code, tables, and typography.
* `layout/`: style definitions for layout, particularly as it relates to margins, sections, grid system, and responsive layout changes.
* `utilities/`: mixins and other practical tools for use in CNVS and your project. `normalize.less` is the only file that directly generates styles.  All mixins generate styles only when invoked directly by another stylesheet.
 `variables-config.less` is unique in that it serves as a top-level configuration to enable and disabled components.

# Documentation

Documentation for CNVS can be found in the `docs/` directory.  The Documentation is built with Jekyll and hosted on GitHub Pages at http://mesosphere.github.com/cnvs. The docs may also be run locally.

## Running Documentation Locally

A Gulp file containing a number of useful functions is available at the root of the project.  There are a number of helpful commands that make building CNVS and CNVS Documentation simple.  The easiest way to build CNVS and serve the supporting Documentation locally is to follow these steps:

1. Open your terminal and navigate to the root directory of your checkout or download.
2. Install the required npm modules: `npm install` (**NOTE:** If you do not already have npm installed, follow [these installation instructions](https://docs.npmjs.com/getting-started/installing-node))
3. Run `npm start` (**NOTE:** If you do not already have Jekyll installed, follow [these installation instructions](https://jekyllrb.com/))

## Publishing Documentation

CNVS Documentation is hosted on GitHub Pages at http://mesosphere.github.com/cnvs.  The branch `gh-pages` houses the compiled Documentation site files and assets.  Once you have made needed changes/contributions to the Documentation and are ready to publish, follow these simple steps.

1. Make sure you have the necessary permissions to push to `gh-pages`.  If you do not, please submit a pull request or contact an administrator.
2. Checkout `master`, `develop`, or whatever branch has the docs build you wish to promote.
3. Run `npm run docs-dist`.  This will compile/process everything and place production ready files in `docs/_site`.
5. From within the root of your local branch run `git subtree push --prefix docs/_site origin gh-pages`.
