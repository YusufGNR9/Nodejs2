const posts = [
    {name : "Post 1", desc: "data Storage"},
    {name : "Post 2", desc: "node js"},
    {name : "Post 3", desc: "React Native"},
    {name : "Post 4", desc: "css Demistified"},
];

const addPost = (newPost) => {
    const promise1 = new Promise((resolve , reject) => {
        posts.push(newPost);
        resolve(posts);
    })
    return promise1;
        
};

const listPosts = () => {
    posts.map(result =>{
        console.log(result);
    })
};


async function asyncFunc () {
    try{
    const receivedData = await addPost({name: "post 5", desc:"Javascript Mastery"});
    console.log(receivedData);
    const receiveData2 = await addPost({name : "post 20", desc:"React Mastery"});
    console.log(receiveData2);

    }catch (error){
        console.log(error);
    }
}

asyncFunc();
