const login = document.querySelector('.login')
const containerInfo = document.querySelector('.container__info')
const loginInput = document.querySelectorAll('.login__input')
const loginWrapper = document.querySelector('.login__wrapper')
const loginName = document.querySelector('.login__name');
const loginPass = document.querySelector('.login__pass');
const loginButton = document.querySelector('.login__button');

const createTextInfo = () => {
    const p = document.createElement('p')
    p.classList.add('login__info')
    loginWrapper.append(p)
    return p 
}
const checkAuthorized = (text) => {
    // console.log(createTextInfo(text));
    let lName = loginName.value
    let lPass = loginPass.value
    const objText = [
        {
            yes: 'Все хорошо'
        },
        {
            no: 'Что-то пошло не так...'
        },
    ]

   
    if(lName === '' && lPass === '' || lName === '' || lPass === ''){
        login.style.display = 'flex'
        containerInfo.style.display = 'none'
        loginInput.forEach(item => {
            item.classList.add('activeLogin__warning')
        })
        
        createTextInfo(text).textContent = objText[1].no
    } else {
        login.style.display = 'none'
        containerInfo.style.display = 'flex'
        lName === ''
        lPass === ''
        loginInput.forEach(item => {
            item.classList.add('activeLogin__okay')
        })
        createTextInfo(text).textContent = objText[0].yes
    }
}

const autorized = () => {
    checkAuthorized()  
}
const notAutorized = () => {
    checkAuthorized()
}

function checkAuth(){
    if(autorized){
        autorized()
    } else {
        notAutorized()
    }
}

loginButton.addEventListener('click', checkAuth)