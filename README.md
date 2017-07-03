# Hooli Search



## Data set

`dataset` contains an array with entries shaped like this

```
  [{
    "title" : "JavaScript Tutorial - W3Schools",
    "url" : "https://www.w3schools.com/js/",
    "short_description" : "JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn.",
    "content" : "JavaScript Tutorial\n\nJavaScript is the programming language of HTML and the Web.\n\nJavaScript is easy to learn..."
  }, ...]
```


score is based on occurrences in "content" field
  - search terms are case insensitive
  - occurrences are not space delimitted.
  - "cat" is a match in "mousecatdog"
matches in the "short_description" field is worth 1x a score in "content" field
matches in the "title" field is worth 2x a score in "content" field

