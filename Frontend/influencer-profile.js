const form = document.getElementById('influencer-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const errorMsg = document.getElementById('error-msg');

  const displayName = document.getElementById('display-name').value.trim();
  const bio = document.getElementById('bio').value.trim();
  const category = document.getElementById('category').value;
  const followers = document.getElementById('followers').value;
  const engagement = document.getElementById('engagement').value;

  const instagram = document.getElementById('instagram').value.trim();
  const youtube = document.getElementById('youtube').value.trim();
  const twitter = document.getElementById('twitter').value.trim();

  if (displayName === '') {
    errorMsg.textContent = 'Please enter your display name.';
    return;
  }

  if (category === '') {
    errorMsg.textContent = 'Please select your content category.';
    return;
  }

  if (instagram === '' && youtube === '' && twitter === '') {
    errorMsg.textContent = 'Please enter at least one social media handle.';
    return;
  }

  const checkedBoxes = document.querySelectorAll('input[name="collab_type"]:checked');

  const collabTypes = [];
  checkedBoxes.forEach(function(checkbox) {
    collabTypes.push(checkbox.value);
  });

  errorMsg.textContent = '';

  const profileData = {
    display_name: displayName,
    bio,
    category,
    location: document.getElementById('location').value.trim(),
    instagram,
    youtube,
    twitter,
    followers: parseInt(followers),
    engagement_rate: parseFloat(engagement),
    avg_likes: parseInt(document.getElementById('avg-likes').value) || 0,
    rate_per_post: parseInt(document.getElementById('rate').value) || 0,
    collab_types: collabTypes,
    past_brands: document.getElementById('past-brands').value.trim()
  };

  console.log('Profile data ready to send:', profileData);

  alert(`Profile saved for ${displayName}! (Backend coming soon)`);
});