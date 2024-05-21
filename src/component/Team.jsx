import React, { useState, useEffect  } from "react";
import axios from 'axios';
import img1 from "../assets/team/alpacino.jpg";
import img2 from "../assets/team/robertdeniro.jpg";
import img3 from '../assets/razor2.png';
import bg from '../assets/advice.jpg';
import img6 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img7 from '../assets/news.jpeg';
import { Link } from 'react-router-dom';


const Team = () => {
  const [hoverName1, setHoverName1] = useState("");
  const [hoverName2, setHoverName2] = useState("");

  // Sample data
  const data = [
    { imageUrl: img6, text: 'Articles 1', url: './articles1' },
    { imageUrl: img4, text: 'Articles 2', url: './Articles2' },
    { imageUrl: img5, text: 'Articles 3', url: './Articles3' },
    // Add more data as needed
  ];

  useEffect(() => {
    const fetchCelebrityData = async () => {
      const options = {
        method: 'GET',
        url: 'https://celebrity-by-api-ninjas.p.rapidapi.com/v1/celebrity',
        params: {
          name: 'Michael Jordan'
        },
        headers: {
          'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
          'X-RapidAPI-Host': 'celebrity-by-api-ninjas.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCelebrityData();
 }, []);

  return (
    <>
      <div id="team" className="bg-black pt-20 py-10">
        <p className="text-center text-primary font-bold text-3xl mb-4">
          Our Team
        </p>
        <div className="flex flex-col md:flex-row p-4 justify-center gap-8">
          <div className="relative w-fit md:mx-0 mx-auto">
            <img
              className="w-fit aspect-square bg-cover p-4 max-h-[400px]"
              src={img1}
              alt="team 1"
              // onMouseEnter={() => setHoverName1("Aniket")}
              // onMouseLeave={() => setHoverName1("")}
            />
            {hoverName1 && (
              <span className="absolute top-0 h-full w-full flex justify-center items-center text-white font-bold text-xl bg-primary bg-opacity-70">
                {hoverName1}
              </span>
            )}
          </div>
          <div className="relative w-fit md:mx-0 mx-auto">
            <img
              className="w-fit aspect-square bg-cover p-4 max-h-[400px]"
              src={img2}
              alt="team 2"
              // onMouseEnter={() => setHoverName2("Tiwari")}
              // onMouseLeave={() => setHoverName2("")}
            />
            {hoverName2 && (
              <span className="absolute top-0 h-full w-full flex justify-center items-center text-white font-bold text-xl bg-primary bg-opacity-70">
                {hoverName2}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto  flex gap-4 py-32">
        {/* First Column - Responsive Image */}
        <img
          src={img3}
          alt="Responsive Image"
          className="h-auto max-h-[50vh] w-[30vw] object-scale-down"
        />


        {/* Second Column - Responsive Text */}
        <div className="md:flex-row p-8 mt-24 ">
          <p className="text-lg italic text-white ">If You can't Trust your Barber Who can you Trust?</p>
          <p className=" mt-2 text-white ">
            Kesh is a family salon that offers hair services for men, women & children.
            Our team provides tailored services for the whole family.
          </p>
        </div>
      </div>

      {/* Blog Writing */}
      <div className='container mx-auto p-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className="col-span-1 md:col-span-1 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
            <div className="p-6">
              <h2 className="text-primary text-2xl font-bold">Discover Trends And Tips</h2>
              <p className="text-primary">Keep Yout Skin & Hair Healthy & Happy !</p>
            </div>
          </div>


          <div className="container mx-auto p-4">
            <p className="mb-4 text-primary">See All Articles</p>
            <div className="overflow-x-auto max-w-screen-xl">
              <div className="flex whitespace-nowrap">
                {data.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden w-64 mr-4">
                    {/* Responsive Image */}
                    <img src={item.imageUrl} alt={`Image ${index + 1}`} className="w-full h-48 object-cover" />
                    {/* Text Hyperlink */}
                    <div className="p-4">
                      <p className=" font-semibold mb-2">{item.text}</p>
                      <a href={item.url} className="text-primary hover:underline text-[12px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                      </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <div className="relative">
          <img src={img7} alt="Celebration" className="w-full max-h-[400px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl">Entertainment</h2>
            <p className="text-white px-10 py-10">Get the latest celebrity gossip, TV show recaps, movie reviews, previews of new TV shows and movies, interviews with your favorite celebrities, and music.</p>
            <a href="https://www.indiatoday.in/movies/celebrities" target="_blank" className=" text-primary hover:underline text-[12px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clip-rule="evenodd" />
  <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
</svg> </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
