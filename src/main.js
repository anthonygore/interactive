window.addEventListener('page-view', ({ detail }) => {
  window.dataLayer.push({
    'event': 'virtualPageview',
    'pageUrl': window.location.href,
    'pageTitle': detail.title
  });
})
