const body = document.getElementById("body");

let container = [
  document.getElementById("ruang-tamu"),
  document.getElementById("ruang-keluarga"),
  document.getElementById("ruang-makan"),
  document.getElementById("kamar-tidur"),
];

let judul = [
  document.getElementById("judul-ruangTamu"),
  document.getElementById("judul-ruangKeluarga"),
  document.getElementById("judul-ruangMakan"),
  document.getElementById("judul-kamarTidur"),
];
let btn = [
  document.getElementById("btn-ruangTamu"),
  document.getElementById("btn-ruangKeluarga"),
  document.getElementById("btn-ruangMakan"),
  document.getElementById("btn-saklarUtama"),
];

let saklar = [
  document.getElementById("saklar-ruangTamu"),
  document.getElementById("saklar-ruangKeluarga"),
  document.getElementById("saklar-ruangMakan"),
  document.getElementById("saklar-utama"),
];

let divLampu = [
  document.getElementById("divLampu-1"),
  document.getElementById("divLampu-2"),
  document.getElementById("divLampu-3"),
  document.getElementById("divLampu-4"),
  document.getElementById("divLampu-5"),
  document.getElementById("divLampu-6"),
  document.getElementById("divLampu-7"),
  document.getElementById("divLampu-8"),
  document.getElementById("divLampu-9"),
  document.getElementById("divLampu-0"),
];

let toggle = [
  document.getElementById("toggle-1"),
  document.getElementById("toggle-2"),
  document.getElementById("toggle-3"),
  document.getElementById("toggle-4"),
  document.getElementById("toggle-5"),
  document.getElementById("toggle-6"),
  document.getElementById("toggle-7"),
  document.getElementById("toggle-8"),
  document.getElementById("toggle-9"),
  document.getElementById("toggle-0"),
];

let lampu = [
  document.getElementById("lampu-1"),
  document.getElementById("lampu-2"),
  document.getElementById("lampu-3"),
  document.getElementById("lampu-4"),
  document.getElementById("lampu-5"),
  document.getElementById("lampu-6"),
  document.getElementById("lampu-7"),
  document.getElementById("lampu-8"),
  document.getElementById("lampu-9"),
  document.getElementById("lampu-0"),
];

