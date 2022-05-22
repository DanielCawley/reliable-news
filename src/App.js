import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import VideoList from "./components/VideoList";
import Video from "./components/Video";
import MainNavigation from "./components/MainNavigation";
import MobileNavigation from "./components/mobile/MobileNavigation";

// !pages imports
import VideoListPage from "./pages/VideoListPage";
import IdeaSubmission from "./pages/IdeaSubmission";
import DiscordLinks from "./pages/DiscordLinks";
import MobileVideoListPage from "./pages/MobileVideoListPage";

function App() {
  if (
    /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return (
      <div className="App">
        <MobileNavigation />
        {/* <vids /> */}
        <Switch>
          <Route path="/" exact>
            <Redirect to="/videos" />
          </Route>
          <Route path="/videos">
            <MobileVideoListPage />
          </Route>
          <Route path="/idea-submission">
            <IdeaSubmission />
          </Route>
          <Route path="/discord-channels">
            <DiscordLinks />
          </Route>
          <Route path="/sponsors"></Route>
        </Switch>
      </div>
    );
  } else {
  }

  return (
    <div className="App">
      <MainNavigation />
      {/* <vids /> */}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/videos" />
        </Route>
        <Route path="/videos">
          <VideoListPage />
        </Route>
        <Route path="/idea-submission">
          <IdeaSubmission />
        </Route>
        <Route path="/discord-channels">
          <DiscordLinks />
        </Route>
        <Route path="/sponsors"></Route>
      </Switch>
    </div>
  );
}

export default App;
