import { IoMdAddCircle } from "react-icons/io";

const TaskForm = () => {
    const addTask = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const task = {
            title: title,
            description: description,
            status: false
        }
        fetch('https://task-management-server-nbib.onrender.com/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                window.location.reload(false);
            })
        // console.log(task)
    }
    return (
        <div>
            {/* ----Modal Button---- */}
            <label htmlFor="my_modal_1">
                <span className='add_button text-7xl text-green-600 absolute right-20 bottom-5'><IoMdAddCircle></IoMdAddCircle></span>
            </label>

            {/* ----Main Form---- */}
            <div>
                <input type="checkbox" id="my_modal_1" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box py-12">
                        <div className="modal-action">
                            <label htmlFor="my_modal_1" className="btn btn-sm btn-circle btn-secondary absolute right-6 top-4">X</label>
                        </div>
                        <form onSubmit={addTask}>
                            <input type="text" name="title" placeholder="Title" className="input input-bordered input-accent my-2 w-full" required/>
                            <textarea name="description" className="textarea textarea-accent my-2 w-full" placeholder="Description" required></textarea>
                            <input type="submit" value="Add Task" className="btn btn-accent textarea textarea-accent my-2 w-full" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TaskForm;