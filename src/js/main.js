import './slider'
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';


window.addEventListener('DOMContentLoaded', () => {
    let modalState = {};
    modals(modalState);
    tabs('.no_click', '.js-slide', 'after_click');
    tabs('.glazing_block', '.glazing_content', 'active');
    tabs('.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline');
    changeModalState(modalState);
    forms(modalState);
    
})
