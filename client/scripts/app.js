// YOUR CODE HERE:
var app = {}; 

app.init = function() {

}; 

app.send = function(message) {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
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
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
    success: function (data) {
      console.log('chatterbox: Message success');
    }
  });
}; 

// M E S S A G E S
app.clearMessages = function() {
  $('#chats').empty(); 
}; 

app.addMessage = function(message) {
  // Extract text
  var text = message[text]; 
  var $text = $('<div class="text"></div>'); 

  // Extract username
  var username = message.username; 
  var $username = $('<div class="username"></div>');
  
  // Extract roomname
  var roomname = message.roomname;
  var $roomname = $('<div class="roomname"></div>'); 

  $('#chats').append($text.append(text));
};

// R O O M
app.addRoom = function(room) {
  $('#roomSelect').append('<p>' + room + '</p>');
}; 

// F R I E N D S
app.addFriend = function() {
  $('#username').click(function() {
    alert("Friend added"); 
  }); 
}















