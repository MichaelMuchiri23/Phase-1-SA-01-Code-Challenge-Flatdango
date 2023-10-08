document.addEventListener('DOMContentLoaded',postDetails)

function postDetails(){
    fetch('http://localhost:3000/films/1')
    .then(res=>res.json())
    .then(data=>{
        const title=document.querySelector('#title-name')
        const poster=document.querySelector('img')
        const runtime=document.querySelector('#runtime')
        const showtime=document.querySelector('#showtime')
        const tickets=document.querySelector('#tickets')
        
        let left=data.capacity-data.tickets_sold

        title.innerText=data.title
        poster.src=data.poster
        runtime.innerText=data.runtime
        showtime.innerText=data.showtime
        tickets.innerText=left

        const btn=document.querySelector('#btn')
        btn.addEventListener('click',()=>{
            if(tickets.innerText>0){
                tickets.innerText=--left
            }
        })
    
    })

    fetch('http://localhost:3000/films')
    .then(res=>res.json())
    .then(arr=>{
        const ul=document.querySelector('ul')
        arr.forEach((obj)=>{
            const li=document.createElement('li')
            li.className='list-of-films'
            li.innerText=obj.title
            ul.appendChild(li)
        })

        
    })

}