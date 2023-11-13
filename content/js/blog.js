  const blogData = [
    {
      "title": "Welcome Drinks for Housewarming Party",
      "date": "31 August 2023"
    },
    {
      "title": "Yummy Desserts for a House Party",
      "date": "21 July 2022"
    },
    {
      "title": "3 Must Try Vegan Salads",
      "date": "01 July 2022"
    }
  ]
    // Function to fetch and display blog data from JSON
    async function displayBlogs() {
        try {
            const response = await fetch(blogData); // Change the path to your JSON file if needed
            console.log(response)
            const data = await response.json();
            const blogContainer = document.getElementById('blog-container');
            
            if (data.blogs) {
                data.blogs.forEach(blog => {
                    const blogPost = document.createElement('div');
                    blogPost.className = 'blogpost';
                    blogPost.innerHTML = `
                        <div class="blogimage"></div>
                        <div class="blogdetails">
                            <p class="blogtitle">${blog.title}</p>
                            <p class="blogdate">on ${blog.date}</p>
                        </div>
                    `;
                    blogContainer.appendChild(blogPost);
                });
            }
        } catch (error) {
            console.error('Error fetching and displaying blog data:', error);
        }
    }

    // Call the function to display blogs
    displayBlogs();
