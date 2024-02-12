let cardTemplateSHR = `
  <div class="col mb-4">
    <div class="profilecard card dark-mode">
      <img loading="lazy" id="shrProfilePic" src="https://avatar.hyra.io/avatar/{{userId}}.png" class="card-img-top pfp mx-auto d-block {{bgClass}}" alt="{{username}}'s avatar" onclick="window.open('https://www.roblox.com/users/{{userId}}/profile','_blank');">
      <div class="card-body">
        <h5 class="card-title">{{username}} <span class="aka">({{aka}})</span></h5>
        <h6 class="card-title text-secondary">{{rank}}</h6>
        <p class="card-text">{{desc_html}}</p>
      </div>
    </div>
  </div>
`;

function fillCardTemplateShr(member, bgClass) {
  return cardTemplateSHR
    .replace(/{{username}}/g, member.username)
    .replace(/{{aka}}/g, member.aka)
    .replace(/{{userId}}/g, member.userid)
    .replace(/{{rank}}/g, member.rank)
    .replace(/{{desc_html}}/g, member.desc_html)
    .replace(/{{bgClass}}/g, bgClass);
}

function addCardsToPageSHR(data) {
  let loadAppShr = document.getElementById('loadApp');
  let colors = ['blue', 'purple', 'yellow', 'cyan', 'pink', 'green', 'orange'];
  let colorIndex = 0;

  data.forEach((member) => {
    let bgClass = `bgh-${colors[colorIndex % colors.length]}`;
    let cardHtmlShr = fillCardTemplateShr(member, bgClass);
    loadAppShr.innerHTML += cardHtmlShr;
    colorIndex++;
  });
}

function fetchDataShr() {
  fetch('/src/code/json/shrs.json')
    .then(response => response.json())
    .then(data => addCardsToPageSHR(data))
    .catch(error => console.error('Error fetching data:', error));
}

window.addEventListener('load', function () {
  fetchDataShr();
  fetchData();
  console.warn('loaded shrs and hrotm');
});