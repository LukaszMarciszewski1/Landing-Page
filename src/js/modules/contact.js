export const handleSubmit = (e) => {
    e.preventDefault()
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    const result = document.getElementById('result');
    const arr = [...document.querySelectorAll('.contact-txt')];

    const clearInputs = () => {
        setTimeout(() => {
            result.innerHTML = '';
            arr.forEach(el => el.value = '')
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