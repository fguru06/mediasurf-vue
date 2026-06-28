<template>
  <div class="legal-page">
    <section class="legal-hero">
      <div class="container">
        <h1>Cookie Policy</h1>
        <p class="last-updated">Last updated: June 28, 2026</p>
      </div>
    </section>

    <section class="legal-content">
      <div class="container">
        <div class="legal-body">
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a
            website. They are widely used to make websites work more efficiently, provide a better user
            experience, and provide information to the website owners.
          </p>
          <p>
            Cookies may be "persistent" (remain on your device until they expire or you delete them) or
            "session" cookies (deleted when you close your browser). They may be set by us ("first-party
            cookies") or by third-party services we use ("third-party cookies").
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>We use cookies and similar tracking technologies for the following purposes:</p>

          <h3>2.1 Essential Cookies (Required)</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable core functionality
            such as page navigation, security, and accessibility. The website cannot function properly without
            these cookies.
          </p>
          <table class="cookie-table">
            <thead>
              <tr>
                <th>Cookie Name</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cookie_consent</td>
                <td>Stores your cookie consent preferences</td>
                <td>365 days</td>
              </tr>
              <tr>
                <td>theme_preference</td>
                <td>Remembers your theme selection (light/dark)</td>
                <td>365 days</td>
              </tr>
            </tbody>
          </table>

          <h3>2.2 Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our website by collecting and reporting
            information anonymously. We use Google Analytics for this purpose.
          </p>
          <table class="cookie-table">
            <thead>
              <tr>
                <th>Cookie Name</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ga</td>
                <td>Google Analytics — distinguishes unique users</td>
                <td>2 years</td>
              </tr>
              <tr>
                <td>_ga_*</td>
                <td>Google Analytics — persists session state</td>
                <td>2 years</td>
              </tr>
              <tr>
                <td>_gid</td>
                <td>Google Analytics — distinguishes users</td>
                <td>24 hours</td>
              </tr>
              <tr>
                <td>_gat</td>
                <td>Google Analytics — throttles request rate</td>
                <td>1 minute</td>
              </tr>
            </tbody>
          </table>

          <h3>2.3 Functional Cookies</h3>
          <p>
            These cookies enable enhanced functionality and personalization, such as remembering your preferences
            and settings. They may be set by us or by third-party providers whose services we have added to our pages.
          </p>

          <h2>3. Third-Party Cookies</h2>
          <p>
            Some cookies are placed by third-party services that appear on our pages. We use the following
            third-party services that may set cookies:
          </p>
          <ul>
            <li>
              <strong>Google Analytics:</strong> For website analytics and usage tracking.
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>
            </li>
            <li>
              <strong>Google Fonts:</strong> For displaying web fonts.
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>
            </li>
          </ul>

          <h2>4. Managing Your Cookie Preferences</h2>
          <p>You have several options to control or limit how cookies are used:</p>

          <h3>4.1 Browser Settings</h3>
          <p>
            Most web browsers allow you to manage cookies through their settings. You can typically:
          </p>
          <ul>
            <li>View cookies stored on your device</li>
            <li>Block all cookies or specific types of cookies</li>
            <li>Delete all cookies when you close your browser</li>
            <li>Set preferences for specific websites</li>
          </ul>
          <p>
            Please note that blocking or deleting cookies may impact your experience on our website and may
            prevent certain features from functioning properly.
          </p>

          <h3>4.2 Our Cookie Consent Tool</h3>
          <p>
            When you first visit our website, you will see a cookie consent banner that allows you to accept
            or decline non-essential cookies. You can change your preferences at any time by clearing your
            browser cookies for our site and revisiting, or by using the "Cookie Settings" link in our footer.
          </p>

          <h3>4.3 Google Analytics Opt-Out</h3>
          <p>
            To opt out of Google Analytics tracking across all websites, you can install the
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
          </p>

          <h2>5. Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our practices or for
            legal, operational, or regulatory reasons. We will post any changes on this page and update the
            "Last updated" date.
          </p>

          <h2>6. Related Policies</h2>
          <p>For more information about how we handle your data, please review:</p>
          <ul>
            <li><router-link to="/privacy">Privacy Policy</router-link></li>
            <li><router-link to="/terms">Terms of Service</router-link></li>
          </ul>

          <h2>7. Contact Us</h2>
          <p>If you have questions about our use of cookies, please contact us:</p>
          <ul class="contact-info">
            <li><strong>Email:</strong> <a href="mailto:privacy@mediasurf.ca">privacy@mediasurf.ca</a></li>
            <li><strong>Address:</strong> Waterloo, Ontario, Canada</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CookiePolicyPage',
};
</script>

<style scoped>
.legal-hero {
  background: var(--gradient-primary);
  padding: 4rem 0;
  text-align: center;
}

.legal-hero h1 {
  color: white;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 0.5rem;
}

:root[data-theme="black"] .legal-hero {
  background: #1a1a1a;
  border-bottom: 1px solid #333;
}

:root[data-theme="black"] .legal-hero h1 {
  color: white;
}

.last-updated {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
}

.legal-content {
  padding: 3rem 0 5rem;
  background: var(--bg-white);
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.legal-body h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--primary-light);
}

.legal-body h2:first-child {
  margin-top: 0;
}

.legal-body h3 {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.legal-body p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.legal-body ul {
  margin: 0.75rem 0 1.5rem 1.5rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.legal-body ul li {
  margin-bottom: 0.5rem;
}

.legal-body a {
  color: var(--primary);
  text-decoration: underline;
  font-weight: 500;
}

.legal-body a:hover {
  opacity: 0.8;
}

.cookie-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0 1.5rem;
  font-size: 0.9rem;
}

.cookie-table th,
.cookie-table td {
  padding: 0.75rem 1rem;
  text-align: left;
  border: 1px solid var(--primary-light);
}

.cookie-table th {
  background: var(--bg-light);
  color: var(--text-primary);
  font-weight: 600;
}

.cookie-table td {
  color: var(--text-secondary);
}

.cookie-table tbody tr:hover {
  background: var(--bg-light);
}

.contact-info {
  list-style: none;
  margin-left: 0 !important;
}

.contact-info li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .legal-hero {
    padding: 2.5rem 0;
  }
  .legal-content {
    padding: 2rem 0 3rem;
  }
  .cookie-table {
    font-size: 0.8rem;
  }
  .cookie-table th,
  .cookie-table td {
    padding: 0.5rem;
  }
}
</style>
