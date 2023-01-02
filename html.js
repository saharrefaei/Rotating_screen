const form = document.querySelector(".addform")
const taskinput = document.querySelector(".writtask")
// const filterform = document.querySelector(".filterform")
const filterinput = document.querySelector(".filterinput")
const listgroup = document.querySelector(".list-group")
const pannels = document.querySelectorAll(".pannel")
const closerotation = document.querySelectorAll('.close')
const openrotation = document.querySelectorAll('.open')
const active = document.querySelectorAll('.rotater')
const navbar=document.querySelectorAll('.navbar')
const leaderclass = document.querySelectorAll('.loader')
const loadingclass = document.querySelectorAll('.loading')

console.log(leaderclass[0].classList);
setTimeout(function() {
    leaderclass[0].classList.remove('loader');
    loadingclass
    loadingclass[0].classList.remove('loading');
  }, 3000);



callloader();



function callloader() {
    form.addEventListener('submit', addtask);
    listgroup.addEventListener('click', removetask);
    openrotation[0].addEventListener('click', addroter)
    closerotation[0].addEventListener('click', closeroter)


}

function addtask(ehr) {
    if (taskinput.value === '') {
        alert('please inter some value');
    } else {
        const li = document.createElement('li')
        console.log(taskinput.value);
        li.className = "list-group"
        li.appendChild(document.createTextNode(taskinput.value))
        const i = document.createElement('SPAN');
        i.className = "closebtn";
        i.appendChild(document.createTextNode('DELETE'))
        li.appendChild(i);
        listgroup.appendChild(li);
        ehr.preventDefault();
    }
}


function removetask(e) {
    console.log(e.target.classList.value);
    if (e.target.classList.value == 'closebtn') {
        if (confirm("yes")) {
            e.target.parentElement.remove();

        }
    } else {
        alert("sorry,I am not able to remove data")
    }

}


pannels.forEach(pannel => {
    pannel.addEventListener('click', () => {
        console.log(pannel);
        removeactive()
        pannel.classList.add('active')
    })


});

function removeactive() {
    pannels.forEach(pannel => {
        pannel.classList.remove('active')
    })
}

// for (const open of openrotation) {

//     open.classList.add('activerot');
//     console.log(active);
//   }
function addroter() {
    active[0].classList.add('activerot');
    navbar[0].classList.add('rotate');
    openrotation[0].classList.add('openrotate');
    closerotation[0].classList.add('closerotate');

    console.log(active[0].classList
        );
}
function closeroter() {
    active[0].classList.remove('activerot')
    navbar[0].classList.remove('rotate');
    console.log(active[0].classList);
}