// Saves options to localStorage.
function save_options(e) {
  localStorage["uni"] = document.getElementById("uni").value;
  localStorage["pw"]  = document.getElementById("pw").value;
  
  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 1000);
  e.preventDefault();
}

// Restores saved options from localStorage.
function restore_options() {
  var data_uni = localStorage["uni"];
  if (null != data_uni)
    document.getElementById("uni").value = data_uni;
  var data_pw = localStorage["pw"];
  if (null != data_pw)
    document.getElementById("pw").value = data_pw;

  document.getElementById("uni").focus();
}

/* When DOM has loaded, restore form values if exist, 
 * then add listener for "save" button click */
document.addEventListener('DOMContentLoaded', function () {
  restore_options();
  document.querySelector('button').addEventListener('click', save_options);
  document.querySelector('form').addEventListener('submit', save_options);
});