function saklarRT() {
  if (toggle[0].checked) {
    lampu[0].src = "assets/images/on.gif";
    divLampu[0].style.backgroundColor = "white";
  } else {
    lampu[0].src = "assets/images/off.gif";
    divLampu[0].style.backgroundColor = "black";
  }
  if (toggle[1].checked) {
    lampu[1].src = "assets/images/on.gif";
    divLampu[1].style.backgroundColor = "white";
  } else {
    lampu[1].src = "assets/images/off.gif";
    divLampu[1].style.backgroundColor = "black";
  }
  if (toggle[2].checked) {
    lampu[2].src = "assets/images/on.gif";
    divLampu[2].style.backgroundColor = "white";
  } else {
    lampu[2].src = "assets/images/off.gif";
    divLampu[2].style.backgroundColor = "black";
  }
  if (toggle[3].checked) {
    lampu[3].src = "assets/images/on.gif";
    divLampu[3].style.backgroundColor = "white";
  } else {
    lampu[3].src = "assets/images/off.gif";
    divLampu[3].style.backgroundColor = "black";
  }
  if (
    toggle[0].checked &&
    toggle[1].checked &&
    toggle[2].checked &&
    toggle[3].checked
  ) {
    container[0].style.backgroundColor = "white";
    judul[0].style.backgroundColor = "white";
    btn[0].style.backgroundColor = "white";
    saklar[0].textContent = "MATIKAN";
    saklar[0].style.backgroundColor = "red";
    saklar[0].onclick = saklarRTalloff;
  } else {
    container[0].style.backgroundColor = "black";
    judul[0].style.backgroundColor = "#1f96ff";
    btn[0].style.backgroundColor = "#1f96ff";
    saklar[0].textContent = "NYALAKAN";
    saklar[0].style.backgroundColor = "#474040";
    saklar[0].onclick = saklarRTall;
  }
}
function saklarRTall(nyala) {
  nyala == "on";
  toggle[0].checked = true;
  toggle[1].checked = true;
  toggle[2].checked = true;
  toggle[3].checked = true;
  lampu[0].src = "assets/images/on.gif";
  lampu[1].src = "assets/images/on.gif";
  lampu[2].src = "assets/images/on.gif";
  lampu[3].src = "assets/images/on.gif";
  divLampu[0].style.backgroundColor = "white";
  divLampu[1].style.backgroundColor = "white";
  divLampu[2].style.backgroundColor = "white";
  divLampu[3].style.backgroundColor = "white";
  container[0].style.backgroundColor = "white";
  judul[0].style.backgroundColor = "white";
  btn[0].style.backgroundColor = "white";
  saklar[0].textContent = "MATIKAN";
  saklar[0].style.backgroundColor = "red";
  saklar[0].onclick = saklarRTalloff;
}
function saklarRTalloff(mati) {
  mati == "off";

  toggle[0].checked = !true;
  toggle[1].checked = !true;
  toggle[2].checked = !true;
  toggle[3].checked = !true;
  lampu[0].src = "assets/images/off.gif";
  lampu[1].src = "assets/images/off.gif";
  lampu[2].src = "assets/images/off.gif";
  lampu[3].src = "assets/images/off.gif";
  divLampu[0].style.backgroundColor = "black";
  divLampu[1].style.backgroundColor = "black";
  divLampu[2].style.backgroundColor = "black";
  divLampu[3].style.backgroundColor = "black";
  container[0].style.backgroundColor = "black";
  judul[0].style.backgroundColor = "#1f96ff";
  btn[0].style.backgroundColor = "#1f96ff";
  saklar[0].textContent = "NYALAKAN";
  saklar[0].style.backgroundColor = "#474040";
  saklar[0].onclick = saklarRTall;
  body.style.backgroundColor = "black";
  saklar[3].onclick = saklarUtama;
  saklar[3].style.backgroundColor = "#474040";
  btn[3].style.backgroundColor = "#1f96ff";
  saklar[3].textContent = "NYALAKAN";
}
function saklarRK() {
  if (toggle[4].checked) {
    lampu[4].src = "assets/images/on.gif";
    divLampu[4].style.backgroundColor = "white";
  } else {
    lampu[4].src = "assets/images/off.gif";
    divLampu[4].style.backgroundColor = "black";
  }
  if (toggle[5].checked) {
    lampu[5].src = "assets/images/on.gif";
    divLampu[5].style.backgroundColor = "white";
  } else {
    lampu[5].src = "assets/images/off.gif";
    divLampu[5].style.backgroundColor = "black";
  }
  if (toggle[6].checked) {
    lampu[6].src = "assets/images/on.gif";
    divLampu[6].style.backgroundColor = "white";
  } else {
    lampu[6].src = "assets/images/off.gif";
    divLampu[6].style.backgroundColor = "black";
  }
  if (toggle[4].checked && toggle[5].checked && toggle[6].checked) {
    container[1].style.backgroundColor = "white";
    btn[1].style.backgroundColor = "white";
    judul[1].style.backgroundColor = "white";
    saklar[1].style.backgroundColor = "red";
    saklar[1].textContent = "MATIKAN";
    saklar[1].onclick = saklarRKalloff;
  } else {
    container[1].style.backgroundColor = "black";
    btn[1].style.backgroundColor = "#1f96ff";
    judul[1].style.backgroundColor = "#1f96ff";
    saklar[1].style.backgroundColor = "#474040";
    saklar[1].onclick = saklarRKall;
    saklar[1].textContent = "NYALAKAN";
  }
}
function saklarRKall(nyala) {
  nyala == "on";

  toggle[4].checked = true;
  toggle[5].checked = true;
  toggle[6].checked = true;
  container[1].style.backgroundColor = "white";
  btn[1].style.backgroundColor = "white";
  judul[1].style.backgroundColor = "white";
  saklar[1].style.backgroundColor = "red";
  saklar[1].textContent = "MATIKAN";
  saklar[1].onclick = saklarRKalloff;
  lampu[4].src = "assets/images/on.gif";
  lampu[5].src = "assets/images/on.gif";
  lampu[6].src = "assets/images/on.gif";
  divLampu[4].style.backgroundColor = "white";
  divLampu[5].style.backgroundColor = "white";
  divLampu[6].style.backgroundColor = "white";
}
function saklarRKalloff(mati) {
  mati == "off";
  toggle[4].checked = false;
  toggle[5].checked = false;
  toggle[6].checked = false;
  container[1].style.backgroundColor = "black";
  btn[1].style.backgroundColor = "#1f96ff";
  judul[1].style.backgroundColor = "#1f96ff";
  saklar[1].style.backgroundColor = "#474040";
  saklar[1].textContent = "NYALAKAN";
  saklar[1].onclick = saklarRKall;
  lampu[4].src = "assets/images/off.gif";
  lampu[5].src = "assets/images/off.gif";
  lampu[6].src = "assets/images/off.gif";
  divLampu[4].style.backgroundColor = "black";
  divLampu[5].style.backgroundColor = "black";
  divLampu[6].style.backgroundColor = "black";
  body.style.backgroundColor = "black";
  saklar[3].onclick = saklarUtama;
  saklar[3].style.backgroundColor = "#474040";
  btn[3].style.backgroundColor = "#1f96ff";
  saklar[3].textContent = "NYALAKAN";
}
function saklarRM() {
  if (toggle[7].checked) {
    lampu[7].src = "assets/images/on.gif";
    divLampu[7].style.backgroundColor = "white";
  } else {
    lampu[7].src = "assets/images/off.gif";
    divLampu[7].style.backgroundColor = "black";
  }
  if (toggle[8].checked) {
    lampu[8].src = "assets/images/on.gif";
    divLampu[8].style.backgroundColor = "white";
  } else {
    lampu[8].src = "assets/images/off.gif";
    divLampu[8].style.backgroundColor = "black";
  }
  if (toggle[7].checked && toggle[8].checked) {
    container[2].style.backgroundColor = "white";
    btn[2].style.backgroundColor = "white";
    judul[2].style.backgroundColor = "white";
    saklar[2].style.backgroundColor = "red";
    saklar[2].textContent = "MATIKAN";
    saklar[2].onclick = saklarRMalloff;
  } else {
    container[2].style.backgroundColor = "black";
    btn[2].style.backgroundColor = "#1f96ff";
    judul[2].style.backgroundColor = "#1f96ff";
    saklar[2].style.backgroundColor = "#474040";
    saklar[2].onclick = saklarRMall;
    saklar[2].textContent = "NYALAKAN";
  }
}
function saklarRMall(nyala) {
  nyala == "on";
  toggle[7].checked = true;
  toggle[8].checked = true;
  container[2].style.backgroundColor = "white";
  btn[2].style.backgroundColor = "white";
  judul[2].style.backgroundColor = "white";
  saklar[2].style.backgroundColor = "red";
  saklar[2].textContent = "MATIKAN";
  saklar[2].onclick = saklarRMalloff;
  lampu[7].src = "assets/images/on.gif";
  lampu[8].src = "assets/images/on.gif";
  divLampu[7].style.backgroundColor = "white";
  divLampu[8].style.backgroundColor = "white";
}
function saklarRMalloff(mati) {
  mati == "off";
  toggle[7].checked = false;
  toggle[8].checked = false;
  container[2].style.backgroundColor = "black";
  btn[2].style.backgroundColor = "#1f96ff";
  judul[2].style.backgroundColor = "#1f96ff";
  saklar[2].style.backgroundColor = "#474040";
  saklar[2].textContent = "NYALAKAN";
  saklar[2].onclick = saklarRMall;
  lampu[7].src = "assets/images/off.gif";
  lampu[8].src = "assets/images/off.gif";
  divLampu[7].style.backgroundColor = "black";
  divLampu[8].style.backgroundColor = "black";
  body.style.backgroundColor = "black";
  saklar[3].onclick = saklarUtama;
  saklar[3].style.backgroundColor = "#474040";
  btn[3].style.backgroundColor = "#1f96ff";
  saklar[3].textContent = "NYALAKAN";
}
function saklarKT() {
  if (toggle[9].checked) {
    lampu[9].src = "assets/images/on.gif";
    divLampu[9].style.backgroundColor = "white";
    container[3].style.backgroundColor = "white";
    judul[3].style.backgroundColor = "white";
  } else {
    lampu[9].src = "assets/images/on.gif";
    divLampu[9].style.backgroundColor = "black";
    container[3].style.backgroundColor = "black";
    judul[3].style.backgroundColor = "#1f96ff";
    body.style.backgroundColor = "black";
    saklar[3].onclick = saklarUtama;
    saklar[3].style.backgroundColor = "#474040";
    btn[3].style.backgroundColor = "#1f96ff";
    saklar[3].textContent = "NYALAKAN";  
  }
}
function saklarUtama(nyala) {
  nyala == "on";
  container.forEach((element) => {
    element.style.backgroundColor = "white";
  });

  judul.forEach((element) => {
    element.style.backgroundColor = "white";
  });

  divLampu.forEach((element) => {
    element.style.backgroundColor = "white";
  });

  btn.forEach((element) => {
    element.style.backgroundColor = "white";
  });
  lampu.forEach((element) => {
    element.src = "assets/images/on.gif";
  });
  toggle.forEach((element) => {
    element.checked = true;
  });
  saklar.forEach((element) => {
    element.textContent = "MATIKAN";
    element.style.backgroundColor = "red";
  });
  body.style.backgroundColor = "white";

  saklar[3].onclick = saklarUtamaoff;
  saklar[2].onclick = saklarRMalloff;
  saklar[1].onclick = saklarRKalloff;
  saklar[0].onclick = saklarRTalloff;
}

