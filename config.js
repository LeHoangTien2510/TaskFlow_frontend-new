// Centralized runtime configuration for TaskFlow frontend
// Edit this file to change API base URL and other environment settings.
const CONFIG = {
   API_BASE_URL: 'http://3.236.111.70:8080'
};
// Expose to the global window so existing non-module scripts can use it
window.CONFIG = CONFIG;

// If the project is converted to modules later, consider exporting:
// export default CONFIG;
