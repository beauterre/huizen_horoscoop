// house comparisson data for use in index.html, comparator.html 
// include as <script src="keskuskuja6.js"></script>
// add the data to houses object.

houses["keskuskuja6"] = {

  // --- SOURCE ---
  url: "https://www.etuovi.com/kohde/80485972", 

  // --- LOCATION ---
  location: { lat: 60.83, lng: 25.33 }, // Estimated for Hollola Kuntakeskus
  distanceFromShops: 400, // Prisma Hollola 400m
  address: "Keskuskuja 6 A, Hollola",

  price: 89000, // Velaton hinta (Debt-free price)
  size: 59,
  
  // --- THE BURN RATE METRICS ---
  monthlyVastike: 361.53,       
  annualHeatingEstimate: 900, // Estimate for 59m2, Energy Class D, District Heating (Kaukolämpö)
  annualInsurance: 250, // Standard estimate for this price point/size
  burnRateReport: "District heating (Kaukolämpö) is stable. Energy class D is average for 1991. Top floor may have higher heating loss but benefit from better light.", 
  
  // --- RISK & COST STABILITY OVER 20 YEARS ---
  riskScore: 3, // Pipes done (2018), Roof done (2015), Debt is low (9.7k), Land is owned.
  riskAssesmentReport: "Fortress-leaning. Critical infrastructure is handled: Water pipes renovated in 2018 and roof in 2015. Land is owned (Oma tontti), eliminating future ground rent spikes. Minor future risk: front door renewals noted in 2025 maintenance plan.", 
  
  // --- QUALITATIVE DATA ---
  pros: "Top floor, glazed south-facing balcony, private sauna, pipes already renovated, owned land", 
  cons: "Located in Hollola (smaller market than Lahti center), Energy class D", 
  qualityScore: 7, // Good condition, includes sauna and balcony, standard 90s layout
  
  // --- THE INCOME METRIC ---
  rentalPotential: 550, // Estimated based on size and location in Hollola center
  
  // Realtor
  realtor: {
    name: "Marko Sykkö",
    company: "House Lahti",
    phone: "+358443424659",
    email: "marko.sykko@houselahti.fi",
    visits: [] 
  },

};
