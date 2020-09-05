# Versionify
Simply script to create random versions for your script and css files to avoid your browser cacheing your changes during development.

# Reason
I run into the issue on both Chrome and Safari that when running something like http-server to develop webpages with CSS and JS, the browser caches my files and does not update changes when I make them. There is a way with both browsers to stop this, but I never found a great way to really do this. My soultion was the create a new version of the files everytime the files were opened. This forces the browser to load the new version of the file.

# Usage
<p>Use something like raw.githack to create a raw link to the index.js file of versionify and add it to the head of your document.</p>

```<script type="text/javascript" src="https://raw.githack.com/nickgraffis/versionify/master/index.js"></script>``` 

<p>Then just below call a function for each of the JS files you'd like randomly versionified</p>

  ```javascript
  <script>
    script('your-js-file.js');
  </script
  ``` 
