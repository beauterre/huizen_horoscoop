var houses = {}; 
var ui = { weights: {} };

const METRIC_MAP = {
  "price": "Price (Low is better)",
  "size": "Size (High is better)",
  "monthlyVastike": "Vastike (Low is better)",
  "riskScore": "Risk (Low is better)",
  "qualityScore": "Quality (High is better)",
  "rentalPotential": "Rental Potential (High is better)",
  "distanceFromShops": "Dist to Shops (Low is better)",
  "futureBudget": "Future Budget (High is better)" 
};

var POI = [
  { name: "Eka", lat: 60.9988444, lng: 25.6840523 },
  { name: "Raagi", lat: 61.037822, lng: 25.8955321 },
];

// --- UNIFIED BUDGET CALCULATION ENGINE (Owner-Occupied) ---
function calculateFutureBudget(house, years) {
    const startBudget = 230000;
    const annualExternalIncome = 0;
    const annualOverhead = 1600; // Maintenance + Tax/Internet

    const purchasePrice = house.price;
    // LIVING COST: No rental offset. Just costs.
    const monthlyBurn = (house.monthlyVastike + (house.annualHeatingEstimate/12) + (house.annualInsurance/12));
    
    const totalBurn = monthlyBurn * 12 * years;
    const totalOverhead = annualOverhead * years;
    // INCOME: Only external income. No rent.
    const totalIncome = (annualExternalIncome * years);

    return startBudget - purchasePrice - totalBurn - totalOverhead + totalIncome;
}

function handleYearChange(val) {
    calculateBudget(); 
    compare();         
}

// --- STORAGE HELPERS ---
function saveWeights(value) {
  localStorage.setItem("houseWeights", JSON.stringify(value));
}

function loadWeights() {
  var saved = localStorage.getItem("houseWeights");
  return saved ? JSON.parse(saved) : null;
}

function houseArray() { return Object.values(houses); }
function getValue(obj, path) { return path.split(".").reduce(function(o,k){ return o?o[k]:undefined; }, obj); }

function distanceKm(a, b) {
  if(!a || !b) return null;
  var R = 6371;
  var dLat = (b.lat - a.lat) * Math.PI / 180;
  var dLng = (b.lng - a.lng) * Math.PI / 180;
  var x = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(a.lat * Math.PI / 180) * Math.cos(b.lat * Math.PI / 180) * 
          Math.sin(dLng/2) * Math.sin(dLng/2);
  return (2 * R * Math.atan2(Math.sqrt(x), Math.sqrt(1-x))).toFixed(2);
}

function updateWeightLabel(key, val) {
  ui.weights[key] = parseInt(val);
  var label = document.getElementById('v-' + key);
  if(label) label.innerHTML = val;
  
  var bgLabel = document.getElementById('bg-' + key);
  if(bgLabel) {
    var weight = parseInt(val);
    var r = Math.floor(240 - (weight * 2));
    var g = Math.floor(240 - (weight * 1.8));
    var b = Math.floor(240 - (weight * 1.6));
    bgLabel.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    bgLabel.style.color = weight > 50 ? "white" : "black";
  }
}

function triggerReSort(key, val) {
  ui.weights[key] = parseInt(val);
  saveWeights(ui.weights);
  compare();
}

function toggleReport(id) {
  var el = document.getElementById(id);
  if(el) {
    if (el.classList.contains('hidden')) { el.classList.remove('hidden'); } 
    else { el.classList.add('hidden'); }
  }
}

function getRiskClass(score) {
  if(score <= 3) return "risk-low";
  if(score <= 6) return "risk-med";
  return "risk-high";
}

