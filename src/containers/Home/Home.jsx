import React from "react";
import './Home.css';
import Banner from '../../static/svg/banner.svg'
import NewsCard from "../../components/NewsCard/NewsCard";

const Home = () => {
    return (
        <div className="home">
            <div>
            <div className="slanted" />
            <div className="orange">
            </div>
            <div className="white">
                <div className="white-slanted" />
                <div className="table-container">
                    <table>
                        <tr>
                            <th>Athlete</th>
                            <th>Sport</th>
                            <th>Event</th>
                        </tr>
                        <tr>
                            <td>Neeraj Choppra</td>
                            <td>Athletics</td>
                            <td>Men's Javelin Throw</td>
                        </tr>
                        <tr>
                            <td>PV Sindhu</td>
                            <td>Badminton</td>
                            <td>Women's Single</td>
                        </tr>
                        <tr>
                            <td>Nisha Dahiya</td>
                            <td>Wrestling</td>
                            <td>Women's 68Kg</td>
                        </tr>
                    </table>
                    <div className="anchor" onClick={() => window.location.pathname="/athletes"}>View all Athlete &#8594;</div>
                </div>
                
                <img src={Banner} alt="" />
            </div>
            <div className="green">
            </div>

            </div>

            <div className="news">
                <div className="news-title">News & Headlines</div>
                <div className="blogs-container">
                    <NewsCard imgUrl={"https://assets.editorial.aetnd.com/uploads/2010/01/gettyimages-466313493-2.jpg"} title="This is a dummy title" tag="dummy" linkUrl="https://olympics.com/en/live-blog/tokyo-2020-olympics-2021-games-live-blog" />
                    <NewsCard imgUrl={"https://assets.editorial.aetnd.com/uploads/2010/01/gettyimages-466313493-2.jpg"} title="This is a dummy title" tag="dummy" linkUrl="https://olympics.com/en/live-blog/tokyo-2020-olympics-2021-games-live-blog" />
                    <NewsCard imgUrl={"https://assets.editorial.aetnd.com/uploads/2010/01/gettyimages-466313493-2.jpg"} title="This is a dummy title" tag="dummy" linkUrl="https://olympics.com/en/live-blog/tokyo-2020-olympics-2021-games-live-blog" />
                    
                </div>

            </div>
        </div>
    );
};

export default Home;
