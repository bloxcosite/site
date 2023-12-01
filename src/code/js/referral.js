/* https://www.roblox.com/games/start?placeId=9901611189&launchData= */
const referralCode = urlParams.get('ref')

if (referralCode) {
  /*  const joinurl = `https://www.roblox.com/games/start?placeId=9901611189&launchData=${referralCode}`
    window.location.replace(
        joinurl,
      ); */
    const inactive_alert = `
    <div class="alert alert-danger" style="display: block !important;">
    <strong>
      <i class="fa-solid fa-xmark" style="color: #d00b0b;"></i>
      Referrals</strong>:
   Uh-oh! It seems like referral codes have been disabled. We're sorry!
  </div>
    `
    document.getElementById('alert-container').innerHTML = document.getElementById('alert-container').innerHTML + inactive_alert
}
