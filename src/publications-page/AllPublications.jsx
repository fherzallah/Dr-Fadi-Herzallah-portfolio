import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GrDocumentText } from "react-icons/gr";

export default function AllPublications() {
    const [searchText, setSearchText] = useState('');
    const [selectedYear, setSelectedYear] = useState('*');
    const [selectedType, setSelectedType] = useState('*');
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [publications, setPublications] = useState([]);

    // Fetch publications from the API on component mount
    useEffect(() => {
        const fetchPublications = async () => {
            try {
                const response = await axios.get('https://portfolio-backend-87lm.onrender.com/publications');
                setPublications(response.data); 
            } catch (error) {
                console.error('Error fetching publications:', error);
            }
        };

        fetchPublications();
    }, []);

    // Filter publications based on search text, year, and type
    const filteredPublications = publications.filter((pub) => {
        const matchesText = pub.title.toLowerCase().includes(searchText.toLowerCase()) || 
                            pub.abstract.toLowerCase().includes(searchText.toLowerCase());
        const matchesYear = selectedYear === '*' || pub.year === selectedYear.replace('.year-', '');
        const matchesType = selectedType === '*' || pub.type === selectedType;
        return matchesText && matchesYear && matchesType;
    });

    return (
        <div className='flex mx-auto w-full px-4 xs:px-8 md:px-16 lg:px-28 xl:px-32 2xl:px-40 pt-10 gap-10 xs:gap-20 md:gap-40 lg:gap-40 h-full flex-wrap'>
            <h1 className='text-2xl xs:text-3xl md:text-4xl font-sans'><strong>Publications</strong></h1>

            <div className="flex flex-col gap-5 xs:gap-10 py-7">
                {/* Filters */}
                <div className="flex flex-wrap xs:flex-row mb-4 gap-3 xs:gap-5">
                    <div className="col-auto">
                        <input
                            type="search"
                            className="filter-search form-control form-control-sm border border-black rounded-md py-1 px-2 cursor-text w-full xs:w-auto"
                            placeholder="Search..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
                    <div className="col-auto">
                        <select
                            className="pub-filters pubtype-select form-control form-control-sm border border-black py-1 px-2 rounded-md cursor-pointer w-full xs:w-auto"
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                        >
                            <option value="*">Type</option>
                            <option value="Published Articles">Published Articles</option>
                            <option value="Accepted Articles">Accepted Articles</option>
                            <option value="Under Review">Under Review</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <select
                            className="pub-filters form-control form-control-sm border border-black py-1 px-2 rounded-md cursor-pointer w-full xs:w-auto"
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                        >
                            <option value="*">Date</option>
                            <option value=".year-2025">2025</option>
                            <option value=".year-2024">2024</option>
                            <option value=".year-2023">2023</option>
                            <option value=".year-2022">2022</option>
                            <option value=".year-2021">2021</option>
                        </select>
                    </div>
                </div>

                {/* Publications */}
                {filteredPublications.map((pub, idx) => (
                    <div key={idx} className="flex flex-col gap-1 animate-slideIn">
                        <div className="flex gap-4 justify-start align-middle hover:text-violet-600 cursor-pointer duration-300">
                            <GrDocumentText className='my-auto lg:min-w-8 lg:min-h-8 xs:min-w-6 xs:min-h-6' />
                            <p className="mt-1 year-2024">{pub.title}</p>
                        </div>
                        {pub.abstract && (
                            <div>
                                {expandedIndex === idx ? (
                                    <>
                                        <p className="text-sm text-gray-700 mt-2 max-w-5xl">{pub.abstract} 
                                        </p>
                                        <button
                                            className="text-sm text-violet-600 hover:underline"
                                            onClick={() => setExpandedIndex(null)}
                                        >
                                            Read Less
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-sm text-gray-700 mt-2">
                                            {pub.abstract.split(' ').slice(0, 10).join(' ')}...
                                        </p>
                                        <button
                                            className="text-sm text-violet-600 hover:underline"
                                            onClick={() => setExpandedIndex(idx)}
                                        >
                                            Read More...
                                        </button>
                                    </>
                                )}
                            </div>
                        )}
                        <br />
                        <div className="flex flex-wrap xs:flex-row gap-3 xs:gap-5">
                            <button className="border-2 rounded-xl border-black hover:text-white hover:bg-violet-600 py-1 px-3 duration-300"><a href={pub.doi} target='_blank'>DOI</a></button>
                            <button className="border-2 rounded-xl border-black hover:text-white hover:bg-violet-600 py-1 px-3 duration-300"><a href={pub.pdfUrl} target='_blank'>Download</a></button>
                            <button className="border-2 rounded-xl border-black hover:text-white hover:bg-violet-600 py-1 px-3 duration-300 whitespace-nowrap">Recommended Citation</button>
                        </div>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
}










