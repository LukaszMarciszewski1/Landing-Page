// export const contact = () => {
//     fetch("https://formsubmit.co/ajax/lmarciszewski1@gmail.com", {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify({
//                 name: "FormSubmit",
//                 message: "I'm from Devro LABS"
//             })
//         })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.log(error));
// }
// contact()



export const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('contact-form');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}