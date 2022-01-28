
// Первый пункт
// let arr = ['js', 'css', 'html'];
// alert(arr[0]);

// Второй пункт
// let arr = [0, 1, false, 2, undefined, '', 3, null];

// let filtered = arr.filter(function (e) { return e });
// console.log(filtered);

let arr = [[1, 2], [1, 2, 3], [1, 2, 3, 4]];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3)
        console.log(i);
}

