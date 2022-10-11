import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h2 className='mt-3 text-primary'>Some Common Question!!!</h2>
            <div className='mt-5'>
                <div className='mb-5 bg-info p-3 text-dark rounded'>
                    <h3 className='mb-3 fs-2'>What is the purpose of react router?</h3>
                    <p className='fs-5'>ReactJS Router is mainly used for <strong>developing Single Page Web Applications</strong>. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                </div>
                <div className='mb-5 bg-info p-3 text-dark rounded'>
                    <h3 className='mb-3 fs-2'>How does context api work?</h3>
                    <p className='fs-5'>The React Context API is a way for <strong>a React app to effectively produce global variables that can be passed around</strong>. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
                <div className='mb-5 bg-info p-3 text-dark rounded'>
                    <h3 className='mb-3 fs-2'>What is usehref?</h3>
                    <p className='fs-5'>The useHref hook <strong>returns a URL that may be used to link to the given to location, even outside of React Router</strong>. Tip: You may be interested in taking a look at the source for the Link component in react-router-dom to see how it uses useHref internally to determine its own href value.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;