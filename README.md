# a-small-polling
## Description
It's a light-weight JavaScript Polling library.
## Usage
1. link [Polling library](https://github.com/GSANDLY/a-small-polling/blob/master/polling.js) into your HTML file.

  ```JavaScript
  <script type="text/javascript" src="polling.js"></script>
  ```
2. call method in HTML file.

  ```javascript
  polling(
    document.querySelectorAll("div")[1], 
    {
      "interval": 2000
    }, 
    [
      "10.jpeg",
      "11.jpeg",
      "12.jpeg", 
      "13.jpeg", 
      "14.jpeg"
    ]
  );
  ```
**polling(param1, param2, param3)**
* **`param1`**
container where polling is placed and shown.
* **`param2`**
polling show configuration. `width` `height` `interval`
* **`param3`**
Array. image urls.
