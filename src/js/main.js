import './slider'
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms'

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs('.no_click', '.js-slide', 'after_click');
    tabs('.glazing_block', '.glazing_content', 'active');
    forms();
    
})
