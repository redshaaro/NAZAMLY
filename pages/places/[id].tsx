import { useState } from "react";
import { VenueProps, fetcher } from "@/utils/interfaces";
import useSWR from "swr";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";
import Navbar from "@/Components/NavBar";
const EventId = () => {
  const [startDate, setStartDate] = useState(new Date());
  const router = useRouter();
  const { id } = router.query;
  const fetchPlace = useSWR(`http://localhost:3000/api/venues/${id}`, fetcher);
  if (fetchPlace.error) return <div>{fetchPlace.error}</div>;

  if (fetchPlace.isLoading)
    return (
      <div>
        <Navbar color={"black"}></Navbar>
        <h1 className="text-4xl text-center font-bold mt-20 capitalize">
          Hold on pulling data from the server
        </h1>
      </div>
    );
    const { data} = fetchPlace as VenueProps;
  if (data)
    return (
      <div className=" h-[full] mb-7">
        <Navbar color={"black"}></Navbar>
        <div className="px-5 md:px-32 relative">
          <h1 className="pt-5  text-3xl font-semibold">{data.Name}</h1>
          <h1 className="pl-5 mt-2 text-base font-semibold">{data.Location}</h1>
          <div className="flex gap-3  mb-5">
              {/* map images from db after adding new imgs */}
            <img
              className="rounded-l-3xl rounded-br-3xl w-[60%] mt-5 "
              src={data.Image}
              alt=""
            />
            <div className="flex-col ">
              <img
                className="rounded-r-3xl w-[80%] rounded-b-3xl mt-5 "
                src={data.Image}
                alt=""
              />
              <img
                className="rounded-r-3xl w-[80%] rounded-b-3xl mt-5 "
                src={data.Image}
                alt=""
              />
            </div>
          </div>
          <div>
          <div className="absolute  right-[15.5%] bg-white mb-5  shadow-gray-800 shadow-sm rounded-2xl text-center border-2 p-7">
            <h1 className="m-2"><span className="text-2xl">{data.price}</span>/  Event</h1>
            <p >Select the Date 
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="border-2 rounded-full pl-3 p-2" ></DatePicker></p>
              <button className="p-3 font-bold text-white bg-green-700 rounded mt-4">Proceed to Payment</button>
            </div>
           <p className="border-b-2 pb-4 w-[50%]">{data.Description}</p> 
           <h1 className='m-2 text-lg'>Status: <span className={`${data.Available ? "text-green-500":"text-red-500"}`}>{data.Available ? "Available":"not Avaliable"}</span></h1>
           
          </div>
        </div>
      </div>
    );
};

export default EventId;
