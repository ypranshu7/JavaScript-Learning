// Immediately Invoked Function Expressions IIFE
(
    function pran(){
        console.log(`DB Connected`)
    }
)();

(
    (name) => {
        console.log(`DB Connected Two ${name}`)
    }
)('pranshu')