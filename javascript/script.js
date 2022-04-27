function toggle() {
  document.getElementById('menu').classList.toggle('show')
  document.getElementById('menuIcon').classList.toggle('show')
}

var settings = {
  "url": "https://api.ecoledirecte.com/v3/login.awp",
  "method": "POST",
  "timeout": 0,
  "data": `data={"identifiant": "mgrunnagel-spc","motdepasse": "/ngbV5y7"}`,
};
var settings2 = {
  "url": "https://api.ecoledirecte.com/v3/{{account_type}}/{{id}}/emploidutemps.awp?verbe=get",
  "method": "POST",
  "timeout": 0,
  "data": `data={"dateDebut": "2020-06-05","dateFin": "2020-06-05","avecTrous": false,"token": "${token}"}`,
};


$.ajax(settings).done(function (response) {
  console.log(response);
  token = response.token
  $.ajax(settings2).done(function (response) {
    console.log(response);
  });
});


