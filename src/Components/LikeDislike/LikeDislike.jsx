import "./LikeDislike.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


const LikeDislike = (props) => {

    

    return (
        <div>
            <button><ThumbUpIcon /></button>
            <button><ThumbDownIcon /></button>
        </div>
     );
}
 
export default LikeDislike;