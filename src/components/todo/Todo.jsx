import { BiSolidError } from "react-icons/bi";
import { FaListCheck } from "react-icons/fa6";
import { IoMdCheckmark, IoMdHome } from "react-icons/io";
import { HiOutlineXMark } from "react-icons/hi2";
import { AiFillLike } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const Todo = () => {
    const [urgentItems, setUrgentItems] = useState([]);
    const [recommendationItems, setRecommendationItems] = useState([]);
    const [maintenanceItems, setMaintenanceItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const fetchData = async (category, setData) => {
        try {
            const response = await axios.get(`http://3.90.33.177:8000/list_all_items?page=1&pageSize=50&category=${category}`);
            console.log(`Fetched ${category} Data:`, response.data);
            setData(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error(`Error fetching ${category} items:`, error);
        }
    };

    useEffect(() => {
        fetchData("not%20related", setUrgentItems);
        fetchData("recommendation", setRecommendationItems);
        fetchData("maintenance", setMaintenanceItems);
    }, []);

    const togoCardOnclick = async (itemId) => {
        try {
            const response = await axios.get(`http://3.90.33.177:8000/items/${itemId}`);
            setSelectedItem(response.data);
            setShowPopup(true);
        } catch (error) {
            console.error("Error fetching item details:", error);
        }
    };

    const todocloseOnclick = () => {
        setShowPopup(false);
        setSelectedItem(null);
    };

    return (
        <div>

          {showPopup && selectedItem && (
    <div className="todoPopup">
        <div className="todoPopupOverlay">
            <button onClick={todocloseOnclick} className="close">
                <IoClose />
            </button>
            <div className="popupContent">
                <h2>Task Details</h2>
              <p><strong>Summary:</strong> {selectedItem.summary}</p>
                <p><strong>Category:</strong> {selectedItem.category}</p>
                {selectedItem.images && selectedItem.images.length > 0 && (
                    <img 
                        src={`data:image/jpeg;base64,${selectedItem.images[0]}`} 
                        alt="Task Image"
                       style={{ width: "30%", height: "auto", display: "block", margin: "auto" }}

                    />
                )}
            </div>
        </div>
    </div>
)}


            <div className="todoPage">
                <div className="todoNavabar">
                    <ul>
                        <li className="active">Nearby</li>
                        <li>Todo’s</li>
                        <li>Design</li>
                        <li>Shop</li>
                    </ul>
                </div>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <div className="accordion-body"><p>This is your home inspection report summarized and organized into a to do list, I have highlighted theareas of concern and have found reliable contractors to get the work done.</p></div>
                        <div className="UrgRecMenMAin">
                            <div className="UrgRecMen Urg"><h5>Urgent</h5></div>
                            <div className="UrgRecMen Rec"><h5>Recommendation</h5></div>
                            <div className="UrgRecMen Men"><h5>Maintenance</h5></div>
                        </div>
                    </div>

                </div>

                <div className="urgentMain">
                    <BiSolidError />
                    <div className="fenceMAin">
                        <div className="fenceLofoText">
                            <h2><span>What's Urgent </span></h2>
                            <div className="todosLodoAndText todos1">
                                <FaListCheck /><h6>TO-DO’S (0/8)</h6>
                            </div>
                        </div>
                        <h6 className="Summarryh6"><strong>Simple Summary:</strong> Your exterior is in good condition overall. Their are 8 items that you should consider getting fixed right away in red. </h6>
                    </div>
                    <div className="todoMain">
                        <div className="todosTop">
                        </div>
                        <div className="todosbottom">
                            <div className="todosLodoAndText todos3"><h6>Completed</h6><IoMdCheckmark /></div>
                            <div className="todosLodoAndText todos4"><h6>Dismiss All</h6><HiOutlineXMark /></div>
                        </div>
                    </div>
                </div>
               

                <div className="todoCardMain">
    <div className="row">
        {urgentItems.length === 0 ? (
            <p>Loading or No Items Found...</p>
        ) : (
            urgentItems.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-3 col-sm-12">
                    <div className="todoCard todoCardred">
                        <div className="todoCardMainheaChec">
                            
                                                      <p>{item._id}</p>  

                            <input type="checkbox" />
                        </div>
                        <div className="exteriorBtn">
                            <h5>EXTERIOR</h5> 
                        </div>
                        <div className="todoCardImg">
                            <img 
    src={item.images && item.images.length > 0 ? `data:image/jpeg;base64,${item.images[0]}` : "/default-image.png"} 
    alt={`Task ${item._id}`} 
/>

                        </div>
                       <div className="todoCardPara">
    <h6>{item.summary.split(" ").slice(0, 30).join(" ")}{item.summary.split(" ").length > 30 ? "..." : ""}</h6>  
</div>

                       <div onClick={() => togoCardOnclick(item._id)} className="todoCardBtn">
                                        <button className="todoCardBtn"><h6>Request 3+ Quotes</h6></button>
                                    </div>
                    </div>
                </div>
            ))
        )}
    </div>
</div>





                <div className="information informationred">
                    <h2>Notes from your inspector</h2>
                    <div className="paraInformation">
                        <p>A visual inspection  of the exterior surfaces was performed around the home to include the exterior surface material, soffit/fascia surfaces, doors and windows, and other exterior surface areas. </p>
                        <p>The exterior wall covering, trim, and flashing were visually inspected for concerns related to installation, paint/stain condition, damage and general maintenance issues. The entry doors to the home were tested and inspected by operating the doors, checking the lock and latch, inspecting the weather-stripping, inspecting any screens present and checking for any physical damage.</p>
                        <p>The exterior of the windows were visually inspected for signs of cracked glass, damaged screens, caulking around edges and seams, paint or finish deterioration, and general concerns. The driveway and exterior concrete surfaces around the home were walked and inspected for surface deterioration, trip hazards, poor slope or drainage and any general areas of concern. The surface grading and drainage was inspected to determine if areas exist that will adversely affect the home.</p>
                    </div>
                </div>
                <div className="informationLine"></div>

                <div className="urgentMain urgentLike">
                    <div className="AiFillLike"><AiFillLike /></div>

                    <div className="fenceMAin">
                        <div className="fenceLofoText">
                            <h2>What's Recommended</h2>
                            <div className="todosLodoAndText todos1">
                                <FaListCheck /><h6>TO-DO’S (0/8)</h6>
                            </div>
                        </div>
                        <h6 className="Summarryh6"><strong>Simple Summary:</strong> Your exterior is in good condition overall. Their are 8 items that you should consider getting fixed right away in red. </h6>
                    </div>
                    <div className="todoMain">
                        <div className="todoMain">
                            <div className="todosTop">
                            </div>
                            <div className="todosbottom">
                                <div className="todosLodoAndText todos3"><h6>Completed</h6><IoMdCheckmark /></div>
                                <div className="todosLodoAndText todos4"><h6>Dismiss All</h6><HiOutlineXMark /></div>
                            </div>
                        </div>
                    </div>
                </div>
               
{/* Recommendation Section */}
<div className="todoCardMain">
    <div className="row">
        {recommendationItems.length === 0 ? (
            <p>Loading or No Items Found...</p>
        ) : (
            recommendationItems.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-3 col-sm-12">
                    <div className="todoCard todoCardyellow">  {/* Change color to yellow */}
                        <div className="todoCardMainheaChec">
                            <p>{item._id}</p>  
                            <input type="checkbox" />
                        </div>
                        <div className="exteriorBtn">
                            <h5>EXTERIOR</h5> 
                        </div>
                        <div className="todoCardImg">
                            <img 
                                src={item.images && item.images.length > 0 ? `data:image/jpeg;base64,${item.images[0]}` : "/default-image.png"} 
                                alt={`Task ${item._id}`} 
                            />
                        </div>
                        <div className="todoCardPara">
                                <h6>{item.summary.split(" ").slice(0, 30).join(" ")}{item.summary.split(" ").length > 30 ? "..." : ""}</h6>  
  
                        </div>
                       
                       <div onClick={() => togoCardOnclick(item._id)} className="todoCardBtn">
                                        <button className="todoCardBtn"><h6>Request 3+ Quotes</h6></button>
                                    </div>
                    </div>
                </div>
            ))
        )}
    </div>
