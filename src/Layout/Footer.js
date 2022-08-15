import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
            <>

                <footer class="footer">
                    <div class="container">
                        <div class="footer-bottom">
                            <div class="wrap-copyright">
                                <div class="copyright">
                                    Copyright © 2022 IdentiPlant. Created with <i class="fa-fa fa-heart"></i> by<a href="#">Group 4</a>.
                                </div>
                                <div class="countries">
                                    <img src="images/" alt="insert PLM Logo" />Pamantasan ng Lungsod ng Maynila
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-8">
                                    <div class="menu-footer">
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">Floradex</a></li>
                                            <li><a href="#">  Terms of Use </a></li>
                                            <li><a href="#">  Privacy Policy </a></li>
                                            <li><a href="#"> Contact Us </a></li>
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
                                        <a href="#" title="GitHub">
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
