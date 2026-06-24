// house comparisson data for use in index.html, comparator.html 
// include as <script src="juustilankatu8_23551493.js"></script>
// add the data to houses object.

houses["juustilankatu8_23551493"] = {

  // --- SOURCE ---
  url: "https://asunnot.oikotie.fi/myytavat-asunnot/lahti/23551493", 

  // --- LOCATION ---
  location: { lat: 60.987, lng: 26.982 }, // Estimated for Juustilankatu, Kiveriö
  distanceFromShops: 600, // S-Market Kiveriö explicitly listed as ~600m
  address: "Juustilankatu 8 A, Kiveriö, Lahti",

  price: 109000, // Debt-free price (Velaton hinta)
  size: 73,
  
  // --- THE BURN RATE METRICS ---
  monthlyVastike: 513.36, // Hoitovastike 392.15 + Pääomavastike 121.21
  annualHeatingEstimate: 1400, // Estimate for 73m2. Note: Energy certificate expired (G/F likely)
  annualInsurance: 180, // Based on IF hint (15€/mo)
  burnRateReport: "Energy certificate expired 08.04.2025. Heating is district heat + exhaust air heat pump. Very high monthly vastike due to significant company debt (26k€ share).", 
  
  // --- RISK & COST STABILITY OVER 20 YEARS ---
  riskScore: 8, // Pipes NOT renovated. 'Sewer lining 2010' and 'Water network 1998' only. +2 penalty. Huge debt.
  riskAssesmentReport: "HIGH RISK: No full plumbing renovation (linjasaneeraus) mentioned. Only lining in 2010. This is a ticking time bomb for a 1963 building. The unit has a high debt share (26,129.71€) and the company has a total debt of over 2 million euros. Future elevator and sauna renovations are planned, which will likely increase costs further.", 
  
  // --- QUALITATIVE DATA (to be filled by human)---
  pros: "Spacious 4-room layout, modern open kitchen, electric fireplace, glazed balcony, good location in Kiveriö", 
  cons: "Extreme plumbing risk, very high company debt, high monthly burn rate, expired energy label", 
  qualityScore: 6, // 'Hyvä' condition, but basic finishes (linoleum/paint) and old building core.
  
  // --- THE INCOME METRIC ---
  rentalPotential: 950, // Estimated for a 4-room apartment in this area
  
  // Realtor
  realtor: {
    name: "Niklas Sahlman",
    company: "HOUSE Lahti",
    phone: "+358445688194",
    email: "niklas.sahlman@houselahti.fi",
    visits: [] 
  },
  
};
