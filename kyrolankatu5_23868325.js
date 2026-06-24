// house comparisson data for use in index.html, comparator.html 
// include as <script src="kyrolankatu5_23868325.js"></script>
// add the data to houses object.

houses["kyrolankatu5_23868325"] = {

  // --- SOURCE ---
  url: "https://asunnot.oikotie.fi/myytavat-asunnot/lahti/23868325", 

  // --- LOCATION ---
  location: { lat: 60.975, lng: 26.985 }, // Estimated for Kyrölänkatu, Metsäpelto/Hörölä
  distanceFromShops: 300, // Listing explicitly mentions Sale 300m away
  address: "Kyrölänkatu 5 A, Metsäpelto, Lahti",

  price: 43000,
  size: 54,
  
  // --- THE BURN RATE METRICS ---
  monthlyVastike: 232.88, // Hoitovastike 226.80 + Cable TV 6.08
  annualHeatingEstimate: 900, // Same building as previous, Energy Class D + Heat pump
  annualInsurance: 130, // Slightly lower estimate due to lower purchase price/condition
  burnRateReport: "Energy class D2018. Uses district heating and exhaust air heat pump. Monthly costs include a small cable TV fee.", 
  
  // --- RISK & COST STABILITY OVER 20 YEARS ---
  riskScore: 4, // Pipes done 2008 (Passes check), but Roof renovation is active (Starts 7.4.2026)
  riskAssesmentReport: "Pipes renovated in 2008. Significant financial risk: A 300,000€ roof renovation was decided on 28.1.2026 and started 7.4.2026. This will result in either a large capital payment or increased monthly charges.", 
  
  // --- QUALITATIVE DATA (to be filled by human)---
  pros: "Very low entry price, glazed balcony, proximity to Sale shop, pipes done", 
  cons: "Original condition (Needs total interior renovation), linoleum/plastic floors, impending roof costs", 
  qualityScore: 3, // "Tyydyttävä" (Satisfactory) / Original condition from 1965.
  
  // --- THE INCOME METRIC ---
  rentalPotential: 450, // Lower than the renovated unit due to original condition
  
  // Realtor
  realtor: {
    name: "Jarkko Lehto",
    company: "Neliöt Liikkuu LKV Oy Ab",
    phone: "[Not provided in text]",
    email: "[Not provided in text]",
    visits: [] 
  },
  
};
