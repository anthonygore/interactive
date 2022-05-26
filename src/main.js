window.addEventListener('page-view', ({ detail }) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      'event': 'virtualPageview',
      'pageUrl': window.location.href,
      'pageTitle': detail.title
    });
  }
})
