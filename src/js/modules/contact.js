export const handleSubmit = (e) => {
    e.preventDefault()
    let myForm = document.getElementById('contact-form');
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value
    let formData = new FormData(myForm)
    fetch("https://formsubmit.co/ajax/lmarciszewski1@gmail.com", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                message: message
            })
            // body: new URLSearchParams(formData).toString()
        })
        // .then(response => response.json())
        .then(() => console.log('Form successfully submitted')).catch((error) =>
            alert(error))
}