console.log('js');

function redirect(dataIn){
  console.log(dataIn);
  var loc = dataIn || 'index.html';
  window.location = loc;
}
