import {blogs} from "/javaScript/data.js"

console.log(blogs)


const featureBlogEl = document.getElementById('feature-blog-el')
const blogContainerEl = document.getElementById('blog-container-el')
const mainPageEl = document.getElementById('main-page-el')

document.addEventListener("click",function(e) {
    if(e.target.dataset.blogId) {
        mainPageEl.innerHTML = renderFullBlog(e.target.dataset.blogId)
    }

})

//TODO: allow user to click on img to go to article. currently can only select text to

function renderFeatureBlog() { //renders the most recent blog to the top of the home page with custom styling

    const addHTML = `
    <div class="header-text"data-blog-id= ${blogs[0].id}>
        ${renderBlogCard(blogs[0])}
    </div>`

    featureBlogEl.style.background = `url(${blogs[0].img})`
    featureBlogEl.style.backgroundSize = 'cover'
    featureBlogEl.style.backgroundRepeat = 'no-repeat'
    featureBlogEl.innerHTML = addHTML
}

function renderBlogCardList(cardNum) { //use argument to specify how many cards to render
    let addHTML = ""
    console.log("called card list")

    for(let i = 1; i < cardNum; i++) { //starts at one to avoid render of the feature blog(most recent added)
        console.log('adding html')
        addHTML += `
        <div class="blog" data-blog-id= ${blogs[i].id}>
            <img class="blog-img" data-blog-id= ${blogs[i].id} src="${blogs[i].img}" alt="blog cover image">
            ${renderBlogCard(blogs[i])}
        </div>
        `
    }

    return addHTML

}

function renderBlogCard(blog) { //returns html for a specific blog
    
    const addHTML = `
        
        <p class="blog-info" data-blog-id= ${blog.id}>${blog.info}</p>
        <h2 class="blog-title" data-blog-id= ${blog.id}>${blog.title}</h2>
        <p class="blog-paragraph" data-blog-id= ${blog.id}>${blog.summery}</p>`

    return addHTML
}

function renderFullBlog(blogId) { //used to render out the full blog on page without switching html files
    
    window.scrollTo(0,0)
    console.log(`render full article ${blogId}`)
    
    const blog = blogs.filter(function(blog){
        return blog.id === blogId
    })[0]

    const addHTML = `
        <div class="fullBlog">
            <p class="fullBlog-info">${blog.info}</p>
            <h2 class="fullBlog-title">${blog.title}</h2>
            <p class="fullBlog-paragraph">${blog.summery}</p>
            <img class="fullBlog-img" src="${blog.img}" alt="blog cover image">
            <p>${blog.content}</p>
            <a class="blog-link" target="_blank" href="${blog.link}">want to read more?</a>
            <h2 class="fullBlog-title recent-posts">Recent posts</h2>
        </div>

        <section class="blogs-container" id="blog-container-el">${renderBlogCardList(3)}</section>
        `

    return addHTML
    
}

function render() {
    renderFeatureBlog()
    blogContainerEl.innerHTML = renderBlogCardList(blogs.length) //argument renders all cards
}

render()