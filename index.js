const _ = (id) => document.getElementById(id);

_("submitBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const alertShow = _("alertShow");
  const codeValue = _("codeEnter").value;

  if (codeValue) {
    _("codeShow").innerHTML = codeValue.replace(/(\r\n|\n|\r)/gm, "").trim();
    _("validationServer").innerText = "";
    _("lattesIs").innerText = codeValue.length || "0";

    alertShow.classList.remove("alert-success");
    alertShow.innerText = "";
  } else {
    _("validationServer").innerText = "You not enter any text...";
    console.log("You not enter any text");

    alertShow.classList.remove("alert-success");
    alertShow.innerText = "";
  }

  _("copyBtn").addEventListener("click", (e) => {
    e.preventDefault();
    const showCode = _("codeShow").value;
    alertShow.classList.add("alert-success");

    if (showCode) {
      _("codeShow").select();
      _("codeShow").setSelectionRange(0, 99999);
      alertShow.innerText = "Copy to clipboard";

      navigator.clipboard.writeText(showCode);
    } else {
      alertShow.innerText = "Copy not work!";
    }

    /* someText.replaceAll("\n", "")*/
  });
  _("codeEnter").value = "";
});

// const _ = (id) => document.getElementById(id);
// _("submitBtn").addEventListener("click", (e) => {
//   e.preventDefault();
//   const alertShow = _("alertShow");
//   const codeValue = _("codeEnter").value;
//   console.log(codeValue.replaceAll("\n", ""));
//   if (codeValue) {
//     _("codeShow").innerHTML = codeValue.replace(/(\r\n|\n|\r)/gm, "");
//     _("validationServer").innerText = "";
//     alertShow.innerText = "";
//     alertShow.classList.remove("alert-primary");
//   } else {
//     _("validationServer").innerText = "You not enter any text...";
//     console.log("You not enter any text");
//     alertShow.innerText = "";
//     alertShow.classList.remove("alert-primary");
//   }
//   _("copyBtn").addEventListener("click", (e) => {
//     e.preventDefault();
//     const showCode = _("codeShow").value;
//     alertShow.classList.add("alert-success");
//     _("codeShow").select();
//     _("codeShow").setSelectionRange(0, 99999);
//     alertShow.innerText = "Copy to clipboard";
//     navigator.clipboard.writeText(showCode); /* someText.replaceAll("\n", "")*/
//   });
//   _("codeEnter").value = "";
// });
