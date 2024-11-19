import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Blogs || Next Hero",
    description: "Super Powerful Next Website",
};

const BlogsPage = () => {
    return (
        <div className='p-24'>
            {
                blogs.map(blog => <div key={blog.slug} className='border-2 p-12'>
                    <h3>{blog.title}</h3>
                    <h3>{blog.description}</h3>
                    <button className='bg-red-400 rounded py-2 px-3'>
                        <Link href={`/blogs/${blog.slug}`}>View Details</Link>
                    </button>


                </div>)
            }
        </div>
    );
};


const blogs = [
    {
        slug: "introduction-to-react",
        title: "Introduction to React",
        description: "Learn the basics of React and how to build interactive user interfaces with this powerful JavaScript library."
    },
    {
        slug: "advanced-nodejs-techniques",
        title: "Advanced Node.js Techniques",
        description: "Dive deep into advanced techniques for building scalable applications with Node.js."
    },
    {
        slug: "guide-to-mongodb",
        title: "A Comprehensive Guide to MongoDB",
        description: "Explore MongoDB’s features and learn how to leverage its capabilities for data storage and management."
    },
    {
        slug: "css-grid-vs-flexbox",
        title: "CSS Grid vs Flexbox",
        description: "Understand the differences between CSS Grid and Flexbox, and when to use each for layout designs."
    },
    {
        slug: "getting-started-with-tailwind-css",
        title: "Getting Started with Tailwind CSS",
        description: "An introductory guide to Tailwind CSS for building fast, responsive, and custom-designed websites easily."
    },
    {
        slug: "effective-use-of-git",
        title: "Effective Use of Git",
        description: "Tips and best practices for using Git in team projects, branching, merging, and managing version control."
    }
];

export default BlogsPage;