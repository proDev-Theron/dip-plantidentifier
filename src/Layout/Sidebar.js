import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <>
                <div id="content_menu_popup" class="content-menu-popup hidden-sm hidden-xs">
                    <div class="menu-popup-body">
                        <ul class="navbar-menu">
                            <li class="items">
                                <a href="https://prodev-theron.github.io/dip-plantidentifier/"><span>Home</span></a>
                            </li>
                            <li class="items">
                                <a href="../dip-plantidentifier/Floradex.html"><span>Floradex</span></a>
                            </li>
                            <li class="items">
                                <a href="../Final IEEE Paper.pdf"><span>IEEE Paper</span></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="pbr-off-canvas" class="pbr-off-canvas sidebar-offcanvas hidden-lg hidden-md">
                    <div class="pbr-off-canvas-body">
                        <div class="offcanvas-head">
                            <button type="button" class="btn btn-close btn-toggle-canvas" data-toggle="offcanvas">
                                <i class="pe-7s-close-circle"></i>
                            </button>
                            <span>Menu</span>
                        </div>
                        <nav class="navbar navbar-offcanvas navbar-static">
                            <ul class="nav navbar-nav">
                                <li class="level1 active hassub">
                                    <a href="https://prodev-theron.github.io/dip-plantidentifier/">Home</a>
                                </li>
                                <li class="level1 hassub">
                                    <a href="../dip-plantidentifier/Floradex.html">Floradex </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </>
        )
    }
}
