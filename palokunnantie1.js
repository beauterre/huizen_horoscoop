// house comparisson data for use in index.html, comparator.html 
// include as <script src="palokunnantie1.js"></script>
// add the data to houses object.

houses["palokunnantie1"] = {

  // --- SOURCE ---
  url: "https://www.etuovi.com/kohde/80432165", 

  // --- LOCATION ---
  location: { lat: 60.3428664, lng: 25.4808825 }, // Estimate for Kärpänen, Lahti
  distanceFromShops: 1050, // Based on Sale Okeroinen distance
  address: "Palokunnantie 1 A, Lahti",

  price: 45835.30, // Actual selling price (velaton hinta is 49k)
  size: 34,
  
  // --- THE BURN RATE METRICS ---
  monthlyVastike: 207.40,       
  annualHeatingEstimate: 800, // District heating (Kaukolämpö) estimate for 34m2
  annualInsurance: 250, // Standard estimate for a small apartment in Lahti
  burnRateReport: "District heating used. Energy class D. Reasonable monthly maintenance fee for the area.", 
  
  // --- RISK & COST STABILITY OVER 20 YEARS ---
  riskScore: 7, // Base 5 (medium) + 2 (Pipes not renovated, only condition survey done)
  riskAssesmentReport: "CRITICAL: Pipe renovation not done. 2020 survey indicates water pipes will likely need replacement in the near future. Roof renewed in 2024 (Positive). Windows due for replacement in 2026. Housing company debt is low (€120k total).", 
  
  // --- QUALITATIVE DATA ---
  pros: "Own sauna, balcony, top floor, renovated surfaces (2022), own plot (oma tontti), already rented", 
  cons: "Impending window replacement, high risk of pipe renovation costs soon, Kärpänen location is peripheral", 
  qualityScore: 6, // Good condition interior but standard 80s concrete element build.
  
  // --- THE INCOME METRIC ---
  rentalPotential: 480, // Current actual rent
  
  // Realtor
  realtor: {
    name: "Pilvi Yli-Opas",
    company: "REMAX Noste | Noste Oy LKV",
    phone: "+358504929203",
    email: "pilvi.yli-opas@remax.fi",
    visits: [] 
  }

};