const cardTemplateHROTM = `
<div class="col mb-4">
<div class="profilecard card dark-mode" {{previousClass}}>
  <img id="shrProfilePic" loading="lazy" src="https://avatar.hyra.io/avatar/{{userId}}.png" class="{{previousClass}} card-img-top pfp mx-auto d-block {{bgClass}}" alt="{{username}}'s avatar" {{previousImgStyle}}>
  <div class="card-body">
    <h5 class="card-title {{previousClass}}">{{username}} <span class="aka">({{aka}})</span></h5>
    <h6 class="card-title text-secondary {{previousClass}}">{{rank}}</h6>
    <p class="card-text {{previousClass}}">{{desc_html}}
    </p>
  </div>
</div>
</div>
`;

function fillCardTemplate(member, bgClass, isCurrent) {
  return cardTemplateHROTM
    .replace(/{{username}}/g, member.username)
    .replace(/{{aka}}/g, member.aka)
    .replace(/{{userId}}/g, member.userid)
    .replace(/{{rank}}/g, member.rank)
    .replace(/{{desc_html}}/g, member.desc_html)
    .replace(/{{previousClass}}/g, isCurrent ? '' : 'previous-hrotm')
    .replace(/{{previousImgStyle}}/g, isCurrent ? '' : 'style="background-color: #1F1F1F !important;"')
    .replace(/{{bgClass}}/g, bgClass);
}

function addCardsToPage(data) {
  const loadApp = document.getElementById('loadAppHROTM');
  const colors = ['blue', 'purple', 'yellow', 'cyan', 'pink', 'green', 'orange'];
  let colorIndex = 0;

  data.forEach((member) => {
    const bgClass = `bgh-${colors[colorIndex % colors.length]}`;
    const cardHtml = fillCardTemplate(member, bgClass, member.current);
    loadApp.innerHTML += cardHtml;
    colorIndex++;
  });
}

function fetchData() {
  fetch('/src/code/json/hrotm.json')
    .then(response => response.json())
    .then(data => addCardsToPage(data))
    .catch(error => console.error('Error fetching data:', error));
}