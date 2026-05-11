function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}

sum(1, 2, 3); // returns 6
