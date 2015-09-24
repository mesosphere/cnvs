# Canvas Documentation

The documentation for Canvas runs on Jekyll and is configured specifically for use on Github's Pages platform.  For instructions on installing Jekyll locally as well as how to setup and configure for development locally continue reading.  For general documentation on the Canvas project, please reference the master branch of this repository located at: [https://github.com/mesosphere/canvas](https://github.com/mesosphere/canvas).

## Local Setup

##### 1. Install Ruby
Jekyll requires the Ruby language. If you have a Mac, you've most likely already got Ruby. If you open up the Terminal application, and run the command `ruby --version` you can confirm this. Your Ruby version should begin with 1.9.3 or 2.0.0. If you've got that, you're all set. Skip to step #2. Otherwise, follow these instructions to install Ruby.

##### 2. Install RubyGems
RubyGems is a package management framework for Ruby. Download the latest version here: [https://rubygems.org/pages/download](https://rubygems.org/pages/download)

##### 3. Install Bundler
Bundler is a package manager that makes versioning Ruby software like Jekyll a lot easier if you're going to be building locally. If you don't already have Bundler installed, you can install it by running the following command:
```
gem install bundler
```

##### 4. Install Gems
Add the default gems from the root of the projects.  We're using the `github-pages` gem for this page.  Simply run the following command to install:
```
cd /path/to/project
bundle install
```

##### 5. Run Jekyll
To run Jekyll in a way that matches the GitHub Pages build server, run Jekyll with Bundler.
```
cd /path/to/project
bundle exec jekyll serve
```

##### 6. Enjoy!
If you've completed the steps above successfully, you should be good to go. Jump to `http://localhost:4000/canvas` to view the site in your browser.
