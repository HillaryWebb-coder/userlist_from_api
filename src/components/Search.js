import React from 'react'

export default function Search() {
    return (
        <section id="search-bar">
            <i class="fa fa-search" id="desktop-icon"></i>
            <input type="text" placeholder="search for user...." />
            <button id="desktop-search" class="btn">Search</button>
            <button id="mobile-search" class="btn"><i class="fa fa-search" id="mobile-icon"></i></button>
        </section>
    )
}
