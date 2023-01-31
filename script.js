const btnSubmit = document.querySelector('.btn-submit');
const cardFeedback = document.querySelector('.card-feedback')
const cardResult = document.querySelector('.card-result')
const userRate = document.querySelector('.user-rate');
const instrution = document.querySelector('.instruction')

btnSubmit.addEventListener('click', () => {
  try{
    userRate.textContent = document.querySelector('.input-radio:checked').value;
    cardFeedback.classList.add('no-show');
    cardResult.classList.remove('no-show');
    instrution.classList.add('no-show')
  } catch (error) {
    instrution.classList.remove('no-show')
  }
  
})