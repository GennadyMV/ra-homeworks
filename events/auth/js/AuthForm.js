'use strict';

const isFunction = input => typeof input === 'function';

function AuthForm({onAuth}) {

  function onSubmit(event) {
    event.preventDefault();
    if (isFunction(onAuth)) {
      onAuth({name: name, email: email, password: password});
    }
  }

  let name;
  let email;
  let password;

  function getName(event) {
    name = event.currentTarget.value;
  }

  function getEmail(event) {
    const char = event.key;
    if (char.match('[a-zA-Z0-9@._-]') === null) {
      event.preventDefault();
    }
    email = event.currentTarget.value;
  }

  function getPassword(event) {
    const char = event.key;
    if (char.match('[a-zA-Z0-9_]') === null) {
      event.preventDefault();
    }
    password = event.currentTarget.value;
  }

  return (
    <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={onSubmit}>
      <div className="Input">
        <input required id="name" type="text" placeholder="Имя" onChange={getName} />
          <label/>
      </div>
      <div className="Input">
        <input type="email" placeholder="Электронная почта" onKeyDown={getEmail} />
          <label/>
      </div>
      <div className="Input">
        <input required id="password" type="password" placeholder="Пароль" onKeyDown={getPassword} />
          <label/>
      </div>
      <button type="submit" onClick={onSubmit}>
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"/>
      </button>
    </form>
  );

}

export default AuthForm;