function compare(){
  var selected = houseArray(); 
  var projectionYears = parseInt(document.getElementById('projYears')?.value) || 15;
  
  if(selected.length === 0) {
    document.getElementById("output").innerHTML = "No houses loaded. Check your script tags.";
    return;
  }

  var fullMetricMap = {};
  for (var key in METRIC_MAP) { fullMetricMap[key] = METRIC_MAP[key]; }
  for (var p=0; p<POI.length; p++) {
    fullMetricMap["poi_" + p] = "Dist to " + POI[p].name + " (Low is better)";
  }

  var scoredHouses = selected.map(function(h) {
    var totalScore = 0;
    var weightSum = 0;

    for (var key in fullMetricMap) {
      var weight = ui.weights[key] === undefined ? 50 : ui.weights[key]; 
      if (weight === 0) continue;

      var val;
      if(key.indexOf("poi_") === 0) {
        var poiIdx = parseInt(key.replace("poi_", ""));
        val = parseFloat(distanceKm(h.location, POI[poiIdx]) || 0);
      } else if (key === 'futureBudget') {
        val = calculateFutureBudget(h, projectionYears);
      } else {
        val = parseFloat(getValue(h, key) || 0);
      }

      var allVals = selected.map(function(house) {
        if(key.indexOf("poi_") === 0) {
          var pIdx = parseInt(key.replace("poi_", ""));
          return parseFloat(distanceKm(house.location, POI[pIdx]) || 0);
        } else if (key === 'futureBudget') {
          return calculateFutureBudget(house, projectionYears);
        }
        return parseFloat(getValue(house, key) || 0);
      });

      var min = Math.min.apply(null, allVals);
      var max = Math.max.apply(null, allVals);
      var range = max - min || 1;
      var norm = 0;

      if (key === 'price' || key === 'riskScore' || key === 'monthlyVastike' || key === 'distanceFromShops' || key.indexOf("poi_") === 0) {
        norm = (max - val) / range;
      } else {
        norm = (val - min) / range;
      }

      totalScore += norm * weight;
      weightSum += weight;
    }

    return { house: h, finalScore: weightSum === 0 ? 0 : totalScore / weightSum };
  });

  scoredHouses.sort(function(a, b) { return b.finalScore - a.finalScore; });

  var html = "<table id='resultTable'>";
  html += "<tr><th>Metric</th>";
  for(var j=0; j<scoredHouses.length; j++){
    var h = scoredHouses[j].house;
    var houseKey = Object.keys(houses).find(function(key) { return houses[key].address === h.address; });
    html += "<th style='vertical-align: middle;'>" +
             "<div class='rank-badge'>#" + (j+1) + "</div><br>" +
             "<a href='" + (h.url || '#') + "' target='_blank' class='source-btn'>Source ↗</a><br>" +
             "<img src='" + houseKey + ".jpg' class='house-img' onerror=\"this.src='https://via.placeholder.com/100?text=No+Img'\"><br>" +
             "<b style='display:block; margin-top:5px;'>" + h.address + "</b>" +
             "</th>";
  }
  html += "</tr>";

  for (var key in fullMetricMap) {
    var currentWeight = ui.weights[key] === undefined ? 50 : ui.weights[key];
    var r = Math.floor(240 - (currentWeight * 2));
    var g = Math.floor(240 - (currentWeight * 1.8));
    var b = Math.floor(240 - (currentWeight * 1.6));
    var labelColor = "rgb(" + r + "," + g + "," + b + ")";
    var textColor = currentWeight > 50 ? "white" : "black";

    html += "<tr><td class='metric-cell'>" +
             "<span id='bg-" + key + "' class='metric-label-bg' style='background-color:" + labelColor + "; color:" + textColor + ";'>" + 
             fullMetricMap[key] + "</span>" +
             "<div class='weight-ctrl'>" +
             "<input type='range' min='0' max='100' value='" + currentWeight + "' " +
             "oninput='updateWeightLabel(\"" + key + "\", this.value)' " +
             "onchange='triggerReSort(\"" + key + "\", this.value)'>" +
             "<span class='weight-val' id='v-" + key + "'>" + currentWeight + "</span>" +
             "</div>" +
             "</td>";

    for(var k=0; k<scoredHouses.length; k++){
      var h = scoredHouses[k].house;
      var val;
      if(key.indexOf("poi_") === 0) {
        var pIdx = parseInt(key.replace("poi_", ""));
        val = distanceKm(h.location, POI[pIdx]) + " km";
      } else if (key === 'futureBudget') {
        val = Math.round(calculateFutureBudget(h, projectionYears)).toLocaleString('fi-FI') + " €";
      } else {
        val = getValue(h, key);
      }

      var cellClass = (key === 'riskScore') ? getRiskClass(getValue(h, 'riskScore')) : "";
      if (key === 'futureBudget') {
        var rawBudget = calculateFutureBudget(h, projectionYears);
        cellClass = (rawBudget > 100000) ? 'budget-positive' : 'budget-negative';
      }

      html += "<td class='" + cellClass + "'>" + (val || "-");

      if(key === 'riskScore' || key === 'qualityScore') {
        var infoId = "info-" + key + "-" + k;
        var reportText = (key === 'riskScore') ? h.riskAssesmentReport : h.burnRateReport;
        html += '<span class="info-btn" onclick="toggleReport(\'' + infoId + '\')">i</span>';
        html += '<div id="' + infoId + '" class="report-inline hidden">' + (reportText || "No data") + '</div>';
      }
      html += "</td>";
    }
    html += "</tr>";
  }

  html += "</table>";
  document.getElementById("output").innerHTML = html;
}

