var container = document.getElementById('container');

function countDown(initial, final = 0, interval = 1) {
    var current = initial;

    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}

countDown(10);

var todo = {
    id: 123,
    name: 'Pick up drycleaning',
    completed: true
};

container.innerHTML = `
<div todo='${todo.id}' class='list-group-item'>
   <i class="${todo.completed ? '': 'hidden'} text-success glyphicon glyphicon-ok"/>
   <span class="name">${todo.name}</span>
</div>
`;