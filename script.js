let strana_str;
console.log(strana_str);
const knopka_1 = "latino";
const knopka_2 = "rock";
const knopka_3 = "electronic";
const knopka_4 = "relax";
const btn_janr = document.querySelector(".janr");
const htm = `<article >
knopka 1 = ${knopka_1}, knopka 2 = ${knopka_2}, knopka 3 = ${knopka_3}, knopka 4 = ${knopka_4}
  </article> `;

btn_janr.insertAdjacentHTML("beforeend", htm);

function getValue(array, knopka) {
  let i = 0;
  while (i < array.length) {
    console.log(i);
    console.log(knopka);
    console.log(array[i].tags);
    if (array[i].tags.includes(knopka)) {
      console.log(array[i].tags.includes(knopka));
      window.open(array[i].homepage).focus();
      return;
    }

    i++;
  }
}

krData = async function (knopka) {
  strana_str = document.getElementById("strana").value;
  const response = await fetch(
    ` http://de1.api.radio-browser.info/json/stations/bycountry/${strana_str}`
  );

  console.log(response.status);

  if (!response.ok)
    throw new Error(`Ссылка не найдена. Ошибка ${response.status}`);
  const radiostation = await response.json();

  getValue(radiostation, knopka);
};
