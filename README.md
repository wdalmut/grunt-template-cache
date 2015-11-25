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

This will generate something like:

```json
{
  "path/to/home.html": "<p>{{ value }}</p>",
  //...
}
```

If you have a source or dist folder (or any other parent folder) that you want
to filter out you can use the `regex_path_filter`

```js
  "html": {
    "glob": "src/views/**/*.html",
    "dest": "templates.json",
    "regex_path_filter": /^src\//i
  },
},
```

and any `src/path/to/file.html` will be  `path/to/file.html`

## Run it

```sh
grunt template-cache:html
```

