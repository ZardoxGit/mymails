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