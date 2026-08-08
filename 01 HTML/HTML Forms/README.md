# HTML Forms

This lesson focuses on form controls and input elements.

## 1. Textbox and Input Basics
```html
<input type="text" placeholder="Enter name" />
<input type="text" value="Default value" />
<input type="text" readonly />
<input type="text" disabled />
<input type="text" maxlength="10" minlength="3" autofocus />
```

## 2. Password, Search, Email, URL, and Number
```html
<input type="password" />
<input type="search" />
<input type="email" multiple />
<input type="url" />
<input type="number" min="1" max="10" step="1" />
```

## 3. Date, Time, Month, Week, and Color
```html
<input type="date" />
<input type="month" />
<input type="week" />
<input type="time" />
<input type="datetime-local" />
<input type="color" />
```

## 4. Buttons, Radio, Checkbox, and Dropdown
```html
<input type="button" value="Click" />
<button>Button Tag</button>
<input type="radio" name="gender" /> Male
<input type="checkbox" checked /> Accept
<select>
  <option>One</option>
  <option>Two</option>
</select>
```

## 5. Fieldset, Output, Progress, Meter, and Range
```html
<fieldset>
  <legend>Details</legend>
  <output>Result</output>
</fieldset>
<progress value="70" max="100"></progress>
<meter value="60" min="0" max="100" high="80"></meter>
<input type="range" min="0" max="100" />
```

## 6. Textarea and Pattern Attribute
```html
<textarea rows="4" cols="30" pattern="[A-Za-z]{3}"></textarea>
```
