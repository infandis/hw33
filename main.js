const form = document.createElement('form');
form.id = 'registration-form';
document.body.appendChild(form);

const firstNameInput = document.createElement('input');
firstNameInput.type = 'text';
firstNameInput.name = 'firstName';
firstNameInput.placeholder = "Ім'я";

const lastNameInput = document.createElement('input');
lastNameInput.type = 'text';
lastNameInput.name = 'lastName';
lastNameInput.placeholder = 'Прізвище';

const birthdateInput = document.createElement('input');
birthdateInput.type = 'text';
birthdateInput.name = 'birthdate';
birthdateInput.placeholder = 'Дата народження';

const maleRadio = document.createElement('input');
maleRadio.type = 'radio';
maleRadio.name = 'gender';
maleRadio.value = 'male';
const maleLabel = document.createElement('label');
maleLabel.textContent = 'Чоловік';
maleLabel.appendChild(maleRadio);

const femaleRadio = document.createElement('input');
femaleRadio.type = 'radio';
femaleRadio.name = 'gender';
femaleRadio.value = 'female';
const femaleLabel = document.createElement('label');
femaleLabel.textContent = 'Жінка';
femaleLabel.appendChild(femaleRadio);

const citySelect = document.createElement('select');
citySelect.name = 'city';
const option1 = document.createElement('option');
option1.value = 'kyiv';
option1.textContent = 'Київ';
citySelect.appendChild(option1);
const option2 = document.createElement('option');
option2.value = 'lviv';
option2.textContent = 'Львів';
citySelect.appendChild(option2);
const option3 = document.createElement('option');
option3.value = 'uzhgorod';
option3.textContent = 'Ужгород';
citySelect.appendChild(option3);

const addressTextarea = document.createElement('textarea');
addressTextarea.name = 'address';
addressTextarea.placeholder = 'Адреса';

const languageCheckboxesContainer = document.createElement('div');
const languages = ['Українська', 'Німецька', 'Англійська'];
languages.forEach(language => {
  const label = document.createElement('label');
  label.textContent = language;
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = 'languages';
  checkbox.value = language;
  label.appendChild(checkbox);
  languageCheckboxesContainer.appendChild(label);
});

const saveButton = document.createElement('button');
saveButton.type = 'button';
saveButton.textContent = 'Зберегти';

form.appendChild(firstNameInput);
form.appendChild(lastNameInput);
form.appendChild(birthdateInput);
form.appendChild(maleLabel);
form.appendChild(femaleLabel);
form.appendChild(citySelect);
form.appendChild(addressTextarea);
form.appendChild(languageCheckboxesContainer);
form.appendChild(saveButton);

saveButton.addEventListener('click', () => {
    const formData = new FormData(form);
  
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
  
    const nameRow = document.createElement('tr');
    const nameHeader = document.createElement('th');
    nameHeader.textContent = "Ім'я та Прізвище";
    nameRow.appendChild(nameHeader);
    const nameData = document.createElement('td');
    nameData.textContent = `${formData.get('firstName')} ${formData.get('lastName')}`;
    nameRow.appendChild(nameData);
    tbody.appendChild(nameRow);

    const birthdateRow = document.createElement('tr');
    const birthdateHeader = document.createElement('th');
    birthdateHeader.textContent = 'Дата народження';
    birthdateRow.appendChild(birthdateHeader);
    const birthdateData = document.createElement('td');
    birthdateData.textContent = formData.get('birthdate');
    birthdateRow.appendChild(birthdateData);
    tbody.appendChild(birthdateRow);
  
    const genderRow = document.createElement('tr');
    const genderHeader = document.createElement('th');
    genderHeader.textContent = 'Стать';
    genderRow.appendChild(genderHeader);
    const genderData = document.createElement('td');
    const gender = formData.get('gender');
    genderData.textContent = gender === 'male' ? 'Чоловік' : 'Жінка';
    genderRow.appendChild(genderData);
    tbody.appendChild(genderRow);
  
    const cityRow = document.createElement('tr');
    const cityHeader = document.createElement('th');
    cityHeader.textContent = 'Місто та Адреса';
    cityRow.appendChild(cityHeader);
    const cityData = document.createElement('td');
    const city = formData.get('city');
    const address = formData.get('address');
    cityData.textContent = `${city}, ${address}`;
    cityRow.appendChild(cityData);
    tbody.appendChild(cityRow);

    const languagesRow = document.createElement('tr');
    const languagesHeader = document.createElement('th');
    languagesHeader.textContent = 'Мови, якими володіє';
    languagesRow.appendChild(languagesHeader);
    const languagesData = document.createElement('td');
    const languages = formData.getAll('languages');
    languagesData.textContent = languages.join(', ');
    languagesRow.appendChild(languagesData);
    tbody.appendChild(languagesRow);
  
    form.replaceWith(table);
  });