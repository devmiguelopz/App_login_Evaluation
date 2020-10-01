import { LoginDesigner } from "./Login.designer.js"

class Login {
  #Designer = null;

  /**
  * Create instance Login
  *
  * @return  {void}
  *
  */
  constructor() {
    this.InitializeComponent();
  }

  /**
  * Create designer
  *
  * @return  {void}
  *
  */
  InitializeComponent() {
    this.#Designer = new LoginDesigner(this);
  }

  /**
  * Submit login user
  *
  * @param  {Event} event
  * @return  {void}
  *
  */
  Submit(event) {
    event.preventDefault();
    try {
      alert(this.ValidationForm());
    } catch (error) {
      console.error("Login.js/Submit =>", error)
    }
  }

  /**
  * Validation form login
  *
  * @return  {string}
  *
  */
  ValidationForm() {
    let message = "Welcome !!!";
    if (this.#Designer.UserName.value === "") {
      message = "Enter a username"
      return message;
    }
    if (this.#Designer.Password.value === "") {
      message = "Enter a password"
      return message;
    }
    return message;
  }

}

const _ = new Login();
