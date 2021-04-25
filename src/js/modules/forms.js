// const forms = () => {
//     const formList = document.querySelectorAll('form');
//     const inputList = document.querySelectorAll('input');

//     const message = {
//         load: 'loading...',
//         ok: 'ok, it loaded!',
//         error: 'something wrong :(('
//     }

//     const postData = async (url, data) => {
//         const res = await fetch(url, {
//             method: 'POST',
//             body: data
//         })
        
//         return await res.text();
//     }

//     const clearInputs = () => {
//         inputList.forEach(input => input.value = '');
//     }

//     formList.forEach(form => {
//         form.addEventListener('submit', (evt) => {
//             evt.preventDefault();

//             let statusMessage = document.createElement('div');
//             statusMessage.classList.add('status');
//             statusMessage.textContent = message.load;
//             form.appendChild(statusMessage);

//             const formData = new FormData(form);

//             postData('assets/server.php', formData)
//             .then(res => {
//                 console.log(res);
//                 statusMessage.textContent = message.ok;
//             })
//             .catch(() => statusMessage.textContent = message.error)
//             .finally(() => {
//                 clearInputs()
//                 setTimeout(() => statusMessage.remove(), 3000);
//             })

//         })
//     })

//     console.log(formList, inputList);
// }

// export default forms;

const forms = (state) => {
    const formList = document.querySelectorAll('form');
    const inputPhones = document.querySelectorAll('input[name="user_phone"]');
    const inputNames = document.querySelectorAll('input[name="user_name"]');
    inputPhones.forEach(iPhone => {
        iPhone.addEventListener('input', () => {
            iPhone.value = iPhone.value.replace(/[^\d-+()]/, '');
            state.phone = iPhone.value;
        })
    })

    inputNames.forEach(iName => {
        iName.addEventListener('input', () => {
            state.name = iName.value;
        })
    })

    const message = {
        load: 'loading . .. ...',
        ok: 'allright',
        err: 'all is bad'
    }

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            body: data
        })
        return await res.text();
    }

    formList.forEach(form => {
        form.addEventListener('submit', (evt) => {
            const inputs = form.querySelectorAll('input');
            evt.preventDefault();
            const messageEl = document.createElement('div');
            messageEl.textContent = message.load;
            messageEl.classList.add('status');
            form.appendChild(messageEl);

            const formData = new FormData(form);
            postData('assets/server.php', formData)
            .then(res => {
                console.log(res, state);
                messageEl.textContent = message.ok;
            })
            .catch(() => {
                console.log('error');
                messageEl.textContent = message.err;
            })
            .finally(() => {
                inputs.forEach(input => input.value = '');
                setTimeout(() => messageEl.remove(), 3000);
            })
        })
    })
}
export default forms;