import React from 'react'
import PhotosView from "./PhotosView.jsx";
import {Link, Route} from "react-router-dom";
import AlbumList from "./AlbumList.jsx";

class Photos extends React.Component {
  constructor(props) {
    super(props);

    this.getSection = this.getSection.bind(this);
  }

  getSection() {
    if (this.props.match.params.section === 'photos_all') {
      return 'all_photos';
    }
    else if (this.props.match.params.section === 'albums') {
      return this.props.match.params.subsection || 'albums';
    }
  }

  render() {
    let photos = JSON.parse(localStorage.getItem('photos'))['Alex Doe'] || {};
    let album = (this.props.match.params.section === 'albums') ? this.props.match.params.subsection : null;

    return (
      <div id="info_wrapper">
        <div className="title title-photos">
          <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/DjG18OrMbQh.png'/>
          <a href ="#">Photos</a>
          <table id="tabs-top">
            <tbody>
            <tr>
              <Link className={"title-photos-tab" + (this.getSection() === 'all_photos' ? " title-photos-tab-active" : "")}
                    to={'/profile/' + this.props.match.params.user + '/photos/photos_all'}>
                All Photos
              </Link>
              <Link className={"title-photos-tab" + (this.getSection() === 'hawaii' ? " title-photos-tab-active" : "")}
                    to={'/profile/' + this.props.match.params.user + '/photos/albums/hawaii'}>
                Hawaii
              </Link>

              <Link className={"title-photos-tab" + (this.getSection() === 'albums' ? " title-photos-tab-active" : "")}
                    to={'/profile/' + this.props.match.params.user + '/photos/albums'}>
                Albums
              </Link>
            </tr>
            </tbody>
          </table>
        </div>
        <Route
            exact path={'/profile/:user/photos/albums'}
            component={AlbumList} />
        <Route path={'/profile/' + this.props.match.params.user + '/photos/albums/:subsection'}
            render={(props) => <PhotosView {...props}
            photos={photos[this.getSection()] || []} album={album} />} />
        <Route path={'/profile/' + this.props.match.params.user + '/photos/photos_all'}
            render={(props) => <PhotosView {...props}
            photos={photos[this.getSection()] || []} album={album} />} />
      </div>
    );
  }
}

export default Photos;