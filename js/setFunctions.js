var loc, locArr, pushpinm, polyline, polygon;

//////// Main logic

function setPushpin(latitude, longitude) {
    loc = new Microsoft.Maps.Location(latitude, longitude);
    pushpin = new Microsoft.Maps.Pushpin(loc, null);
    map.entities.push(pushpin);
};

function setPolyline(locArr) {
    polyline = new Microsoft.Maps.Polyline(locArr, null);
    map.entities.push(polyline);
};

function setPolygon(locArr) {
    polygon = new Microsoft.Maps.Polygon(locArr, null);
    map.entities.push(polygon);
};

////// Test functions

function testSetPushpin() {
    setPushpin(55, 86);
};

function testSetPolyline() {
    var t1 = new Microsoft.Maps.Location(55, 86);
    var t2 = new Microsoft.Maps.Location(55, 87);
    var test = [t1, t2];
    setPolyline(test);
};

function testSetPolygon() {
    var t1 = new Microsoft.Maps.Location(55, 86);
    var t2 = new Microsoft.Maps.Location(55, 87);
    var t3 = new Microsoft.Maps.Location(54, 87);
    var test = [t1, t2, t3];
    setPolygon(test);
};