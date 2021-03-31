const cards = () => {
    const bodyPosts = document.querySelector('.body__posts')
    const storiesWrapper = document.querySelector('.stories__wrapper')

    const getData = async (url) => {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error(`Ошибка: ${url}, ${responce.status}`)
        }
        return await response.json()
    }
    
    const createCardsPosts = ({userName, nickname, text, img, imgLogo}) => {
        const div = document.createElement('div')
        div.classList.add('body__post')
        div.innerHTML = `
            <div class="body__post-profiles">
                <div class="body__post-profile">
                    <img src=${imgLogo} class="profile__ico" alt="profile">
                    <div class="body__post-profile-info">
                        <p class="info__fullname">${userName}</p>
                        <p class="info__nickname">${nickname}</p> 
                        
                    </div>
                </div>
                <div class="body__post-settings">
                    <img src="/images/dest/Three dots.svg" class="settings__ico" alt="settings">
                </div>
            </div>
            <div class="body__post-image">
                <img src=${img} class="image__ico" alt="post-image">
            </div>
            <div class="body__post-text">
                <p class="info__text">${text}</p> 
            </div>
            <div class="body__post-icons">
                <div class="body__post-icons-block">
                    <svg class="post__icons" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3045 6.94333L13.6793 7.36778L14.0541 6.94333L14.6644 6.25219C16.4374 4.24435 19.7022 3.90664 21.9374 5.52669C22.9971 6.29471 23.4472 7.47394 23.4956 8.71964C23.5444 9.97394 23.1801 11.2347 22.6847 12.0588C19.9189 16.6592 17.7874 18.9679 13.6668 22.3634C11.4812 20.7085 9.89751 19.5015 8.54148 18.1483C7.13212 16.7419 5.96108 15.1687 4.64392 12.7601C3.16181 10.0499 3.27896 7.07934 5.4212 5.52669C7.65643 3.90664 10.9212 4.24436 12.6942 6.25219L13.3045 6.94333Z" stroke="black" stroke-linecap="round"/>
                    </svg>
                    <svg class="post__icons"  viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1" fill="white">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6646 17.9958C22.5139 16.5259 23 14.8197 23 13C23 7.47715 18.5228 3 13 3C7.47715 3 3 7.47715 3 13C3 18.5228 7.47715 23 13 23C14.8316 23 16.5481 22.5076 18.0245 21.648L23.46 23.4897L21.6646 17.9958Z"/>
                        </mask>
                        <path d="M21.6646 17.9958L20.7987 17.4955L20.5754 17.8821L20.7141 18.3065L21.6646 17.9958ZM18.0245 21.648L18.3454 20.7008L17.9145 20.5548L17.5213 20.7838L18.0245 21.648ZM23.46 23.4897L23.1391 24.4368L25.0311 25.0779L24.4106 23.1791L23.46 23.4897ZM22 13C22 14.6394 21.5626 16.1736 20.7987 17.4955L22.5304 18.4961C23.4653 16.8782 24 15 24 13H22ZM13 4C17.9706 4 22 8.02944 22 13H24C24 6.92487 19.0751 2 13 2V4ZM4 13C4 8.02944 8.02944 4 13 4V2C6.92487 2 2 6.92487 2 13H4ZM13 22C8.02944 22 4 17.9706 4 13H2C2 19.0751 6.92487 24 13 24V22ZM17.5213 20.7838C16.1936 21.5569 14.6501 22 13 22V24C15.0131 24 16.9027 23.4583 18.5277 22.5121L17.5213 20.7838ZM23.781 22.5426L18.3454 20.7008L17.7036 22.5951L23.1391 24.4368L23.781 22.5426ZM20.7141 18.3065L22.5095 23.8004L24.4106 23.1791L22.6151 17.6852L20.7141 18.3065Z" fill="black" mask="url(#path-1-inside-1)"/>
                    </svg>
                    <svg class="post__icons" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2975 5.72286L11.5 11.9052L13.6093 20.7678L22.2975 5.72286ZM10.6375 11.915L12.8679 22.0519L13.1865 23.5L13.9279 22.2159L23.4502 5.72286L24.4086 4.06286L24.5167 4.00001L24.4449 4L22.5273 4.00001L3.48276 4.00001L2 4.00001L3.09479 5.00001L10.6546 11.9052L10.6375 11.915ZM22 5.00001L11 11L4.57756 5.00001H22Z" fill="black"/>
                    </svg>

                </div>
                <svg class="post__icons"  viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.6707 16.6237L6.5 22.8981V3.5H21.5V22.8981L14.3293 16.6237L14 16.3356L13.6707 16.6237Z" stroke="black"/>
                </svg>
                
            </div>
            <div class="body__interactive">
                <p class="body__interactive-watches">1234</p>
                <p class="body__interactive-comments"><span class="body__interactive-nickname">${nickname}: </span>отдeльный комментарий</p>
            </div>
        `
        bodyPosts.append(div)
    }

    const createStories = ({nickname, imgLogo}) => {
        const div = document.createElement('div')
        div.classList.add('stories__wrapper-link')
        div.innerHTML = `
            <img src=${imgLogo} class="stories__person" alt="person">
            <p class="stories__wrapper-name">${nickname}</p>
        `
        storiesWrapper.append(div)
    }

    getData('db/dataBase.json').then(function(data){
        data.forEach(createCardsPosts)
        data.forEach(createStories)
        
    })
}
export default cards;