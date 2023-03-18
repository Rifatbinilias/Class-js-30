//এইভাবে হবে না। 
/* const loadUser = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(json => console.log(json))

} */


function loadUser() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(json => console.log(json))

}

//loadUser কে আমরা যদি html এ কল করি তাহলে অামাদের পেজে গিয়ে ক্লিক করে সেটাকে দেখতে হবে। আর আমরা যদি সরাসরি js ফাইলের মধ্যে কল করি তাহলে ক্লিক করতে হবে কিন্তু সেটা html এর মধ্যে ক্লিক দিতে হবে।  
function loadUser() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => console.log(data))

    // .then(data => displayUser(data)) //displayUser  এইটা এইখানে ও কল করা যায়। ক্লিক হিসাবে। 

}
//loadUser()

//একাধিক তথ্য থাকলে for loop চালিয়ে নির্দিষ্ট টা বের করা যায়। 
function displayUser(users) {
    // console.log(users);
    const ul = document.getElementById('users');
    for (const user of users) {
        console.log(user);
        const li = document.createElement('li');
        li.innerText = `${user?.name}==${user?.email} ${user?.id} == ${user?.address?.street}`;
        ul.appliChild(li)
    }
}