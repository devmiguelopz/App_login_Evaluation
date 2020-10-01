export class LoginDesigner  {
  #Controller = null;

  UserName = null;
  Password = null;
  FormLogin = null;

  /**
  * Creation instance LoginDesigner
  *
  * @param  {Object} injectionController
  * @param  {function} injectionController.Submit
  * @return  {void}
  *
  */
  constructor(injectionController) {
    this.#Controller = injectionController;
    this.InitializeComponent();
    this.EventHandler();
  }

  /**
  * Relation Properties in html DOM
  *
  * @return  {void}
  *
  */
  InitializeComponent(){
    this.UserName = document.getElementById("username")
    this.Password = document.getElementById("password")
    this.FormLogin = document.getElementById("formLogin")
  }

  /**
  * Add event listener in form login propertied
  *
  * @return  {void}
  *
  */
  EventHandler(){
    this.FormLogin.addEventListener('submit', this.#Controller.Submit.bind(this.#Controller));
  }
}
