import React from 'react'

export const DataMenu = () => {
    return (
        <div class="btn-group dropup">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Edit
        </button>
        <div class="dropdown-menu">
            <a href="#">Edit</a>
            <a href="#">Delete</a>
            <a href="#">Copy</a>
        </div>
        </div>
    )
}

// need to add an onclick to the button to get the dropdown menu to display; display is set to none
