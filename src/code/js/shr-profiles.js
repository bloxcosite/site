let cardTemplateSHR = `
  <div class="col mb-4">
    <div class="profilecard card dark-mode">
      <img loading="lazy" id="shrProfilePic" src="https://avatar.hyra.io/colour/{{userId}}.png" class="card-img-top pfp mx-auto d-block" alt="{{username}}'s avatar" onclick="window.open('https://www.roblox.com/users/{{userId}}/profile','_blank');">
      <div class="card-body">
        <h5 class="card-title">{{username}} <span class="aka">({{aka}})</span></h5>
        <h6 class="card-title text-secondary">{{rank}}</h6>
        <p class="card-text">{{desc_html}}</p>
      </div>
    </div>
  </div>
`;

function fillCardTemplateShr(member) {
  return cardTemplateSHR
    .replace(/{{username}}/g, member.username)
    .replace(/{{aka}}/g, member.aka)
    .replace(/{{userId}}/g, member.userid)
    .replace(/{{rank}}/g, member.rank)
    .replace(/{{desc_html}}/g, member.desc_html);
}

function addCardsToPageSHR(data) {
  let loadAppShr = document.getElementById('loadApp');
  
  data.forEach((member) => {
    let cardHtmlShr = fillCardTemplateShr(member);
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
});
