import axios from "axios";
 async function getData(userid){
    const {data:users} = await axios("https://jsonplaceholder.typicode.com/users/"+userid);
    const {data:post} = await axios("https://jsonplaceholder.typicode.com/posts/" + userid);

    users.posts = [{...post}];
    console.log(users);
}
export default getData;