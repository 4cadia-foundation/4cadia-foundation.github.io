function registerNewsletter(projectValue) {

    const emailValue = document.getElementById('email').value

    if (emailValue) {
        const api = 'https://4cadia.com/v1/api/mailing';
        //const api = 'https://mailinglist-257716.firebaseio.com/subscribers.json'


        const request = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                "email": emailValue,
                "project": projectValue
            })
        }

        fetch(api, request)
            .then(function (response) {
                response.text()
                    .then(function (result) {
                        console.log(result);
                    })
            })
            .catch(function (err) { console.error(err) })


        alert(`Thanks for your register!`)
    }

}