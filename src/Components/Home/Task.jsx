import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";


const Task = ({ task }) => {
    const { title, description, status } = task;
    const id = task._id;
    const handleDelete = () => {
        const proceed = window.confirm('Do You Want to Cancel Your Appointment?');
        if (proceed) {
            fetch(`https://task-management-server-nbib.onrender.com/task_delete?id=${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    window.location.reload(false);
                })
        }
    }

    const handleEdit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const updatedTask = { title, description };
        fetch(`https://task-management-server-nbib.onrender.com/task_update?id=${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                window.location.reload(false);

            })
    }

    const handleComplete = () => {
        const updatedTask = { status: true };
        fetch(`https://task-management-server-nbib.onrender.com/status_update?id=${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                window.location.reload(false);

            })
    }
    return (
        <div className="bg-gray-300 my-2 px-2 py-1 rounded-lg flex justify-between items-center">
            <input onClick={handleComplete} checked={status == true} type="checkbox" className="checkbox checkbox-success border-2" />
            <p className={`text-xl ${status == true && "line-through"}`}>{title}</p>

            <div className="flex items-center">
                <label htmlFor="my_modal_3" className="">
                    <CgDetailsMore className="text-2xl text-blue-600"></CgDetailsMore>
                </label>
                <label htmlFor="my_modal_2" className="">
                    <AiFillEdit className="text-2xl text-blue-600"></AiFillEdit>
                </label>

                <button onClick={handleDelete}>
                    <AiFillDelete className="text-3xl text-red-600"></AiFillDelete>
                </button>

            </div>

            <div>
                {/* ----Edit Form---- */}
                <div>
                    <input type="checkbox" id="my_modal_2" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box py-4">
                            <div className="modal-action">
                                <label htmlFor="my_modal_2" className="btn btn-sm btn-circle btn-secondary absolute right-6 top-4">X</label>
                            </div>
                            <form onSubmit={handleEdit}>
                                <input type="text" name="title" placeholder="Title Edit" className="input input-bordered input-accent my-2 w-full" required/>
                                <textarea name="description" className="textarea textarea-accent my-2 w-full" placeholder="Description Edit" required></textarea>
                                <input type="submit" value="Edit Task" className="btn btn-accent textarea textarea-accent my-2 w-full" />
                            </form>
                        </div>
                    </div>
                </div>

                {/* ----Description---- */}
                <div>
                    <input type="checkbox" id="my_modal_3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box py-4">
                            <div className="modal-action">
                                <label htmlFor="my_modal_3" className="btn btn-sm btn-circle btn-secondary absolute right-6 top-4">X</label>
                            </div>
                            <h2 className="text-xl"><span className="font-bold underline">Title:</span> {title}</h2>
                            <h2 className="text-xl"><span className="font-bold underline">Description:</span> {description}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;