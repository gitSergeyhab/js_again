import numberInputValidation from './numberInputValidation';

const changeModalState = (state) => {
    const modalShapes = document.querySelectorAll('.balcon_icons_img');
    modalShapes.forEach((shape, i) => {
        shape.addEventListener('click', () => {
           state.numShape = i;
        });
    })

    const shapeWidth = document.querySelector('#width');
    const shapeHeight = document.querySelector('#height');
    numberInputValidation('#width');
    numberInputValidation('#height');

    const takeSize = (input, param) => {
        input.addEventListener('input', () => {
            state[param] = input.value;
        })
    }
    takeSize(shapeWidth, 'width');
    takeSize(shapeHeight, 'height');

    const viewType = document.querySelector('#view_type');
    viewType.addEventListener('change', function() {
        state.type = viewType.value;
    })

    const checkboxes = document.querySelectorAll('.checkbox')
    checkboxes.forEach((box, i) => {
        box.addEventListener('change', () => {
            checkboxes.forEach(box2 => box2.checked = false);
            box.checked = true;
            state.temp = box.nextElementSibling.getAttribute('id');
            console.log(state, Object.keys(state).length);
        })
    })
}

export default changeModalState;