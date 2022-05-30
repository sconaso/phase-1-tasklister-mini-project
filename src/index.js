document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', function(e){
    e.preventDefault()
    buildList(e.target['new-task-description'].value)
    form.reset()
  })
});

function buildList(listItem){
  let li = document.createElement('li')
  let btn = document.createElement('btn')
  btn.addEventListener('click', deleteItem)
  btn.textContent = 'x'
  li.textContent = `${listItem} `
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}

function deleteItem(e){
  e.target.parentNode.remove()
}