import './login.css';

function ForgotPasswordPage() {
  return (
    <main className="auth-shell">
      <section className="auth-card">
        <div className="auth-copy">
          <p className="eyebrow">Account recovery</p>
          <h1>Forgot password</h1>
          <p>
            We’ll send reset instructions to the email address on your account.
          </p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="reset-email">Email address</label>
            <input
              id="reset-email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>

          <div className="auth-actions">
            <a
              href="/login"
              onClick={(event) => {
                event.preventDefault();
                window.history.pushState({}, '', '/login');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
            >
              Back to login
            </a>
          </div>

          <button type="submit">Send reset link</button>
        </form>
      </section>
    </main>
  );
}

export default ForgotPasswordPage;
