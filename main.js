
const icon = document.createElement('i')
icon.classList.add('fas')
icon.classList.add('fa-times')

const form = document.querySelector('#form')
const task = document.querySelectorAll('.task')
const input = document.querySelector('#inputfield')
const container = document.querySelector('.output_container')

console.dir(container)

// Create elements

const createTasks = () => {

    for(let i = 0; i < task.length; i++){
        const icon = document.createElement('i');
        icon.classList.add('fas');
        icon.classList.add('fa-times');

        task[i].appendChild(icon)
    }
};

createTasks()

// Close button
const closeButton = () => {
    const close = document.querySelectorAll('.fa-times')
    for(let i = 0; i < close.length; i++){
        close[i].addEventListener('click', ()=>{
            task[i].remove();
        });
    };
};
closeButton()



// Add Task



form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    console.log(input.value)
    input.value = ''
})

