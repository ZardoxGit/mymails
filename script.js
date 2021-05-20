var numberOfMessages = document.getElementsByTagName('p').length;
document.getElementById('count').textContent = numberOfMessages;

for(var i=0; i<document.getElementsByClassName('trash').length; i++){
    document.getElementsByClassName('trash')[i].addEventListener('click',
    function(){
      this.parentNode.remove()
      var numberOfMessages = document.getElementsByTagName('p').length;
      document.getElementById('count').textContent = numberOfMessages;
    })
}

document.getElementById('addButton').addEventListener('click',
function() {
  
  var newDiv = document.createElement('div');
      newDiv.className = 'row';
      document.body.appendChild(newDiv);

  var image = document.createElement('img');
      image.className = 'avatar';
      image.src = 'avatar-1.jpg';
      newDiv.appendChild(image);

  var messageDiv = document.createElement('div');
      newDiv.appendChild(messageDiv);

  var h6 = document.createElement('h6');
      h6.textContent = 'Jacques Grandjean';
      messageDiv.appendChild(h6);

  var text = document.createElement('p');
      text.textContent = document.getElementById('addMessage').value;
      messageDiv.appendChild(text);

  var trash = document.createElement('img');
      trash.className = 'trash'
      trash.src = 'trash.png';
      newDiv.appendChild(trash);

      document.getElementById('addMessage').value = '';

  var numberOfMessages = document.getElementsByTagName('p').length;
      document.getElementById('count').textContent = numberOfMessages;

      trash.addEventListener('click',
      function(){
        this.parentNode.remove();

  var numberOfMessages = document.getElementsByTagName('p').length;
        document.getElementById('count').textContent = numberOfMessages;
      })


})
