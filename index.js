function scripts (file) {
    var script = document.createElement('script');
    script.src = file + '?v=' + Math.random();
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}
scripts('bundle.js');