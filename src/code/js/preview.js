function checkPreview() {
    const previewprm = urlParams.get('preview');
    if (previewprm) {
      if (previewprm == "iib6DnS-GNJLbkE-8ria-Gkfd-LSw9mAp6e-Am_") {
    const currentDate = new Date();
    const targetDate = new Date('2023-12-02');
    if (currentDate >= targetDate) {
        document.getElementById('mainpage').innerHTML = `
        <div class="text-center">
            <p>Here's your preview 😉</p>
            <img draggable="false" src="https://media.discordapp.net/attachments/1051567343081365645/1174796738754785310/pv.png?ex=6568e5b9&is=655670b9&hm=72a7298f5d5fd6e2f2378c57d21bb066379c9dbf02fabe28ae7840f0b4344b47&=&width=744&height=510" class="img-fluid" alt="Sneakpeek V4">
        </div>
  <br/>
        `} else {
            document.getElementById('mainpage').innerHTML = `
            <div class="alert alert-danger" style="display: block !important;">
            <strong>
              Nuh uh</strong>:
            You aint getting any previews before December 2nd!!!
          </div>
            `
        }
      }
    }
  }
  
  if (window.location.pathname == "/index") {
    checkPreview()
   } else {
    if (window.location.pathname == "/index.html") {
      checkPreview()
     } else {
      if (window.location.pathname == "/") {
        checkPreview()
       } else {
        console.warn("No preview provided.")
       }
     }
   }