function saklarUtamaoff(mati) {
  mati == "off";
  container.forEach((element) => {
    element.style.backgroundColor = "black";
  });

  judul.forEach((element) => {
    element.style.backgroundColor = "#1f96ff";
  });

  divLampu.forEach((element) => {
    element.style.backgroundColor = "black";
  });

  btn.forEach((element) => {
    element.style.backgroundColor = "#1f96ff";
  });
  lampu.forEach((element) => {
    element.src = "assets/images/off.gif";
  });
  toggle.forEach((element) => {
    element.checked = !true;
  });
  saklar.forEach((element) => {
    element.textContent = "NYALAKAN";
    element.style.backgroundColor = "#474040";
  });
  body.style.backgroundColor = "black";

  saklar[3].onclick = saklarUtama;
  saklar[2].onclick = saklarRMall;
  saklar[1].onclick = saklarRKall;
  saklar[0].onclick = saklarRTall;
}

function button() {
  if (
    toggle[0].checked &&
    toggle[1].checked &&
    toggle[2].checked &&
    toggle[3].checked &&
    toggle[4].checked &&
    toggle[5].checked &&
    toggle[6].checked &&
    toggle[7].checked &&
    toggle[8].checked &&
    toggle[9].checked
  ) {
    saklar[3].style.backgroundColor = "red";
    body.style.backgroundColor = "white";
    saklar[3].textContent = "MATIKAN";
    saklar[3].onclick = saklarUtamaoff;
    btn[3].style.backgroundColor = "white";
  } else {
    body.style.backgroundColor = "black";
    saklar[3].onclick = saklarUtama;
    saklar[3].style.backgroundColor = "#474040";
    btn[3].style.backgroundColor = "#1f96ff";
    saklar[3].textContent = "NYALAKAN";  
  }
}
