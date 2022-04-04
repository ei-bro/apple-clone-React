import React, { useState, useEffect } from "react";
import "./youTube.css";
function YouTubeApiGroup() {
    const [ytVideo, setYtVideo] = useState([]);

    // componenteDidMount
    useEffect(() => {
        fetch(
            "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCSyP54oWkk2b3xMSKNjW6d1sQZfJudvD0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
        )
            // // view count
            // fetch(
            //     "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCSyP54oWkk2b3xMSKNjW6d1sQZfJudvD0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=viewcount&maxResults=9"
            // )
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                const videos = response.items;
                setYtVideo(videos);
            });
    }, []);

    return (
        <div className="youtubeVideosWrapper">
            <div className="container">
                {/* title start */}
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-12">
                        <div className="title-wraper bold video-title-wrapper">
                            Latest Videos
                        </div>
                    </div>
                </div>
                {/* title end */}

                {/* all video from api start */}

                <div className="row">
                    {ytVideo.map((singleVideo, index) => {
                        const fullVideoLink = `https://www.youtube.com/watch?v=${singleVideo.id.videoId}`;
                        return (
                            <div key={index} className="col-sm-12 col-md-4">
                                <div className="singleVideoWrapper">
                                    {/* video Thumbnail start */}
                                    <div className="videoThumbnail">
                                        <a href={fullVideoLink}>
                                            <img
                                                src={
                                                    singleVideo.snippet
                                                        .thumbnails.high.url
                                                }
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    {/* video Thumbnail end */}

                                    {/* video info start */}
                                    <div className="videoInfoWrapper">
                                        {/* video title start */}
                                        <div className="videoTitle">
                                            <a href={fullVideoLink}>
                                                {singleVideo.snippet.title}
                                            </a>
                                        </div>
                                        {/* video title end */}

                                        {/* video description start */}
                                        <div className="videoDesc">
                                            {singleVideo.snippet.description}
                                        </div>
                                        {/* video description start */}
                                    </div>
                                    {/* video info start */}
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* all video from api end */}
            </div>
        </div>
    );
}

export default YouTubeApiGroup;
