# CSS Animation

Animations can be created with transitions and keyframes.

## Transition Example
```css
.button {
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: blue;
}
```

## Keyframes Example
```css
@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}

.box {
  animation: slide 2s infinite alternate;
}
```
