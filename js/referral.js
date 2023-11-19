/* https://www.roblox.com/games/start?placeId=9901611189&launchData= */
const referralCode = urlParams.get('ref')

if (referralCode) {
    const joinurl = `https://www.roblox.com/games/start?placeId=9901611189&launchData=${referralCode}`
    window.location.replace(
        joinurl,
      );
}
