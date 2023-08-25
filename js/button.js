'use strict'

class Button {
    constructor(background, value, className, border = 'none', width = 150, height = 40, padding = 10, borderRadius = 10) {
        this.width = width;
        this.height = height;
        this.padding = padding;
        this.background = background;
        this.value = value;
        this.borderRadius = borderRadius;
        this.className = className;
        this.border = border;
    }

    render() {
        let btn = document.createElement('button');

        btn.style.width = `${this.width}px`;
        btn.style.height = `${this.height}px`;
        btn.style.padding = `${this.padding}px`;
        btn.style.background = this.background;
        btn.style.borderRadius = `${this.borderRadius}px`;
        btn.style.border = this.border;
        btn.innerText = this.value;

        btn.classList.add(this.className); 
        // btn.className = 'btn__send';
        return btn;
    }
}

let blockBtns =  document.querySelector('.all-buttons');

const btnAdd = new Button('rgb(82 190 255)', 'add button', 'btn__send');
blockBtns.append(btnAdd.render());
console.log(btnAdd);

blockBtns.addEventListener('click', addBtn);

function addBtn() {
    class ModernButton extends Button {
        constructor(background, value, border = 'none', width = 200, height = 40, padding = 10, borderRadius = 10) {
            super(background, value, 'btn__rmv', border, width, height, padding, borderRadius);
            this.border = border;
            this.width = width;
            this.height = height;

        }
        render() {
            let btnModern = super.render();
            btnModern.addEventListener('click', () => {
                btnModern.remove();
            });
            return btnModern;
        }
    }
    
    let btnRmv = new ModernButton('#62efff', 'remove button');
    blockBtns.append(btnRmv.render());
}








