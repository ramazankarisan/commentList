# commentList Project
[Live DEMO](https://post-commentlist.netlify.app/)
-   This is a project that I have used an `API` - from this **[link](https://github.com/reactdersleri/react-yazi-yorum)** anyone can see its documentation (it is in Turkish right now, but I think it is pretty simple to understand it.)-.
-   It is basicly a **_CRUD_** project which anyone can write a comment and then see it in the webpage and as next update it and delete it.
-   I have mainly also followed some steps from the creator of this **api**, but I have also tried to implement the most basic things that I have studied druing my courses. I will be updating this **readme** file as long as I made some updates.
- I spent a lot of time in order to practice **_Redux_** but still there are lots of step which has to be made.

## What we did so far?

-   Initially we get the data from **api** by using `axios.get('')`.

-   By using **semantic.ui** list templates _-for right now-_ returned that data inside the **app.js**.

-   I used also the [momentJS](https://momentjs.com/) library to format the date that I got from api, so we could see them in a clearer way.

-   I created 2 different components. One of them **commentList** that shows all the posts from th api and when I click one of them, it shows me **commentDetail** component.

-   I used `react-router-dom` to navigate between the home page and details for the posts.

-   At the landing page we are seeing the post and when we click one of them, it is directing us to its detail with the comments which are made about that post and at the same page anyone can also add another comment to the corresponding post.
-   Additionally, we are able to add post just by using **PostAdd** and **PostForm** components.
