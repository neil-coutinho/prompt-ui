function ask(options) {
    const { title, cancel=false } = options
    const promiseFn = (resolve) => {
        const popup = document.createElement('form');
        const classList = ['popup', 'open']
        popup.classList.add(...classList);

        popup.insertAdjacentHTML('afterbegin',
        
        `
        <fieldset>
            <label for="answer">${title}</label>
            <div>
                <input type="text" name="answer" id="answer"/>
            </div>
            <button type="submit">Submit</button>
        </fieldset>
        
        `);

        if(cancel) {
            const cancelBtn = document.createElement('button');
            cancelBtn.type = 'button';
            cancelBtn.textContent = 'Cancel';
            console.log(cancelBtn)

            popup.firstElementChild.insertAdjacentElement('beforeend', cancelBtn);
            
            //insertAdjacentElement('beforeend',cancelBtn);
        }
        

        //console.log(popup);

     //document.body.insertAdjacentElement('afterbegin', popup);


      popup.addEventListener('submit', (e) => {
        e.preventDefault();
        const answer = e.target.answer.value;
        console.log(answer);
        resolve(answer)
      })

       document.body.appendChild(popup);
    }

    return new Promise(promiseFn)
}


( async function () {
    let result =  await ask({title: "Hello World", cancel: true});
    console.log(result);
})()

