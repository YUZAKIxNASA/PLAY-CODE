# CSS Selectors

Selectors are used to target HTML elements.

## Basic Selectors
```css
p { color: red; }
#idName { color: blue; }
.className { color: green; }
```

## Grouping and Combinators
```css
h1, h2, h3 { font-family: Arial; }

div p { color: purple; }
div > p { color: orange; }
div + p { margin-top: 10px; }
```

## Attribute Selectors
```css
input[type="text"] { border: 1px solid gray; }
a[href^="https"] { color: green; }
```

## Pseudo-classes and Pseudo-elements
```css
a:hover { color: red; }
p::first-letter { font-size: 1.5em; }
input:focus { outline: 2px solid blue; }
```
