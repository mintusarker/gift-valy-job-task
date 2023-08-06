// carousel one
let imaArray = ['image/picture1.jpeg', 'image/picture2.jpeg', 'image/picture3.jpg', 'image/picture4.jpeg', 'image/picture5.jpeg', 'image/picture6.jpeg', 'image/picture7.jpeg']
const image = document.querySelector('.slide-img')
console.log(image);
let count = 0;

setInterval(() => {
    count++;
    if (count >= imaArray.length) {
        count = 0
        image.src = imaArray[count]

    }
    else {
        image.src = imaArray[count]
    }
}, 4000);

function next() {
    count++;
    if (count >= imaArray.length) {
        count = 0
        image.src = imaArray[count]
    }
    else {
        image.src = imaArray[count]
    }
};


function prev() {
    count--;
    if (count < 0) {
        count = imaArray.length - 1
        image.src = imaArray[count]
    }
    else {
        image.src = imaArray[count]
    }
};



// carousel two
let anotherImgArray = ['image/p-1.jpg', 'image/p-2.jpg', 'image/p-3.jpg', 'image/p-4.jpg', 'image/p-5.jpg', 'image/p-6.jpg', 'image/p-7.jpg', 'image/p-8.jpeg', 'image/p-9.jpeg']
const img = document.querySelector('.slide-img-two')
console.log(image);
let anotherCount = 0;

setInterval(() => {
    anotherCount++
    if (anotherCount >= anotherImgArray.length) {
        anotherCount = 0
        img.src = anotherImgArray[anotherCount]
    }
    else {
        img.src = anotherImgArray[anotherCount]
    }
}, 3000);

function anotherNext() {
    anotherCount++
    if (anotherCount >= anotherImgArray.length) {
        anotherCount = 0
        img.src = anotherImgArray[anotherCount]
    }
    else {
        img.src = anotherImgArray[anotherCount]
    }
};

function anotherPrev() {
    anotherCount--;
    if (anotherCount < 0) {
        anotherCount = anotherImgArray.length - 1
        img.src = anotherImgArray[anotherCount]
    }
    else {
        img.src = anotherImgArray[anotherCount]
    }

};

