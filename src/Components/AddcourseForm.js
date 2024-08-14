import React from 'react'

const AddcourseForm = () => {
    return (
        <div className='form'>
            <h1>Add Course</h1>
            <form action="" className='add'>

                <label>Course Title</label>
                <div className='box1'>
                    <input type='text'
                        placeholder='Course Title'
                        required />
                </div>


                <label>Course Duration</label>
                <div className='box3'>
                    <input type='text'
                        placeholder='Course Duration'
                        required />
                </div>

                <label >Course Category</label>
                <div className='box1'>
                    <select name="Course category" class="nice-select-margin" id="Course-category">
                        <option value="">Categories</option>
                        <option value="design">design</option>
                        <option value="design">tech</option>
                    </select>
                </div>

                <label >Course Description</label>
                <div className='box1'>
                    <input type="text"
                        placeholder='Course description'
                        required />
                </div>

                <label >Course Requirement</label>
                <div className='box1'>
                    <input type="text"
                        placeholder='Course Requirements'
                        required />
                </div>

                <label>Price</label>
                <div className='box1'>
                    <input type="number" name="Price" id=""
                        required />
                </div>

            </form>
        </div>
    )
}

export default AddcourseForm;