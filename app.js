function ask(options) {
    const { title, cancel=false } = options
    const promiseFn = (resolve) => {
        const popup = document.createElement('form');
        const classList = ['popup', 'open']
        popup.classList.add(...classList);

        popup.insertAdjacentHTML('afterbegin',
        
        `
        <fieldset>
            <label>${title}</label>
        </fieldset>
        
        `);

        if(cancel) {
            const cancelBtn = document.createElement('button');
            cancelBtn.type = 'button';
            cancelBtn.textContent = 'Cancel';
            console.log(cancelBtn)
        }
        

        console.log(popup);

        //document.body.insertAdjacentElement('afterbegin', popup);
        document.body.appendChild(popup);
    }

    return new Promise(promiseFn)
}


ask({title: "Hello World", cancel: true});