//////// Main logic
//////// Create functions
function createPushpin(latitude, longitude, id, title, subTitle) {
    var loc = new Microsoft.Maps.Location(latitude, longitude);
    var pushpin = new Microsoft.Maps.Pushpin(loc, {color: 'deepskyblue'});
    var infobox = new Microsoft.Maps.Infobox(loc, {title: title, description: subTitle, visible: false});
    infobox.setMap(map);
    pushpin.pushID = id;

    Microsoft.Maps.Events.addHandler(pushpin, 'click', function () {
        infobox.setOptions({visible: true});
    });

    map.entities.push(pushpin);
};

function createPolyline(locArr, id) {
    var polyline = new Microsoft.Maps.Polyline(locArr, null);
    polyline.id = id;
    map.entities.push(polyline);
};

function createPolygon(locArr, id) {
    var polygon = new Microsoft.Maps.Polygon(locArr, null);
    polygon.id = id;
    map.entities.push(polygon);
};

function findById(id) {
    for (var i = map.entities.getLength() - 1; i >= 0; i--) {
        var curPin = map.entities.get(i);
        if (curPin.pushID == id) {
            return i;
        }
    }
    return false;
};

////// Test functions

function testCreatePushpin() {
    createPushpin(55, 86, 1, 'Title', 'Description and more more more more...');
};

function testCreatePolyline() {
    var t1 = new Microsoft.Maps.Location(54, 86);
    var t2 = new Microsoft.Maps.Location(54, 87);
    var test = [t1, t2];
    createPolyline(test, 2);
};

function testCreatePolygon() {
    var t1 = new Microsoft.Maps.Location(55, 86);
    var t2 = new Microsoft.Maps.Location(55, 87);
    var t3 = new Microsoft.Maps.Location(54, 87);
    var test = [t1, t2, t3];
    createPolygon(test, 3);
};