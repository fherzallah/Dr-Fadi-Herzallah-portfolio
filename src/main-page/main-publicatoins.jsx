import React, { useEffect, useState } from 'react';
import { GrDocumentText } from "react-icons/gr";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function MainPublications() {
    const [publications, setPublications] = useState([]);

    // Fetch the publications on mount
    useEffect(() => {
        const fetchPublications = async () => {
            try {
                const response = await axios.get('https://portfolio-backend-87lm.onrender.com/publications'); // Replace with your API endpoint
                const sortedPublications = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setPublications(sortedPublications.slice(0, 5)); // Get the 5 newest publications
            } catch (error) {
                console.error('Error fetching publications:', error);
            }
        };

        fetchPublications();
    }, []);

    return (
        <div className='flex mx-auto w-full px-28 pt-10 gap-80 bg-slate-200 h-full '>
            <h1 className='text-4xl font-sans'><strong>Publications</strong></h1>

            <div className="flex flex-col gap-10 py-7">
                {publications.map((pub, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                        <div className="flex gap-4 justify-start align-middle hover:text-violet-600 cursor-pointer duration-300">
                            <GrDocumentText className='my-auto' />
                            <p className="mt-1">{pub.title}</p>
                        </div>
                        <br />
                        <div className="flex gap-5">
                            <button className="border-2 rounded-xl border-black hover:text-white hover:bg-violet-600 py-1 px-3 duration-300"><a href={pub.doi} target='_blank'>DOI</a></button>
                            <button className="border-2 rounded-xl border-black hover:text-white hover:bg-violet-600 py-1 px-3 duration-300"><a href={pub.pdfUrl} target='_blank'>Download</a></button>
                            <button className="border-2 rounded-xl border-black hover:text-white hover:bg-violet-600 py-1 px-3 duration-300">Recommended Citation</button>
                        </div>
                        <br />
                    </div>
                ))}
                <span className="hover:text-violet-600 cursor-pointer text-2xl duration-300 flex">
                    <Link to='/publications'>SEE ALL PUBLICATIONS</Link>
                </span>
            </div>
        </div>
    );
}
