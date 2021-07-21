import { get } from "axios";
import { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

class ProjectCarousel extends Component {
  state = { loading: true, urls: [] };

  getData() {
    get(`/api/project/${this.props.id}`, {})
      .then((res) => {
        const data = res.data;
        const imageArr = data.imageURL;
        this.setState({ urls: imageArr });
        this.setState({ loading: false });
        console.log(this.state.urls);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>;
    }

    const images = this.state.urls.map((url) => {
      return {
        original: url,
        thumbnail: url,
      };
    });

    return (
      <ImageGallery
        items={images}
        autoPlay={true}
        showPlayButton={false}
        lazyLoad={true}
      />
    );
  }
}

export default ProjectCarousel;
