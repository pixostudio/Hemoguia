jQuery(document).bind("mobileinit", function() {
    $nombre = device.name;
    $cordova = device.cordova;
    $sistoper = device.platform;
    $direccion = device.uuid;
    $version = device.version;
    $('#propiedades').append('<ul><li>'+$nombre+'</li><li>'+$cordova+'</li><li>'+$sistoper+'</li><li>'+$direccion+'</li><li>'+$version+'</li></ul>');
});