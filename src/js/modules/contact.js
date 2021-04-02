export const handleSubmit = (e) => {
    e.preventDefault()
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    const result = document.getElementById('result');
    const contactTxtValue = [...document.querySelectorAll('.contact-txt')];

    const clearInputs = () => {
        setTimeout(() => {
            result.innerHTML = '';
            contactTxtValue.forEach(el => el.value = '')
        }, 5000)
    }

    fetch("https://formsubmit.co/ajax/f6fcc616522bf9c63486bd9118f68afa", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
        .then(response => response.json())
        .then(success => {
            if (success) {
                result.innerHTML = (
                    '<p class="success"><ion-icon name="checkmark-circle-outline"></ion-icon>  Wiadomość została wysłana :)</p>')
                clearInputs()
            }
        }).catch((error) => {
            if (error) {
                result.innerHTML = (
                    '<p class="error"><ion-icon name="checkmark-circle-outline"></ion-icon> Wystąpił błąd, spróbuj ponownie (:</p>')
                console.log(error)
                clearInputs()
            }
        })
}