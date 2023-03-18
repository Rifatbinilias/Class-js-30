function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => displayPost(data))
}

loadPost()

function displayPost(posts) {
    // console.log(posts);
    const divcontainer = document.getElementById('posts');
    for (const post of posts) {
        console.log(post);
        const div = document.createElement('div');    //এইটা হলো html এর class ধরার করার নিয়ম
        div.classList.add('post')    //এইটা হলো html এর class add করার নিয়ম ধরার পরে আমরা html এ যা যা করব তা তা এইখানে পেয়ে যাবে। 
        div.innerHTML = `
        <h3>${post.id} </h3>
        <h4>${post.title} </h4>
        <p>${post.body} </p>
        `
        divcontainer.appendChild(div)  //এইটা হলো একটা function এর মধ্যে দুইটাকে কল করা আছে পরের টা ধরার জন্য লিখতে হয়। 
    }

}


//এইটা হলো বুঝার জন্য

/* fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json)); */