</div>



                <div className="information informationyellow">
                    <h2>Information from your inspector</h2>
                    <div className="paraInformation">
                        <p>A visual inspection  of the exterior surfaces was performed around the home to include the exterior surface material, soffit/fascia surfaces, doors and windows, and other exterior surface areas. </p>
                        <p>The exterior wall covering, trim, and flashing were visually inspected for concerns related to installation, paint/stain condition, damage and general maintenance issues. The entry doors to the home were tested and inspected by operating the doors, checking the lock and latch, inspecting the weather-stripping, inspecting any screens present and checking for any physical damage. The exterior of the windows were visually inspected for signs of cracked glass, damaged screens, caulking around edges and seams, paint or finish deterioration, and general concerns. The driveway and exterior concrete surfaces around the home were walked and inspected for surface deterioration, trip hazards, poor slope or drainage and any general areas of concern. The surface grading and drainage was inspected to determine if areas exist that will adversely affect the home.</p>
                    </div>
                </div>



                <div className="informationLine"></div>

                <div className="urgentMain maintenanceHome">
                    <div className="IoMdHome"><IoMdHome /></div>

                    <div className="fenceMAin">
                        <div className="fenceLofoText">
                            <h2>Maintenance  </h2>
                            <div className="todosLodoAndText todos1">
                                <FaListCheck /><h6>TO-DO’S (0/8)</h6>
                            </div>
                        </div>
                        <h6 className="Summarryh6"><strong>Simple Summary:</strong> Your exterior is in good condition overall. Their are 8 items that you should consider getting fixed right away in red. </h6>
                    </div>
                    <div className="todoMain">
                        <div className="todoMain">
                            <div className="todosTop">
                            </div>
                            <div className="todosbottom">
                                <div className="todosLodoAndText todos3"><h6>Completed</h6><IoMdCheckmark /></div>
                                <div className="todosLodoAndText todos4"><h6>Dismiss All</h6><HiOutlineXMark /></div>
                            </div>
                        </div>
                    </div>
                </div>
               
               {/* Maintenance Section */}
