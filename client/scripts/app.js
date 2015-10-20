var app = {}; 
app.friends = {};
app.rooms = {};

app.init = function() {
  this.server = 'https://api.parse.com/1/classes/chatterbox'; 
  $('body').on('click', '.username', function() {
    var clickedUser = $(this).text(); 
    app.addFriend(clickedUser); 
  }); 
  $('body').on('click', '#send', app.handleSubmit.bind(app));
  $('body').on('click', '#refresh', app.fetch.bind(app));
  $('#roomSelect').on('change', function() {
    var clickedRoom = $('#roomSelect option:selected').text();
    app.changeRoom(clickedRoom);
  });
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
  var $container = $('<div class="message"></div>');
  //Extract text
  var text = _.unescape(_.escape(message.text)); 
  var $text = $('<li></li>');
  text = text ? text : "n/a";
  $text.text(text); 

  // Extract username
  var username = _.unescape(_.escape(message.username));
  var $username = $('<a href=# class="username"></a>');
  username = username ? username : "anonymous";
  $username.text(username); 
  
  // // Extract roomname
  var roomname = _.unescape(_.escape(message.roomname));
  var $roomname = $('<a class="' + roomname + '"></a>'); 
  if (app.rooms[roomname] === undefined) {
    app.addRoom(roomname);
    app.rooms[roomname] = roomname;
  }

  $container.append($username).append($roomname).append($text);
  $('#chats').append($container);
  // $('#chats').append($username).append($roomname).append($text); 
};

// R O O M
app.addRoom = function(room) {
  $('#roomSelect').append('<option>' + room + '</option>');
}; 

app.changeRoom = function(room) {
  $('div.message').hide();
  var $selector = $("'" + 'div.message a.' + room + "'");
  $selector.show();
  // $('div.message:not(:contains(' + room + '))').hide();
  // $('li:not(:contains(' + room + '))').hide();
}

// F R I E N D S
app.addFriend = function(friend) {
  this.friends[friend] = friend; 
  $('a:contains(' + friend +')').css('font-weight', 'bold'); 
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













