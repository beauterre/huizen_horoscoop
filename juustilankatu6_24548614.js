// house comparisson data for use in index.html, comparator.html 
// include as <script src="juustilankatu6_24548614.js"></script>
// add the data to houses object.

houses["juustilankatu6_24548614"] = {

  // --- SOURCE ---
  url: "https://asunnot.oikotie.fi/myytavat-asunnot/lahti/24548614", 

  // --- LOCATION ---
  location: { lat: 60.988, lng: 26.980 }, // Estimated for Juustilankatu, Kivimaa
  distanceFromShops: 400, // "Walking distance to grocery stores"
  address: "Juustilankatu 6, Kivimaa, Lahti",

  price: 89000, // Debt-free price (Velaton hinta)
  size: 33,
  
  // --- THE BURN RATE METRICS ---
  monthlyVastike: 249.84, // Hoitovastike 190.85 + Pääomavastike 58.99
  annualHeatingEstimate: 700, // Estimate for 33m2, though Energy Class G is poor, heat pump helps
  annualInsurance: 130, // Based on IF hint (11€/mo)
  burnRateReport: "Energy class G2013 (Very poor efficiency). Heating via district heat and exhaust air heat pump. High vastike relative to size.", 
  
  // --- RISK & COST STABILITY OVER 20 YEARS ---
  riskScore: 6, // Pipes not explicitly 'Renovated in [Year]'. Only 'Cleaned/Flushed 2009' and 'Lined 2010'. +2 penalty.
  riskAssesmentReport: "CRITICAL: No full pipe renovation (linjasaneeraus) mentioned; only lining/flushing in 2010. This is a high risk for a 1963 building. Additionally, the unit carries 12,168€ in company debt and an additional ~2,419€ for the elevator renovation.", 
  
  // --- QUALITATIVE DATA (to be filled by human)---
  pros: "Full high-end apartment renovation completed, stunning views of Lahti/Vesijärvi, glazed balcony, high floor (6/9)", 
  cons: "Very small (33m2), poor energy class (G), old building shell, plumbing risk", 
  qualityScore: 9, // Interior is "Palace" level due to full comprehensive renovation (INR tiles, herringbone floor).
  
  // --- THE INCOME METRIC ---
  rentalPotential: 600, // Premium price due to renovation quality and views in Kivimaa
  
  // Realtor
  realtor: {
    name: "Sami Koljonen",
    company: "Kodixi",
    phone: "[Not provided in text]",
    email: "[Not provided in text]",
    visits: [] 
  },
  
};
