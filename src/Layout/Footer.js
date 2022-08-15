import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
            <>
            <br /><br /><br /><br />
                <footer class="footer">
                    <div class="container">
                        <div class="footer-bottom">
                            <div class="wrap-copyright">
                                <div class="copyright" id="coppy">
                                    Copyright © 2022 IdentiPlant. Created with <i class="fa fa-heart"></i> by<a href="#">Group 4</a>.
                                </div>
                                <div class="countries" id="coppy">
                                    <img src="images/logo-white.png" alt="logo" />Pamantasan ng Lungsod ng Maynila
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-8">
                                    <div class="menu-footer" >
                                        <ul>
                                            <li><a href="/" id="coppy">Home</a></li>
                                            <li><a href="../floradex.html" id="coppy">Floradex</a></li>
                                            <li><a href="/" id="coppy">  Terms of Use </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                    <div class="social">
                                        <a href="#" title="linkedin">
                                            <i class="fa fa-linkedin"></i>
                                        </a>
                                        <a href="#" title="instagram">
                                            <i class="    fa fa-instagram"></i>
                                        </a>
                                        <a href="https://github.com/proDev-Theron/dip-plantidentifier" title="GitHub">
                                            <i class="fa fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}
