import { useParams } from 'react-router-dom';
import videosData from '../../data/videos.json';

const ContentDetails = () => {
    // Obtener el parámetro de la URL
    const { id } = useParams();

    // Verificar si id es undefined y convertirlo a number
    const contentId = id ? parseInt(id) : undefined;

    // Buscar el contenido correspondiente en el JSON
    const selectedContent = contentId ? videosData.find(video => video.id === contentId) : undefined;

    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{selectedContent ? selectedContent.title : "Not Found"}</h5>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{selectedContent ? selectedContent.description : "Not Found"}</p>
        </div>
    );
};

export default ContentDetails;

