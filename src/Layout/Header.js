import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <>
                <header id="main-header" class="header-absolute hidden-sm hidden-xs">
                    <div class="container-fluid">
                        <div class="inner row">
                            <div class="logo col-lg-2 col-md-2">
                                <a href="/" title="logo"><img alt="logo-theme" src="images/logo.png" class="img-responsive" /></a>
                            </div>
                            <div class="header-right col-lg-10 col-md-10">
                                <div class="main-menu">
                                    <div id="menu-popup" class="menu-popup">
                                        <div class="burger-menu"><span></span></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>

                <header id="header_mobile" class="header-mobile-default hidden-lg hidden-md">
                    <div class="header-top">
                        <div class="container">
                            <div class="logo text-center">
                                <a href="/" title="logo"><img alt="logo-theme" src="images/logo.png" class="img-responsive" /></a>
                            </div>
                        </div>
                    </div>
                    <div class="header-bottom">
                        <div class="container">
                            <div class="inner">
                                <div class="header-main">
                                    <div class="main-left">
                                        <button data-toggle="offcanvas" class="btn btn-offcanvas btn-toggle-canvas offcanvas" type="button">
                                            <i class="ion ion-android-menu"></i>
                                        </button>
                                    </div>
                                    <div class="main-right">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default Header