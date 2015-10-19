$.ajax({
  url: 'https://api.parse.com/1/classes/chatterbox',
  type: 'GET',
  contentType: 'application/json',
  success: function (data) {
    console.log('chaatterbox: Messages received');
  },
  error: function (data) {
    console.error('chatterbox: Failed to retrieve messages');
  }
});
