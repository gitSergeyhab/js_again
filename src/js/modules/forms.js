const forms = () => {
    const formList = document.querySelectorAll('form');
    const inputList = document.querySelectorAll('input');

    const message = {
        load: 'loading...',
        ok: 'ok, it loaded!',
        error: 'something wrong :(('
    }

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            body: data
        })
        
        return await res.text();
    }

    const clearInputs = () => {
        inputList.forEach(input => input.value = '');
    }

    formList.forEach(form => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.load;
            form.appendChild(statusMessage);

            const formData = new FormData(form);

            postData('assets/server.php', formData)
            .then(res => {
                console.log(res);
                statusMessage.textContent = message.ok;
            })
            .catch(() => statusMessage.textContent = message.error)
            .finally(() => {
                clearInputs()
                setTimeout(() => statusMessage.remove(), 3000);
            })

        })
    })

    console.log(formList, inputList);
}

export default forms;