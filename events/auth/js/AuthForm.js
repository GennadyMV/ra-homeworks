'use strict';

const isFunction = input => typeof input === 'function';

function AuthForm({onAuth}) {

  let form;

  function onSubmit(event) {
    event.preventDefault();
    if (isFunction(onAuth)) {
      onAuth({name: form.name.value, email: form.email.value, password: form.password.value});
    }
  }

  function getEmail(event) {
    const char = event.key;
    if (char.match('[a-zA-Z0-9@._-]') === null) {
      event.preventDefault();
    }
  }

  function getPassword(event) {
    const char = event.key;
    if (char.match('[a-zA-Z0-9_]') === null) {
      event.preventDefault();
    }
  }

  return (
    <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={onSubmit} ref={element => form = element}>
      <div className="Input">
        <input required id="name" type="text" placeholder="Имя" />
          <label/>
      </div>
      <div className="Input">
        <input type="email" id="email" placeholder="Электронная почта" onKeyDown={getEmail} />
          <label/>
      </div>
      <div className="Input">
        <input required id="password" type="password" placeholder="Пароль" onKeyDown={getPassword} />
          <label/>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"/>
      </button>
    </form>
  );

}

export default AuthForm;
