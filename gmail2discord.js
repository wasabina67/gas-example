function myFunction() {
  const targetLabel = 'targetLabel';
  const query = 'label:' + targetLabel;
  const threads = GmailApp.search(query);

  if (threads.length === 0) {
    Logger.log('No threads found with the label: ' + targetLabel);
    return;
  }
}
