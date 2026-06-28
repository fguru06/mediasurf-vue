<template>
  <transition name="cookie-slide">
    <div v-if="showBanner" class="cookie-consent-banner" role="dialog" aria-labelledby="cookie-title" aria-modal="false">
      <div class="cookie-container">
        <div class="cookie-content">
          <div class="cookie-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
              <line x1="9" y1="9" x2="9.01" y2="9"/>
              <line x1="15" y1="9" x2="15.01" y2="9"/>
            </svg>
          </div>
          <div class="cookie-text">
            <h3 id="cookie-title">We use cookies</h3>
            <p>
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
              By clicking "Accept All", you consent to our use of cookies. You can manage your preferences by
              clicking "Cookie Settings". Read our
              <router-link to="/cookie-policy" class="cookie-link">Cookie Policy</router-link>.
            </p>
          </div>
        </div>
        <div class="cookie-actions">
          <button class="btn-cookie btn-cookie-settings" @click="openPreferences">
            Cookie Settings
          </button>
          <button class="btn-cookie btn-cookie-accept" @click="acceptAll">
            Accept All
          </button>
        </div>
      </div>

      <!-- Preferences Panel -->
      <transition name="preferences-fade">
        <div v-if="showPreferences" class="cookie-preferences">
          <h4>Manage Cookie Preferences</h4>
          <p class="pref-intro">
            Choose which categories of cookies you allow us to use. Essential cookies cannot be disabled as they
            are required for the website to function.
          </p>

          <div class="pref-item">
            <div class="pref-header">
              <div class="pref-info">
                <strong>Essential Cookies</strong>
                <span class="pref-badge">Always Active</span>
              </div>
              <label class="toggle disabled">
                <input type="checkbox" checked disabled />
                <span class="toggle-slider"></span>
              </label>
            </div>
            <p class="pref-desc">Required for the website to function. These cannot be disabled.</p>
          </div>

          <div class="pref-item">
            <div class="pref-header">
              <div class="pref-info">
                <strong>Analytics Cookies</strong>
              </div>
              <label class="toggle">
                <input type="checkbox" v-model="preferences.analytics" />
                <span class="toggle-slider"></span>
              </label>
            </div>
            <p class="pref-desc">Help us understand how visitors use our site so we can improve it (Google Analytics).</p>
          </div>

          <div class="pref-item">
            <div class="pref-header">
              <div class="pref-info">
                <strong>Functional Cookies</strong>
              </div>
              <label class="toggle">
                <input type="checkbox" v-model="preferences.functional" />
                <span class="toggle-slider"></span>
              </label>
            </div>
            <p class="pref-desc">Enable enhanced functionality like remembering your theme preferences.</p>
          </div>

          <div class="pref-actions">
            <button class="btn-cookie btn-cookie-settings" @click="savePreferences">
              Save Preferences
            </button>
            <button class="btn-cookie btn-cookie-accept" @click="acceptAll">
              Accept All
            </button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CookieConsent',
  data() {
    return {
      showBanner: false,
      showPreferences: false,
      preferences: {
        essential: true,
        analytics: true,
        functional: true,
      },
    };
  },
  mounted() {
    this.checkConsent();
  },
  methods: {
    checkConsent() {
      const consent = localStorage.getItem('cookie_consent');
      if (!consent) {
        // Small delay for smooth entrance
        setTimeout(() => {
          this.showBanner = true;
        }, 500);
      } else {
        // Apply saved preferences
        try {
          const saved = JSON.parse(consent);
          this.preferences = { ...this.preferences, ...saved };
        } catch (e) {
          // If parsing fails, treat as if no consent given
          this.showBanner = true;
        }
      }
    },

    acceptAll() {
      const consent = {
        essential: true,
        analytics: true,
        functional: true,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem('cookie_consent', JSON.stringify(consent));
      this.preferences = { essential: true, analytics: true, functional: true };
      this.showBanner = false;
      this.showPreferences = false;
      this.enableAnalytics();
    },

    openPreferences() {
      this.showPreferences = !this.showPreferences;
    },

    savePreferences() {
      const consent = {
        essential: true,
        analytics: this.preferences.analytics,
        functional: this.preferences.functional,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem('cookie_consent', JSON.stringify(consent));
      this.showBanner = false;
      this.showPreferences = false;

      if (this.preferences.analytics) {
        this.enableAnalytics();
      }
    },

    enableAnalytics() {
      // If gtag is available and was blocked, reload it
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted',
        });
      }
    },

    resetConsent() {
      localStorage.removeItem('cookie_consent');
      this.showBanner = true;
      this.showPreferences = false;
    },
  },
};
</script>

