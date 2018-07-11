var map;

function loadMapScenario() {
    var navigationBarMode = Microsoft.Maps.NavigationBarMode;
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {navigationBarMode: navigationBarMode.compact});
}    