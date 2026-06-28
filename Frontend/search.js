const allInfluencers = [
  {
    id: 1,
    name: "Geetesh Creates",
    category: "tech",
    categoryLabel: "Tech & Gaming",
    followers: 85000,
    engagement: 5.2,
    avg_likes: 4400,
    rate_per_post: 8000,
    instagram: "@geeteshcreates",
    location: "Ludhiana, Punjab"
  },
  {
    id: 2,
    name: "Priya Styles",
    category: "fashion",
    categoryLabel: "Fashion & Beauty",
    followers: 210000,
    engagement: 3.8,
    avg_likes: 7980,
    rate_per_post: 18000,
    instagram: "@priyastyles",
    location: "Mumbai, Maharashtra"
  },
  {
    id: 3,
    name: "FitWithRohit",
    category: "fitness",
    categoryLabel: "Fitness & Health",
    followers: 47000,
    engagement: 7.1,
    avg_likes: 3337,
    rate_per_post: 4500,
    instagram: "@fitwithroht",
    location: "Delhi"
  },
  {
    id: 4,
    name: "Spice & Stories",
    category: "food",
    categoryLabel: "Food & Cooking",
    followers: 130000,
    engagement: 6.3,
    avg_likes: 8190,
    rate_per_post: 12000,
    instagram: "@spiceandstories",
    location: "Bangalore, Karnataka"
  },
  {
    id: 5,
    name: "WanderWithNeha",
    category: "travel",
    categoryLabel: "Travel & Lifestyle",
    followers: 320000,
    engagement: 2.9,
    avg_likes: 9280,
    rate_per_post: 25000,
    instagram: "@wanderwithneha",
    location: "Pune, Maharashtra"
  },
  {
    id: 6,
    name: "MoneyMindset",
    category: "finance",
    categoryLabel: "Finance & Business",
    followers: 95000,
    engagement: 4.6,
    avg_likes: 4370,
    rate_per_post: 9000,
    instagram: "@moneymindset",
    location: "Hyderabad, Telangana"
  },
  {
    id: 7,
    name: "LearnWithAman",
    category: "education",
    categoryLabel: "Education",
    followers: 175000,
    engagement: 8.2,
    avg_likes: 14350,
    rate_per_post: 15000,
    instagram: "@learnwithaman",
    location: "Jaipur, Rajasthan"
  },
  {
    id: 8,
    name: "ComedyWithKaran",
    category: "entertainment",
    categoryLabel: "Entertainment & Comedy",
    followers: 520000,
    engagement: 9.1,
    avg_likes: 47320,
    rate_per_post: 45000,
    instagram: "@comedywithkaran",
    location: "Mumbai, Maharashtra"
  }
];


function formatNumber(num) {
  // Converts raw numbers into readable format:
  // 85000 → "85K", 1200000 → "1.2M"
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

function getInitials(name) {
  return name
    .split(' ')              
    .map(word => word[0])    
    .join('');               
}

function renderCards(influencers) {
  const grid = document.getElementById('influencer-grid');
  const noResults = document.getElementById('no-results');
  const resultsCount = document.getElementById('results-count');
  grid.innerHTML = '';

  if (influencers.length === 0) {
    noResults.style.display = 'block';
    resultsCount.textContent = 'No influencers found';
    return;
  }

  noResults.style.display = 'none';
  resultsCount.textContent = `Showing ${influencers.length} influencer${influencers.length > 1 ? 's' : ''}`;

  influencers.forEach(function(influencer) {

    const card = document.createElement('div');
    card.className = 'influencer-card';
    card.innerHTML = `
      <div class="card-avatar">${getInitials(influencer.name)}</div>
      <div class="card-name">${influencer.name}</div>
      <div class="card-category">${influencer.categoryLabel}</div>

      <div class="card-stats">
        <div class="card-stat">
          <div class="card-stat-value">${formatNumber(influencer.followers)}</div>
          <div class="card-stat-label">Followers</div>
        </div>
        <div class="card-stat">
          <div class="card-stat-value">${influencer.engagement}%</div>
          <div class="card-stat-label">Engagement</div>
        </div>
        <div class="card-stat">
          <div class="card-stat-value">${formatNumber(influencer.avg_likes)}</div>
          <div class="card-stat-label">Avg Likes</div>
        </div>
      </div>

      <div class="card-rate">Rate: <span>₹${influencer.rate_per_post.toLocaleString('en-IN')}/post</span></div>
      <div class="card-rate">${influencer.instagram} · ${influencer.location}</div>

      <button class="card-connect-btn" onclick="handleConnect(${influencer.id})">
        Send Collaboration Request
      </button>
    `;

    grid.appendChild(card);
  });
}

function applyFilters() {
  // Read current filter values
  const niche = document.getElementById('filter-niche').value;
  const minFollowers = parseInt(document.getElementById('filter-followers').value);
  const minEngagement = parseFloat(document.getElementById('filter-engagement').value);
  const maxBudget = parseInt(document.getElementById('filter-budget').value);
  const searchName = document.getElementById('filter-search').value.trim().toLowerCase();

  

  const filtered = allInfluencers.filter(function(influencer) {
    if (niche !== 'all' && influencer.category !== niche) return false;

    if (influencer.followers < minFollowers) return false;

    if (influencer.engagement < minEngagement) return false;

    if (influencer.rate_per_post > maxBudget) return false;

    if (searchName !== '' && !influencer.name.toLowerCase().includes(searchName)) return false;
    
    return true;
    
  });

  renderCards(filtered);
}

function handleConnect(influencerId) {
  
  alert(`Collaboration request sent! (Will connect to backend in Phase 3)`);
  console.log('Connect clicked for influencer ID:', influencerId);
}
document.getElementById('apply-filters').addEventListener('click', applyFilters);
document.getElementById('reset-filters').addEventListener('click', function() {
  document.getElementById('filter-niche').value = 'all';
  document.getElementById('filter-followers').value = '0';
  document.getElementById('filter-engagement').value = '0';
  document.getElementById('filter-budget').value = '999999';
  document.getElementById('filter-search').value = '';

  renderCards(allInfluencers);
});

document.getElementById('filter-search').addEventListener('input', applyFilters);

renderCards(allInfluencers);