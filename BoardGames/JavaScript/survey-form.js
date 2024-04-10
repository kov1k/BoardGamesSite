const survButton = document.querySelector('.survey_form-button');
const survForm = document.getElementById('surveyForm');
const surveyForm_bg = document.querySelector('.surveyForm_bg');
const surveyCont = document.querySelector('.survey-container');
// Стайлинг
function openSurvey() {
    survForm.style.display = 'block';
}
function closeSurvey(){
    survForm.style.display = 'none';
}

survButton.addEventListener("click", survButtonClick);
function survButtonClick(e){
    e.preventDefault();
    document.body.classList.toggle('_lock');
    surveyForm_bg.classList.add('active');
    openSurvey();
}
surveyForm_bg.addEventListener("click", surveyForm_bgClick);
function surveyForm_bgClick(e){
    e.preventDefault();
    document.body.classList.toggle('_lock');
    surveyForm_bg.classList.toggle('active');
    closeSurvey();
}   

// Система звезд
const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArr = Array.prototype.slice.call(ratingItemsList);

let selectedRatingValue = 0;

ratingItemsArr.forEach(item =>{
    item.addEventListener('click', () =>{
        const { itemValue } = item.dataset;
        selectedRatingValue = parseInt(itemValue);
        item.parentNode.dataset.totalValue = item.dataset = itemValue;
        
    })
})

// Сборка отзыва
function processform(){
    let newline = "\n";
    let result_str = "";
    let form1 = document.querySelector('#form1');
    result_str += "Ім'я: " + form1.fname.value + newline;
    result_str += "Електронна пошта: " + form1.email.value + newline;

    result_str += "Оцінка дизайну сайту: " + selectedRatingValue + '/5'+ newline;
    
    const whereOptions = document.querySelectorAll('input[name="where"]');
    let whereValue = "";
    whereOptions.forEach(option => {
        if (option.checked) {
            whereValue = option.value;
        }
    });
    result_str += "Де ви дізналися про нас?: " + whereValue + newline;

    const whichOptions = document.querySelectorAll('input[name="which"]');
    let whichValues = [];
    whichOptions.forEach(option => {
        if (option.checked) {
            whichValues.push(option.value);
        }
    });
    result_str += "Розділи сайту, які вам подобаються: " + whichValues.join(', ') + newline;

    form1.results.value = result_str;
}
function clearform() {
    document.getElementById("form1").reset();
    ratingItemsArr.forEach(item =>{
            const { itemValue } = 0;
            item.parentNode.dataset.totalValue = item.dataset = itemValue;

    })
}
function sendform(){
    if (form1.checkValidity()) {
        alert("Повідомлення успішно відправлено!\nДякуємо за участь!");
        document.body.classList.toggle('_lock');
        const surveyForm_bg = document.querySelector('.surveyForm_bg');
        surveyForm_bg.classList.toggle('active');
        closeSurvey();
    } else {
        alert("Будь ласка, заповніть всі обов'язкові поля.");
    }
}