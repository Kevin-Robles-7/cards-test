import { useCategory } from "../../hooks/CategoryProvider"; // Importa el hook useCategory

import { Video } from "../../models/videos";
import VideosData from "../../data/videos.json";

const ContentCategory = () => {
    // Obtiene la categoría seleccionada utilizando el hook useCategory
    const category = useCategory();

    // Filtrar los videos por categoría
    const filteredVideos: Video[] = VideosData.filter((video: Video) => video.category === category);

    return (
        <div>
            <h2>{category}</h2>
            <div className="videos-container">
                {filteredVideos.map((video: Video) => (
                    <div key={video.id} className="video-card">
                        <h3>{video.title}</h3>
                        <p>{video.description}</p>
                        <a href={video.url}>Ver más</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ContentCategory;


