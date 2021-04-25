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

import numberInputValidation from './numberInputValidation';

const forms = (state) => {
    const formList = document.querySelectorAll('form');
    numberInputValidation('input[name="user_phone"]');

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

    const closeModal = (form) => {
        const modal = form.closest('.popup_calc_end')
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
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

            if (form.closest('.popup_calc_end')) {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            };

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
                setTimeout(() => closeModal(form), 5000);
            })
        })
    })
}
export default forms;