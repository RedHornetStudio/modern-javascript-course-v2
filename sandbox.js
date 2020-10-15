// let myArray = {
//     0: 'chun-li',
//     1: 'shaun',
//     2: 'mario',
//     length: 3
// };

// console.log(myArray);

let user = {
    name: 'mario',
    email: 'email@email.com',
    blogs: [
        { title: 'aaaaaaaa', likes: 20 },
        { title: 'bbbbbbbb', likes: 30 }
    ],
    showBlogs() {
        this.blogs.forEach(element => {
            console.log(`blog ${element.title} has ${element.likes} likes`);
        });
    }
}

user.showBlogs();