# Cache mustachejs templates

Just a simple grunt file that will save mustachejs templates into a json file.

## Add this task

```js
grunt.loadNpmTasks('grunt-template-cache');
```

## Configuration

```js
"template-cache": {
  "html": {
    "glob": "views/**/*.html",
    "dest": "templates.json",
  },
},
```

## Run it

```sh
grunt template-cache:html
```

