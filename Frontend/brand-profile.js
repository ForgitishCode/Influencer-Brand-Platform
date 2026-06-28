const form = document.getElementById('brand-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const errorMsg = document.getElementById('error-msg');

  const companyName = document.getElementById('company-name').value.trim();
  const industry = document.getElementById('industry').value;
  const companyBio = document.getElementById('company-bio').value.trim();
  const targetNiche = document.getElementById('target-niche').value;

  if (companyName === '') {
    errorMsg.textContent = 'Please enter your company name.';
    return;
  }

  if (industry === '') {
    errorMsg.textContent = 'Please select your industry.';
    return;
  }

  if (companyBio === '') {
    errorMsg.textContent = 'Please enter a company description.';
    return;
  }

  if (targetNiche === '') {
    errorMsg.textContent = 'Please select your target influencer niche.';
    return;
  }

  const checkedTypes = document.querySelectorAll('input[name="campaign_type"]:checked');
  const campaignTypes = [];
  checkedTypes.forEach(function(checkbox) {
    campaignTypes.push(checkbox.value);
  });

  errorMsg.textContent = '';

  const brandData = {
    company_name: companyName,
    industry,
    company_bio: companyBio,
    website: document.getElementById('website').value.trim(),
    location: document.getElementById('brand-location').value.trim(),
    target_niche: targetNiche,
    min_followers: parseInt(document.getElementById('min-followers').value) || 0,
    budget: parseInt(document.getElementById('budget').value) || 0,
    campaign_types: campaignTypes,
    brand_instagram: document.getElementById('brand-instagram').value.trim(),
    brand_twitter: document.getElementById('brand-twitter').value.trim()
  };

  console.log('Brand profile ready:', brandData);
  alert(`Brand profile saved for ${companyName}! (Backend coming soon)`);
});