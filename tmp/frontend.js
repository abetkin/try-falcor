

var model = new falcor.Model({
    cache: {
        todos: [
            {
                name: 'get milk from corner store',
                done: false
            },
            {
                name: 'withdraw money from ATM',
                done: true
            }
        ]
    }});

var log = console.log.bind(console)

function main() {
    model.setValue('todos[0].name', 'Keep calm').then(function(){
        model.getValue('todos[0].name').then(log);
    });
    
}