<div className="todoCardMain">
    <div className="row">
        {maintenanceItems.length === 0 ? (
            <p>Loading or No Items Found...</p>
        ) : (
            maintenanceItems.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-3 col-sm-12">
                    <div className="todoCard todoCardgreen">  {/* Change color to green */}
                        <div className="todoCardMainheaChec">
                            <p>{item._id}</p>  
                            <input type="checkbox" />
                        </div>
                        <div className="exteriorBtn">
                            <h5>EXTERIOR</h5> 
                        </div>
                        <div className="todoCardImg">
                            <img 
                                src={item.images && item.images.length > 0 ? `data:image/jpeg;base64,${item.images[0]}` : "/default-image.png"} 
                                alt={`Task ${item._id}`} 
                            />
                        </div>
                        <div className="todoCardPara">
                        <h6>{item.summary.split(" ").slice(0, 30).join(" ")}{item.summary.split(" ").length > 30 ? "..." : ""}</h6>  

                        </div>
                        
                       <div onClick={() => togoCardOnclick(item._id)} className="todoCardBtn">
                                        <button className="todoCardBtn"><h6>Request 3+ Quotes</h6></button>
                                    </div>
                    </div>
                </div>
            ))
        )}
    </div>
</div>

                <div className="information informationgreen">
                    <h2>Information from your inspector</h2>
                    <div className="paraInformation">
                        <p>A visual inspection  of the exterior surfaces was performed around the home to include the exterior surface material, soffit/fascia surfaces, doors and windows, and other exterior surface areas. </p>
                        <p>The exterior wall covering, trim, and flashing were visually inspected for concerns related to installation, paint/stain condition, damage and general maintenance issues. The entry doors to the home were tested and inspected by operating the doors, checking the lock and latch, inspecting the weather-stripping, inspecting any screens present and checking for any physical damage. The exterior of the windows were visually inspected for signs of cracked glass, damaged screens, caulking around edges and seams, paint or finish deterioration, and general concerns. The driveway and exterior concrete surfaces around the home were walked and inspected for surface deterioration, trip hazards, poor slope or drainage and any general areas of concern. The surface grading and drainage was inspected to determine if areas exist that will adversely affect the home.</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Todo
