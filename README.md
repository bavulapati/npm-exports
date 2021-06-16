# Sample project to experiment with npm exports
The project demonstrates the capability of exposing public interface using exports attribute of package.json.  
This project defines an npm package `sample` with two module  
1. module1  
2. module2  

The package `sample` is installed as a dependency to the main project. And the javascript file `src/index.js` imports both modules to use.  
This index file will be used by the HTML file.  

## Steps to perform
1. Install npm packages `npm i`  
2. Bundle the source files `npx webpack`
3. Check the output of webpack. We would see the error `Module not found`
4. Add `"./module2" : "./module2.js"` to exports of `sample` package.json
5. Bundle the source files `npx webpack`  
6. Open the HTML `dist/index.html` file with browser.
7. The browser would display `hello world!`

Using the `exports` attribute of `package.json`, module1 is exposed but not the module2.  
The `exports` property is introduced in `npm v7`. Webpack also supports the exports attribute.  
