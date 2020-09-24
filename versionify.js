function scripts (file, placement = 'head', type = 'text/javascript') {
    var script = document.createElement('script');
    script.src = file + '?v=' + Math.random();
    script.type = type;
    script.defer = true;
    
    if (placement === 'head') {
        document.getElementsByTagName('head').item(0).appendChild(script);
    } esle if (placement === 'body') {
        document.getElementsByTagName('body').item(0).appendChild(script);
    }
}

function styles (file) {
    var link = document.createElement('link');
    link.href = file + '?v=' + Math.random();
    link.rel = 'stylesheet';
    link.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(link);
}
