const changeModalState = (state) => {
    const deleteInfo = () => {
        if (state.name) delete state.name;
        if (state.phone) delete state.phone;
    }

    const modalShapes = document.querySelectorAll('.balcon_icons_img');
    modalShapes.forEach((shape, i) => {
        shape.addEventListener('click', () => {
           state.numShape = i;
           deleteInfo();
        });
    })

    const shapeWidth = document.querySelector('#width');
    const shapeHeight = document.querySelector('#height');
    const takeSize = (input, param) => {
        input.addEventListener('input', () => {
            state[param] = input.value;
            deleteInfo();
        })
    }
    takeSize(shapeWidth, 'width');
    takeSize(shapeHeight, 'height');

    const viewType = document.querySelector('#view_type');
    viewType.addEventListener('change', function() {
        state.type = this.options[this.selectedIndex].value;
    })

    const checkboxes = document.querySelectorAll('.checkbox')
    const tempers = ['cold', 'warm']
    checkboxes.forEach((box, i) => {
        box.addEventListener('change', () => {
            checkboxes.forEach(box2 => box2.checked = false);
            box.checked = true;
            state.temp = tempers[i];
            console.log(state, Object.keys(state).length);
        })
    })
}

export default changeModalState;