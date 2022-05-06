

  const unfoldedMap = new UnfoldedMap({
    mapUUID: '3d7938f7-de6d-46ae-b761-7d60161ce3d3',
    embed: true,
    width: '100%',
    height: '100%',
    onLoad: () => {
      console.log('%cUnfoldedMap: ' + '%cMap has loaded...', 'color: violet;', 'color: yellow;');
      var loader = document.getElementById('loader');
      loader.style.display = 'none';
      var btnContainer = document.getElementById('button-container');
      btnContainer.style.display = 'grid';
    }
  });

var moveButtonDT = document.getElementById("move_button_dt");
moveButtonDT.onclick = function (e) {
  unfoldedMap.setViewState({
    longitude: -117.160944, 
    latitude: 32.715666,
    zoom: 14
  });
};

var moveButtonNC = document.getElementById("move_button_nc");
moveButtonNC.onclick = function (e) {
  unfoldedMap.setViewState({
    longitude: -117.098263, 
    latitude: 32.675939,
    zoom: 14
  });
};

var moveButtonCV = document.getElementById("move_button_cv");
moveButtonCV.onclick = function (e) {
  unfoldedMap.setViewState({
    longitude: -117.082124,
    latitude: 32.636339,
    zoom: 14
  });
};


var getLayersBtn = document.getElementById("get-layers");
getLayersBtn.onclick = function (e) {
  unfoldedMap.getLayers().then(layers => {
    var layerContainer = document.getElementById('sdk-layers');
    layerContainer.innerHTML = '';
    layers.forEach (layer => {
      createCheckboxToggle(layer.label, layer.id);
    });
    var results = document.getElementById('results');
    results.innerHTML = JSON.stringify(layers, null, 2);
  });
};

var createCheckboxToggle = (layerName, layerId) => {
  var layerContainer = document.getElementById("sdk-layers");
  layerContainer.style.display = "block";
  var cbGroup = document.createElement("div");
  cbGroup.className = "checkbox-group";
  var switchBtn = document.createElement("label");
  switchBtn.className = "switch";
  var slider = document.createElement("span");
  slider.className = "slider round";
  var switchLabel = document.createElement("label");
  switchLabel.className = "switch-label";

  var div = document.createElement("div");
  div.setAttribute("id", layerId);
  switchLabel.appendChild(document.createTextNode(layerName));

  var cb = document.createElement("input");
  cb.type = "checkbox";
  cb.name = layerName;
  cb.value = layerId;
  cb.checked = true;
  cb.addEventListener(
    "change",
    function () {
      unfoldedMap.setLayerVisibility(this.value, this.checked);
    },
    false
  );
  switchBtn.appendChild(cb);
  switchBtn.appendChild(slider);
  cbGroup.appendChild(switchBtn);
  cbGroup.appendChild(switchLabel);
  layerContainer.appendChild(cbGroup);
};



