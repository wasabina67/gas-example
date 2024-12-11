function myFunction() {
  const targetLabel = 'targetLabel';
  const notifiedLabel = 'notifiedLabel';
  const query = 'label:' + targetLabel + ' -label:' + notifiedLabel;
  const threads = GmailApp.search(query);
}
