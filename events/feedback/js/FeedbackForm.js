'use strict';

const SALUTATION_MISTER = "Мистер";
const SALUTATION_MISIS = "Мисис";
const SALUTATION_MIS = "Мис";

const SNACKES_PIZZA = "пиццу";
const SNACKES_CAKE = "пирог";

const isFunction = input => typeof input === 'function';
const isIncludes = (array, value) => array !== undefined && array !== null && array.includes(value);

function FeedbackForm({data, onSubmit}) {

  let form;
  function onSubmitInt(event) {
    event.preventDefault();
    let formSubmitted = {};
    formSubmitted.name = form.name.value;
    formSubmitted.email = form.email.value;
    formSubmitted.message = form.message.value;
    formSubmitted.subject = form.subject.value;
    formSubmitted.salutation = form.salutation.value
    formSubmitted.snacks = Array.from(form.snacks).filter(snack => snack.checked).map(sn => sn.value);

    const result = JSON.stringify(formSubmitted);

    if (isFunction(onSubmit)) {
      onSubmit(result);
    } else {
      console.log("Error. onSubmit is not a function");
    }
  }

  return(
    <form className="content__form contact-form" ref={element => form = element}>
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>
      <div className="contact-form__input-group">
        <input
          className="contact-form__input contact-form__input--radio"
          id="salutation-mr"
          name="salutation"
          type="radio"
          value={SALUTATION_MISTER}
          defaultChecked={data.salutation === SALUTATION_MISTER}
        />
        <label
          className="contact-form__label contact-form__label--radio"
          htmlFor="salutation-mr">{SALUTATION_MISTER}
        </label>
        <input
          className="contact-form__input contact-form__input--radio"
          id="salutation-mrs"
          name="salutation"
          type="radio"
          value={SALUTATION_MISIS}
          defaultChecked={data.salutation === SALUTATION_MISIS}
        />
        <label
          className="contact-form__label contact-form__label--radio"
          htmlFor="salutation-mrs">{SALUTATION_MISIS}
        </label>
        <input
          className="contact-form__input contact-form__input--radio"
          id="salutation-ms"
          name="salutation"
          type="radio"
          value={SALUTATION_MIS}
          defaultChecked={data.salutation === SALUTATION_MIS}
        />
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">{SALUTATION_MIS}</label>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="name">Имя</label>
        <input
          className="contact-form__input contact-form__input--text"
          id="name"
          name="name"
          type="text"
          defaultValue={data.name}
        />
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
        <input
          className="contact-form__input contact-form__input--email"
          id="email"
          name="email"
          type="email"
          defaultValue={data.email}
        />
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
        <select
          className="contact-form__input contact-form__input--select"
          id="subject"
          name="subject"
          defaultValue={data.subject}
        >
          <option>У меня проблема</option>
          <option>У меня важный вопрос</option>
        </select>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" for="message">Ваше сообщение</label>
        <textarea
          className="contact-form__input contact-form__input--textarea"
          id="message"
          name="message"
          rows="6"
          cols="65"
          defaultValue={data.message}
        />
      </div>
      <div className="contact-form__input-group">
        <p className="contact-form__label--checkbox-group">Хочу получить:</p>
        <input
          className="contact-form__input contact-form__input--checkbox"
          id="snacks-pizza"
          name="snacks"
          type="checkbox"
          value={SNACKES_PIZZA}
          defaultChecked={isIncludes(data.snacks,SNACKES_PIZZA)}
        />
        <label
          className="contact-form__label contact-form__label--checkbox"
          htmlFor="snacks-pizza"
        >
          {SNACKES_PIZZA}
        </label>
        <input className="contact-form__input contact-form__input--checkbox"
               id="snacks-cake"
               name="snacks"
               type="checkbox"
               value={SNACKES_CAKE}
               defaultChecked={isIncludes(data.snacks,SNACKES_CAKE)}
        />
        <label
          className="contact-form__label contact-form__label--checkbox"
          htmlFor="snacks-cake"
        >
          {SNACKES_CAKE}
        </label>
      </div>
      <button className="contact-form__button" type="submit" onClick={onSubmitInt}>Отправить сообщение!</button>
      <output id="result" />
    </form>
  );
}


export default FeedbackForm;