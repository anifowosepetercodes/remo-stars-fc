
  const fn = document.getElementById("fn");

  fn.addEventListener("blur", function () {
    if (fn.value.trim() === "") {
        fn.classList.add("errors");
    }else{
        fn.classList.remove("errors");
    }
  });

const ln = document.getElementById("ln");

ln.addEventListener("blur", function () {
  if (ln.value.trim() === "") {
    ln.classList.add("errors");
  } else {
    ln.classList.remove("errors");
  }
});

  const pn = document.getElementById("pn");

  pn.addEventListener("blur", function () {
    if (pn.value.trim() === "") {
        pn.classList.add("errors");
    }else{
        pn.classList.remove("errors");
    }
  });

  const em = document.getElementById("em");

  em.addEventListener("blur", function () {
    if (em.value.trim() === "") {
        em.classList.add("errors");
    }else{
        em.classList.remove("errors");
    }
  });

  const sub = document.getElementById("sub");

  sub.addEventListener("blur", function () {
    if (sub.value.trim() === "") {
        sub.classList.add("errors");
    }else{
        sub.classList.remove("errors");
    }
  });

  const mess = document.getElementById("mess");

  mess.addEventListener("blur", function () {
    if (mess.value.trim() === "") {
        mess.classList.add("errors");
    }else{
        mess.classList.remove("errors");
    }
  });


  
    function submits(event) {
         
        event.preventDefault()
               
        const fn = document.getElementById("fn").value;
        const ln = document.getElementById("ln").value;
        const em = document.getElementById("em").value;
        const pn = document.getElementById("pn").value;
        const sub = document.getElementById("sub").value;
        const mess = document.getElementById("mess").value;


        const fnerror = document.getElementById("fn-error");
        const lnerror = document.getElementById("ln-error");
        const emerror = document.getElementById("em-error");
        const pnerror = document.getElementById("pn-error");
        const suberror = document.getElementById("sub-error");
        const messerror = document.getElementById("mess-error");

        hasError = false;

        if (fn === "") {
            fnerror.textContent = "input your first name"
            hasError = true;
        }else{
            fnerror.textContent = ""
        } 
        if (ln === "") {
            lnerror.textContent = "input your last name"
            hasError = true;
        }else{
            lnerror.textContent = ""
        } 
        if (pn === "") {
            pnerror.textContent = "input your phone number"
            hasError = true;
        }else{
            pnerror.textContent = ""
        } 
        if (em === "") {
            emerror.textContent = "input your email address"
            hasError = true;
        }else{
            emerror.textContent = ""
        } 
        if (sub.length < 5 ) {
            suberror.textContent = "minimum subject length is 5 character"
            hasError = true;
        }else{
            suberror.textContent = ""
        } 
        if (mess.length < 10 ) {
            messerror.textContent = "minimum message length is 10 character"
            hasError = true;
        }else{
            messerror.textContent = ""
        } 
        const allowDomain = ["@gmail.com","@yahoo.com","@outlook.com","@hotmail.com"];
        const validDomain = allowDomain.some(domain => em.endsWith(domain));

        if (!validDomain ) {
            emerror.textContent = "invalid email address"
            hasError = true;
        }else{
            emerror.textContent = ""
        } 
         
        if (hasError) {
            return;
        }

        if (confirm("Are you sure all information are correct?")) {
            alert("message recieved");
            document.getElementById("submit").submit();
        }else{
            alert("Please review your infromation");
        } 
    }

    // INPUT TO BE NUMBER
   const pninput = document.getElementById("pn");
    
   pninput.addEventListener("input", 
    function () {
       let original = pninput.value || ""; 
       let filt = original.replace(/[^0-9]/g, "");
       
       pninput.value = filt;
    })
