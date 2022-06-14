const phoneDisplay = document.getElementById('phoneDisplay')
phoneDisplay.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalTitle = phoneDisplay.querySelector('.modal-title')
  const modalBodyInput = phoneDisplay.querySelector('.modal-body input')

  modalTitle.textContent = `New message to ${recipient}`
  modalBodyInput.value = recipient
})


function copy() {
  
    /* Save value of myText to input variable */
    var text = +'00330785447633'
   
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(text);
     
    ("Copied Text: " + text);
    alert('copier dans le presse-papier!')

}
