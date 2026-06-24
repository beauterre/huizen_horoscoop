// house comparisson data for use in index.html, comparator.html 
// include as <script src="kyrolankatu5_24538851.js"></script>
// add the data to houses object.

houses["kyrolankatu5_24538851"] = {

  // --- SOURCE ---
  url: "https://asunnot.oikotie.fi/myytavat-asunnot/lahti/24538851", 

  // --- LOCATION ---
  location: { lat: 60.975, lng: 26.985 }, // Estimated for Kyrölänkatu, Hörölä
  distanceFromShops: 500, // Estimate based on neighbor listing in same building
  address: "Kyrölänkatu 5 A, Hörölä, Lahti",

  price: 54000,
  size: 54,
  
  // --- THE BURN RATE METRICS ---
  monthlyVastike: 226.80,       
  annualHeatingEstimate: 900, // Estimate for 54m2 Energy Class D + Heat pump
  annualInsurance: 150,      // Estimated based on unit value
  burnRateReport: "Energy label D2018. Heating is district heat + exhaust air heat pump. Note: Water fee (16€/person/mo) is separate.", 
  
  // --- RISK & COST STABILITY OVER 20 YEARS ---
  riskScore: 4, // Pipes renovated 2008 (Good), but significant roof debt coming (Bad)
  riskAssesmentReport: "Pipes renovated in 2008 (Passes check). CRITICAL RISK: Housing company decided 28.1.2026 to start a roof renovation funded by a 300,000€ loan. This will trigger either a lump-sum payment or a significant increase in monthly vastike. Also has a small existing maintenance loan (12,727€).", 
  
  // --- QUALITATIVE DATA (to be filled by human)---
  pros: "Renovated kitchen (2019-2020), updated surfaces, glazed balcony, move-in ready", 
  cons: "First floor, impending roof renovation costs, older building shell", 
  qualityScore: 7, // High due to internal renovations (kitchen/surfaces) compared to building age.
  
  // --- THE INCOME METRIC ---
  rentalPotential: 550, // Estimated market rent for a renovated unit in this area
  
  // Realtor
  realtor: {
    name: "Vesa Salokanne",
    company: "REMAX Noste",
    phone: "+358 [Not provided in text]",
    email: "[Not provided in text]",
    visits: [] 
  },
  
};
