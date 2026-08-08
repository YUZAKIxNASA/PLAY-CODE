# CSS Basics

CSS controls the look and layout of HTML elements.

## 1. Inline, Embedded, and External Styles
```html
<p style="color: blue;">Inline style</p>
<style>
  .box { color: green; }
</style>
<link rel="stylesheet" href="style.css" />
```

## 2. Selectors
```css
p { color: red; }
#main { background: yellow; }
.box { padding: 10px; }
```

## 3. Text and Background Color
```css
body {
  color: #333;
  background-color: #f5f5f5;
}
```

## 4. Font and Text Properties
```css
h1 {
  font-family: Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 1px;
}
```

## 5. Box Model
```css
.card {
  margin: 10px;
  padding: 20px;
  border: 2px solid #000;
  width: 200px;
  height: 100px;
}
```
