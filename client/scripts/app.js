var app = {};

app.init = function() {
  this.server = 'https://api.parse.com/1/classes/chatterbox';
  $('body').on('click', '.username', this.addFriend());
  $('body').on('click', '#send .submit', this.handleSubmit());
};

app.send = function(message) {
  $.ajax({
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      console.error('chatterbox: Failed to send message');
    }
  });
};

app.fetch = function () {
  $.ajax({
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Messages received');
      console.log(data);
      // _.each(data.results, function(message) {
      //   app.addMessage({
      //     username: message.username,
      //     text: message.text,
      //     roomname: message.roomname
      //   });
      // });
    },
    error: function (data) {
      console.error('chatterbox: Failed to retrieve messages');
    }
  });
};

app.clearMessages = function() {
  $('#chats').empty();
};

app.addMessage = function(message) {
  $('#chats').append('<p class="' + message.username + '">' + message.text + '</p>');
  // &, <, >, ", ', `, , !, @, $, %, (, ), =, +, {, }, [, and ]
};

app.addRoom = function(message) {
  $('#roomSelect').append('<p>' + message.room + '</p>');
};

app.addFriend = function() {

};

app.handleSubmit = function() {

};
