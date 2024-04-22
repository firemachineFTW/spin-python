'use-strict'

const toggleBtn = document.querySelector('.toggle-btn')
        const toggleBtnIcon = document.querySelector('.toggle-btn i')
        const dropdownMenu = document.querySelector('.dropdown_menu')

        toggleBtn.onclick = function(){
            dropdownMenu.classList.toggle('open')
            const isOpen = dropdownMenu.classList.contains('open')

            toggleBtnIcon.classList = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
        }

        const items = document.querySelectorAll('.slider .list .item');
        const next = document.querySelector('.arrows .next');
        const prev = document.querySelector('.arrows .prev');
        const thumbnails = document.querySelectorAll('.thumbnail .item');

        // config param
        let countItem = items.length;
        let itemActive = 0;
        // event next click
        next.onclick = function(){
            itemActive = itemActive + 1;
            if(itemActive >= countItem){
                itemActive = 0;
            }
            showSlider();
        }
        //event prev click
        prev.onclick = function(){
            itemActive = itemActive - 1;
            if(itemActive < 0){
                itemActive = countItem - 1;
            }
            showSlider();
            }
            // auto run slider
            let refreshInterval = setInterval(() => {
                next.click();
            }, 5000)
            function showSlider(){
            // remove item active old
                let itemActiveOld = document.querySelector('.slider .list .item.active');
                let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
                itemActiveOld.classList.remove('active');
                thumbnailActiveOld.classList.remove('active');

                // active new item
                items[itemActive].classList.add('active');
                thumbnails[itemActive].classList.add('active');

                // clear auto time run slider
                clearInterval(refreshInterval);
                refreshInterval = setInterval(() => {
                    next.click();
                }, 5000)
            }

            // click thumbnail
            thumbnails.forEach((thumbnails, index) => {
                thumbnails.addEventListener('click', () => {
                    itemActive = index;
                    showSlider();
                })
            })