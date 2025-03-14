import "./styles.css";
import { 
    accordionListener, 
    closeModalListener, 
    heartIconListener, 
    openAddBookmarkListener, 
    openDeleteModalListener,
    openEditModalListener
} from "./event-listeners";

// Add all event listeners
document.addEventListener("DOMContentLoaded", () => {
    accordionListener();
    heartIconListener();
    closeModalListener();
    openAddBookmarkListener();
    openDeleteModalListener();
    openEditModalListener();
})