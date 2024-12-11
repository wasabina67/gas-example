function myFunction() {
  const targetLabel = 'targetLabel';
  const query = 'label:' + targetLabel;
  const threads = GmailApp.search(query);

  if (threads.length === 0) {
    Logger.log('No threads found with the label: ' + targetLabel);
    return;
  }

  const latestThread = threads[0];
  const messages = latestThread.getMessages();
  const lastMessage = messages[messages.length - 1];

  // const subject = lastMessage.getSubject();
  // const date = lastMessage.getDate();
  const body = lastMessage.getPlainBody();
  const lines = body.split('\n');
  const beginRowNum = 4;  // [MUST] beginRowNum > 0
  const endRowNum = 7;  // [MUST] endRowNum > beginRowNum

  let content = '';
  for (let i = beginRowNum; i < endRowNum; i++) {
    // 4,5,6 rows
    if (i !== endRowNum) {
      content += lines[i] + '\n';
    } else {
      content += lines[i]
    }
  }
  // Logger.log(content);

  const url = PropertiesService.getScriptProperties().getProperty('DISCORD_WEBHOOK_URL');
  if (!url) {
    Logger.log('DISCORD_WEBHOOK_URL is not found in Script properties.');
    return;
  }
  const payload = JSON.stringify({ content: content });
  const options = {
    method: 'POST',
    contentType: 'application/json',
    payload: payload,
  };
  UrlFetchApp.fetch(url, options);
}
