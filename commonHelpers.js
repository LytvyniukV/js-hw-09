import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const e=document.querySelector(".feedback-form"),l="feedback-form-state";try{const t=JSON.parse(localStorage.getItem(l));Array.from(e.elements).forEach(a=>{t&&(a.value=t[a.name])})}catch{console.error("PARSE FORM STORAGE ERROR")}const r={};e.addEventListener("input",t=>{new FormData(e).forEach((o,s)=>{r[s]=o,localStorage.setItem(l,JSON.stringify(r))})});e.addEventListener("submit",t=>{t.preventDefault();const a=e.elements.email.value.trim(),o=e.elements.message.value.trim();!a||!o?alert("All form fields must be filled in"):(console.log(r),localStorage.removeItem(l),e.reset())});
//# sourceMappingURL=commonHelpers.js.map
