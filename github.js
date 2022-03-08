fetch('https://api.github.com/repos/inhyeok-kim/inhyeok-kim.github.io/contents/blog?ref=master')
.then(response=>response.json())
.then(data => console.log(data));