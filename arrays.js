let nums = [1, 2, 3, 4];
let arr = [];

function abc(target) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                arr.push(nums[i], nums[j]);

            }
        }
    }
    console.log(arr)
}
abc(6);
