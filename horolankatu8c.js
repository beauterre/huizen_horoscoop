// house comparisson data for use in index.html, comparator.html 
// include as <script src="horolankatu8c.js"></script>
// add the data to houses object.

houses["horolankatu8c"] = {

  // --- SOURCE ---
  url: "https://asunnot.oikotie.fi/myytavat-asunnot/lahti/24554225", 

  // --- LOCATION ---
  location: { lat: 61.0001283, lng: 25.6901116 }, // Estimated for Hörölä, Lahti
  distanceFromShops: 500, // Sale is approx 500m away
  address: "Hörölänkatu 8 C, Lahti",

  price: 29000, // Debt-free price (Velaton hinta)
  size: 59,
  
  // --- THE BURN RATE METRICS ---
  monthlyVastike: 356.40, // Total: Hoitovastike 297 + Pääomavastike 59.40
  annualHeatingEstimate: 900, // Estimate: District heating (kaukolämpö) for 59m2, Energy class E
  annualInsurance: 156, // Based on listing estimate (13€/kk)
  burnRateReport: "Energy class E (2018) is poor. District heating is stable but efficiency is low. Land is rented (until 2030), which creates a significant financial cliff/risk for the housing company regarding future ground rent renewals.", 
  
  // --- RISK & COST STABILITY OVER 20 YEARS ---
  riskScore: 3, // Pipes were renovated in 2009 (No +2 penalty). Roof 2023. However, rented land (Tonttivuokra) is a long-term risk.
  riskAssesmentReport: "Pipes renovated 2009 (linjasaneeraus). Roof renewed 2023. Facades checked 2024 (no major repairs needed soon). Main risk is the rented land (tontin vuokra) expiring 2030, which usually leads to a significant jump in monthly costs or a large capital levy for land purchase.", 
  
  // --- QUALITATIVE DATA (to be filled by human)---
  pros: "Pipes and roof recently handled, large rooms, forest views, very low entry price", 
  cons: "Energy class E, rented land (major red flag for 20-year plan), condition is 'satisfactory' (tyydyttävä), not owned land", 
  qualityScore: 4, // Based on 'Satisfactory' condition and linoleum/plastic flooring (muovimatto)
  
  // --- THE INCOME METRIC ---
  rentalPotential: 550, // Estimated for 59m2 2-room in Hörölä, Lahti
  
  // Realtor
  realtor: {
    name: "Mika Lindén",
    company: "AsuntoArea Oy",
    phone: "+358449758452",
    email: "mika.linden@asuntoarea.fi",
    visits: [] 
  },

};



