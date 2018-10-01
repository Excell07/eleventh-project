import React, {Component} from 'react';
import FetchData from './FetchData';
import Photo from './Photo';
import NotFound from './NotFound';


export default class PhotoContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      photos: [],
      loading: true
    };
  }

  // Fetch data and set state
  loadContent = (tag) => {
    this.setState({
      loading: true
    });
    return FetchData(tag)
    .then((photos) => {
      this.setState({
        photos: photos,
        loading: false
      });
    });
  }

  // Run this code when component did mount
  componentDidMount = () => {
    this.loadContent(this.props.tag);
  }

  componentDidUpdate(nextProps){
    const currentTag = this.props.tag;
    const nextTag = nextProps.tag;
    if (currentTag !== nextTag){
      this.loadContent(this.props.tag);
    }
  }
  
  render(){
    const tag = this.props.tag;

    if (this.state.loading){
      return <p>Loading...</p>;
    } else {
      // Fill photo container with photos
      if (this.state.photos.length === 0){
        return <NotFound />
      } else {
        return (
          <div className="photo-container">
            <h2>{tag}</h2>
            <ul>
              {
                this.state.photos.map(photo =>
                  <Photo 
                    url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} 
                    title={photo.title} 
                    key={photo.id} 
                  />
                )
              }
            </ul>
          </div>
        );       
      }
    }
  }
};
