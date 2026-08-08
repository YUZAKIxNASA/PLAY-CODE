# CSS Grid

Grid is useful for two-dimensional layouts.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```

## Grid Rows and Areas
```css
.layout {
  display: grid;
  grid-template-rows: 100px 1fr 100px;
  grid-template-columns: 200px 1fr;
}
```
