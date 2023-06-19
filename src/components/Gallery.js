import GalleryCard from "./GalleryCard";
import local_data from "../data/local_data";
import "../stylesheets/gallery.css";

function Gallery() {
  return (
    <section id="gallery">
      {local_data.slice(0, -1).map((data) => (
        <GalleryCard
          key={data.id}
          id={data.id}
          tag={data.tag}
          image={data.images[0]}
          demo={data.demo_link}
          source={data.source_link}
        />
      ))}
    </section>
  );
}

export default Gallery;
