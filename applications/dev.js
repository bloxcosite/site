var unId = (Math.random() * 10).toString(36).replace('.', '')

/*function loadapp() {
    document.getElementById('mainForm').innerHTML = `
    <form action="https://docs.google.com/forms/d/e/1FAIpQLSf6qoIJB7h5Ei6SV3l9mN3ycq1Bo6VlIARK34nEFWfqjq3ufA/formResponse" method="post" target="sucessMessage" onsubmit="submitted = true">

    <!-- Question meetreqs -->
    <div id="q-meetrequirements">
      <label class="fw-bold form-check-label">Do you meet the <a href="#" data-bs-toggle="modal"
          data-bs-target="#exampleModal">requirements</a>?<span class="required">*</span></label>
      <span class="text-danger" id="error-nomeetreq"></span><br />

      <input class="form-check-input" type="radio" name="entry.1558978144" id="meetrequirementsopt" value="Yes"
        required>
      <label class="form-check-label" for="meetrequirementsopt">Yes, I meet the requirements.</label><br>

      <input class="form-check-input" type="radio" name="entry.1558978144" id="dontmeetrequirementsopt" value="No"
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
      <input name="entry.1297779522" id="discordtag" class="form-control" required minlength="2" maxlength="32">
      <hr />
    </div>
    <!-- Question discordtag -->

    <!-- Question robloxuser -->
    <div id="q-robloxuser" class="mt-3">
      <label for="robloxuser" class="fw-bold">What is your Roblox Username?<span class="required">*</span></label>
      <span class="text-danger" id="usernameError"></span>
      <br>
      <input name="entry.676113539" id="robloxuser" class="form-control" maxlength="20" required>
      <hr />
    </div>
    <!-- Question robloxuser -->

    <!-- Question great addition -->
    <div id="q-whygreataddition" class="mt-3">
      <label for="greatadditionquestion" class="fw-bold">Why do you think you'll make a great addition?<span
          class="required">*</span> <span style="font-size: small; font-weight: 300;">Provide a minimum of 2
          sentences.</span></label>
      <br />
      <input name="entry.1637324133" id="greatadditionquestion" class="form-control" required minlength="20">
      <hr />
    </div>
    <!-- Question great addition -->

    <!-- Question why join -->
    <div id="q-yjoindev" class="mt-3">
      <label for="yjoindev" class="fw-bold">Why do you want to join the Development Team?<span class="required">*</span> <span
          style="font-size: small; font-weight: 300;">Provide a minimum of 2 sentences.</span></label>
      <br />
      <input name="entry.1702676137" id="yjoindev" class="form-control" required minlength="10">
      <hr />
    </div>
    <!-- Question why join -->

    <!-- Question strengths -->
    <div id="q-strengths" class="mt-3">
      <label for="strengfhtquestion" class="fw-bold">Provide some of your strengths.<span
          class="required">*</span> <span style="font-size: small; font-weight: 300;">Provide a minimum of 2
          strenghts.</span></label>
      <br />
      <input name="entry.1462851399" id="strengfhtquestion" class="form-control" required minlength="5">
      <hr />
    </div>
    <!-- Question  strengths -->

    <!-- Question weaknesses -->
    <div id="q-weaknesses" class="mt-3">
      <label for="weaknessesq" class="fw-bold">Provide some of your weaknesses.<span class="required">*</span>
        <span style="font-size: small; font-weight: 300;">Provide a minimum of 1 weakness.</span></label>
      <br />
      <input name="entry.925928335" id="weaknessesq" class="form-control" required minlength="3">
      <hr />
    </div>
    <!-- Question weaknesses -->

    <!-- Question comments? -->
    <div id="q-uhavecomments" class="mt-3">
      <label for="uhavecommentss" class="fw-bold">Do you have any extra information/comments?
        <span style="font-size: small; font-weight: 300;">If not, leave open.</span></label>
      <br />
      <input name="entry.1293895348" id="uhavecommentss" class="form-control">
      <hr />
    </div>
    <!-- Question comments? -->

    <!-- Question exp -->
    <div id="q-exp">
      
      <label class="fw-bold">Do you have any past experience in the field of development?<span
          class="required">*</span></label><br />
      <input type="radio" name="entry.867206986" id="yesexp" value="Yes" class="form-check-input" required>
      <label for="yesexp">Yes, I have past development experience.</label><br>
      <input type="radio" name="entry.867206986" id="no" value="No" class="form-check-input">
      <label for="no">No, I do not have any past development experience.</label><br>
      <hr />
    </div>
    <!-- Question exp -->

    <!-- Question comments? -->
    <div id="q-pastworkprovide" class="mt-3">
      <label for="pastworkprovide" class="fw-bold">Provide a link to your <a title="Past work" href="#q-pastworkprovide">portfolio</a>.<span
      class="required">*</span>
        <span style="font-size: small; font-weight: 300;">Don't have one? Put some images on a google doc, share it, and send the url here.</span></label>
      <br />
      <input name="entry.1565504565" id="pastworkprovide" class="form-control">
      <hr />
    </div>
    <!-- Question comments? -->

    <!-- Question areustaff -->
    <div id="q-areyoustaff">
      <label class="fw-bold form-check-label">Are you staff at Bloxco Supermarket already?<span
          class="required">*</span></label><br />
      <input class="form-check-input" type="radio" name="entry.132675210" id="areustaffyes" value="Yes" required>
      <label class="form-check-label" for="areustaffyes">Yes, I am a staff member.</label><br>

      <input class="form-check-input" type="radio" name="entry.132675210" id="areustaffno" value="No">
      <label class="form-check-label" for="areustaffno">No, I am not a staff member.</label><br>
    </div>
    <!-- Question areustaff -->

    <!-- Question wrank (not shown if not staff) -->
    <div id="q-whatrankisuserquestion" class="mt-3" style="display: none;">
      <hr />
      <label for="whatrankisuser" class="fw-bold">What rank are you?<span class="required">*</span></label><br>
      <input list="l1" name="entry.1258969994" id="whatrankisuser" class="form-control">
      <datalist id="l1">
        <!-- trainee and lower not seen as worker -->
        <option value="Junior Team Member"></option>
        <option value="Senior Team Member"></option>
        <option value="Management Intern"></option>
        <option value="Supervisor"></option>
        <option value="Shift Leader"></option>
        <option value="Assistant Manager"></option>
        <option value="Manager"></option>
        <option value="General Manager"></option>
        <option value="Assistant Director"></option>
        <option value="Director"></option>
        <option value="Regional Director"></option>
        <!-- stops at rd due to rd+ is shr -->
      </datalist>
    </div>
    <!-- Question wrank (not shown if not staff) https://docs.google.com/forms/d/e/1FAIpQLSf6qoIJB7h5Ei6SV3l9mN3ycq1Bo6VlIARK34nEFWfqjq3ufA/viewform?usp=pp_url&entry.1862330229=123-->

    <!-- Question term -->
    <div id="q-termination">
      <hr />
      <label class="fw-bold">Do you understand that we are able to terminate you if needed at any point in
        time?<span class="required">*</span></label><br />
      <input type="radio" name="entry.531372543" id="q1_ff" value="Yes" class="form-check-input" required>
      <label for="q1_ff">Yes, I understand.</label><br>
      <input type="radio" name="entry.531372543" id="q1_f" value="No" class="form-check-input">
      <label for="q1_f">No, I do not understand.</label><br>
    </div>
    <!-- Question term -->


    <!-- extra info -->
      <div id="q-" class="mt-3" style="display: none;">
        <label for="zef" class="fw-bold">technical info<span class="required">*</span>
          <span style="font-size: small; font-weight: 300;">Don't edit</span></label>
        <br />
          <input name="entry.1614805812" id="zef" value="user-is-sure.-App-sent-from-bloxco-site" required>
          <label for="zeffff" class="fw-bold">technical info<span class="required">*</span>
          <input name="entry.1862330229" id="zeffff" value="--${unId}!-" required>
        <hr />
      </div>
    <!--extra info-->

    <div id="end"><hr/><p><i>You will be contacted through Discord by one of our SHR+ if we need more information. Please enable your DMs.</i></p></div>

    <!--SUBMIT FORM--> <button type="submit" class="btn btn-primary mt-3" id="hrSubmit">Submit</button><br /><span
      class="text-danger" id="error-submit"></span>
  </form>
`
  } */

function loadapp() {
    document.getElementById('mainForm').innerHTML = `    <h4>Apply through our <span class="accent">Discord Server</span>.
</h4><p><a href="../discord">Open a ticket</a> and send us your past work, and why you would like to develop for Bloxco.</p>`
}
