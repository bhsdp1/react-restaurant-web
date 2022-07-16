import React from 'react';

export default function Thumnail(props) {
return (
    <>
    <div class="w-100 thumbnail menu-thumbnail text-center" id={props.id}>
        <div class="w-100 thumbnail-txt text-capitalize">{props.title}</div>
    </div>
    </>
)
}
