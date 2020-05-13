document.addEventListener('DOMContentLoaded', (e) => {
    const body = document.querySelector('body')
    const counter = document.getElementById('counter')
    setInterval(increment, 1000);

    function increment() {
        let number = parseInt(counter.textContent)
        number++
        counter.textContent = number
    }
    body.addEventListener('click', (e) => {
        const minus = document.getElementById('minus')
        const plus = document.getElementById('plus')
        const heart = document.getElementById('heart')
        const likesList = document.querySelector('ul')

        if (e.target === minus){
            let number = parseInt(counter.textContent)
            number--
            counter.textContent = number
        } else if (e.target === plus){
            increment()
        } else if (e.target === heart){
            let count = parseInt(counter.textContent)
            let lastLike = likesList.lastChild
            
            if (likesList.childNodes.length === 0){
                let li = document.createElement('li')
                li.innerHTML = `${count} has been liked <span>1</span> time`
                likesList.appendChild(li)

            } else if (count === parseInt(lastLike.textContent.split(" ")[0])){
                    let spanNum = parseInt(lastLike.childNodes[1].innerText)
                    spanNum++
                    lastLike.childNodes[1].innerText = spanNum
            } else {
                let li = document.createElement('li')
                li.innerHTML = `${count} has been liked <span>1</span> time`
                likesList.appendChild(li)
            }
            
            
            // let commentCount = undefined

            // if(count === commentCount){
            //     let spanNum = parseInt(li.childNodes[1].innerText)
            //     spanNum++
            //     li.childNodes[1].innerText = spanNum
            // } else {
            //     commentCount = count
            //     li.innerHTML = `${commentCount} has been liked <span>1</span> time`
            //     likesList.appendChild(li)
            // }

            // let li = document.createElement('li')
            // if (li.innerHTML){
            //     console.log('empty')
            //     let spanNum = parseInt(li.childNodes[1].innerText)
            //     spanNum++
            //     li.childNodes[1].innerText = spanNum
            // } else {
            //     li.innerHTML = `${counter.textContent} has been liked <span>1</span> time`
            //     likesList.appendChild(li)
            // }

        }
    })

})