function scripts (file) {
    var script = document.createElement('script');
    script.src = file + '?v=' + Math.random();
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

function styles (file) {
    var link = document.createElement('link');
    link.href = file + '?v=' + Math.random();
    link.type = 'text/css';
    link.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(link);
}
