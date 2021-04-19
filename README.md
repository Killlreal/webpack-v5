# Webpack 5

Everything works on Windows and  Node v12.18.02 

## Stylelint

This webpack build includes stylelint. If you want to create you own stylelint config you can use [Stylelint Config Generator](https://maximgatilin.github.io/stylelint-config/).



Also if you don't want to fix your scss/css/less code everytime you can add these settings in your IDE, that you css code will auto rebuild. Use this way .vscode/settings.json:

```
{
  "scss.validate": false,
  "css.validate": false,
  "less.validate": false,

   "editor.codeActionsOnSave": {
     "source.fixAll.stylelint": true
   },
}
```
Also you need to install [Stylelint plugin](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) in your IDE to see  underline errors in real time.

Now you can press CTRL + S and your css code will rebuild:

![stylelint](./src/assets/img/stylelint.gif)

If you want to see more information abot stylelint visit this [article](https://bzvyagintsev.ru/blog/stylelint/).

