const modals = () => {
    const bindModal = (btnOpenSelector, modalSelector, btnCloseSelector) => {
        const openBtns = document.querySelectorAll(btnOpenSelector);
        const modal = document.querySelector(modalSelector);
        // const closeBtn = modal.querySelector(btnCloseSelector);

        const openModal = evt => {
            evt.preventDefault();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        };

        const closeModal = () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }

        openBtns.forEach(btn => {
            btn.addEventListener('click', openModal)
        })

        window.addEventListener('click', evt => {
            if (evt.target.closest(btnCloseSelector) || evt.target == modal) {
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
    // timeoutModal('.popup_engineer', 2000);
}

export default modals;