import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('#flash');
  }

  async gotoLogin() {
  await this.page.goto('/login');
}

  async login(username, password) {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }
}
