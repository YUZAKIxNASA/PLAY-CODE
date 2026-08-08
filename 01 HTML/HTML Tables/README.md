# HTML Tables

Tables are used to organize data in rows and columns.

```html
<table border="1" width="100%" height="120px" cellspacing="5" cellpadding="8">
  <caption>Student List</caption>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Ali</td>
    <td>20</td>
  </tr>
</table>
```

## Colspan and Rowspan
```html
<table border="1">
  <tr>
    <th colspan="2">Header</th>
  </tr>
  <tr>
    <td rowspan="2">Cell</td>
    <td>Value</td>
  </tr>
</table>
```
