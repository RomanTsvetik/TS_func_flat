const inputArr: any = [1, 2, [3, 4, [5, 6]]];

function myFlat(...elements: Array<any>) {
    if (elements.length > 1)
        throw new Error(
            "Function accepts only 1 argument, too much arguments provided"
        );

    let result: any = [...elements];
    let i: number = 0;

    while (i < result.length) {
        if (Array.isArray(result[i])) {
            result.splice(i, 1, ...result[i]);
        } else {
            i++;
        }
    }

    return result;
}

console.log(myFlat(inputArr));
