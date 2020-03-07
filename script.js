const counters = document.querySelectorAll('.counter');
// const speed = 2000;
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        // getAttribute only get the attribute value
        // const target = counter.getAttribute('data-target');
        const target = +counter.getAttribute('data-target');

        console.log('target=', target);
        // console.log(typeof target);

        const count = +counter.innerText;
        const inc = target / speed;
        console.log('inc=', inc);

        console.log('count=', count);
        if (count < target) {
            // Without the Math.ceil you will see the number sometimes change to .5 during the increment.
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});
