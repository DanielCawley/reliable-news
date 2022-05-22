import Video from "./Video";
import { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";

import classes from "./VideoList.module.css";
import { mergeClasses } from "@material-ui/core/node_modules/@material-ui/styles";

const { REACT_APP_YOUTUBE_API_KEY } = process.env;

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://gooogleapis.com/youtube/v3/playlistItems";

const Videos = () => {
  const [videoData, setVideoData] = useState();
  const [functionComplete, setFunctionComplete] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getVideos = async () => {
      setLoading(true);

      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLouoVzTjOyBXm92woN2ZVM2eM3pEcsTPI&key=${REACT_APP_YOUTUBE_API_KEY}&maxResults=50`
      );

      const data = await res.json();

      // return <Vids embedLink={videoData.items[0].etag} />;

      // return <Vids embedLink={item.etag} />;
      setVideoData(data);
      setLoading(false);
    };

    getVideos().catch(console.error);
  }, []);

  if (videoData && !loading) {
    return (
      <div>
        <ul>
          {videoData.items.map((item) => (
            <li className={classes.listElement}>
              <Video embedLink={item.snippet.resourceId.videoId} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return <CircularProgress />;
};

export default Videos;
