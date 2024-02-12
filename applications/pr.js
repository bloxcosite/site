var unId = (Math.random() * 10).toString(36).replace('.', '')

function loadapp() {
    document.getElementById('mainForm').innerHTML = `<form action="https://docs.google.com/forms/d/e/1FAIpQLScjelsXrUVsLUe5lNJQk9fBeE7QcFPF0oD7g4ph2IywPhYEbg/formResponse" method="post" target="sucessMessage" onsubmit="submitted = true">

<!-- Question meetreqs -->
<div id="q-meetrequirements">
  <label class="fw-bold form-check-label">Do you meet the <a href="#" data-bs-toggle="modal"
      data-bs-target="#exampleModal">requirements</a>?<span class="required">*</span></label>
  <span class="text-danger" id="error-nomeetreq"></span><br />

  <input class="form-check-input" type="radio" name="entry.220889969" id="meetrequirementsopt" value="Yes"
    required>
  <label class="form-check-label" for="meetrequirementsopt">Yes, I meet the requirements.</label><br>

  <input class="form-check-input" type="radio" name="entry.220889969" id="dontmeetrequirementsopt" value="No"
    checked>
  <label class="form-check-label" for="dontmeetrequirementsopt">No, I do not meet the
    requirements.</label><br>
  <hr />
</div>
<!-- Question meetreqs -->

<!-- Question discordtag -->
<div id="q-discordtag" class="mt-3">
  <label for="discordtag" class="fw-bold">What is your Discord Username?<span class="required">*</span> <span
      style="font-size: small; font-weight: 300;">If you still have a username with a tag, please provide the
      tag too.</span></label>
  <br>
  <input name="entry.715494670" id="discordtag" class="form-control" required minlength="2" maxlength="32">
  <hr />
</div>
<!-- Question discordtag -->

<!-- Question robloxuser -->
<div id="q-robloxuser" class="mt-3">
  <label for="robloxuser" class="fw-bold">What is your Roblox Username?<span class="required">*</span></label>
  <span class="text-danger" id="usernameError"></span>
  <br>
  <input name="entry.1989923573" id="robloxuser" class="form-control" maxlength="20" required>
  <hr />
</div>
<!-- Question robloxuser -->

<!-- Question standout addition -->
<div id="q-whygreataddition" class="mt-3">
  <label for="greatadditionquestion" class="fw-bold">What makes you stand out from other applicants?<span
      class="required">*</span> <span style="font-size: small; font-weight: 300;">Provide a minimum of 2
      sentences.</span></label>
  <br />
  <input name="entry.1806749978" id="greatadditionquestion" class="form-control" required minlength="20">
  <hr />
</div>
<!-- Question great addition -->

<!-- Question why join -->
<div id="q-yjoindev" class="mt-3">
  <label for="yjoindev" class="fw-bold">Why do you want to join the PR Team?<span class="required">*</span> <span
      style="font-size: small; font-weight: 300;">Provide a minimum of 2 sentences.</span></label>
  <br />
  <input name="entry.934905255" id="yjoindev" class="form-control" required minlength="10">
  <hr />
</div>
<!-- Question why join -->


<!-- Question strengths -->
<div id="q-strengths" class="mt-3">
  <label for="strengfhtquestion" class="fw-bold">Provide some of your strengths & weaknesses.<span
      class="required">*</span> <span style="font-size: small; font-weight: 300;">Provide a minimum of 2
      strenghts.</span></label>
  <br />
  <input name="entry.260443796" id="strengfhtquestion" class="form-control" required minlength="5">
  <hr />
</div>
<!-- Question  strengths -->

<!-- Question comments? -->
<div id="q-uhavecomments" class="mt-3">
  <label for="uhavecommentss" class="fw-bold">Do you have any extra information/comments?
    <span style="font-size: small; font-weight: 300;">If not, leave open.</span></label>
  <br />
  <input name="entry.301263944" id="uhavecommentss" class="form-control">
  <hr />
</div>
<!-- Question comments? -->

<!-- Question exp -->
<div id="q-exp">
  
  <label class="fw-bold">Do you have any past experience in the field of PR?<span
      class="required">*</span></label><br />
  <input type="radio" name="entry.1805851633" id="yesexp" value="Yes" class="form-check-input" required>
  <label for="yesexp">Yes, I have past PR experience.</label><br>
  <input type="radio" name="entry.1805851633" id="no" value="No" class="form-check-input">
  <label for="no">No, I do not have any past PR experience.</label><br>
  <hr />
</div>
<!-- Question exp -->

<div id="q-areyoustaff">
  <label class="fw-bold form-check-label">What department are you applying for?<span
      class="required">*</span></label><br />
  <input class="form-check-input" type="radio" name="entry.646499949" id="EngagementTeam" value="Engagement-Team" required>
  <label class="form-check-label" for="EngagementTeam">Engagement Team</label><br>

  <input class="form-check-input" type="radio" name="entry.646499949" id="socialmedia" value="Social-Media-Team">
  <label class="form-check-label" for="socialmedia">Social Media Team</label><br>

  <input class="form-check-input" type="radio" name="entry.646499949" id="MarketingTeam" value="Marketing-Team">
  <label class="form-check-label" for="MarketingTeam">Marketing Team</label><br>

  <input class="form-check-input" type="radio" name="entry.646499949" id="PartnershipTeam" value="Partnership-Team">
  <label class="form-check-label" for="PartnershipTeam">Partnership Team</label><br>
</div>

<!-- Question portfolio? -->
<div id="q-whatrankisuserquestion" class="mt-3" style="display: none;">
    <hr/>
  <label for="pastworkprovide" class="fw-bold">Provide a link to your <a title="Past work" href="#q-pastworkprovide">portfolio</a>.<span
  class="required">*</span>
    <span style="font-size: small; font-weight: 300;">Don't have one? Put some images on a google doc, share it, and send the url here.</span></label>
  <br />
  <input name="entry.338603865" id="pastworkprovide" class="form-control">
</div>
<!-- Question portfolio? -->

<!-- Question term -->
<div id="q-termination">
  <hr />
  <label class="fw-bold">Do you understand that we are able to terminate you if needed at any point in
    time?<span class="required">*</span></label><br />
  <input type="radio" name="entry.1697771545" id="q1_ff" value="Yes" class="form-check-input" required>
  <label for="q1_ff">Yes, I understand.</label><br>
  <input type="radio" name="entry.1697771545" id="q1_f" value="No" class="form-check-input">
  <label for="q1_f">No, I do not understand.</label><br>
</div>
<!-- Question term -->

<!-- Question share app status -->
<div id="q-shuarerere">
  <hr />
  <label class="fw-bold">Do you agree not to share the status of your application, nor ask about it?<span class="required">*</span></label><br />
  <input type="radio" name="entry.1181452484" id="shuarerere" value="Yes" class="form-check-input" required>
  <label for="shuarerere">Yes, I agree.</label><br>
  <input type="radio" name="entry.1181452484" id="nopeagreenono" value="No" class="form-check-input">
  <label for="nopeagreenono">No, I do not agree.</label><br>
</div>
<!-- Question share app status -->


<!-- extra info -->
  <div id="q-" class="mt-3" style="display: none;">
    <label for="zef" class="fw-bold">technical info<span class="required">*</span>
      <span style="font-size: small; font-weight: 300;">Don't edit</span></label>
    <br />
      <input name="entry.1443938567" id="zef" value="user-is-sure.-App-sent-from-bloxco-site" required>
      <label for="zeffff" class="fw-bold">technical info<span class="required">*</span>
      <input name="entry.1121742937" id="zeffff" value="--${unId}!-" required>
    <hr />
  </div>
<!--extra info-->


<div id="end"><hr/><p><i>You will be contacted through Discord by one of our SHR+ if we need more information. Please enable your DMs.</i></p></div>

<!--SUBMIT FORM--> <button type="submit" class="btn btn-primary mt-3" id="hrSubmit">Submit</button><br /><span
  class="text-danger" id="error-submit"></span>
</form>` 

}
