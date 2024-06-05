function sendMail() {
  const params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  const serviceID = "service_gymnltf"
  const templateID = "template_wv5vl0q"

  emailjs.send(serviceID, templateID, params)
  .then(
    res => {
      document.getElementById('name').value = ''
      document.getElementById('email').value = ''
      document.getElementById('message').value = ''
      console.log("res");
      alert('Message sent successfully')
    }
  )
  .catch(err => console.log(err))
}