function calculateBudget() {
    const startBudget = 230000;
    const annualExternalIncome = 0; 
    const years = parseInt(document.getElementById('projYears')?.value) || 15;
    const container = document.getElementById('budgetProjection');
    if(!container) return;
    
    let html = `<p style="font-size: 12px; color: #666; margin-bottom: 15px;">
        <strong>Calculation Logic (Owner-Occupied):</strong> Starting Budget (€${startBudget}) 
        + Annual Income (€${annualExternalIncome}/yr) 
        - Purchase Price - (Actual Monthly Costs * 12 * Years) 
        - Estimated Maintenance (€1,000/yr) - Taxes/Internet (€600/yr).
    </p>`;

    html += `<table style="width: 100%; text-align: left;">
                <thead>
                    <tr>
                        <th>Property</th>
                        <th>Initial Cost</th>
                        <th>Total Living Cost (${years}y)</th>
                        <th>Total Income (${years}y)</th>
                        <th>Final Budget</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>`;

    for (let id in houses) {
        const house = houses[id];
        const purchasePrice = house.price;
        
        // SYNCED WITH calculateFutureBudget
        const monthlyBurn = (house.monthlyVastike + (house.annualHeatingEstimate/12) + (house.annualInsurance/12));
        const totalBurn = monthlyBurn * 12 * years;
        const annualOverhead = 1600; 
        const totalOverhead = annualOverhead * years;
        const totalIncome = (annualExternalIncome * years);
        
        const finalBudget = startBudget - purchasePrice - totalBurn - totalOverhead + totalIncome;
        
        var statusClass = finalBudget > 100000 ? 'risk-low' : (finalBudget > 0 ? 'risk-med' : 'risk-high');
        var statusText = finalBudget > 100000 ? 'Safe' : (finalBudget > 0 ? 'Tight' : 'Bankrupt');

        html += "<tr>" +
                    "<td><strong>" + id + "</strong></td>" +
                    "<td>" + purchasePrice.toLocaleString('fi-FI') + " €</td>" +
                    "<td style='color: red;'>-" + Math.round(totalBurn).toLocaleString('fi-FI') + " €</td>" +
                    "<td style='color: green;'>+" + Math.round(totalIncome).toLocaleString('fi-FI') + " €</td>" +
                    "<td><strong>" + Math.round(finalBudget).toLocaleString('fi-FI') + " €</strong></td>" +
                    "<td><span class='rank-badge " + statusClass + "'>" + statusText + "</span></td>" +
                 "</tr>";
    }

    html += `</tbody></table>`;
    container.innerHTML = html;
}

window.onload = function() {
  var savedWeights = loadWeights();
  if (savedWeights) { ui.weights = savedWeights; }
  calculateBudget();
  compare();
};
