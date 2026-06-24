// house comparisson data for use in index.html, comparator.html 
// include as <script src="kyrolankatu5.js"></script>
// add the data to houses object.

houses["kyrolankatu5"] = {

  // --- SOURCE ---
  url: "https://asunnot.oikotie.fi/myytavat-asunnot/lahti/24538851", 

  // --- LOCATION ---
  location: { lat: 60.984, lng: 25.645 }, // Estimated for Hörölä, Lahti
  distanceFromShops: 800, // Estimated based on Hörölä residential layout
  address: "Kyrölänkatu 5 A",

  price: 54000,
  size: 54,
  
  // --- THE BURN RATE METRICS ---
  monthlyVastike: 226.80,       
  annualHeatingEstimate: 800, // Combined district heating + air source heat pump estimate for 54m2
  annualInsurance: 150, // Estimated based on If basic quote provided in listing (12€/mo)
  burnRateReport: "D-class energy rating (2018). Efficiency improved by air-source heat pump and LTO system updates in 2023.", 
  
  // --- RISK & COST STABILITY OVER 20 YEARS ---
  riskScore: 4, // Pipes done in 2008 (Score reduced), but high imminent risk due to 300k€ roof project.
  riskAssesmentReport: "Pipes renovated in 2008 (Safe). However, a 300,000€ roof renovation was decided on 28.1.2026. This will likely lead to significant capital contributions (hankeosuus) or increased monthly payments. Housing company has moderate debt (1.14M€).", 
  
  // --- QUALITATIVE DATA (to be filled by human)---
  pros: "Renovated kitchen (2019-2020), updated surfaces, glazed balcony, district heating + heat pump, pipes done 2008", 
  cons: "1st floor, imminent roof renovation costs, aging building (1965)", 
  qualityScore: 6, // Good condition interior, but standard 60s layout and low floor.
  
  // --- THE INCOME METRIC ---
  rentalPotential: 550, // Estimated for a renovated 2h+k in Lahti/Hörölä
  
  // Realtor
  realtor: {
    name: "Vesa Salokanne",
    company: "REMAX Noste",
    phone: "+358 (contact via portal)", 
    email: "vesa.salokanne@remax.fi", // Derived from company standard
    visits: [] 
  },
  
};
