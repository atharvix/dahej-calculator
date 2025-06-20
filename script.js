document.getElementById('downloadPDF').addEventListener('click', function () {
  const element = document.getElementById('dahejResume');
  const opt = {
    margin:       0.5,
    filename:     'dahej_resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
});

document.getElementById('dahejForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const naam = form.naam.value;
  const pitaNaam = form.pitaNaam.value;
  const mataNaam = form.mataNaam.value;
  const education = form.education.value;
  const income = parseInt(form.income.value);
  const property = form.property.value;
  const pitaProfession = form.pitaProfession.value;
  const reputation = form.reputation.value;
  const hobbies = form.hobbies.value;

  let dahejValue = income * 3;

  if (property.includes('zameen') || property.includes('plot')) dahejValue += 250000;
  if (property.includes('fake') || property.includes('illegal')) dahejValue -= 75000;

  if (education.includes('IAS') || education.includes('PhD')) dahejValue += 200000;
  if (education.includes('fail') || education.includes('dropout')) dahejValue -= 100000;

  if (hobbies.includes('gali') || hobbies.includes('ladki')) dahejValue -= 80000;
  if (reputation.includes('President') || pitaProfession.includes('Government')) dahejValue += 150000;

  // Add fun Indian-style ending to the cash amount
  const indianEndings = [1, 11, 21, 51];
  const ending = indianEndings[Math.floor(Math.random() * indianEndings.length)];
  dahejValue = Math.floor(dahejValue / 100) * 100 + ending;

  // Funny dahej items
  const dahejItems = [
    "2 Bhais", "Scorpio Gaadi", "Virginity Certificate", "Gold Chain", "Sarkaari Naukri ka Vaada",
    "Emotional Support", "Bhagwan ka Aashirvaad", "Desi Murgi Pack", "5 Kilo Ghee", "AC Wala Kamra",
    "Free WiFi", "Band-Baaja Included", "Jeevansathi App Premium", "Cooking Classes Subscription",
    "Bua ki Sifarish", "Unlimited Rajma Chawal", "Free Jio SIM", "Monthly Parlour Coupons",
    "Lifetime Netflix", "Mama ki Thar", "No Saas Drama Guarantee", "Shadi ke 101 Rasgulle",
    "Airport Drop Facility", "5 Star Wedding Tent", "Instagram Reel Editing Help", "Tandoori Nights",
    "Padosi Ki Izzat", "Dhol Beats at 3AM", "Matchmaking Kundli Premium", "Free Aashirwaad Box",
    "Visa-Free Travel to Nani's House", "Mamaji ki CRM Access", "Ek Number Ke Rishte", "Sanskari Behavior Add-on",
    "Daily Good Morning Msg", "Bahu Bonus Package", "No Dowry Tension Pack", "Lifetime Chappal Safety",
    "Swag Wali Entry", "Baraat Drone Shot", "Sharif Padosi", "No Ghar Ka Kaam Clause", "Free Sabzi Thaila",
    "Mere Papa Judge Hai Vibe", "Gaon Ka Nambardar", "Spotify Couple Plan", "Free Mehendi Artist", "Reel Shooting Rights",
    "Saas-Bahu Peace Treaty", "Papa Ki Alto", "Tandoor Ka Chicken", "Barbeque Nights"
  ];

  const selectedItems = [];
  while (selectedItems.length < 5) {
    const item = dahejItems[Math.floor(Math.random() * dahejItems.length)];
    if (!selectedItems.includes(item)) selectedItems.push(item);
  }

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h2>💸 Dahej Calculator Result</h2>
    <p><strong>Estimated Dahej Value:</strong> ₹${dahejValue.toLocaleString()}</p>
    <p><strong>Bonus Gift Items:</strong> ${selectedItems.join(', ')}</p>
  `;

  const resumeDiv = document.getElementById('dahejResume');
  resumeDiv.innerHTML = `
    <h3>🧾 Dahej Resume</h3>
    <p><strong>Naam:</strong> ${naam}</p>
    <p><strong>Pita Ji:</strong> ${pitaNaam}</p>
    <p><strong>Mata Ji:</strong> ${mataNaam}</p>
    <p><strong>Education:</strong> ${education}</p>
    <p><strong>Income:</strong> ₹${income}</p>
    <p><strong>Property:</strong> ${property}</p>
    <p><strong>Pita Ji Ka Profession:</strong> ${pitaProfession}</p>
    <p><strong>Samaj Mein Pehchaan:</strong> ${reputation}</p>
    <p><strong>Hobbies:</strong> ${hobbies}</p>
    <p><strong>Final Dahej:</strong> ₹${dahejValue.toLocaleString()}</p>
    <p><strong>Free Items With Groom:</strong> ${selectedItems.join(', ')}</p>
  `;

  document.getElementById('downloadPDF').style.display = 'block';
});

// Download as PDF
document.getElementById('downloadPDF').addEventListener('click', function () {
  const element = document.getElementById('dahejResume');
  const opt = {
    margin: 0.5,
    filename: 'dahej_resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
},500);

