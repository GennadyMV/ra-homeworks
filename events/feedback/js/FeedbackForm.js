'use strict';

const SALUTATION_MISTER = "Мистер";
const SALUTATION_MISIS = "Мисис";
const SALUTATION_MIS = "Мис";

const SNACKES_PIZZA = "пиццу";
const SNACKES_CAKE = "пирог";

function FeedbackForm({data, onSubmit}) {

  let form;
  let name;
  let email;
  let message;
  let subject;

  function onSubmitInt(event) {
    event.preventDefault();
    let formSubmitted = {};
    formSubmitted.name = name.value;
    formSubmitted.email = email.value;
    formSubmitted.message = message.value;
    formSubmitted.subject = subject.value;
    formSubmitted.salutation = form.querySelector('input[type=radio]:checked').value;
    formSubmitted.snacks = [];

    const checkedObjs = form.querySelectorAll('input[type=checkbox]:checked');
    for(let idx = 0; idx < checkedObjs.length; idx++ ) {
      formSubmitted.snacks.push(checkedObjs[idx].value);
    }
    const result = JSON.stringify(formSubmitted);
    onSubmit(result);
  }

  return(
    <form className="content__form contact-form" ref={element => form = element}>
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>
      <div className="contact-form__input-group">
        <input className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation"
               type="radio" value={SALUTATION_MISTER} defaultChecked={data.salutation === SALUTATION_MISTER}/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">{SALUTATION_MISTER}</label>
        <input className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation"
               type="radio" value={SALUTATION_MISIS} defaultChecked={data.salutation === SALUTATION_MISIS} />
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">{SALUTATION_MISIS}</label>
        <input className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation"
               type="radio" value={SALUTATION_MIS} defaultChecked={data.salutation === SALUTATION_MIS}/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">{SALUTATION_MIS}</label>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="name">Имя</label>
        <input className="contact-form__input contact-form__input--text" id="name" name="name" type="text" defaultValue={data.name}
               ref={element => name = element}
        />
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
        <input className="contact-form__input contact-form__input--email" id="email" name="email" type="email" defaultValue={data.email}
               ref={element => email = element}/>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
        <select className="contact-form__input contact-form__input--select" id="subject" name="subject" defaultValue={data.subject}
                ref={element => subject = element}>
          <option>У меня проблема</option>
          <option>У меня важный вопрос</option>
        </select>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" for="message">Ваше сообщение</label>
        <textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" defaultValue={data.message}
                  ref={element => message = element}/>
      </div>
      <div className="contact-form__input-group">
        <p className="contact-form__label--checkbox-group">Хочу получить:</p>
        <input className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks"
               type="checkbox" value={SNACKES_PIZZA} defaultChecked={data.snacks !== undefined && data.snacks !== null && data.snacks.includes(SNACKES_PIZZA)}/>
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">{SNACKES_PIZZA}</label>
        <input className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks"
               type="checkbox" value={SNACKES_CAKE} defaultChecked={data.snacks !== undefined && data.snacks !== null && data.snacks.includes(SNACKES_CAKE)}/>
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">{SNACKES_CAKE}</label>
      </div>
      <button className="contact-form__button" type="submit" onClick={onSubmitInt}>Отправить сообщение!</button>
      <output id="result" />
    </form>
  );
}


export default FeedbackForm;