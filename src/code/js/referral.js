/* https://www.roblox.com/games/start?placeId=9901611189&launchData= */
const urlParams = new URLSearchParams(window.location.search);
const referralCode = urlParams.get('ref')

if (referralCode) {
  /*  const joinurl = `https://www.roblox.com/games/start?placeId=9901611189&launchData=${referralCode}`
    window.location.replace(
        joinurl,
      ); */
      setTimeout(() => {

    const inactive_alert = `
    <div class="alert alert-danger" style="display: block !important;">
    <strong>
      <i class="fa-solid fa-xmark" style="color: #d00b0b;"></i>
      Referrals</strong>:
   Uh-oh! It seems like referral codes have been disabled. We're sorry!
  </div>
    `
    document.getElementById('alert-container').innerHTML = document.getElementById('alert-container').innerHTML + inactive_alert;
    console.warn('[Referrals]: User tried to use a code, but failed. Alert displayed')
  }, "500");

}
