export const GA_ID = "G-RZ9GNECQLV";

// Track page views
export const pageview = (url) => {
  window.gtag('config', GA_ID, {
    page_path: url,
  });
};

// Track events (important actions)
export const event = ({ action, category, label }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
  });
};