const modals = (state) => {
    const bindModal = (btnOpenSelector, modalSelector, btnCloseSelector, closerOutside = true, needLen = -1) => {
        const openBtns = document.querySelectorAll(btnOpenSelector);
        const modal = document.querySelector(modalSelector);
        const allModals = document.querySelectorAll('[data-modal]');

        const closeAllModals = () => {
            allModals.forEach(mod => mod.style.display = 'none') 
        }

        const openModal = evt => {
            if (needLen < Object.keys(state).length) {
                closeAllModals()
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
            evt.preventDefault();
        };

        const closeModal = () => {
            closeAllModals();
            document.body.style.overflow = '';
        }

        openBtns.forEach(btn => {
            btn.addEventListener('click', openModal)
        })

        window.addEventListener('click', evt => {
            if (evt.target.closest(btnCloseSelector) || (evt.target == modal && closerOutside)) {
                closeModal();
            }
        })

        window.addEventListener('keydown', evt => {
            if (evt.keyCode == 27) {
                closeModal();
            }
        })
    }

    const timeoutModal = (modalSelector, time) => {
        setTimeout(() => {
            const modal = document.querySelector(modalSelector);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time)
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    bindModal('.phone_link', '.popup', '.popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false);
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false, 2);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false, 4);



    // timeoutModal('.popup_engineer', 2000);
}

export default modals;