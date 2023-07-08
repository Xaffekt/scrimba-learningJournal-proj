import {blogs} from "/javaScript/data.js"

console.log(blogs)


const featureBlogEl = document.getElementById('feature-blog-el')
const blogContainerEl = document.getElementById('blog-container-el')
const mainPageEl = document.getElementById('main-page-el')

document.addEventListener("click",function(e) {
    if(e.target.dataset.blogId) {
        renderFullBlog(e.target.dataset.blogId)
    }

})

//TODO: allow user to click on img to go to article. currently can only select text to

function renderFeatureBlog() {
    //renders the most recent blog to the top of the home page with custom styling
    const addHTML = `
    <div class="header-text"data-blog-id= ${blogs[0].id}>
        ${renderBlog(blogs[0])}
    </div>`

    featureBlogEl.style.background = `url(${blogs[0].img})`
    featureBlogEl.style.backgroundSize = 'cover'
    featureBlogEl.style.backgroundRepeat = 'no-repeat'
    featureBlogEl.innerHTML = addHTML
}

function renderBlogList() {
    //renders the grid of blog posts
    let addHTML = ""


    for(let i = 1; i < blogs.length; i++) { //starts at one to avoid render of the feature blog(most recent added)

        addHTML += `
        <div class="blog" data-blog-id= ${blogs[i].id}>
            <img class="blog-img" data-blog-id= ${blogs[i].id} src="${blogs[i].img}" alt="blog cover image">
            ${renderBlog(blogs[i])}
        </div>
        
        `
    }

    blogContainerEl.innerHTML = addHTML

}

function renderBlog(blog) {
    //returns html for a specific blog
    //not used for the full blog, only for home page
    const addHTML = `
        
        <p class="blog-info" data-blog-id= ${blog.id}>${blog.info}</p>
        <h2 class="blog-title" data-blog-id= ${blog.id}>${blog.title}</h2>
        <p class="blog-paragraph" data-blog-id= ${blog.id}>${blog.summery}</p>`

    return addHTML
}

function renderFullBlog(blogId) {
    //used to render out the full blog on page without switching html files
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
        </div>`

    mainPageEl.innerHTML = addHTML
}

function render() {
    renderFeatureBlog()
    renderBlogList()
}

render()