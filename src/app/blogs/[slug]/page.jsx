

const page = ({ params }) => {
    console.log(params.slug)
    const { title, description } = blogs.find((blog) => blog.slug === params.slug)

    return (
        <div className="h-screen">
            <h5 className="text-green-600 text-2xl">{title}</h5>
            <h5 className="text-xl text-green-300">{description}</h5>
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

export default page;