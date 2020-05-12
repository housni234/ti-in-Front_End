import React, { Component } from "react";
import ProfileField from "./ProfileField";

function SentRequest(props)  {
    const { content, isInEditMode, changeEditMode, onChange, onDelete } = props;
    return <div className="requests-box">
        <div>{content.username}</div>
        <ProfileField value={content} onChange={onChange} isEditing={isInEditMode} />

        <div className="requests-btns">
            <button className="edit-btn" onClick={changeEditMode}>{isInEditMode ? "Save" : "Edit"}</button>
         {/*    <button className="delete-btn" onClick={onDelete}>Delete</button>*/}
        </div>
    </div>
}
export default SentRequest;