function checkPreview() {
  const previewprm = urlParams.get('preview');
  if (previewprm) {
    if (previewprm == "December7") {
  const currentDate = new Date();
  const targetDate = new Date('2023-12-07');
  if (currentDate >= targetDate) {
      document.getElementById('mainpage').innerHTML = `
      <div class="text-center">
          <p>Here's your preview 😉</p>
          <img draggable="false" src="https://media.discordapp.net/attachments/1051567343081365645/1178433814826074273/pv.png" class="img-fluid" alt="Sneakpeek V4">
      </div>
<br/>
      `} else {
          document.getElementById('mainpage').innerHTML = `
          <div class="alert alert-danger" style="display: block !important;">
          <strong>
            Nuh uh</strong>:
          You aint getting any previews before December 7th!!!
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