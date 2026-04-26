import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const setupGlobalClickTracking = () => {
	document.addEventListener('click', (event) => {
		const trackEl = event.target.closest('[data-track-event]');

		if (!trackEl || !window.gtag) {
			return;
		}

		const eventName = trackEl.getAttribute('data-track-event');
		const eventCategory = trackEl.getAttribute('data-track-category') || 'engagement';
		const eventLabel =
			trackEl.getAttribute('data-track-label') ||
			trackEl.textContent?.trim() ||
			'unknown';

		window.gtag('event', eventName, {
			event_category: eventCategory,
			event_label: eventLabel
		});
	});
};

setupGlobalClickTracking();

createApp(App).use(router).mount('#app')
