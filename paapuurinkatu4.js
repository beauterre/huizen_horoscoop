// house comparisson data for use in index.html, comparator.html 
// include as <script src="paapuurinkatu4.js"></script>
// add the data to houses object.

houses["paapuurinkatu4"] = {

  // --- SOURCE ---
  url: "https://www.etuovi.com/kohde/20668704", 

  // --- LOCATION ---
  location: { lat: 60.983, lng: 27.315 }, // Estimated for Ankkuri, Lahti
  distanceFromShops: 550, // S-Market Ankkuri is 554m
  address: "Paapuurinkatu 4, Lahti",

  price: 129000,
  size: 47,
  
  // --- THE BURN RATE METRICS ---
  monthlyVastike: 244.40,       
  annualHeatingEstimate: 800, // Estimate for 47m2 Energy Class C in Lahti
  annualInsurance: 250,       // Realistic estimate for this size/value
  burnRateReport: "Energy label C (2018) is decent. District heating (Kaukolämpö) provides stability. Unit includes a sauna which increases electricity/water usage.", 
  
  // --- RISK & COST STABILITY OVER 20 YEARS ---
  riskScore: 7, // Base 5 (pipes not explicitly dated) + 2 (rule: no 'Pipes renovated in [Year]')
  riskAssesmentReport: "Building from 2011 is relatively young, reducing immediate structural risk. However, listing does not explicitly state pipe renovation date (+2 risk). Tontti is rented (Vuokra) until 2060, which is a long-term cost risk as rent increases can drive up vastike. Future maintenance includes balcony glass and element sealing.", 
  
  // --- QUALITATIVE DATA (to be filled by human)---
  pros: "Built 2011, glazed balcony with lake views, own sauna, good energy class C, no company debt mentioned.", 
  cons: "Rented plot (Tonttivuokra), no explicit pipe renovation date, small kitchen.", 
  qualityScore: 7, // Modern build, good materials (parquet/tile), but standard finish.
  
  // --- THE INCOME METRIC ---
  rentalPotential: 650, // Estimated market rate for a 2h+k in Ankkuri, Lahti
  
  // Realtor
  realtor: {
    name: "Charlotta Pöntinen",
    company: "Bo LKV Lahti",
    phone: "+358449767418",
    email: "charlotta.pontinen@bo.fi",
    visits: [] 
  },

};
