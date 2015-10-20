var app = {}; 

app.init = function() {
  this.server = 'https://api.parse.com/1/classes/chatterbox'; 
  $('body').on('click', '.username', app.addFriend.bind(app));
  $('body').on('click', '#send', app.handleSubmit.bind(app));
  $('body').on('click', '#refresh', app.fetch.bind(app));
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

app.fetch = function() {
  $.ajax({
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message success');
      console.log(data);
      // Clear old messages
      app.clearMessages();
      // Add each new message from data
      _.each(data.results, function(message) {
        app.addMessage(message); 
      });
    }
  });
}; 

// M E S S A G E S
app.clearMessages = function() {
  $('#chats').empty();
}; 

app.addMessage = function(message) {
  // Extract text
  // var text = message.text; 
  // var $text = $('<div class="text"></div>');

  // // Extract username
  // var username = message.username; 
  // var $username = $('<div class="username"></div>');
  
  // // Extract roomname
  // var roomname = message.roomname;
  // var $roomname = $('<div class="roomname"></div>'); 

  // $('#chats').prepend($text.append(text));
  $('#chats').append('<li>' + _.escape(message.text) + '</li>'); 
};

// R O O M
app.addRoom = function(room) {
  $('#roomSelect').append('<p>' + room + '</p>');
}; 

// F R I E N D S
app.addFriend = function() {
  // to do
};

// S U B M I T
app.handleSubmit = function() {
  var text = $('#textbox').val();
  this.send({
    username: 'hr3',
    text: text,
    roomname: 'lobby'}); 
};

// Invoke app.init on document ready
$(document).ready(function() {
  app.init(); 
}); 