<style scoped>
.cookie-consent-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: var(--bg-white);
  border-top: 1px solid rgba(var(--primary-rgb), 0.1);
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.12);
  padding: 0;
}

:root[data-theme="black"] .cookie-consent-banner {
  background: #1a1a1a;
  border-top: 1px solid #333;
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.4);
}

.cookie-container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.cookie-content {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex: 1;
  min-width: 280px;
}

.cookie-icon {
  flex-shrink: 0;
  color: var(--primary);
  margin-top: 2px;
}

.cookie-text h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.cookie-text p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0;
}

.cookie-link {
  color: var(--primary);
  text-decoration: underline;
  font-weight: 500;
}

.cookie-link:hover {
  opacity: 0.8;
}

.cookie-actions {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}

.btn-cookie {
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  font-family: inherit;
  white-space: nowrap;
}

.btn-cookie-accept {
  background: var(--primary);
  color: white;
}

.btn-cookie-accept:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

:root[data-theme="black"] .btn-cookie-accept {
  background: white;
  color: black;
}

:root[data-theme="black"] .btn-cookie-accept:hover {
  background: #e0e0e0;
}

.btn-cookie-settings {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid rgba(var(--primary-rgb), 0.3);
}

.btn-cookie-settings:hover {
  background: var(--bg-light);
}

/* Preferences Panel */
.cookie-preferences {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 1.5rem 1.5rem;
  border-top: 1px solid rgba(var(--primary-rgb), 0.1);
}

.cookie-preferences h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  padding-top: 1.25rem;
}

.pref-intro {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.pref-item {
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(var(--primary-rgb), 0.06);
}

.pref-item:last-child {
  border-bottom: none;
}

.pref-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pref-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pref-info strong {
  font-size: 0.9rem;
  color: var(--text-primary);
}

.pref-badge {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--primary);
  background: var(--primary-light);
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
}

.pref-desc {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
  line-height: 1.4;
}

.pref-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  justify-content: flex-end;
}

/* Toggle Switch */
.toggle {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  cursor: pointer;
}

.toggle.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ccc;
  border-radius: 24px;
  transition: 0.3s;
}

.toggle-slider::before {
  content: '';
  position: absolute;
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background: white;
  border-radius: 50%;
  transition: 0.3s;
}

.toggle input:checked + .toggle-slider {
  background: var(--primary);
}

.toggle input:checked + .toggle-slider::before {
  transform: translateX(20px);
}

/* Transitions */
.cookie-slide-enter-active {
  transition: all 0.4s ease-out;
}

.cookie-slide-leave-active {
  transition: all 0.3s ease-in;
}

.cookie-slide-enter-from,
.cookie-slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.preferences-fade-enter-active,
.preferences-fade-leave-active {
  transition: all 0.25s ease;
}

.preferences-fade-enter-from,
.preferences-fade-leave-to {
  opacity: 0;
  max-height: 0;
}

@media (max-width: 768px) {
  .cookie-container {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
    padding: 1rem;
  }

  .cookie-actions {
    width: 100%;
    flex-direction: column;
  }

  .btn-cookie {
    width: 100%;
    text-align: center;
  }

  .pref-actions {
    flex-direction: column;
  }

  .pref-actions .btn-cookie {
    width: 100%;
  }
}
</style>
